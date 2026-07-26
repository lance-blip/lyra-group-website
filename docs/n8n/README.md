# Lyra Group — n8n Website Chat

Production chatbot backend for `lyra-spike.quikle.co.za` / `lyragroup.co.za`.

## Architecture

```
Visitor → ChatWidget → POST /api/chat (Next.js, Node runtime)
                         │
                         ├─ rate limit (20/min/IP, in-memory)
                         ├─ compact JSON body (no whitespace)
                         ├─ HMAC-SHA256(secret, body) → X-Lyra-Signature
                         ↓
              n8n webhook: /webhook/lyra-chat
                         │
                         ├─ Verify HMAC (pure-JS SHA-256 — no require('crypto'))
                         ├─ Build messages + StoryBrand system prompt
                         ├─ Together AI MiniMax-M3 (OpenAI-compatible)
                         ├─ Parse intent JSON (8 branches)
                         └─ Respond OK | Respond Reject
```

## Production endpoints

| Item | Value |
|------|--------|
| Workflow name | `Lyra Group - Website Chat` |
| Workflow ID | `N6hQHZlH7gBZULER` |
| Webhook path | `lyra-chat` |
| Public webhook | `https://webhooks.quikle.co.za/webhook/lyra-chat` |
| Alternate | `https://n8n.quikle.co.za/webhook/lyra-chat` |
| Local admin API | `http://127.0.0.1:5678` (bypasses Cloudflare Access) |

## Cloudflare Worker secrets

```bash
cd /home/openclaw/hermes-workspace/lyra-group-website

# Public n8n webhook (preferred webhooks subdomain)
echo -n 'https://webhooks.quikle.co.za/webhook/lyra-chat' | npx wrangler secret put N8N_CHAT_WEBHOOK_URL

# Same 64-char hex secret embedded in the n8n Verify HMAC Code node
echo -n '<HMAC_SECRET>' | npx wrangler secret put N8N_HMAC_SECRET
```

Optional public WhatsApp number for handoff links:

```bash
# set in wrangler.toml [vars] or as a plain env at build time
NEXT_PUBLIC_WHATSAPP_NUMBER=27XXXXXXXXX
```

## Request contract

**Request (compact JSON only):**

```json
{"message":"What do you charge?","history":[],"sessionId":"uuid","pageUrl":"https://…"}
```

**Headers:**

- `Content-Type: application/json`
- `X-Lyra-Signature: <hex HMAC-SHA256 of the exact request body bytes>`

**Success response:**

```json
{
  "ok": true,
  "intent": 3,
  "intent_label": "PRICING",
  "confidence": 0.95,
  "reply": "…",
  "handoff": null,
  "branch": 3
}
```

`handoff` may be `null`, `"form"`, or `"whatsapp"`.

## Intent branches (PLAN §7)

1. GREETING_FAQ  
2. SERVICES  
3. PRICING  
4. COMPLIANCE  
5. PROCESS  
6. LEAD_CAPTURE  
7. DEBTOR_CASE (handoff)  
8. ESCALATE_HUMAN (handoff)

## Critical implementation notes

1. **Sign compact JSON only.** `JSON.stringify(obj)` in JS / n8n. Pretty-printed JSON fails HMAC.
2. **n8n Code nodes cannot `require('crypto')`.** Use the pure-JS HMAC implementation already in the workflow.
3. **n8n process has no `.env` file.** HMAC secret and Together Bearer token are embedded in node parameters.
4. **Together key lives in Hermes `.env` as `OPENAI_API_KEY`** (Together-compatible key). It is **not** a platform.openai.com key. HTTP node URL must be `https://api.together.xyz/v1/chat/completions` with model `MiniMaxAI/MiniMax-M3`.
5. **Cloudflare Access** sits in front of `n8n.quikle.co.za` UI/API. Use `127.0.0.1:5678` for workflow CRUD. Public webhooks on `webhooks.quikle.co.za` remain open.

## Import / restore

1. Open n8n → Workflows → Import from File  
2. Use `lyra-chatbot-workflow.json` (secrets redacted)  
3. Re-embed HMAC secret in **Verify HMAC** Code node  
4. Re-embed Together `Authorization: Bearer …` on **Together MiniMax M3** HTTP node  
5. Activate workflow  
6. Smoke test:

```bash
python3 - <<'PY'
import json, hmac, hashlib, urllib.request
secret = "YOUR_SECRET"
body = json.dumps({
  "message": "What does Lyra charge?",
  "history": [],
  "sessionId": "smoke",
  "pageUrl": "https://lyra-spike.quikle.co.za/"
}, separators=(",", ":")).encode()
sig = hmac.new(secret.encode(), body, hashlib.sha256).hexdigest()
req = urllib.request.Request(
  "https://webhooks.quikle.co.za/webhook/lyra-chat",
  data=body,
  headers={"Content-Type":"application/json","X-Lyra-Signature":sig},
  method="POST",
)
print(urllib.request.urlopen(req).read().decode())
PY
```

## Ops

- List executions: `GET http://127.0.0.1:5678/api/v1/executions?workflowId=N6hQHZlH7gBZULER`
- Activate: `POST http://127.0.0.1:5678/api/v1/workflows/N6hQHZlH7gBZULER/activate`
- Site health: `GET https://lyra-spike.quikle.co.za/api/chat`

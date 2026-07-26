"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

type Role = "user" | "assistant";
type Handoff = "whatsapp" | "form" | null;

type ChatMessage = {
  id: string;
  role: Role;
  content: string;
  handoff?: Handoff;
};

type ApiResponse = {
  ok?: boolean;
  reply?: string;
  intent?: number;
  handoff?: Handoff;
  error?: string;
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const MAX_HISTORY = 12;

function sessionKey(): string {
  if (typeof window === "undefined") return "lyra-anon";
  const k = "lyra-chat-session";
  let id = window.sessionStorage.getItem(k);
  if (!id) {
    id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `s-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    window.sessionStorage.setItem(k, id);
  }
  return id;
}

function whatsappHref(prefill?: string): string | null {
  if (!WHATSAPP_NUMBER) return null;
  const text =
    prefill ||
    "Hi Lyra Group — I would like help recovering unpaid invoices.";
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

export function ChatWidget() {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi — I am Lyra, your recovery guide. Ask about fees, process, compliance, or how we help SMEs get paid. No Collection. No Fee.",
    },
  ]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 80);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, open, busy]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || busy) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setBusy(true);

    const history = [...messages, userMsg]
      .filter((m) => m.id !== "welcome")
      .slice(-MAX_HISTORY)
      .map((m) => ({ role: m.role, content: m.content }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          message: text,
          history,
          sessionId: sessionKey(),
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const data = (await res.json()) as ApiResponse;
      const reply =
        (data.reply && data.reply.trim()) ||
        "I could not answer just now. Please try the contact form for a free consultation.";
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          content: reply,
          handoff: data.handoff ?? null,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          content:
            "Connection hiccup. Please try again, or book a free consultation on the contact page.",
          handoff: "form",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }, [busy, input, messages]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  };

  const wa = whatsappHref();

  return (
    <div className="lyra-chat-root" aria-live="polite">
      {/* Drawer */}
      <div
        id={panelId}
        role="dialog"
        aria-modal="false"
        aria-label="Lyra chat guide"
        className={`lyra-chat-panel ${open ? "lyra-chat-panel--open" : ""}`}
        hidden={!open}
      >
        <header className="lyra-chat-header">
          <div className="lyra-chat-header-id">
            <span className="lyra-chat-avatar" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
                <circle cx="16" cy="16" r="15" fill="#0a1020" />
                <path
                  d="M16 7l1.4 4.2H22l-3.5 2.6 1.3 4.2L16 15.4l-3.8 2.6 1.3-4.2L10 11.2h4.6L16 7z"
                  fill="#d4a574"
                />
              </svg>
            </span>
            <div>
              <p className="lyra-chat-title">Lyra Guide</p>
              <p className="lyra-chat-sub">Precision Recovery · No Collection. No Fee.</p>
            </div>
          </div>
          <button
            type="button"
            className="lyra-chat-close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            ×
          </button>
        </header>

        <div className="lyra-chat-messages" ref={listRef}>
          {messages.map((m) => (
            <div
              key={m.id}
              className={`lyra-chat-bubble lyra-chat-bubble--${m.role}`}
            >
              <p>{m.content}</p>
              {m.role === "assistant" && m.handoff === "form" && (
                <p className="lyra-chat-handoff">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Book a free consultation →
                  </Link>
                </p>
              )}
              {m.role === "assistant" && m.handoff === "whatsapp" && (
                <p className="lyra-chat-handoff">
                  {wa ? (
                    <a href={wa} target="_blank" rel="noopener noreferrer">
                      Continue on WhatsApp →
                    </a>
                  ) : (
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Prefer a human? Contact us →
                    </Link>
                  )}
                </p>
              )}
            </div>
          ))}
          {busy && (
            <div className="lyra-chat-bubble lyra-chat-bubble--assistant lyra-chat-typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        <footer className="lyra-chat-footer">
          <textarea
            ref={inputRef}
            className="lyra-chat-input"
            rows={2}
            maxLength={2000}
            placeholder="Ask about fees, process, or compliance…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            disabled={busy}
            aria-label="Message Lyra"
          />
          <div className="lyra-chat-actions">
            <Link
              href="/contact"
              className="lyra-chat-secondary"
              onClick={() => setOpen(false)}
            >
              Free consultation
            </Link>
            <button
              type="button"
              className="lyra-chat-send"
              onClick={() => void send()}
              disabled={busy || !input.trim()}
            >
              Send
            </button>
          </div>
        </footer>
      </div>

      {/* Floating launcher — Quikle signature pulse */}
      <button
        type="button"
        className={`lyra-chat-launcher ${open ? "lyra-chat-launcher--open" : "lyra-chat-launcher--pulse"}`}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close Lyra chat" : "Open Lyra chat guide"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <span className="lyra-chat-launcher-x" aria-hidden="true">
            ×
          </span>
        ) : (
          <>
            <span className="lyra-chat-launcher-ring" aria-hidden="true" />
            <span className="lyra-chat-launcher-ring lyra-chat-launcher-ring--delay" aria-hidden="true" />
            <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
              <path
                d="M16 7l1.4 4.2H22l-3.5 2.6 1.3 4.2L16 15.4l-3.8 2.6 1.3-4.2L10 11.2h4.6L16 7z"
                fill="currentColor"
              />
            </svg>
          </>
        )}
      </button>
    </div>
  );
}

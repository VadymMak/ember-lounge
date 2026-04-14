'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n-context';
import { CHAT_CONFIG } from '@/lib/constants';
import type { ChatMessage } from '@/lib/types';

export default function ChatWidget() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      text: CHAT_CONFIG.greeting,
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (text: string, sender: 'bot' | 'user') => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text, sender, timestamp: new Date() },
    ]);
  };

  const handleQuickReply = (reply: typeof CHAT_CONFIG.quickReplies[0]) => {
    setShowQuickReplies(false);
    addMessage(reply.label, 'user');
    setTimeout(() => addMessage(reply.response, 'bot'), 600);
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    setShowQuickReplies(false);
    addMessage(text, 'user');
    setTimeout(() => addMessage(CHAT_CONFIG.fallbackResponse, 'bot'), 700);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <div>
              <div className="chat-header-title">Ember Lounge</div>
              <div className="chat-header-sub">🟢 Online</div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {showQuickReplies && (
            <div className="chat-quick-replies">
              {CHAT_CONFIG.quickReplies.map((reply) => (
                <button
                  key={reply.id}
                  className="chat-quick-btn"
                  onClick={() => handleQuickReply(reply)}
                >
                  {t(`chat.quickreply.${reply.id}` as Parameters<typeof t>[0])}
                </button>
              ))}
            </div>
          )}

          <div className="chat-input-row">
            <input
              className="chat-input"
              type="text"
              placeholder={t('chat.placeholder')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <button className="chat-send" onClick={handleSend} aria-label="Send">
              ➤
            </button>
          </div>

          <a
            href={`https://wa.me/${CHAT_CONFIG.whatsappNumber.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="chat-whatsapp-link"
          >
            💬 {t('chat.whatsapp')}
          </a>
        </div>
      )}

      <button className="chat-toggle" onClick={() => setOpen((v) => !v)} aria-label="Chat">
        {open ? '✕' : '💬'}
      </button>
    </div>
  );
}

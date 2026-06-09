import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Minimize2, Send, ExternalLink, ArrowRight } from "lucide-react";
import { CONTACT_DETAILS } from "../data";
import { Message } from "../types";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm Spica's Lighting Assistant. Tell me about your space or project, and I'll help you choose the right lighting solution.",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener("open-spica-advisor-chat", handleOpenEvent);
    return () => window.removeEventListener("open-spica-advisor-chat", handleOpenEvent);
  }, []);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      role: "user",
      content: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      // Keep only a reasonable depth of conversation history to keep the network payload light
      const payloadMessages = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content
      })).slice(-10); // Last 10 messages for context

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: payloadMessages })
      });

      const data = await response.json();
      if (response.ok && data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.reply,
            timestamp: new Date()
          }
        ]);
      } else {
        throw new Error(data.error || "Unable to retrieve response from Spica AI.");
      }
    } catch (err: any) {
      console.error("Spica AI fetch error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I'm having trouble connecting to my central engine right now. Please get direct assistance on WhatsApp at ${CONTACT_DETAILS.whatsapp} or email spicalighting@gmail.com! ✦`,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Quick Reply Options
  const quickReplies = [
    { label: "Plan My Room", prompt: "Can you help me plan the lighting for a bedroom/living room? Here are my dimensions:" },
    { label: "Energy Calculator", prompt: "How much can I save on electricity bills by switching to Wipro LED Downlights?" },
    { label: "Request Quote", prompt: "I would like to request a customized quote for our building project." },
    { label: "Explain CRI / Kelvin", prompt: "What is CRI and Kelvin, and how do I choose the correct CCT for cozy ambiance?" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* 1. COLLAPSED STATE (Gold floating circle with breathing pulse ring) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-14 h-14 gold-gradient rounded-full flex items-center justify-center text-gray-950 shadow-[0_8px_24px_rgba(200,155,60,0.45)] hover:shadow-[0_8px_32px_rgba(200,155,60,0.65)] transition-all duration-300 focus:outline-none hover:scale-105 cursor-pointer border border-gold-primary/30"
          style={{ animation: "goldPulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
        >
          {/* Asymmetric 4-pointed gold/white star overlay */}
          <svg className="w-7 h-7 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" viewBox="0 0 120 120">
            {/* Simple gold star geometry for mini trigger */}
            <polygon points="60,60 60,15 50,52" fill="#FFFFFF" />
            <polygon points="60,60 60,15 70,52" fill="#FFEBB3" />
            <polygon points="60,60 60,95 52,68" fill="#FFEBB3" />
            <polygon points="60,60 60,95 68,68" fill="#FFFFFF" />
            <polygon points="60,60 15,60 52,50" fill="#FFFFFF" />
            <polygon points="60,60 15,60 52,70" fill="#FFEBB3" />
            <polygon points="60,60 105,60 68,50" fill="#FFEBB3" />
            <polygon points="60,60 105,60 68,70" fill="#FFFFFF" />
          </svg>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-deep-black" />
        </button>
      )}

      {/* 2. EXPANDED STATE (Floating chat widget panel) */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[550px] glass-card-strong border border-white/20 rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden animate-in scale-in duration-300 origin-bottom-right">
          
          {/* HEADER */}
          <div className="px-4 py-3.5 bg-white/[0.03] backdrop-blur-md border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {/* Gold star insignia */}
              <svg className="w-5 h-5 filter drop-shadow-[0_1px_3px_rgba(200,155,60,0.45)]" viewBox="0 0 120 120">
                <polygon points="60,60 60,10 48,52" fill="#C89B3C" />
                <polygon points="60,60 60,10 72,52" fill="#E5C87A" />
                <polygon points="60,60 60,95 50,68" fill="#A88225" />
                <polygon points="60,60 60,95 70,68" fill="#C89B3C" />
                <polygon points="60,60 15,60 52,48" fill="#C89B3C" />
                <polygon points="60,60 15,60 52,72" fill="#A88225" />
                <polygon points="60,60 105,60 68,48" fill="#A88225" />
                <polygon points="60,60 105,60 68,72" fill="#E5C87A" />
                <circle cx="60" cy="60" r="10" fill="#FFFFFF" opacity="0.9" />
              </svg>
              <div>
                <h3 className="font-display font-semibold text-xs text-pure-white tracking-widest uppercase leading-none">
                  Lighting Assistant
                </h3>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] text-gray-400 font-mono">Ready to Help</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gold-primary p-1.5 rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
              aria-label="Minimize Chat"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* CHAT BODY (MESSAGES) */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin bg-gradient-to-b from-black/45 to-black/80">
            {messages.map((msg, index) => {
              const isAI = msg.role === "assistant";
              return (
                <div
                  key={index}
                  className={`flex ${isAI ? "justify-start" : "justify-end"} animate-in fade-in duration-200`}
                >
                  <div
                    className={`max-w-[85%] text-xs leading-relaxed px-4 py-3 rounded-xl shadow-lg border ${
                      isAI
                        ? "bg-white/[0.04] backdrop-blur-sm border-white/5 border-l-[3px] border-l-gold-primary text-gray-300"
                        : "gold-gradient text-gray-950 font-bold border-gold-primary/30"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                    <div
                      className={`text-[9px] mt-1.5 text-right font-mono ${
                        isAI ? "text-gray-500" : "text-gray-900/60"
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* AI LOADING THREAD */}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white/[0.04] border border-white/5 border-l-[3px] border-l-gold-primary text-gray-300 text-xs px-4 py-3 rounded-xl flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-primary rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-gold-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-gold-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                  <span className="font-mono text-[10px] text-gray-400 ml-1">Spica is analyzing...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* RECOGNIZED QUICK REPLY CHIPS STRIP */}
          <div className="bg-black/40 py-2 px-3 border-t border-white/5 overflow-x-auto whitespace-nowrap flex items-center gap-2 scrollbar-none">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(reply.prompt)}
                className="inline-block px-3 py-1 bg-white/[0.04] hover:bg-gold-primary/10 border border-white/10 hover:border-gold-primary/50 text-[10px] text-gray-200 hover:text-gold-primary rounded-full transition-all cursor-pointer"
              >
                {reply.label}
              </button>
            ))}
          </div>

          {/* FOOTER INPUT WITH WHATSAPP ON THE LEFT */}
          <div className="p-3.5 bg-black/50 border-t border-white/10 flex items-center gap-2 backdrop-blur-md">
            
            {/* SPEC HIGHLIGHT: "WhatsApp Button: Bottom-LEFT floating button — links to wa.me/919092049595" */}
            <a
              href={CONTACT_DETAILS.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center justify-center shrink-0 shadow-md cursor-pointer"
              title="Escalate directly to humans on WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.003 21.003c-1.636 0-3.176-.404-4.544-1.114l-.326-.17-3.377.885.9-.3.284-3.073-.186-.297C3.963 15.542 3.51 13.827 3.51 12c0-4.68 3.81-8.49 8.49-8.49s8.49 3.81 8.49 8.49-3.81 8.49-8.49 8.49m0-18C6.477 3.003 2.003 7.477 2.003 13c0 1.932.548 3.827 1.584 5.485L2 24l5.698-1.493C9.284 23.36 10.632 23.997 12.003 23.997c5.523 0 9.997-4.474 9.997-9.997S17.526 3.003 12.003 3.003z" />
              </svg>
            </a>

            {/* TEXT INPUT FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="flex-1 flex items-center gap-1.5"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask Spica advisor..."
                disabled={isLoading}
                className="flex-1 min-w-0 px-3 py-2 bg-white/[0.04] border border-white/10 focus:outline-none focus:border-gold-primary text-xs text-gray-200 rounded-lg shadow-inner"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="p-2.5 gold-gradient hover:opacity-95 disabled:bg-white/5 disabled:hover:opacity-100 disabled:text-gray-500 text-gray-950 rounded-lg transition-all focus:outline-none shadow-md shrink-0 cursor-pointer border border-gold-primary/30"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

        </div>
      )}
    </div>
  );
}

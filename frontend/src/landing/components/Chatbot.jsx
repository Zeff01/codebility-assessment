import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import Logo from "../../assets/Logo.png";
import { getThemeComponents } from "../../components/ThemeComponents.jsx";

const quickReplies = [
  "Menu and prices",
  "How to order",
  "Delivery areas",
  "Store hours",
];

function getBotReply(message) {
  const text = message.toLowerCase();

  if (text.includes("menu") || text.includes("price")) {
    return "Our favorites are Baked Sushi, California Maki, Salmon Maki, Crabstick California Roll, Mango Jelly, and Lychee Jelly. Send your preferred items and quantity so we can prepare your order.";
  }

  if (text.includes("deliver") || text.includes("area") || text.includes("location")) {
    return "We serve Baras, Tanay, and Pililia, Rizal. Share your exact location so we can confirm delivery availability.";
  }

  if (text.includes("hour") || text.includes("open") || text.includes("time")) {
    return "We are open Monday to Friday, 3:00 PM - 11:00 PM.";
  }

  if (text.includes("order") || text.includes("how")) {
    return "To order, send your name, chosen items, quantity, delivery location, and preferred delivery time. You can also call or text 09667889034.";
  }

  return "Thanks for messaging Daily Sushi. Please send your order details, location, and preferred delivery time. We will confirm availability shortly.";
}

function Chatbot({ isOpen, onClose, onOpen }) {
  const ui = getThemeComponents("dailySushi");
  const [messages, setMessages] = useState([
    {
      author: "bot",
      text: "Hi! Welcome to Daily Sushi. What would you like to order today?",
    },
  ]);
  const [draft, setDraft] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  function sendMessage(text) {
    const trimmed = text.trim();

    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { author: "user", text: trimmed },
      { author: "bot", text: getBotReply(trimmed) },
    ]);
    setDraft("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(draft);
  }

  if (!isOpen) {
    return (
      <button
        aria-label="Open Daily Sushi chat"
        className={`fixed bottom-5 right-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full shadow-2xl transition hover:-translate-y-1 ${ui.buttons.primarySoftShadow}`}
        onClick={onOpen}
        type="button"
      >
        <MessageCircle size={20} />
      </button>
    );
  }

  return (
    <aside className={`fixed bottom-5 right-5 z-[60] flex h-[min(620px,calc(100dvh-2.5rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border ${ui.cards.chatbot}`}>
      <div className={`flex items-center justify-between px-4 py-4 ${ui.sections.charcoal}`}>
        <div className="flex items-center gap-3">
          <span className={`grid h-11 w-11 place-items-center rounded-full ${ui.cards.logoDisc}`}>
            <img alt="Daily Sushi logo" className="h-8 w-8 object-contain" src={Logo} />
          </span>
          <div>
            <p className="font-black">Daily Sushi</p>
            <p className={`text-xs font-bold ${ui.text.invertedMuted}`}>Auto-replies instantly</p>
          </div>
        </div>
        <button aria-label="Close chat" className={`grid h-9 w-9 place-items-center rounded-full transition ${ui.surface.closeButton}`} onClick={onClose} type="button">
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
        {messages.map((message, index) => {
          const isBot = message.author === "bot";

          return (
            <div className={`flex ${isBot ? "justify-start" : "justify-end"}`} key={`${message.author}-${index}`}>
              <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm font-semibold leading-6 ${isBot ? `rounded-bl-sm ${ui.cards.chatbotBot}` : `rounded-br-sm ${ui.accents.redFill}`}`}>
                {message.text}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className={`border-t p-4 ${ui.cards.chatbotFooter}`}>
        <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
          {quickReplies.map((reply) => (
            <button
              className={`shrink-0 rounded-full border px-3 py-2 text-xs font-black transition ${ui.buttons.quickReply}`}
              key={reply}
              onClick={() => sendMessage(reply)}
              type="button"
            >
              {reply}
            </button>
          ))}
        </div>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            className={`min-w-0 flex-1 rounded-full border px-4 py-3 text-sm font-semibold outline-none transition ${ui.input}`}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Type your order..."
            value={draft}
          />
          <button className={`grid h-12 w-12 place-items-center rounded-full transition ${ui.buttons.primaryPlain}`} type="submit">
            <Send size={18} />
          </button>
        </form>
      </div>
    </aside>
  );
}

export default Chatbot;

import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { getThemeComponents } from "../../components/ThemeComponents.jsx";

const orderingSteps = [
  "Choose your favorite sushi trays, rolls, and desserts.",
  "Send your order through chat, call, or social media.",
  "Receive it freshly packed at your doorstep.",
];

function DeliverySection({ onChatOpen }) {
  const ui = getThemeComponents("dailySushi");

  return (
    <section className={`relative scroll-mt-24 py-16 sm:py-20 lg:py-24 ${ui.sections.beige}`} id="contacts">
      <span aria-hidden="true" className="absolute top-0 scroll-mt-24" id="order" />
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:gap-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-10">
        <div className="min-w-0" data-reveal>
          <p className={`text-xs font-black uppercase tracking-[0.24em] ${ui.text.accent}`}>Delivery & Ordering</p>
          <h2 className={`mt-3 max-w-3xl font-serif text-4xl font-black leading-tight tracking-normal sm:text-5xl ${ui.text.primary}`}>Fresh sushi is only three steps away</h2>
          <div className="mt-8 grid gap-4 sm:mt-9">
            {orderingSteps.map((step, index) => (
              <div className={`flex min-w-0 gap-4 rounded-lg p-5 ${ui.cards.step}`} key={step}>
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-black ${ui.accents.redFill}`}>0{index + 1}</span>
                <p className={`self-center font-bold leading-7 ${ui.text.body}`}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`min-w-0 rounded-lg p-5 sm:p-8 ${ui.cards.contact}`} data-reveal>
          <h3 className="text-2xl font-black leading-tight">Order Daily Sushi</h3>
          <p className={`mt-3 leading-7 ${ui.text.invertedSecondary}`}>Delivery and pickup coordination are available around Baras, Tanay, and Pililia, Rizal. Message us for same-day availability and bundle options.</p>
          <div className="mt-7 grid gap-4">
            <a className={`flex min-w-0 items-start gap-3 rounded-lg p-4 transition sm:items-center ${ui.cards.contactItem}`} href="tel:09667889034">
              <Phone className={`mt-0.5 shrink-0 sm:mt-0 ${ui.accents.goldIcon}`} size={20} />
              <span className="min-w-0 break-words font-bold">09667889034</span>
            </a>
            <div className={`flex min-w-0 items-start gap-3 rounded-lg p-4 sm:items-center ${ui.cards.contactItem}`}>
              <MapPin className={`mt-0.5 shrink-0 sm:mt-0 ${ui.accents.goldIcon}`} size={20} />
              <span className="min-w-0 break-words font-bold">Baras, Tanay, and Pililia, Rizal</span>
            </div>
            <div className={`flex min-w-0 items-start gap-3 rounded-lg p-4 sm:items-center ${ui.cards.contactItem}`}>
              <Clock className={`mt-0.5 shrink-0 sm:mt-0 ${ui.accents.goldIcon}`} size={20} />
              <span className="min-w-0 break-words font-bold">Mon to Fri, 3:00 PM - 11:00 PM</span>
            </div>
          </div>
          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <button className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-1 min-[420px]:w-auto ${ui.buttons.primaryPlain}`} onClick={onChatOpen} type="button">
              <MessageCircle size={18} />
              Chat to order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliverySection;

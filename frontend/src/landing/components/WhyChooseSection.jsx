import { HeartHandshake, ShieldCheck, Sparkles, Truck, Wallet } from "lucide-react";
import japaneseBgImg from "../../assets/japanese-bg.jpg";
import { getThemeComponents } from "../../components/ThemeComponents.jsx";

const reasons = [
  { title: "Fresh Ingredients Daily", text: "Rice, seafood, fruit, and toppings are prepared in small batches.", icon: Sparkles },
  { title: "Handmade with Care", text: "Every tray and roll is assembled by hand for consistent flavor.", icon: HeartHandshake },
  { title: "Fast Delivery", text: "Packed neatly and sent out quickly while flavors stay fresh.", icon: Truck },
  { title: "Affordable Prices", text: "Premium comfort food with bundles that work for cravings and gatherings.", icon: Wallet },
  { title: "Premium Quality", text: "Clean presentation, balanced flavors, and reliable daily preparation.", icon: ShieldCheck },
];

function WhyChooseSection() {
  const ui = getThemeComponents("dailySushi");

  return (
    <section className={`relative overflow-hidden py-16 sm:py-20 lg:py-24 ${ui.sections.white}`} id="why-choose">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${japaneseBgImg})`, backgroundSize: "min(420px, 85vw)" }} />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="max-w-3xl" data-reveal>
          <p className={`text-xs font-black uppercase tracking-[0.24em] ${ui.text.gold}`}>Why Choose Daily Sushi</p>
          <h2 className={`mt-3 font-serif text-4xl font-black leading-tight tracking-normal sm:text-5xl ${ui.text.primary}`}>Small-batch quality, polished for everyday delivery</h2>
        </div>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article className={`flex min-w-0 flex-col rounded-lg border p-5 transition hover:-translate-y-1 sm:p-6 xl:p-5 ${ui.cards.reason}`} data-reveal key={reason.title}>
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-full shadow-lg ${ui.accents.redFill}`}>
                  <Icon size={22} />
                </div>
                <h3 className={`mt-5 text-lg font-black leading-tight ${ui.text.primary}`}>{reason.title}</h3>
                <p className={`mt-3 text-sm leading-6 ${ui.text.secondary}`}>{reason.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;

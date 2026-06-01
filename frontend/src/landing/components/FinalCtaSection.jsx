import { CheckCircle2, ShoppingBag } from "lucide-react";
import japaneseBgImg from "../../assets/japanese-bg.jpg";
import { getThemeComponents } from "../../components/ThemeComponents.jsx";

function FinalCtaSection() {
  const ui = getThemeComponents("dailySushi");

  return (
    <section className={`relative flex h-[100dvh] items-center overflow-hidden py-20 ${ui.sections.red}`} id="craving">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${japaneseBgImg})`, backgroundSize: "360px" }} />
      <div className="relative mx-auto w-full max-w-5xl px-5 text-center sm:px-6" data-reveal>
        <p className={`mx-auto mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.24em] ${ui.surface.translucentWhite}`}>
          <CheckCircle2 size={16} />
          Made fresh for you
        </p>
        <h2 className="font-serif text-4xl font-black tracking-normal sm:text-6xl">Ready for Your Sushi Craving?</h2>
        <a className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-black transition hover:-translate-y-1 ${ui.buttons.lightOnRed}`} href="#order">
          Order Your Favorite Sushi Today
          <ShoppingBag size={18} />
        </a>
      </div>
    </section>
  );
}

export default FinalCtaSection;

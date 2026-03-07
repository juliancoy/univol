import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Factory, Building2, Leaf, ChevronRight, Zap, ShieldCheck, Atom } from "lucide-react";

const phrases = [
  "A Blank Company",
  "Dependable Solar",
  "Technology Transfer",
  "Government Venture",
  "Maryland-Based",
  "Eco-friendly",
];

const features = [
  {
    icon: Factory,
    title: "University-Scale Fabrication",
    text: "Bridge advanced campus machinery into commercial production for next-generation solar technologies.",
  },
  {
    icon: Building2,
    title: "Lab-to-Market Transfer",
    text: "Turn underused institutional capability into scalable manufacturing partnerships and real deployment.",
  },
  {
    icon: Leaf,
    title: "Climate-Positive Growth",
    text: "Expand clean-energy output with a model designed around durable infrastructure and public benefit.",
  },
];

function HexPrismWordmark() {
  const [step, setStep] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setStep((prev) => prev + 1);
    }, 2200);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  const activeIndex = useMemo(() => step % phrases.length, [step]);
  const rotation = useMemo(() => step * 60, [step]);

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.35),transparent_48%),radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.28),transparent_35%),radial-gradient(circle_at_30%_70%,rgba(125,211,252,0.25),transparent_32%)] blur-2xl" />

      <div className="relative [perspective:1600px] w-[380px] h-[380px] sm:w-[460px] sm:h-[460px]">
        <motion.div
          animate={{ rotateY: rotation }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 mx-auto my-auto h-56 w-36 sm:h-64 sm:w-44 [transform-style:preserve-3d]"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          {phrases.map((phrase, i) => {
            const sideAngle = i * 60;
            const isFront = i === activeIndex;
            return (
              <div
                key={phrase}
                className="absolute inset-0 flex items-center justify-center rounded-2xl border border-sky-200/80 bg-[linear-gradient(160deg,rgba(224,242,254,0.95),rgba(186,230,253,0.9))] px-4 text-center shadow-[0_0_60px_rgba(56,189,248,0.25)] backdrop-blur-xl"
                style={{
                  transform: `rotateY(${sideAngle}deg) translateZ(${isFront ? 140 : 120}px)`,
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.7), 0 0 35px rgba(56,189,248,0.2), 0 0 80px rgba(250,204,21,0.15)",
                  zIndex: isFront ? 2 : 1,
                }}
              >
                <div className="w-full px-4">
                  <div className="mx-auto grid h-28 w-full max-w-[175px] grid-cols-3 gap-2 rounded-xl border border-sky-200/80 bg-sky-50/80 p-3 shadow-[inset_0_0_25px_rgba(56,189,248,0.25)]">
                    {Array.from({ length: 6 }).map((_, panelIndex) => (
                      <div
                        key={`${phrase}-${panelIndex}`}
                        className="h-8 rounded-md border border-sky-200/90 bg-[linear-gradient(180deg,rgba(125,211,252,0.8),rgba(186,230,253,0.85))]"
                      />
                    ))}
                  </div>
                  <div className="mt-4 text-xs uppercase tracking-[0.35em] text-sky-700/80">UniVol</div>
                  <div className="mt-2 text-xl sm:text-2xl font-semibold leading-tight text-slate-900">{phrase}</div>
                </div>
              </div>
            );
          })}

          <div
            className="absolute left-1/2 top-1/2 h-56 w-44 sm:h-64 sm:w-52 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-sky-200/70 bg-sky-100/60 blur-md"
            style={{ transform: "translate(-50%, -50%) translateZ(-10px) scale(1.08)" }}
          />
        </motion.div>

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/70" />
        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/40" />
      </div>
    </div>
  );
}

function SunMeshOrb() {
  return (
    <div className="relative h-[420px] w-[420px] sm:h-[520px] sm:w-[520px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd5a3,#ffa955_45%,#ff7a2f_75%)] shadow-[0_40px_120px_rgba(255,141,64,0.45)]" />
      <div className="absolute inset-6 rounded-full bg-[linear-gradient(60deg,rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:48px_48px] opacity-70" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.5),transparent_40%)]" />
      <div className="absolute inset-0 flex items-center justify-center scale-[0.78]">
        <HexPrismWordmark />
      </div>
    </div>
  );
}

export default function UniVolLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-200 selection:text-[#0f172a]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/solar-panel-balcony-sunset-small.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,195,128,0.35),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255,132,63,0.18),transparent_45%)]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-200/70 bg-white/80 shadow-[0_0_30px_rgba(255,132,63,0.2)] backdrop-blur">
              <Sun className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-wide">UniVol</div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Commercial Solar Enablement</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#capability" className="transition hover:text-slate-900">Capability</a>
            <a href="#model" className="transition hover:text-slate-900">Model</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
            <a href="/recipe" className="transition hover:text-slate-900">Recipe</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
              Log in
            </button>
            <button className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,132,63,0.35)] transition hover:bg-orange-600">
              Under attack?
            </button>
          </div>
        </header>

        <main className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-10">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange-200/70 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-orange-600"
            >
              <Zap className="h-4 w-4" />
              University Machinery, Commercialized
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="max-w-2xl rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
            >
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Connect, scale, and build <span className="text-orange-500">everywhere</span>.
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                UniVol turns university‑grade solar fabrication into scalable, lightweight manufacturing—pairing public research with commercial execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.24 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(255,132,63,0.3)] transition hover:-translate-y-0.5"
              >
                Start a Partnership
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            <a
              href="#model"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-medium text-slate-800 transition hover:border-slate-400"
            >
              Explore the Model
            </a>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.32 }}
              className="mt-14 rounded-[2rem] border border-slate-200/70 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Institutional Assets", value: "Research fabs" },
                  { label: "Focus", value: "Solar commercialization" },
                  { label: "Region", value: "Maryland & beyond" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-slate-200/70 bg-white p-5"
                  >
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500">{stat.label}</div>
                    <div className="mt-3 text-lg font-semibold text-slate-900">{stat.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.05, delay: 0.15 }}
              className="relative flex min-h-[520px] items-center justify-center"
            >
              <SunMeshOrb />
            </motion.div>
        </main>
      </div>

      <section id="capability" className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-[2rem] border border-sky-200/70 bg-white/85 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-200/70 bg-sky-100">
                  <Icon className="h-5 w-5 text-sky-700" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="model" className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-sky-200/70 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_35%),rgba(255,255,255,0.8)] p-8 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-200/60 px-3 py-1 text-xs uppercase tracking-[0.25em] text-yellow-700">
              <ShieldCheck className="h-4 w-4 text-yellow-700" />
              Strategic Thesis
            </div>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">A commercialization engine for overlooked institutional capacity.</h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Universities already house precision machinery, process knowledge, and technical talent. UniVol builds the commercial layer around those assets: partnership structures, deployment pipelines, manufacturing readiness, and solar-market traction.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: Atom,
                title: "Research Infrastructure",
                text: "Advanced equipment, process repeatability, and expert operators already exist inside university environments.",
              },
              {
                icon: Sun,
                title: "Solar Opportunity",
                text: "High-demand clean-energy manufacturing needs faster pathways from experimental capability to practical output.",
              },
              {
                icon: Building2,
                title: "Public-Private Alignment",
                text: "Institutional credibility and regional partners can de-risk early commercialization and procurement pathways.",
              },
              {
                icon: Zap,
                title: "Scalable Venture Layer",
                text: "UniVol supplies structure, branding, and commercial execution so technical assets become a real market platform.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                className="rounded-[1.8rem] border border-sky-200/70 bg-white/85 p-6 backdrop-blur-xl"
              >
                <Icon className="h-5 w-5 text-yellow-500" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-sky-200/70 bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(250,204,21,0.18),rgba(255,255,255,0.9))] p-8 sm:p-10"
        >
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-yellow-300/40 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-sky-700/80">Build with UniVol</div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ready to turn university fabrication into solar-sector momentum?</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                UniVol is designed for universities, public partners, clean-tech investors, and manufacturing collaborators who want a sharper path from advanced equipment to commercial energy impact.
              </p>
            </div>

            <a
              href="mailto:hello@univol.example"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Contact UniVol
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

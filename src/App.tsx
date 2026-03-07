import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const phrases = [
  "Balcony Solar Kits",
  "Apartment-Friendly",
  "Plug-and-Play Power",
  "Urban Energy Savings",
  "Small-Space Solar",
  "Everyday Resilience",
];

function HexPrismWordmark() {
  const faceWidth = 128;
  const faceHeight = 224;
  const prismRadius = faceWidth / (2 * Math.tan(Math.PI / 6));

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.35),transparent_48%),radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.28),transparent_35%),radial-gradient(circle_at_30%_70%,rgba(125,211,252,0.25),transparent_32%)] blur-2xl" />

      <div className="relative h-[380px] w-[380px] [perspective:1600px] sm:h-[460px] sm:w-[460px]">
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 16, ease: "linear", repeat: Infinity }}
          className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]"
          style={{
            width: `${faceWidth}px`,
            height: `${faceHeight}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {phrases.map((phrase, i) => {
            const sideAngle = i * 60;
            return (
              <div
                key={phrase}
                className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl border border-sky-200/80 bg-[linear-gradient(160deg,rgba(224,242,254,0.95),rgba(186,230,253,0.9))] px-4 text-center shadow-[0_0_60px_rgba(56,189,248,0.25)] backdrop-blur-xl"
                style={{
                  transform: `rotateY(${sideAngle}deg) translateZ(${prismRadius}px)`,
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.7), 0 0 35px rgba(56,189,248,0.2), 0 0 80px rgba(250,204,21,0.15)",
                }}
              >
                <div className="w-full px-4">
                  <div className="mx-auto grid h-20 w-full max-w-[108px] grid-cols-3 gap-1.5 rounded-xl border border-sky-200/80 bg-sky-50/80 p-2 shadow-[inset_0_0_25px_rgba(56,189,248,0.25)]">
                    {Array.from({ length: 6 }).map((_, panelIndex) => (
                      <div
                        key={`${phrase}-${panelIndex}`}
                        className="h-6 rounded-md border border-sky-200/90 bg-[linear-gradient(180deg,rgba(125,211,252,0.8),rgba(186,230,253,0.85))]"
                      />
                    ))}
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-sky-700/80">UniVol</div>
                  <div className="mt-2 text-sm sm:text-base font-semibold leading-tight text-slate-900 [overflow-wrap:anywhere]">
                    {phrase}
                  </div>
                </div>
              </div>
            );
          })}
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
      <div className="absolute inset-0 flex items-center justify-center">
        <HexPrismWordmark />
      </div>
    </div>
  );
}

export default function UniVolLandingPage() {
  return (
    <div className="h-[calc(100vh-92px)] overflow-hidden bg-white text-slate-900 selection:bg-orange-200 selection:text-[#0f172a]">
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/solar-panel-balcony-sunset-small.jpg')] bg-cover bg-center bg-no-repeat opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,195,128,0.35),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255,132,63,0.18),transparent_45%)]" />

        <main className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-16 px-6 py-4 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="max-w-2xl rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
            >
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Install and scale <span className="text-orange-500">balcony solar</span> with confidence.
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                UniVol helps households, property managers, and city programs deploy safe, apartment-friendly balcony solar systems with domestic university production and practical rollout support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.24 }}
              className="relative mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <div className="group/recipe relative w-fit">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white opacity-0 blur-sm transition-all duration-700 ease-out group-hover/recipe:scale-[36] group-hover/recipe:opacity-90 group-focus-within/recipe:scale-[36] group-focus-within/recipe:opacity-90"
                />
                <a
                  href="/recipe"
                  className="group relative z-10 inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-orange-500 bg-white px-12 py-7 text-2xl font-semibold text-orange-600 shadow-[0_22px_60px_rgba(255,132,63,0.22)] transition hover:-translate-y-0.5 hover:bg-orange-50 focus:outline-none"
                >
                  The Recipe
                  <ChevronRight className="h-6 w-6 transition group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.32 }}
              className="mt-14 rounded-[2rem] border border-slate-200/70 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Use Case", value: "Balcony and apartment solar" },
                  { label: "Scale", value: "Single units to portfolios" },
                  { label: "Production", value: "Domestic university production" },
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

    </div>
  );
}

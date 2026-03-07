import { Sun, ClipboardCheck, Beaker, Layers, Shield, ChevronRight, Calculator } from "lucide-react";

const processFlow = [
  {
    title: "Define Requirements + Process Plan",
    text: "Document the target weight, flexibility, performance range, and substrate constraints. Select a low‑temperature stack family and verify tool compatibility.",
    equipment: ["Process Tools (planning + routing)"],
  },
  {
    title: "Substrate Preparation",
    text: "Clean and surface‑condition substrates according to NanoLab SOPs. Log lot history, handling limits, and cleanliness state.",
    equipment: ["Process Tools (wet benches / prep)"],
  },
  {
    title: "Base + Barrier Layers",
    text: "Deposit adhesion and barrier layers compatible with lightweight substrates and low thermal budget.",
    equipment: ["Process Tools (deposition)"],
  },
  {
    title: "Active Stack Formation",
    text: "Deposit absorber and transport layers using low‑temperature processes approved for the substrate class.",
    equipment: ["Process Tools (deposition)"],
  },
  {
    title: "Patterning + Isolation",
    text: "Define active areas and isolation using lab lithography and approved etch steps.",
    equipment: ["Process Tools (lithography + etch)", "Raith E‑Beam (if needed)"],
  },
  {
    title: "Contact Formation",
    text: "Form electrical contacts and interconnects, then verify alignment and continuity.",
    equipment: ["Process Tools (metal deposition)", "Backside Tools (bonding/dicing)"],
  },
  {
    title: "Post‑Process Thermal Treatment",
    text: "Perform thermal steps within substrate temperature limits to improve film quality and contact performance.",
    equipment: ["Process Tools (annealing)"],
  },
  {
    title: "Encapsulation / Lightweight Protection",
    text: "Add protective, lightweight barrier layers suitable for handling and flexing.",
    equipment: ["Process Tools (encapsulation / coating)"],
  },
  {
    title: "In‑Process Inspection",
    text: "Inspect after critical steps to catch defects early and avoid rework.",
    equipment: ["Inspection", "Hitachi SEM (as needed)"],
  },
  {
    title: "Porosity / Barrier Characterization",
    text: "Validate barrier or porous layer properties when required by the stack design.",
    equipment: ["Porosimeter (as needed)"],
  },
  {
    title: "Electrical Testing + Documentation",
    text: "Measure performance and log results, deviations, and run metadata for traceability.",
    equipment: ["Inspection", "Metrology tools as applicable"],
  },
  {
    title: "Review + Iterate",
    text: "Analyze results and adjust the process window within SOP boundaries for the next run.",
    equipment: ["Staff Technical Assistance Time (optional)"],
  },
];

const costRates = [
  { tool: "Process Tools", rate: 166, hours: 6 },
  { tool: "Raith E‑Beam1", rate: 103, hours: 2 },
  { tool: "Inspection", rate: 97, hours: 2 },
  { tool: "Hitachi SEM", rate: 63, hours: 1 },
  { tool: "Porosimeter", rate: 51, hours: 1 },
  { tool: "Backside Tools", rate: 64, hours: 2 },
  { tool: "Staff Technical Assistance Time", rate: 67, hours: 2 },
];

const totalCost = costRates.reduce((sum, item) => sum + item.rate * item.hours, 0);

const equipmentGroups = [
  {
    title: "Annealing",
    items: ["Annealing Furnace, Multipurpose"],
    trainer: "Nam Kim",
  },
  {
    title: "Backside",
    items: [
      "Glove Box - N2",
      "Glove Box - Exploratory Lab",
      "Wire Bonder - FABLAB West Bond 7KE",
      "Dicing Saw A - Microautomation",
    ],
    trainer: "Mark Lecates / Daniel Lewis",
  },
  {
    title: "Deposition",
    items: [
      "RTA-610",
      "Beneq Atomic Layer Deposition System",
      "Tystar CVD",
      "Oxford PECVD",
      "Oxford PECVD-Cobra",
      "AJA ATC 1800 Sputtering unit",
      "Metra Thermal Evaporator",
      "Denton Ebeam/thermal evaporator",
      "Parylene Coater",
      "Angstrom NexDep Ebeam evaporator",
      "Angstrom Ebeam Evaporator PLC Driven -B",
      "AJA ATC Orion 8 Sputtering system",
    ],
    trainer: "Nam Kim / Mark Lecates / Jonathan Hummel / Daniel Lewis",
  },
  {
    title: "Etching",
    items: [
      "Etch tunnel Acid Bench 1",
      "Etch tunnel Acid Bench 2",
      "Etch tunnel Caustic/Base Bench",
      "Etch tunnel Solvent Bench",
      "Trion RIE",
      "Oxford ICP Etcher (Chlorine)",
      "Teaching Lab Acid Wet Bench",
      "Teaching Lab Caustic/Solvent Wet Bench",
      "Sample Preb Wet Bench",
      "Furnace Preclean Wet Bench",
      "Critical Point Dryer",
      "Oxford Etcher (Fluorine)",
      "XactiX Xenon Difluoride Etcher",
      "Exploratory Lab Wet Bench",
      "Oxford ICP Etcher - ALE",
      "Oxford Etcher (Bosch)",
    ],
    trainer: "FabLab Staff / Mark Lecates / Nam Kim / Jonathan Hummel",
  },
  {
    title: "Lithography",
    items: [
      "Raith e_LiNE",
      "MJB-3 Mask aligner - right of spin station #1",
      "Photoresist Spin Station - Left - FABLAB-PWM32-Programable",
      "Photoresist Spin Station - Teaching Lab - 3",
      "Developing Bench",
      "Polymer Spin Station",
      "Raith off line computer",
      "Photoresist Spin Station - Right - FABLAB-PWM32-Programable",
      "Spin Station - Laurell - SU-8 ONLY",
      "MA-4 Suss Mask Aligner",
      "MJB-3 Mask Aligner - Left of spin station #2",
      "FABLAB Photo oven (Blue M)",
      "Heidelberg MLA150 Maskless Aligner",
    ],
    trainer: "FabLab Staff / Mark Lecates / Nam Kim / Jonathan Hummel",
  },
  {
    title: "Metrology",
    items: [
      "Profilm 3D",
      "Hitachi S-3400 Variable Pressure SEM",
      "Stress Measurement Tool",
      "N&K Spectrophotometer",
      "Microscope 5 - FABLAB Front Hall",
      "Microscope 1 - Leitz Ergolux in Teaching Lab",
      "Profilometer Tencor Alpha Step 200 - Teaching Lab",
      "Microscope 4 - Leitz in FABLAB Photo Tunnel",
      "Microscope 2 - Nikon Optophot in Teaching Lab",
      "Microscope 3 - Zeiss in FABLAB Deposition Tunnel",
      "Probe Station I - with 4155C",
      "Hall Effect Measurement System",
      "Solar Cell Simulator",
      "Micromeritics ASAP 2020 Porosimeter Test Station",
      "Micromeritics ASAP 2020 Porosimeter Degas #1",
      "Micromeritics ASAP 2020 Porosimeter Degas #2",
      "Arbin BT2000 Battery Test Station",
      "Profilometer P-10 Long Scan Profiler",
      "Woollam Spectroscopic Ellipsometer",
      "SHIMADZU IR Prestige21 FTIR Spectrometer",
      "Four Point Resistivity Station",
    ],
    trainer: "FabLab Staff / Nam Kim / Mark Lecates / Jonathan Hummel / John Abrahams / Daniel Lewis",
  },
];

export default function RecipePage() {
  return (
    <div className="min-h-screen bg-[#e8f4ff] text-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/solar-panel-balcony-sunset-small.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_70%_20%,rgba(250,204,21,0.25),transparent_45%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(250,204,21,0.3),rgba(56,189,248,0.08),rgba(250,204,21,0.25),rgba(56,189,248,0.06),rgba(250,204,21,0.3))] opacity-60 blur-2xl" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-200/70 bg-white/70 shadow-[0_0_30px_rgba(250,204,21,0.2)] backdrop-blur">
              <Sun className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-wide">UniVol</div>
              <div className="text-xs uppercase tracking-[0.3em] text-sky-700/70">UMD NanoLab Recipe</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="/" className="transition hover:text-slate-900">Home</a>
            <a href="#flow" className="transition hover:text-slate-900">Process</a>
            <a href="#tools" className="transition hover:text-slate-900">Tooling</a>
          </nav>
        </header>

        <main className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-10 lg:pb-20 lg:pt-10">
          <div className="max-w-3xl rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-700">
              <ClipboardCheck className="h-4 w-4" />
              Lightweight Solar Panel Recipe
            </div>
            <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              A NanoLab‑ready, lightweight solar panel process flow.
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-700">
              This is a high‑level, training‑aligned workflow designed for the UMD NanoLab environment. It avoids
              parameterized or hazardous instructions and assumes all work follows NanoLab SOPs and trainer guidance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/90 px-3 py-1">
                <Shield className="h-3.5 w-3.5 text-sky-700" />
                Training required for each tool
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200/70 bg-yellow-100/80 px-3 py-1">
                <Beaker className="h-3.5 w-3.5 text-yellow-700" />
                Follow NanoLab chemical SOPs
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/90 px-3 py-1">
                <Layers className="h-3.5 w-3.5 text-sky-700" />
                Stack tuned to low‑temp processing
              </span>
            </div>
          </div>
        </main>
      </div>

      <section id="flow" className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processFlow.map((step, i) => (
            <div
              key={step.title}
              className="rounded-[1.8rem] border border-sky-200/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Step {i + 1}</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              <div className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-400">Equipment</div>
              <div className="mt-2 grid gap-2 text-sm text-slate-700">
                {step.equipment.map((item) => (
                  <div key={item} className="rounded-xl border border-sky-100 bg-sky-50/70 px-3 py-2">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="cost" className="mx-auto max-w-7xl px-6 pb-14 lg:px-10">
        <div className="rounded-[2rem] border border-sky-200/70 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-sky-700">
              <Calculator className="h-3.5 w-3.5" />
              Cost Estimate
            </div>
            <div className="text-sm text-slate-500">Tier: Small Commercial / MTECH</div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Baseline pilot‑run assumptions shown below (hours can be adjusted). Rates provided as of March 6, 2026.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {costRates.map((item) => (
              <div key={item.tool} className="rounded-xl border border-sky-100 bg-sky-50/70 px-4 py-3">
                <div className="text-sm font-semibold text-slate-900">{item.tool}</div>
                <div className="mt-1 text-sm text-slate-600">
                  {item.hours} hrs × ${item.rate}/hr = ${item.hours * item.rate}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-yellow-200/70 bg-yellow-100/70 px-4 py-3 text-lg font-semibold text-slate-900">
            Estimated total: ${totalCost}
          </div>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">UMD NanoLab Tooling Map</h2>
          <a
            href="#top"
            className="hidden items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900 md:inline-flex"
          >
            Back to top
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {equipmentGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[2rem] border border-sky-200/70 bg-white/90 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-slate-400">{group.title}</div>
              <div className="mt-3 text-sm text-slate-500">Trainer: {group.trainer}</div>
              <div className="mt-4 grid gap-2 text-sm text-slate-700">
                {group.items.map((item) => (
                  <div key={item} className="rounded-xl border border-sky-100 bg-sky-50/70 px-3 py-2">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

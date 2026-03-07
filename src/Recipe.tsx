import { ClipboardCheck, Beaker, Layers, Shield, ChevronRight } from "lucide-react";

const INTERN_COUNT = 3;
const INTERN_HOURLY_RATE = 15;

const stepTable = [
  { step: "Substrate Preparation", machinery: "Sample Preb Wet Bench, Furnace Preclean Wet Bench", materials: "Glass/polymer substrates, DI water, solvents", materialCost: 42, hours: 0.75, rate: 166 },
  { step: "Base + Barrier Layers", machinery: "Oxford PECVD, Beneq Atomic Layer Deposition System", materials: "SiNx/Al2O3 precursor gases, carrier gas", materialCost: 95, hours: 1.0, rate: 166 },
  { step: "Active Stack Formation", machinery: "Tystar CVD, AJA ATC Orion 8 Sputtering system", materials: "Absorber target/feedstock, TCO target", materialCost: 135, hours: 1.0, rate: 166 },
  { step: "Patterning + Isolation", machinery: "MJB-3 Mask Aligner, Developing Bench, Trion RIE, Oxford ICP Etcher (Chlorine)", materials: "Photoresist, developer, masks, etch gases", materialCost: 88, hours: 1.25, rate: 166 },
  { step: "Contact Formation", machinery: "Denton Ebeam/thermal evaporator, Wire Bonder - FABLAB West Bond 7KE", materials: "Contact metal pellets, bond wire", materialCost: 74, hours: 1.0, rate: 166 },
  { step: "Post-Process Thermal Treatment", machinery: "Annealing Furnace, Multipurpose; RTA-610", materials: "Process gas, quartz carriers", materialCost: 22, hours: 0.5, rate: 166 },
  { step: "Encapsulation / Lightweight Protection", machinery: "Parylene Coater, Oxford PECVD-Cobra", materials: "Parylene dimer, barrier film/adhesive", materialCost: 64, hours: 0.75, rate: 166 },
  { step: "In-Process Inspection", machinery: "Microscope 5 (FABLAB Front Hall), Profilm 3D, Hitachi S-3400 Variable Pressure SEM", materials: "SEM stubs, conductive tape, sample labels", materialCost: 18, hours: 0.75, rate: 97 },
  { step: "Porosity / Barrier Characterization", machinery: "Micromeritics ASAP 2020 Porosimeter Test Station", materials: "Degas tubes, standards, sample prep consumables", materialCost: 16, hours: 0.5, rate: 51 },
];

const tableWithCost = stepTable.map((row) => ({
  ...row,
  machineCost: Math.round(row.hours * row.rate),
  laborCost: Math.round(row.hours * INTERN_COUNT * INTERN_HOURLY_RATE),
  totalStepCost: Math.round(row.hours * row.rate) + row.materialCost,
}));

const totalHours = tableWithCost.reduce((sum, row) => sum + row.hours, 0);
const totalMachineCost = tableWithCost.reduce((sum, row) => sum + row.machineCost, 0);
const totalMaterialCost = tableWithCost.reduce((sum, row) => sum + row.materialCost, 0);
const totalLaborCost = tableWithCost.reduce((sum, row) => sum + row.laborCost, 0);
const totalCost = tableWithCost.reduce((sum, row) => sum + row.totalStepCost + row.laborCost, 0);

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
    <div className="relative min-h-screen bg-[#e8f4ff] text-slate-900">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[url('/solar-panel-balcony-sunset-small.jpg')] bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_70%_20%,rgba(250,204,21,0.25),transparent_45%)]" />
      <div className="pointer-events-none fixed -top-40 left-1/2 z-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(250,204,21,0.3),rgba(56,189,248,0.08),rgba(250,204,21,0.25),rgba(56,189,248,0.06),rgba(250,204,21,0.3))] opacity-60 blur-2xl" />

      <div className="relative z-10">
        <main className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-10 lg:pb-20 lg:pt-12">
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

      <section id="flow" className="relative z-10 mx-auto max-w-7xl px-6 pb-14 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-sky-200/70 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="border-b border-sky-200/70 bg-sky-50/60 px-6 py-2 text-xs text-slate-500">
            Labor assumption: {INTERN_COUNT} interns at ${INTERN_HOURLY_RATE}/hr each.
          </div>
          <div className="grid grid-cols-[0.45fr_1.6fr_1.6fr_0.75fr_0.8fr_1.3fr_0.85fr_0.85fr] border-b border-sky-200/70 bg-sky-50/70 px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            <div>#</div>
            <div>Step</div>
            <div>Machinery</div>
            <div>Expected Time</div>
            <div>Machine Cost</div>
            <div>Materials</div>
            <div>Material Cost</div>
            <div>Labor Cost</div>
          </div>
          {tableWithCost.map((row, index) => (
            <div
              key={row.step}
              className="grid grid-cols-[0.45fr_1.6fr_1.6fr_0.75fr_0.8fr_1.3fr_0.85fr_0.85fr] border-b border-sky-100/80 px-6 py-4 text-sm text-slate-700 last:border-b-0"
            >
              <div className="font-semibold text-slate-500">{index + 1}</div>
              <div className="font-semibold text-slate-900">{row.step}</div>
              <div>{row.machinery}</div>
              <div>{row.hours.toFixed(2)} hrs</div>
              <div>${row.machineCost}</div>
              <div>{row.materials}</div>
              <div>${row.materialCost}</div>
              <div>${row.laborCost}</div>
            </div>
          ))}
          <div className="grid grid-cols-[0.45fr_1.6fr_1.6fr_0.75fr_0.8fr_1.3fr_0.85fr_0.85fr] bg-yellow-100/70 px-6 py-4 text-sm font-semibold text-slate-900">
            <div />
            <div>Total</div>
            <div>Small Commercial / MTECH baseline</div>
            <div>{totalHours.toFixed(2)} hrs</div>
            <div>${totalMachineCost}</div>
            <div className="text-slate-700">Materials and labor shown separately</div>
            <div>${totalMaterialCost}</div>
            <div>${totalLaborCost}</div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="group/total relative w-fit">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white opacity-0 blur-sm transition-all duration-700 ease-out group-hover/total:scale-[36] group-hover/total:opacity-90 group-focus-within/total:scale-[36] group-focus-within/total:opacity-90"
            />
            <div className="relative z-10 rounded-[2rem] border border-orange-200/80 bg-white/95 px-10 py-8 text-center shadow-[0_24px_70px_rgba(255,132,63,0.2)]">
              <div className="text-xs uppercase tracking-[0.28em] text-orange-500">Total Cost</div>
              <div className="mt-3 text-5xl font-semibold leading-none text-slate-900">${totalCost}</div>
              <div className="mt-2 text-sm text-slate-600">Machine + materials + 3-intern labor baseline</div>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-10">
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

import { ClipboardCheck, Beaker, Layers, Shield, ChevronRight } from "lucide-react";

const INTERN_COUNT = 3;
const INTERN_HOURLY_RATE = 15;

function splitItems(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function splitCost(total: number, count: number): number[] {
  if (count <= 0) return [];
  const base = Math.floor(total / count);
  const remainder = total - base * count;
  return Array.from({ length: count }, (_, index) => base + (index < remainder ? 1 : 0));
}

const stepTable = [
  { step: "The Substrate", machinery: "Sample Preb Wet Bench, Furnace Preclean Wet Bench", materials: "Glass/polymer substrates, DI water, solvents", output: "Cleaned, contamination-reduced substrate ready for film deposition", materialCost: 42, hours: 0.75, rate: 166 },
  { step: "The Inner Dialectric", machinery: "Oxford PECVD, Beneq Atomic Layer Deposition System", materials: "SiNx/Al2O3 precursor gases, carrier gas", output: "Barrier-coated substrate with base dielectric stack", materialCost: 95, hours: 1.0, rate: 166 },
  { step: "The Active Stack", machinery: "Tystar CVD, AJA ATC Orion 8 Sputtering system", materials: "Absorber target/feedstock, TCO target", output: "Photovoltaic active stack with initial junction functionality", materialCost: 135, hours: 1.0, rate: 166 },
  { step: "The Outer Dialectric", machinery: "MJB-3 Mask Aligner, Developing Bench, Trion RIE, Oxford ICP Etcher (Chlorine)", materials: "Photoresist, developer, masks, etch gases", output: "Electrically isolated cell geometry and patterned device regions", materialCost: 88, hours: 1.25, rate: 166 },
  { step: "The Interface", machinery: "Denton Ebeam/thermal evaporator, Wire Bonder - FABLAB West Bond 7KE", materials: "Contact metal pellets, bond wire", output: "Low-resistance electrical contacts and interconnect-ready terminals", materialCost: 74, hours: 1.0, rate: 166 },
  { step: "Ruggedization", machinery: "Annealing Furnace, Multipurpose; RTA-610", materials: "Process gas, quartz carriers", output: "Stabilized film properties and improved interface quality", materialCost: 22, hours: 0.5, rate: 166 },
  { step: "Encapsulation", machinery: "Parylene Coater, Oxford PECVD-Cobra", materials: "Parylene dimer, barrier film/adhesive", output: "Protected lightweight device with moisture/handling barrier", materialCost: 64, hours: 0.75, rate: 166 },
  { step: "Inspection", machinery: "Microscope 5 (FABLAB Front Hall), Profilm 3D, Hitachi S-3400 Variable Pressure SEM", materials: "SEM stubs, conductive tape, sample labels", output: "Defect map and dimensional/process conformance data", materialCost: 18, hours: 0.75, rate: 97 },
  { step: "Characterization", machinery: "Micromeritics ASAP 2020 Porosimeter Test Station", materials: "Degas tubes, standards, sample prep consumables", output: "Barrier porosity metrics and pass/fail characterization evidence", materialCost: 16, hours: 0.5, rate: 51 },
];

const tableWithCost = stepTable.map((row) => {
  const machineCost = Math.round(row.hours * row.rate);
  const laborCost = Math.round(row.hours * INTERN_COUNT * INTERN_HOURLY_RATE);
  const machineryItems = splitItems(row.machinery);
  const materialItems = splitItems(row.materials);

  return {
    ...row,
    machineCost,
    laborCost,
    totalStepCost: machineCost + row.materialCost,
    stepCost: machineCost + row.materialCost + laborCost,
    machineryItems,
    materialItems,
    machineryItemCosts: splitCost(machineCost, machineryItems.length),
    materialItemCosts: splitCost(row.materialCost, materialItems.length),
  };
});

const totalHours = tableWithCost.reduce((sum, row) => sum + row.hours, 0);
const totalMachineCost = tableWithCost.reduce((sum, row) => sum + row.machineCost, 0);
const totalMaterialCost = tableWithCost.reduce((sum, row) => sum + row.materialCost, 0);
const totalLaborCost = tableWithCost.reduce((sum, row) => sum + row.laborCost, 0);
const totalCost = tableWithCost.reduce((sum, row) => sum + row.totalStepCost + row.laborCost, 0);
const adminLegalFees = [
  { category: "Program Administration", description: "Scheduling, reporting, and project coordination overhead", cost: 1740 },
  { category: "Compliance Filing", description: "Lab compliance paperwork and record retention", cost: 120 },
  { category: "Contract Review", description: "Template agreement and procurement language review", cost: 310 },
  { category: "IP and Licensing Review", description: "Preliminary rights and usage review", cost: 280 },
];
const totalAdminLegalFees = adminLegalFees.reduce((sum, item) => sum + item.cost, 0);
const grandTotalCost = totalCost + totalAdminLegalFees;

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
          <div className="border-b border-sky-200/70 bg-sky-50/60 px-4 py-2 text-xs text-slate-500 sm:px-6">
            Labor assumption: {INTERN_COUNT} interns at ${INTERN_HOURLY_RATE}/hr each.
          </div>
          <div className="max-md:hidden">
            <div>
              <div className="grid grid-cols-[1.2fr_1.2fr_0.72fr_0.72fr_1fr_0.72fr_0.72fr_0.82fr] gap-x-3 border-b border-sky-200/70 bg-sky-50/70 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                <div>Machinery</div>
                <div>Output</div>
                <div>Expected Time</div>
                <div>Machine Cost</div>
                <div>Materials</div>
                <div>Material Cost</div>
                <div>Labor Cost</div>
                <div>Step Cost</div>
              </div>
              {tableWithCost.map((row, index) => (
                <div
                  key={row.step}
                  className="border-b border-sky-100/80 last:border-b-0 odd:bg-white even:bg-slate-50/45"
                >
                  <div className="flex items-center justify-between border-b border-sky-100/90 bg-sky-50/70 px-6 py-3">
                    <div className="text-xl font-semibold leading-tight text-slate-900">{index + 1}. {row.step}</div>
                    <div className="rounded-full border border-orange-200/80 bg-orange-50/80 px-3 py-1 text-sm font-semibold text-orange-600">
                      Step Cost ${row.stepCost}
                    </div>
                  </div>
                  <div className="grid grid-cols-[1.2fr_1.2fr_0.72fr_0.72fr_1fr_0.72fr_0.72fr_0.82fr] gap-x-3 px-6 py-5 text-sm text-slate-700">
                    <div className="space-y-2">
                      {row.machineryItems.map((item, itemIndex) => (
                        <div
                          key={`${row.step}-machinery-${itemIndex}`}
                          className="flex items-start justify-between gap-2 rounded-lg border border-slate-200/70 bg-white/80 px-2.5 py-1.5"
                        >
                          <span className="min-w-0 leading-5">{item}</span>
                          <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                            ${row.machineryItemCosts[itemIndex]}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="leading-6 text-slate-600">{row.output}</div>
                    <div className="font-medium text-slate-700">{row.hours.toFixed(2)} hrs</div>
                    <div className="font-medium text-slate-800">${row.machineCost}</div>
                    <div className="space-y-2">
                      {row.materialItems.map((item, itemIndex) => (
                        <div
                          key={`${row.step}-materials-${itemIndex}`}
                          className="flex items-start justify-between gap-2 rounded-lg border border-slate-200/70 bg-white/80 px-2.5 py-1.5"
                        >
                          <span className="min-w-0 leading-5">{item}</span>
                          <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                            ${row.materialItemCosts[itemIndex]}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="font-medium text-slate-800">${row.materialCost}</div>
                    <div className="font-medium text-slate-800">${row.laborCost}</div>
                    <div className="text-base font-semibold text-slate-900">${row.stepCost}</div>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-[1.2fr_1.2fr_0.72fr_0.72fr_1fr_0.72fr_0.72fr_0.82fr] gap-x-3 bg-yellow-100/70 px-6 py-4 text-sm font-semibold text-slate-900">
                <div>Small Commercial / MTECH baseline</div>
                <div className="text-slate-700">Production outputs summarized per step above</div>
                <div>{totalHours.toFixed(2)} hrs</div>
                <div>${totalMachineCost}</div>
                <div className="text-slate-700">Materials and labor shown separately</div>
                <div>${totalMaterialCost}</div>
                <div>${totalLaborCost}</div>
                <div>${totalCost}</div>
              </div>
            </div>
          </div>
          {tableWithCost.map((row, index) => (
            <div key={`${row.step}-mobile`} className="border-b border-sky-100/80 last:border-b-0 md:hidden">
              <div className="space-y-4 px-4 py-4">
                <div className="flex items-start justify-between gap-3 rounded-xl border border-sky-200/80 bg-sky-50/80 px-3 py-3">
                  <div className="min-w-0">
                    <div className="text-lg font-semibold leading-tight text-slate-900">{index + 1}. {row.step}</div>
                  </div>
                  <div className="shrink-0 rounded-full border border-sky-200/80 bg-sky-50/80 px-3 py-1 text-xs font-semibold text-sky-700">
                    {row.hours.toFixed(2)} hrs
                  </div>
                </div>
                <div className="grid gap-3 text-sm text-slate-700">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Machinery</div>
                    <div className="mt-1 space-y-1.5 text-slate-700">
                      {row.machineryItems.map((item, itemIndex) => (
                        <div key={`${row.step}-mobile-machinery-${itemIndex}`} className="flex items-start justify-between gap-2 leading-6">
                          <span className="min-w-0">{item}</span>
                          <span className="shrink-0 text-slate-500">${row.machineryItemCosts[itemIndex]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Materials</div>
                    <div className="mt-1 space-y-1.5 text-slate-700">
                      {row.materialItems.map((item, itemIndex) => (
                        <div key={`${row.step}-mobile-materials-${itemIndex}`} className="flex items-start justify-between gap-2 leading-6">
                          <span className="min-w-0">{item}</span>
                          <span className="shrink-0 text-slate-500">${row.materialItemCosts[itemIndex]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Output</div>
                    <div className="mt-1 leading-6 text-slate-700">{row.output}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <div className="rounded-xl border border-slate-200/80 bg-white px-2.5 py-2 text-center">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Machine</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">${row.machineCost}</div>
                  </div>
                  <div className="rounded-xl border border-slate-200/80 bg-white px-2.5 py-2 text-center">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Material</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">${row.materialCost}</div>
                  </div>
                  <div className="rounded-xl border border-slate-200/80 bg-white px-2.5 py-2 text-center">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Labor</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">${row.laborCost}</div>
                  </div>
                  <div className="rounded-xl border border-orange-200/80 bg-orange-50/80 px-2.5 py-2 text-center">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-orange-500">Step Cost</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">${row.stepCost}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="space-y-3 bg-yellow-100/70 px-4 py-4 md:hidden">
            <div className="text-sm font-semibold text-slate-900">Totals</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="rounded-xl border border-yellow-200/80 bg-white/90 px-3 py-2">
                <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Hours</div>
                <div className="mt-1 font-semibold text-slate-900">{totalHours.toFixed(2)} hrs</div>
              </div>
              <div className="rounded-xl border border-yellow-200/80 bg-white/90 px-3 py-2">
                <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Machine</div>
                <div className="mt-1 font-semibold text-slate-900">${totalMachineCost}</div>
              </div>
              <div className="rounded-xl border border-yellow-200/80 bg-white/90 px-3 py-2">
                <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Materials</div>
                <div className="mt-1 font-semibold text-slate-900">${totalMaterialCost}</div>
              </div>
              <div className="rounded-xl border border-yellow-200/80 bg-white/90 px-3 py-2">
                <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Labor</div>
                <div className="mt-1 font-semibold text-slate-900">${totalLaborCost}</div>
              </div>
              <div className="rounded-xl border border-orange-200/80 bg-orange-50/80 px-3 py-2">
                <div className="text-[10px] uppercase tracking-[0.16em] text-orange-500">Step Cost</div>
                <div className="mt-1 font-semibold text-slate-900">${totalCost}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 overflow-hidden rounded-[2rem] border border-sky-200/70 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid grid-cols-[1.1fr_2.2fr_0.9fr] border-b border-sky-200/70 bg-sky-50/70 px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 max-md:hidden">
            <div>Category</div>
            <div>Description</div>
            <div>Cost</div>
          </div>
          {adminLegalFees.map((item) => (
            <div key={item.category} className="border-b border-sky-100/80 last:border-b-0">
              <div className="grid grid-cols-[1.1fr_2.2fr_0.9fr] px-6 py-4 text-sm text-slate-700 max-md:hidden">
                <div className="font-semibold text-slate-900">{item.category}</div>
                <div>{item.description}</div>
                <div>${item.cost}</div>
              </div>
              <div className="space-y-2 px-4 py-4 text-sm md:hidden">
                <div className="font-semibold text-slate-900">{item.category}</div>
                <div className="leading-6 text-slate-700">{item.description}</div>
                <div className="inline-flex rounded-full border border-sky-200/80 bg-sky-50/80 px-3 py-1 text-sm font-semibold text-sky-800">
                  ${item.cost}
                </div>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-[1.1fr_2.2fr_0.9fr] bg-yellow-100/70 px-6 py-4 text-sm font-semibold text-slate-900 max-md:hidden">
            <div>Subtotal</div>
            <div>Administrative and legal fees</div>
            <div>${totalAdminLegalFees}</div>
          </div>
          <div className="bg-yellow-100/70 px-4 py-4 text-sm font-semibold text-slate-900 md:hidden">
            Subtotal (Administrative and legal fees): ${totalAdminLegalFees}
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
              <div className="mt-3 text-5xl font-semibold leading-none text-slate-900">${grandTotalCost}</div>
              <div className="mt-2 text-sm text-slate-600">Machine + materials + 3-intern labor + administrative/legal fees</div>
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-[2rem] border border-sky-200/70 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="text-xs uppercase tracking-[0.25em] text-sky-700">Balcony Solar Recipe</div>
          <div className="mt-3 text-sm leading-6 text-slate-700">
            <span className="font-semibold text-slate-900">Purpose:</span> define the key engineering and compliance
            work required to move from a lab process flow to safe, deployable lightweight balcony solar systems.
          </div>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
            <li className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3">
              <div className="font-semibold text-slate-900">Certified safety and compliance path</div>
              <div>Scope: electrical, fire, building-code, and interconnection requirements.</div>
              <div className="text-slate-600">
                Purpose: ensure the system is legally deployable and safe for occupants, installers, and utilities.
              </div>
            </li>
            <li className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3">
              <div className="font-semibold text-slate-900">Outdoor durability validation</div>
              <div>Scope: UV, moisture ingress, thermal cycling, hail, and wind loading.</div>
              <div className="text-slate-600">
                Purpose: verify long-term field reliability and prevent premature degradation/failure.
              </div>
            </li>
            <li className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3">
              <div className="font-semibold text-slate-900">Mounting and structural specifications</div>
              <div>Scope: balcony railings and facade attachment interfaces.</div>
              <div className="text-slate-600">
                Purpose: maintain structural safety under normal and extreme loads while simplifying installation.
              </div>
            </li>
            <li className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3">
              <div className="font-semibold text-slate-900">Plug-in inverter/BMS architecture</div>
              <div>Scope: anti-islanding behavior and electrical protection requirements.</div>
              <div className="text-slate-600">
                Purpose: deliver safe, grid-compatible operation with robust fault handling and monitoring.
              </div>
            </li>
            <li className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3">
              <div className="font-semibold text-slate-900">Manufacturability and QA plan</div>
              <div>Scope: yield, reliability, and failure-rate targets at scale.</div>
              <div className="text-slate-600">
                Purpose: reduce unit cost and variance while meeting repeatable production quality standards.
              </div>
            </li>
          </ul>
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

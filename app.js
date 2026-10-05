/**
 * MEDIPATH PRO - COMPLETE PATHOLOGY DIAGNOSTIC & CLINICAL LAB SUITE
 * Core Clinical Engine, Reference Intervals, Auto-Derivations & Report Generator
 */

// =============================================================================
// 1. DATA PRESETS & ENCYCLOPEDIA DATABASE
// =============================================================================

const CLINICAL_PRESETS = {
  healthy: {
    patient: { name: "Rajesh Kumar Verma", age: 38, gender: "Male", bloodGroup: "B+", doctor: "Dr. S. K. Sharma (M.D., Med)" },
    cbc: { platelets: 250000, rbc: 4.9, hb: 14.8, wbc: 6800, pcv: 44.5, esr: 10, neutro: 62, lympho: 30, mono: 5, eos: 2, baso: 1, rdw: 12.8 },
    bp: { systolic: 118, diastolic: 78, pulse: 72 },
    sugar: { fbs: 88, ppbs: 122, rbs: 105, hba1c: 5.3, urineGlucose: "Nil", urineKetones: "Negative" },
    lipid: { chol: 172, hdl: 54, ldl: 94, trig: 120 },
    kft: { creatinine: 0.92, urea: 24, uric: 5.1, na: 140, k: 4.2 },
    lft: { biliTotal: 0.7, biliDirect: 0.2, sgot: 26, sgpt: 30, alp: 88, totalProtein: 7.4, albumin: 4.4 }
  },
  dengue: {
    patient: { name: "Aman Deep Singh", age: 29, gender: "Male", bloodGroup: "O+", doctor: "Dr. Neha Kapoor (M.D., Infectious Dis)" },
    cbc: { platelets: 28000, rbc: 5.4, hb: 16.2, wbc: 2800, pcv: 49.5, esr: 28, neutro: 42, lympho: 48, mono: 7, eos: 2, baso: 1, rdw: 14.8 },
    bp: { systolic: 102, diastolic: 66, pulse: 98 },
    sugar: { fbs: 94, ppbs: 130, rbs: 112, hba1c: 5.5, urineGlucose: "Nil", urineKetones: "Negative" },
    lipid: { chol: 160, hdl: 46, ldl: 88, trig: 130 },
    kft: { creatinine: 1.1, urea: 34, uric: 6.2, na: 136, k: 3.9 },
    lft: { biliTotal: 1.1, biliDirect: 0.3, sgot: 84, sgpt: 92, alp: 115, totalProtein: 6.6, albumin: 3.6 }
  },
  diabetic_htn: {
    patient: { name: "Sunita Sundaram", age: 56, gender: "Female", bloodGroup: "A+", doctor: "Dr. R. K. Mukherjee (Consultant Diabetologist)" },
    cbc: { platelets: 290000, rbc: 4.4, hb: 13.1, wbc: 8400, pcv: 39.0, esr: 22, neutro: 65, lympho: 26, mono: 6, eos: 2, baso: 1, rdw: 13.5 },
    bp: { systolic: 156, diastolic: 96, pulse: 84 },
    sugar: { fbs: 182, ppbs: 275, rbs: 240, hba1c: 9.4, urineGlucose: "3+", urineKetones: "Negative" },
    lipid: { chol: 245, hdl: 38, ldl: 158, trig: 245 },
    kft: { creatinine: 1.25, urea: 42, uric: 6.8, na: 138, k: 4.4 },
    lft: { biliTotal: 0.9, biliDirect: 0.25, sgot: 38, sgpt: 52, alp: 110, totalProtein: 7.1, albumin: 4.0 }
  },
  anemia: {
    patient: { name: "Pooja Sharma", age: 24, gender: "Female", bloodGroup: "AB+", doctor: "Dr. Ananya Roy (Hematologist)" },
    cbc: { platelets: 340000, rbc: 3.1, hb: 7.6, wbc: 5900, pcv: 24.2, esr: 32, neutro: 60, lympho: 32, mono: 5, eos: 2, baso: 1, rdw: 18.2 },
    bp: { systolic: 108, diastolic: 68, pulse: 92 },
    sugar: { fbs: 84, ppbs: 116, rbs: 98, hba1c: 5.1, urineGlucose: "Nil", urineKetones: "Negative" },
    lipid: { chol: 155, hdl: 48, ldl: 84, trig: 115 },
    kft: { creatinine: 0.75, urea: 20, uric: 4.2, na: 141, k: 4.1 },
    lft: { biliTotal: 0.6, biliDirect: 0.15, sgot: 22, sgpt: 24, alp: 78, totalProtein: 6.8, albumin: 4.1 }
  },
  hepatorenal: {
    patient: { name: "Mahesh Chandra Joshi", age: 62, gender: "Male", bloodGroup: "B-", doctor: "Dr. Vikram Singhal (Gastroenterologist & Nephrologist)" },
    cbc: { platelets: 95000, rbc: 3.8, hb: 11.2, wbc: 11400, pcv: 34.0, esr: 45, neutro: 78, lympho: 14, mono: 6, eos: 1, baso: 1, rdw: 16.4 },
    bp: { systolic: 144, diastolic: 88, pulse: 80 },
    sugar: { fbs: 118, ppbs: 168, rbs: 145, hba1c: 6.4, urineGlucose: "Trace", urineKetones: "Negative" },
    lipid: { chol: 215, hdl: 34, ldl: 132, trig: 245 },
    kft: { creatinine: 2.85, urea: 92, uric: 8.9, na: 132, k: 5.3 },
    lft: { biliTotal: 4.6, biliDirect: 2.9, sgot: 165, sgpt: 185, alp: 340, totalProtein: 5.9, albumin: 2.8 }
  }
};

const ENCYCLOPEDIA_DATA = [
  {
    icon: "🩸",
    title: "Platelets (प्लेटलेट्स / थ्रोम्बोसाइट्स)",
    hindi: "रक्त का थक्का जमाने वाली कोशिकाएं",
    desc: "Platelets are specialized disc-shaped cell fragments in blood crucial for hemostasis (blood clotting). When an injury or infection occurs, platelets aggregate to stop blood leakage.",
    range: "150,000 - 450,000 /µL (1.5 - 4.5 Lakhs)",
    high: "High (Thrombocytosis): Risk of arterial blood clots, chronic inflammation, marrow disorder.",
    low: "Low (Thrombocytopenia): Dengue fever, malaria, vitamin B12 deficiency, risk of spontaneous bleeding (gums, nose, skin petechiae)."
  },
  {
    icon: "🔴",
    title: "RBC Count (लाल रक्त कोशिकाएं)",
    hindi: "ऑक्सीजन वाहक रक्त कोशिकाएं",
    desc: "Red Blood Cells contain hemoglobin that captures oxygen in the lungs and delivers it to cells throughout the entire body while returning carbon dioxide.",
    range: "Male: 4.5 - 5.5 M/µL | Female: 4.0 - 5.0 M/µL",
    high: "High (Polycythemia): Dehydration, hypoxia, high altitude, chronic lung/heart disease.",
    low: "Low (Erythrocytopenia): Anemia, internal bleeding, iron/vitamin deficiency, kidney failure."
  },
  {
    icon: "🧪",
    title: "Hemoglobin (Hb - हीमोग्लोबिन)",
    hindi: "रक्त में आयरन युक्त ऑक्सीजन प्रोटीन",
    desc: "An iron-rich protein in RBCs responsible for the red color of blood and transporting oxygen. Key screening tool for nutritional and systemic anemia.",
    range: "Male: 13.0 - 17.5 g/dL | Female: 12.0 - 15.5 g/dL",
    high: "High: Dehydration, smoking, COPD, congenital heart disease.",
    low: "Low: Iron deficiency, blood loss, heavy menses, chronic disease (causes fatigue, pale skin, weakness)."
  },
  {
    icon: "🛡️",
    title: "WBC Count (श्वेत रक्त कणिकाएं / ल्यूकोसाइट्स)",
    hindi: "शरीर की रोग प्रतिरोधक सेना (Immune Soldiers)",
    desc: "White Blood Cells protect the body from infections, bacteria, viruses, and foreign invaders. Includes Neutrophils, Lymphocytes, Monocytes, Eosinophils, and Basophils.",
    range: "4,000 - 11,000 /µL",
    high: "High (Leukocytosis): Acute bacterial infection, inflammation, tissue damage, stress, leukemia.",
    low: "Low (Leukopenia): Severe viral infections (Dengue, Typhoid), autoimmune diseases, immunosuppression."
  },
  {
    icon: "🫀",
    title: "Blood Pressure (रक्तचाप - Systolic & Diastolic)",
    hindi: "धमनियों में रक्त का दबाव",
    desc: "Systolic is the peak arterial pressure during heart contraction; Diastolic is the resting pressure between beats. Mean Arterial Pressure (MAP) represents perfusion.",
    range: "Normal: < 120 / < 80 mmHg | Target MAP: 70 - 100 mmHg",
    high: "High (Hypertension): Arteriosclerosis, stroke risk, heart attack, kidney damage.",
    low: "Low (Hypotension): Dehydration, blood loss, endocrine disorder (causes dizziness, fainting)."
  },
  {
    icon: "🍬",
    title: "Blood Sugar - FBS & PPBS (रक्त शर्करा)",
    hindi: "खाली पेट व भोजन बाद ग्लूकोज स्तर",
    desc: "Glucose is the body's primary energy source, regulated by the hormone insulin produced by the pancreas. Fasting is measured after 8-10 hours without food.",
    range: "Fasting: 70 - 99 mg/dL | Post-Prandial (PP): < 140 mg/dL",
    high: "High (Hyperglycemia): Type 1 / Type 2 Diabetes, Pre-diabetes, pancreatic stress.",
    low: "Low (Hypoglycemia): Insulin overdose, skipping meals (causes tremors, sweating, confusion)."
  },
  {
    icon: "📊",
    title: "HbA1c (Glycosylated Hemoglobin)",
    hindi: "पिछले 3 महीनों का औसत शुगर स्तर",
    desc: "Measures the percentage of hemoglobin coated with glucose. Provides an accurate non-fasting 90-day index of overall glycemic control.",
    range: "Normal: < 5.7% | Pre-Diabetes: 5.7 - 6.4% | Diabetes: ≥ 6.5%",
    high: "High: Chronic poor diabetic control, increased risk of diabetic retinopathy, neuropathy, nephropathy.",
    low: "Low: Rare, hemolytic anemia, recent severe blood loss or transfusion."
  },
  {
    icon: "🧬",
    title: "Lipid Profile & Cholesterol (कोलेस्ट्रॉल)",
    hindi: "धमनियों में वसा का स्तर (HDL, LDL, Triglycerides)",
    desc: "Measures lipids. HDL is 'Good Cholesterol' removing fat from arteries; LDL is 'Bad Cholesterol' forming arterial plaques; Triglycerides store unused calories.",
    range: "Total Chol: < 200 | HDL: > 40 (M), > 50 (F) | LDL: < 100 | Trig: < 150 mg/dL",
    high: "High LDL/Trig: Coronary artery blockages, angina, myocardial infarction, pancreatitis.",
    low: "Low HDL: Increased risk of cardiovascular disease."
  },
  {
    icon: "🫘",
    title: "Serum Creatinine & eGFR (किडनी कार्य)",
    hindi: "गुर्दे द्वारा अपशिष्ट छानने की क्षमता",
    desc: "Creatinine is a waste product from normal muscle breakdown. Healthy kidneys filter it completely into urine. Used to calculate estimated GFR (eGFR).",
    range: "Creatinine: 0.7 - 1.3 mg/dL (M), 0.6 - 1.1 (F) | eGFR: > 90 mL/min",
    high: "High Creatinine / Low eGFR: Acute kidney injury (AKI), Chronic Kidney Disease (CKD), dehydration, urinary obstruction.",
    low: "Low: Low muscle mass, severe malnutrition."
  },
  {
    icon: "🔬",
    title: "Bilirubin & Liver Enzymes (SGPT/SGOT)",
    hindi: "यकृत स्वास्थ्य व पीलिया (Jaundice) की पहचान",
    desc: "Bilirubin is formed by normal RBC breakdown. SGPT (ALT) and SGOT (AST) are cellular enzymes released into the bloodstream when liver cells are damaged.",
    range: "Bilirubin Total: 0.2 - 1.2 mg/dL | SGPT (ALT): 7 - 56 U/L | SGOT (AST): 5 - 40 U/L",
    high: "High Bilirubin: Jaundice (yellowing eyes/skin), hepatitis, gallstones. High SGPT: Fatty liver (NAFLD), hepatitis, alcohol toxicity.",
    low: "Low: Normal biological variation, generally clinically insignificant."
  }
];

// =============================================================================
// 2. DOM ELEMENT CACHING & APPLICATION INITIALIZATION
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  bindNavigation();
  bindPresetSelector();
  bindThemeToggle();
  bindAllInputs();
  bindReportModal();
  bindStorageActions();
  renderEncyclopedia();
  renderSavedRecords();
  
  // Initial Calculation Run
  calculateAll();
}

// Global state tracking
const appState = {
  theme: "dark",
  activeTab: "tab-cbc",
  metrics: {
    total: 24,
    normal: 0,
    alert: 0,
    critical: 0,
    healthIndex: 85
  }
};

// =============================================================================
// 3. NAVIGATION & UI TABS
// =============================================================================

function bindNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetPanelId = tab.getAttribute("data-tab");
      switchTab(targetPanelId);
    });
  });

  // Direct buttons
  const goToReportBtn = document.getElementById("goToReportTabBtn");
  if (goToReportBtn) {
    goToReportBtn.addEventListener("click", () => openReportModal());
  }

  const quickReportBtn = document.getElementById("quickReportBtn");
  if (quickReportBtn) {
    quickReportBtn.addEventListener("click", () => openReportModal());
  }

  const reanalysisBtn = document.getElementById("runAiReanalysisBtn");
  if (reanalysisBtn) {
    reanalysisBtn.addEventListener("click", () => {
      calculateAll();
      showToast("Patho-AI clinical re-analysis completed!");
    });
  }

  const regenIdBtn = document.getElementById("regenIdBtn");
  if (regenIdBtn) {
    regenIdBtn.addEventListener("click", () => {
      const rand = Math.floor(1000 + Math.random() * 9000);
      document.getElementById("sampleId").value = `MPL-2026-${rand}`;
      showToast(`Generated New Sample Barcode ID: MPL-2026-${rand}`);
    });
  }
}

function switchTab(panelId) {
  document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));

  const targetTabBtn = document.querySelector(`.nav-tab[data-tab="${panelId}"]`);
  const targetPanel = document.getElementById(panelId);

  if (targetTabBtn && targetPanel) {
    targetTabBtn.classList.add("active");
    targetPanel.classList.add("active");
    appState.activeTab = panelId;
  }
}

// =============================================================================
// 4. THEME TOGGLE (DARK / LIGHT)
// =============================================================================

function bindThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const darkIcon = toggleBtn.querySelector(".theme-icon-dark");
  const lightIcon = toggleBtn.querySelector(".theme-icon-light");

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    appState.theme = newTheme;

    if (newTheme === "light") {
      darkIcon.style.display = "none";
      lightIcon.style.display = "inline";
    } else {
      darkIcon.style.display = "inline";
      lightIcon.style.display = "none";
    }
  });
}

// =============================================================================
// 5. PRESETS & SCENARIO LOADER
// =============================================================================

function bindPresetSelector() {
  const presetSelect = document.getElementById("casePresetSelect");
  presetSelect.addEventListener("change", (e) => {
    const key = e.target.value;
    if (key && CLINICAL_PRESETS[key]) {
      loadPreset(CLINICAL_PRESETS[key]);
      showToast(`Loaded Preset: ${presetSelect.options[presetSelect.selectedIndex].text}`);
      presetSelect.value = "";
    }
  });

  // Quick reset buttons
  document.querySelectorAll(".reset-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      loadPreset(CLINICAL_PRESETS.healthy);
      showToast("Reset to Standard Healthy Baseline Values");
    });
  });
}

function loadPreset(data) {
  // Patient info
  if (data.patient) {
    if (data.patient.name) document.getElementById("patientName").value = data.patient.name;
    if (data.patient.age) document.getElementById("patientAge").value = data.patient.age;
    if (data.patient.gender) document.getElementById("patientGender").value = data.patient.gender;
    if (data.patient.bloodGroup) document.getElementById("patientBloodGroup").value = data.patient.bloodGroup;
    if (data.patient.doctor) document.getElementById("patientDoctor").value = data.patient.doctor;
  }

  // CBC
  if (data.cbc) {
    setVal("plateletsInput", data.cbc.platelets);
    setVal("rbcInput", data.cbc.rbc);
    setVal("hbInput", data.cbc.hb);
    setVal("wbcInput", data.cbc.wbc);
    setVal("pcvInput", data.cbc.pcv);
    setVal("esrInput", data.cbc.esr);
    setVal("dlcNeutro", data.cbc.neutro);
    setVal("dlcLympho", data.cbc.lympho);
    setVal("dlcMono", data.cbc.mono);
    setVal("dlcEos", data.cbc.eos);
    setVal("dlcBaso", data.cbc.baso);
    setVal("rdwInput", data.cbc.rdw);
  }

  // BP
  if (data.bp) {
    setVal("bpSystolic", data.bp.systolic);
    setVal("bpDiastolic", data.bp.diastolic);
    setVal("bpPulse", data.bp.pulse);
    setVal("sliderSys", data.bp.systolic);
    setVal("sliderDia", data.bp.diastolic);
    setVal("sliderPulse", data.bp.pulse);
  }

  // Sugar
  if (data.sugar) {
    setVal("sugarFbs", data.sugar.fbs);
    setVal("sugarPpbs", data.sugar.ppbs);
    setVal("sugarRbs", data.sugar.rbs);
    setVal("sugarHba1c", data.sugar.hba1c);
    if (data.sugar.urineGlucose) document.getElementById("urineGlucose").value = data.sugar.urineGlucose;
    if (data.sugar.urineKetones) document.getElementById("urineKetones").value = data.sugar.urineKetones;
  }

  // Lipid
  if (data.lipid) {
    setVal("lipidChol", data.lipid.chol);
    setVal("lipidHdl", data.lipid.hdl);
    setVal("lipidLdl", data.lipid.ldl);
    setVal("lipidTrig", data.lipid.trig);
  }

  // KFT
  if (data.kft) {
    setVal("kftCreatinine", data.kft.creatinine);
    setVal("kftUrea", data.kft.urea);
    setVal("kftUric", data.kft.uric);
    setVal("electrolyteNa", data.kft.na);
    setVal("electrolyteK", data.kft.k);
  }

  // LFT
  if (data.lft) {
    setVal("lftBiliTotal", data.lft.biliTotal);
    setVal("lftBiliDirect", data.lft.biliDirect);
    setVal("lftSgot", data.lft.sgot);
    setVal("lftSgpt", data.lft.sgpt);
    setVal("lftAlp", data.lft.alp);
    setVal("lftTotalProtein", data.lft.totalProtein);
    setVal("lftAlbumin", data.lft.albumin);
  }

  calculateAll();
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}

// Helpers for inline onclick
window.setBP = function(sys, dia, pulse) {
  setVal("bpSystolic", sys);
  setVal("bpDiastolic", dia);
  setVal("bpPulse", pulse);
  setVal("sliderSys", sys);
  setVal("sliderDia", dia);
  setVal("sliderPulse", pulse);
  calculateAll();
};

window.setSugar = function(fbs, ppbs, rbs, hba1c) {
  setVal("sugarFbs", fbs);
  setVal("sugarPpbs", ppbs);
  setVal("sugarRbs", rbs);
  setVal("sugarHba1c", hba1c);
  calculateAll();
};

// =============================================================================
// 6. INPUT BINDINGS & LIVE LISTENERS
// =============================================================================

function bindAllInputs() {
  const inputs = document.querySelectorAll("input, select, textarea");
  inputs.forEach(input => {
    input.addEventListener("input", () => calculateAll());
    input.addEventListener("change", () => calculateAll());
  });

  // Dual binding for BP range sliders
  bindSliderAndInput("sliderSys", "bpSystolic");
  bindSliderAndInput("sliderDia", "bpDiastolic");
  bindSliderAndInput("sliderPulse", "bpPulse");

  // Quick chip buttons (e.g. Dengue alert 35k)
  document.querySelectorAll(".chip-btn").forEach(chip => {
    chip.addEventListener("click", () => {
      const targetId = chip.getAttribute("data-target");
      const targetVal = chip.getAttribute("data-val");
      if (targetId && targetVal) {
        document.getElementById(targetId).value = targetVal;
        calculateAll();
      }
    });
  });

  // Search in encyclopedia
  const searchInput = document.getElementById("encyclopediaSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      renderEncyclopedia(q);
    });
  }
}

function bindSliderAndInput(sliderId, inputId) {
  const slider = document.getElementById(sliderId);
  const input = document.getElementById(inputId);
  if (!slider || !input) return;

  slider.addEventListener("input", () => {
    input.value = slider.value;
    calculateAll();
  });

  input.addEventListener("input", () => {
    slider.value = input.value;
  });
}

// =============================================================================
// 7. CORE CLINICAL ENGINE & CALCULATIONS
// =============================================================================

function calculateAll() {
  const age = parseFloat(document.getElementById("patientAge").value) || 35;
  const gender = document.getElementById("patientGender").value || "Male";
  const isMale = gender === "Male";

  let abnormalCount = 0;
  let criticalCount = 0;
  let normalCount = 0;
  const findings = [];

  // Update gender hints
  document.getElementById("rbcRefHint").textContent = isMale ? "Ref: 4.5 - 5.5 M/µL (M)" : "Ref: 4.0 - 5.0 M/µL (F)";
  document.getElementById("hbRefHint").textContent = isMale ? "Ref: 13.0 - 17.5 g/dL (M)" : "Ref: 12.0 - 15.5 g/dL (F)";
  document.getElementById("pcvRefHint").textContent = isMale ? "Ref: 40 - 52% (M)" : "Ref: 36 - 48% (F)";
  document.getElementById("kftCreatinineRef").textContent = isMale ? "Ref: 0.7 - 1.3 mg/dL (M)" : "Ref: 0.6 - 1.1 mg/dL (F)";

  // ---------------------------------------------------------------------------
  // A. CBC / HEMATOLOGY CALCULATIONS
  // ---------------------------------------------------------------------------
  const platelets = parseFloat(document.getElementById("plateletsInput").value) || 0;
  const rbc = parseFloat(document.getElementById("rbcInput").value) || 0;
  const hb = parseFloat(document.getElementById("hbInput").value) || 0;
  const wbc = parseFloat(document.getElementById("wbcInput").value) || 0;
  const pcv = parseFloat(document.getElementById("pcvInput").value) || 0;
  const esr = parseFloat(document.getElementById("esrInput").value) || 0;
  const rdw = parseFloat(document.getElementById("rdwInput").value) || 12.5;

  // Red Cell Indices Derived
  const mcv = rbc > 0 ? (pcv * 10) / rbc : 0;
  const mch = rbc > 0 ? (hb * 10) / rbc : 0;
  const mchc = pcv > 0 ? (hb * 100) / pcv : 0;

  document.getElementById("valMcv").innerHTML = `${mcv.toFixed(1)} <small>fL</small>`;
  document.getElementById("valMch").innerHTML = `${mch.toFixed(1)} <small>pg</small>`;
  document.getElementById("valMchc").innerHTML = `${mchc.toFixed(1)} <small>g/dL</small>`;

  // DLC Sum Check
  const neutro = parseFloat(document.getElementById("dlcNeutro").value) || 0;
  const lympho = parseFloat(document.getElementById("dlcLympho").value) || 0;
  const mono = parseFloat(document.getElementById("dlcMono").value) || 0;
  const eos = parseFloat(document.getElementById("dlcEos").value) || 0;
  const baso = parseFloat(document.getElementById("dlcBaso").value) || 0;
  const dlcTotal = neutro + lympho + mono + eos + baso;
  const dlcBadge = document.getElementById("dlcTotalBadge");
  dlcBadge.textContent = `Total: ${dlcTotal}%`;
  if (dlcTotal === 100) {
    dlcBadge.style.color = "var(--emerald-green)";
  } else {
    dlcBadge.style.color = "var(--amber-warning)";
  }

  // Platelets Evaluation
  const statPlat = document.getElementById("statusPlatelets");
  const barPlat = document.getElementById("barPlatelets");
  const platAlertBox = document.getElementById("plateletAlertBox");
  const platAlertTitle = document.getElementById("plateletAlertTitle");
  const platAlertDesc = document.getElementById("plateletAlertDesc");

  setBarPercent(barPlat, platelets, 50000, 450000);

  if (platelets < 20000) {
    statPlat.className = "status-pill status-critical";
    statPlat.textContent = "CRITICAL PANIC (<20k)";
    platAlertBox.className = "alert-box danger-alert";
    platAlertTitle.textContent = "🚨 CRITICAL THROMBOCYTOPENIA (PANIC VALUE)";
    platAlertDesc.textContent = "Platelets < 20,000 /µL. Immediate risk of life-threatening spontaneous intracranial or gastrointestinal bleeding. Urgent platelet concentrate transfusion advised!";
    criticalCount++;
    findings.push({
      type: "danger",
      icon: "🚨",
      title: "Critical Thrombocytopenia (Dengue Shock Risk)",
      desc: `Platelet count (${platelets.toLocaleString()} /µL) is dangerously low. Bleeding precautions mandatory. Transfusion may be required.`,
      meta: "Platelets: " + platelets.toLocaleString() + " /µL | Normal: 150k - 450k"
    });
  } else if (platelets < 50000) {
    statPlat.className = "status-pill status-critical";
    statPlat.textContent = "SEVERE LOW (<50k)";
    platAlertBox.className = "alert-box danger-alert";
    platAlertTitle.textContent = "⚠️ Severe Dengue / Bleeding Alert";
    platAlertDesc.textContent = `Platelet count (${platelets.toLocaleString()}) severely depressed. Monitor vitals, hematocrit (PCV for plasma leakage) every 6 hours.`;
    criticalCount++;
    findings.push({
      type: "danger",
      icon: "🩸",
      title: "Severe Thrombocytopenia Alert",
      desc: "High risk of bleeding. Clinical observation and close hematocrit monitoring recommended.",
      meta: `Platelets: ${platelets.toLocaleString()} /µL`
    });
  } else if (platelets < 150000) {
    statPlat.className = "status-pill status-low";
    statPlat.textContent = "Low (Thrombocytopenia)";
    platAlertBox.className = "alert-box";
    platAlertTitle.textContent = "Mild to Moderate Thrombocytopenia";
    platAlertDesc.textContent = "Platelet count below physiological threshold. Correlate with acute viral infection or drug-induced suppression.";
    abnormalCount++;
  } else if (platelets > 450000) {
    statPlat.className = "status-pill status-high";
    statPlat.textContent = "High (Thrombocytosis)";
    platAlertBox.className = "alert-box";
    platAlertTitle.textContent = "Thrombocytosis Detected";
    platAlertDesc.textContent = "Elevated platelets. May indicate reactive process (post-infection, iron deficiency) or myeloproliferative disorder.";
    abnormalCount++;
  } else {
    statPlat.className = "status-pill status-normal";
    statPlat.textContent = "Normal";
    platAlertBox.className = "alert-box alert-platelet";
    platAlertTitle.textContent = "Normal Platelet Count";
    platAlertDesc.textContent = "Platelet clotting capacity intact. No thrombocytopenia or risk of hemorrhagic diathesis.";
    normalCount++;
  }

  // RBC & Anemia Evaluation
  const statRbc = document.getElementById("statusRbc");
  const rbcMin = isMale ? 4.5 : 4.0;
  const rbcMax = isMale ? 5.5 : 5.0;
  setBarPercent(document.getElementById("barRbc"), rbc, 3.0, 6.0);
  if (rbc < rbcMin) {
    statRbc.className = "status-pill status-low";
    statRbc.textContent = "Low";
    abnormalCount++;
  } else if (rbc > rbcMax) {
    statRbc.className = "status-pill status-high";
    statRbc.textContent = "High";
    abnormalCount++;
  } else {
    statRbc.className = "status-pill status-normal";
    statRbc.textContent = "Normal";
    normalCount++;
  }

  // Hemoglobin Evaluation
  const statHb = document.getElementById("statusHb");
  const hbMin = isMale ? 13.0 : 12.0;
  const hbMax = isMale ? 17.5 : 15.5;
  setBarPercent(document.getElementById("barHb"), hb, 7.0, 18.0);

  const anemiaBox = document.getElementById("anemiaAlertBox");
  const anemiaTitle = document.getElementById("anemiaAlertTitle");
  const anemiaDesc = document.getElementById("anemiaAlertDesc");

  if (hb < 8.0) {
    statHb.className = "status-pill status-critical";
    statHb.textContent = "Severe Anemia (<8)";
    anemiaBox.className = "alert-box danger-alert";
    anemiaTitle.textContent = "🚨 Severe Decompensated Anemia";
    anemiaDesc.textContent = `Hemoglobin (${hb} g/dL) is critically low. Severe tissue hypoxia risk. Prompt iron sucrose infusion or PRBC blood transfusion advised.`;
    criticalCount++;
    findings.push({
      type: "danger",
      icon: "🩸",
      title: "Severe Anemia (Hb < 8 g/dL)",
      desc: `Critical low hemoglobin (${hb} g/dL). Microcytic or macrocytic workup indicated. Urgent medical attention required.`,
      meta: `Hemoglobin: ${hb} g/dL (Target: > ${hbMin} g/dL)`
    });
  } else if (hb < hbMin) {
    statHb.className = "status-pill status-low";
    statHb.textContent = "Low (Anemic)";
    anemiaBox.className = "alert-box";

    let anemiaType = "Normocytic Normochromic";
    if (mcv < 80) anemiaType = "Microcytic Hypochromic (Iron Deficiency / Thalassemia)";
    else if (mcv > 100) anemiaType = "Macrocytic (Vit B12 / Folate Deficiency)";

    anemiaTitle.textContent = `Anemia Detected (${anemiaType})`;
    anemiaDesc.textContent = `Hb is ${hb} g/dL with MCV ${mcv.toFixed(1)} fL. Serum ferritin and peripheral blood smear recommended.`;
    abnormalCount++;
    findings.push({
      type: "warning",
      icon: "🧬",
      title: `Nutritional Anemia: ${anemiaType}`,
      desc: `Hemoglobin is subnormal at ${hb} g/dL. Dietary iron/B12 supplementation recommended.`,
      meta: `Hb: ${hb} g/dL | MCV: ${mcv.toFixed(1)} fL`
    });
  } else if (hb > hbMax) {
    statHb.className = "status-pill status-high";
    statHb.textContent = "High";
    anemiaTitle.textContent = "Elevated Hemoglobin (Polycythemia)";
    anemiaDesc.textContent = "High red cell mass or hemoconcentration. Rule out smoking, dehydration, or hypoxia.";
    abnormalCount++;
  } else {
    statHb.className = "status-pill status-normal";
    statHb.textContent = "Normal";
    anemiaBox.className = "alert-box alert-anemia";
    anemiaTitle.textContent = "Adequate Hemoglobin";
    anemiaDesc.textContent = `Hemoglobin ${hb} g/dL is physiological. Red cell indices are within balanced parameters.`;
    normalCount++;
  }

  // WBC Evaluation
  const statWbc = document.getElementById("statusWbc");
  setBarPercent(document.getElementById("barWbc"), wbc, 2000, 20000);
  const immuneBox = document.getElementById("immuneAlertBox");
  const immuneTitle = document.getElementById("immuneAlertTitle");
  const immuneDesc = document.getElementById("immuneAlertDesc");

  if (wbc > 11000) {
    statWbc.className = "status-pill status-high";
    statWbc.textContent = "High (Leukocytosis)";
    immuneBox.className = "alert-box";
    if (neutro > 75) {
      immuneTitle.textContent = "Bacterial Infection / Neutrophilia";
      immuneDesc.textContent = `High WBC (${wbc}) with Neutrophils (${neutro}%). Active bacterial inflammatory response suspected.`;
      findings.push({
        type: "warning",
        icon: "🦠",
        title: "Active Bacterial Infection (Leukocytosis)",
        desc: `Elevated WBC (${wbc.toLocaleString()} /µL) with neutrophilic predominance (${neutro}%).`,
        meta: `WBC: ${wbc.toLocaleString()} /µL`
      });
    } else {
      immuneTitle.textContent = "Leukocytosis Detected";
      immuneDesc.textContent = "Elevated total leukocyte count. Investigate for tissue inflammation or stress.";
    }
    abnormalCount++;
  } else if (wbc < 4000) {
    statWbc.className = "status-pill status-low";
    statWbc.textContent = "Low (Leukopenia)";
    immuneBox.className = "alert-box danger-alert";
    immuneTitle.textContent = "Leukopenia / Immunosuppression";
    immuneDesc.textContent = `WBC (${wbc}) is suppressed. Common in acute viral fevers (Dengue, Influenza, Typhoid).`;
    abnormalCount++;
    findings.push({
      type: "warning",
      icon: "🛡️",
      title: "Leukopenia (Viral/Marrow Suppression)",
      desc: `Total white blood cells are depressed (${wbc.toLocaleString()} /µL). Impaired immune defense.`,
      meta: `WBC: ${wbc.toLocaleString()} /µL`
    });
  } else {
    statWbc.className = "status-pill status-normal";
    statWbc.textContent = "Normal";
    immuneBox.className = "alert-box alert-immune";
    immuneTitle.textContent = "Normal Leukocyte Profile";
    immuneDesc.textContent = "No acute leukocytosis or leukopenia detected. Immune surveillance within normal balance.";
    normalCount++;
  }

  // PCV Status
  const statPcv = document.getElementById("statusPcv");
  const pcvMin = isMale ? 40 : 36;
  const pcvMax = isMale ? 52 : 48;
  setBarPercent(document.getElementById("barPcv"), pcv, 25, 55);
  if (pcv < pcvMin) {
    statPcv.className = "status-pill status-low";
    statPcv.textContent = "Low";
    abnormalCount++;
  } else if (pcv > pcvMax) {
    statPcv.className = "status-pill status-high";
    statPcv.textContent = "High";
    abnormalCount++;
  } else {
    statPcv.className = "status-pill status-normal";
    statPcv.textContent = "Normal";
    normalCount++;
  }

  // ESR Status
  const statEsr = document.getElementById("statusEsr");
  const esrMax = isMale ? 15 : 20;
  setBarPercent(document.getElementById("barEsr"), esr, 0, 50);
  if (esr > esrMax) {
    statEsr.className = "status-pill status-high";
    statEsr.textContent = "High";
    abnormalCount++;
  } else {
    statEsr.className = "status-pill status-normal";
    statEsr.textContent = "Normal";
    normalCount++;
  }

  // ---------------------------------------------------------------------------
  // B. BLOOD PRESSURE & HEMODYNAMICS
  // ---------------------------------------------------------------------------
  const systolic = parseFloat(document.getElementById("bpSystolic").value) || 120;
  const diastolic = parseFloat(document.getElementById("bpDiastolic").value) || 80;
  const pulse = parseFloat(document.getElementById("bpPulse").value) || 72;

  // Derived Hemodynamics
  const map = diastolic + (1 / 3) * (systolic - diastolic);
  const pulsePressure = systolic - diastolic;
  const shockIndex = systolic > 0 ? pulse / systolic : 0;

  document.getElementById("valMap").innerHTML = `${map.toFixed(1)} <small>mmHg</small>`;
  document.getElementById("valPulsePressure").innerHTML = `${pulsePressure.toFixed(0)} <small>mmHg</small>`;
  document.getElementById("valShockIndex").textContent = shockIndex.toFixed(2);

  // Status pills
  const statSys = document.getElementById("statusSys");
  const statDia = document.getElementById("statusDia");
  const statPulse = document.getElementById("statusPulse");

  statSys.className = systolic > 130 ? "status-pill status-high" : systolic < 90 ? "status-pill status-low" : "status-pill status-normal";
  statSys.textContent = systolic > 130 ? "High" : systolic < 90 ? "Low" : "Normal";

  statDia.className = diastolic > 85 ? "status-pill status-high" : diastolic < 60 ? "status-pill status-low" : "status-pill status-normal";
  statDia.textContent = diastolic > 85 ? "High" : diastolic < 60 ? "Low" : "Normal";

  statPulse.className = pulse > 100 ? "status-pill status-high" : pulse < 60 ? "status-pill status-low" : "status-pill status-normal";
  statPulse.textContent = pulse > 100 ? "Tachycardia" : pulse < 60 ? "Bradycardia" : "Normal";

  // AHA Staging & Visual Gauge Needle
  const bpStageBanner = document.getElementById("bpStageBanner");
  const bpStageName = document.getElementById("bpStageName");
  const bpStageHindi = document.getElementById("bpStageHindi");
  const bpStageIcon = document.getElementById("bpStageIcon");
  const bpNeedle = document.getElementById("bpNeedle");
  const bpAdviceText = document.getElementById("bpAdviceText");

  let needlePos = 15;

  if (systolic >= 180 || diastolic >= 120) {
    bpStageBanner.style.background = "rgba(220, 38, 38, 0.2)";
    bpStageBanner.style.borderColor = "var(--rose-danger)";
    bpStageName.textContent = "HYPERTENSIVE CRISIS (EMERGENCY)";
    bpStageHindi.textContent = "🚨 अत्यंत गंभीर उच्च रक्तचाप - तुरंत डॉक्टर से संपर्क करें";
    bpStageIcon.textContent = "🚨";
    needlePos = 95;
    bpAdviceText.textContent = "Immediate emergency medical attention is mandatory. Risk of acute myocardial infarction, hypertensive encephalopathy, or aortic dissection.";
    criticalCount++;
    findings.push({
      type: "danger",
      icon: "🫀",
      title: "Hypertensive Crisis (BP ≥ 180/120 mmHg)",
      desc: `Critical blood pressure reading (${systolic}/${diastolic} mmHg). Immediate intervention required to prevent end-organ damage.`,
      meta: `BP: ${systolic}/${diastolic} mmHg`
    });
  } else if (systolic >= 140 || diastolic >= 90) {
    bpStageBanner.style.background = "rgba(249, 115, 22, 0.18)";
    bpStageBanner.style.borderColor = "#f97316";
    bpStageName.textContent = "STAGE 2 HYPERTENSION";
    bpStageHindi.textContent = "द्वितीय चरण उच्च रक्तचाप (दवा और जीवनशैली नियंत्रण आवश्यक)";
    bpStageIcon.textContent = "⚠️";
    needlePos = 75;
    bpAdviceText.textContent = "Pharmacological antihypertensive therapy typically indicated along with rigorous DASH diet, low sodium (<1500mg/day), and stress management.";
    abnormalCount++;
    findings.push({
      type: "warning",
      icon: "🫀",
      title: "Stage 2 Hypertension",
      desc: `Blood pressure elevated at ${systolic}/${diastolic} mmHg. Antihypertensive clinical evaluation recommended.`,
      meta: `BP: ${systolic}/${diastolic} mmHg | Target: < 120/80`
    });
  } else if (systolic >= 130 || diastolic >= 80) {
    bpStageBanner.style.background = "rgba(245, 158, 11, 0.18)";
    bpStageBanner.style.borderColor = "var(--amber-warning)";
    bpStageName.textContent = "STAGE 1 HYPERTENSION";
    bpStageHindi.textContent = "प्रथम चरण उच्च रक्तचाप (नियमित जांच व आहार नियंत्रण)";
    bpStageIcon.textContent = "🟡";
    needlePos = 55;
    bpAdviceText.textContent = "Lifestyle modifications recommended. Re-assess BP in 3-6 months. Reduce dietary sodium, increase potassium-rich fruits, exercise 150 min/week.";
    abnormalCount++;
  } else if (systolic >= 120 && diastolic < 80) {
    bpStageBanner.style.background = "rgba(132, 204, 22, 0.18)";
    bpStageBanner.style.borderColor = "#84cc16";
    bpStageName.textContent = "ELEVATED BLOOD PRESSURE";
    bpStageHindi.textContent = "हल्का बढ़ा हुआ रक्तचाप (प्री-हाइपरटेंशन)";
    bpStageIcon.textContent = "📈";
    needlePos = 35;
    bpAdviceText.textContent = "Pre-hypertension stage. Healthy lifestyle modifications can easily restore blood pressure to the optimal zone.";
    abnormalCount++;
  } else if (systolic < 90 || diastolic < 60) {
    bpStageBanner.style.background = "rgba(59, 130, 246, 0.18)";
    bpStageBanner.style.borderColor = "var(--blue-primary)";
    bpStageName.textContent = "HYPOTENSION (LOW BLOOD PRESSURE)";
    bpStageHindi.textContent = "निम्न रक्तचाप (कम बीपी - ओआरएस व जल संतुलन बनाए रखें)";
    bpStageIcon.textContent = "📉";
    needlePos = 5;
    bpAdviceText.textContent = "Check hydration, electrolyte balance, or orthostatic symptoms. Ensure adequate fluids and salts.";
    abnormalCount++;
  } else {
    bpStageBanner.style.background = "rgba(16, 185, 129, 0.18)";
    bpStageBanner.style.borderColor = "var(--emerald-green)";
    bpStageName.textContent = "NORMAL BLOOD PRESSURE";
    bpStageHindi.textContent = "सामान्य व स्वस्थ रक्तचाप (कार्डियोवस्कुलर स्वास्थ्य उत्तम)";
    bpStageIcon.textContent = "🫀";
    needlePos = 18;
    bpAdviceText.textContent = "Cardiovascular hemodynamics in optimal range. Continue balanced diet, regular physical exercise, and annual screening.";
    normalCount++;
  }

  bpNeedle.style.left = `${needlePos}%`;

  // ---------------------------------------------------------------------------
  // C. BLOOD SUGAR & DIABETES PANEL
  // ---------------------------------------------------------------------------
  const fbs = parseFloat(document.getElementById("sugarFbs").value) || 90;
  const ppbs = parseFloat(document.getElementById("sugarPpbs").value) || 120;
  const rbs = parseFloat(document.getElementById("sugarRbs").value) || 100;
  const hba1c = parseFloat(document.getElementById("sugarHba1c").value) || 5.4;

  // Derived eAG (Estimated Average Glucose in mg/dL)
  const eag = 28.7 * hba1c - 46.7;
  document.getElementById("valEag").innerHTML = `${eag.toFixed(0)} <small>mg/dL</small>`;

  setBarPercent(document.getElementById("barFbs"), fbs, 50, 250);
  setBarPercent(document.getElementById("barPpbs"), ppbs, 70, 300);
  setBarPercent(document.getElementById("barRbs"), rbs, 60, 300);
  setBarPercent(document.getElementById("barHba1c"), hba1c, 4.0, 12.0);

  const statFbs = document.getElementById("statusFbs");
  const statPpbs = document.getElementById("statusPpbs");
  const statRbs = document.getElementById("statusRbs");
  const statHba1c = document.getElementById("statusHba1c");

  statFbs.className = fbs >= 126 ? "status-pill status-high" : fbs >= 100 ? "status-pill status-low" : fbs < 70 ? "status-pill status-critical" : "status-pill status-normal";
  statFbs.textContent = fbs >= 126 ? "Diabetic" : fbs >= 100 ? "Pre-Diabetic" : fbs < 70 ? "Hypoglycemia" : "Normal";

  statPpbs.className = ppbs >= 200 ? "status-pill status-high" : ppbs >= 140 ? "status-pill status-low" : "status-pill status-normal";
  statPpbs.textContent = ppbs >= 200 ? "High" : ppbs >= 140 ? "Borderline" : "Normal";

  statRbs.className = rbs >= 200 ? "status-pill status-high" : rbs >= 140 ? "status-pill status-low" : "status-pill status-normal";
  statRbs.textContent = rbs >= 200 ? "High" : rbs >= 140 ? "Borderline" : "Normal";

  statHba1c.className = hba1c >= 6.5 ? "status-pill status-high" : hba1c >= 5.7 ? "status-pill status-low" : "status-pill status-normal";
  statHba1c.textContent = hba1c >= 6.5 ? "Diabetic (≥6.5%)" : hba1c >= 5.7 ? "Pre-Diabetes" : "Normal (<5.7%)";

  const sugarCard = document.getElementById("sugarStatusCard");
  const sugarIcon = document.getElementById("sugarStatusIcon");
  const sugarTitle = document.getElementById("sugarStatusTitle");
  const sugarSub = document.getElementById("sugarStatusSub");
  const sugarAdvice = document.getElementById("sugarAdviceText");
  const hba1cThreshold = document.getElementById("hba1cThresholdText");
  const barProgressHba1c = document.getElementById("barProgressHba1c");

  hba1cThreshold.textContent = `${hba1c.toFixed(1)}% / 5.7% (Goal)`;
  const hba1cProgressPercent = Math.min(100, Math.max(10, ((hba1c - 4) / 8) * 100));
  barProgressHba1c.style.width = `${hba1cProgressPercent}%`;

  if (fbs < 60) {
    sugarCard.style.background = "rgba(220, 38, 38, 0.2)";
    sugarIcon.textContent = "🚨";
    sugarTitle.textContent = "ACUTE HYPOGLYCEMIA (<60 mg/dL)";
    sugarSub.textContent = "अत्यधिक कम शुगर (गंभीर खतरा - तत्काल मीठा/ग्लूकोज लें)";
    sugarAdvice.textContent = "Administer oral fast-acting carbohydrates (15-20g sugar, fruit juice, or glucose candy) immediately. Re-check in 15 minutes.";
    barProgressHba1c.className = "progress-bar-val bg-rose";
    criticalCount++;
    findings.push({
      type: "danger",
      icon: "🍬",
      title: "Acute Hypoglycemia Alert (< 60 mg/dL)",
      desc: `Critical low blood glucose (${fbs} mg/dL). Immediate glucose administration required.`,
      meta: `FBS: ${fbs} mg/dL`
    });
  } else if (hba1c >= 6.5 || fbs >= 126 || ppbs >= 200) {
    sugarCard.style.background = "rgba(244, 63, 94, 0.15)";
    sugarIcon.textContent = "🩸";
    sugarTitle.textContent = "TYPE 2 DIABETES MELLITUS";
    sugarSub.textContent = "मधुमेह (डायबिटीज - ग्लाइसेमिक नियंत्रण व दवा आवश्यक)";
    sugarAdvice.textContent = `Estimated 90-day average blood glucose is ${eag.toFixed(0)} mg/dL. Consult diabetologist for oral hypoglycemics or insulin management and diabetic diet.`;
    barProgressHba1c.className = "progress-bar-val bg-rose";
    abnormalCount++;
    findings.push({
      type: "warning",
      icon: "🧪",
      title: "Type 2 Diabetes Mellitus (HbA1c ≥ 6.5%)",
      desc: `Elevated HbA1c (${hba1c}%) and Fasting Sugar (${fbs} mg/dL). Endocrine review indicated.`,
      meta: `HbA1c: ${hba1c}% | eAG: ${eag.toFixed(0)} mg/dL`
    });
  } else if (hba1c >= 5.7 || fbs >= 100 || ppbs >= 140) {
    sugarCard.style.background = "rgba(245, 158, 11, 0.15)";
    sugarIcon.textContent = "⚠️";
    sugarTitle.textContent = "PRE-DIABETES (IMPAIRED GLUCOSE)";
    sugarSub.textContent = "प्री-डायबिटीज (जीवनशैली सुधार से पूर्णतः नियंत्रित संभव)";
    sugarAdvice.textContent = "Borderline insulin resistance. Reversible with low-carb dietary habits, weight management, and 30 mins daily walking.";
    barProgressHba1c.className = "progress-bar-val bg-amber";
    abnormalCount++;
  } else {
    sugarCard.style.background = "rgba(16, 185, 129, 0.15)";
    sugarIcon.textContent = "🟢";
    sugarTitle.textContent = "EUGLYCEMIC (NORMAL SUGAR)";
    sugarSub.textContent = "रक्त शर्करा का स्तर पूर्णतः सामान्य व स्वस्थ है";
    sugarAdvice.textContent = "Insulin sensitivity and carbohydrate metabolism intact. Continue wholesome low-glycemic nutrition.";
    barProgressHba1c.className = "progress-bar-val bg-green";
    normalCount++;
  }

  // ---------------------------------------------------------------------------
  // D. LIPID PROFILE & CARDIAC RISK
  // ---------------------------------------------------------------------------
  const chol = parseFloat(document.getElementById("lipidChol").value) || 170;
  const hdl = parseFloat(document.getElementById("lipidHdl").value) || 50;
  const ldl = parseFloat(document.getElementById("lipidLdl").value) || 95;
  const trig = parseFloat(document.getElementById("lipidTrig").value) || 125;

  const vldl = trig / 5;
  const nonHdl = chol - hdl;
  const cholHdlRatio = hdl > 0 ? chol / hdl : 0;
  const ldlHdlRatio = hdl > 0 ? ldl / hdl : 0;

  document.getElementById("valVldl").innerHTML = `${vldl.toFixed(1)} <small>mg/dL</small>`;
  document.getElementById("valNonHdl").innerHTML = `${nonHdl.toFixed(0)} <small>mg/dL</small>`;
  document.getElementById("valCholHdlRatio").textContent = cholHdlRatio.toFixed(2);
  document.getElementById("valLdlHdlRatio").textContent = ldlHdlRatio.toFixed(2);

  setBarPercent(document.getElementById("barChol"), chol, 100, 300);
  setBarPercent(document.getElementById("barHdl"), hdl, 20, 80);
  setBarPercent(document.getElementById("barLdl"), ldl, 50, 200);
  setBarPercent(document.getElementById("barTrig"), trig, 50, 400);

  const statChol = document.getElementById("statusChol");
  const statHdl = document.getElementById("statusHdl");
  const statLdl = document.getElementById("statusLdl");
  const statTrig = document.getElementById("statusTrig");

  statChol.className = chol >= 240 ? "status-pill status-high" : chol >= 200 ? "status-pill status-low" : "status-pill status-normal";
  statChol.textContent = chol >= 240 ? "High" : chol >= 200 ? "Borderline" : "Desirable";

  const hdlTarget = isMale ? 40 : 50;
  statHdl.className = hdl < hdlTarget ? "status-pill status-low" : "status-pill status-normal";
  statHdl.textContent = hdl < hdlTarget ? "Low HDL" : "Protective";

  statLdl.className = ldl >= 160 ? "status-pill status-high" : ldl >= 130 ? "status-pill status-low" : "status-pill status-normal";
  statLdl.textContent = ldl >= 160 ? "High" : ldl >= 130 ? "Borderline" : "Optimal";

  statTrig.className = trig >= 200 ? "status-pill status-high" : trig >= 150 ? "status-pill status-low" : "status-pill status-normal";
  statTrig.textContent = trig >= 200 ? "High" : trig >= 150 ? "Borderline" : "Normal";

  const lipidRiskBox = document.getElementById("lipidRiskBox");
  const lipidRiskTitle = document.getElementById("lipidRiskTitle");
  const lipidRiskDesc = document.getElementById("lipidRiskDesc");

  if (chol >= 240 || ldl >= 160 || cholHdlRatio > 5.0) {
    lipidRiskBox.className = "alert-box danger-alert";
    lipidRiskTitle.textContent = "High Atherogenic Cardiovascular Risk";
    lipidRiskDesc.textContent = `Atherogenic index elevated (TC/HDL: ${cholHdlRatio.toFixed(2)}). Statin therapy and lifestyle lipid modulation advised.`;
    abnormalCount++;
    findings.push({
      type: "warning",
      icon: "🧬",
      title: "Dyslipidemia / Elevated Atherogenic Risk",
      desc: `Total Cholesterol (${chol} mg/dL) or LDL (${ldl} mg/dL) elevated. Risk of arterial plaque accumulation.`,
      meta: `TC/HDL Ratio: ${cholHdlRatio.toFixed(2)} | Target: < 4.5`
    });
  } else if (chol >= 200 || ldl >= 130 || trig >= 150) {
    lipidRiskBox.className = "alert-box";
    lipidRiskTitle.textContent = "Borderline Dyslipidemia";
    lipidRiskDesc.textContent = "Mild hypercholesterolemia or hypertriglyceridemia. Exercise and dietary fat reduction advised.";
    abnormalCount++;
  } else {
    lipidRiskBox.className = "alert-box";
    lipidRiskTitle.textContent = "Optimal Cardiovascular Lipid Profile";
    lipidRiskDesc.textContent = "Favorable lipid balance with protective HDL levels. Low 10-year atherosclerotic risk.";
    normalCount++;
  }

  // ---------------------------------------------------------------------------
  // E. KIDNEY FUNCTION (KFT / RFT) & eGFR
  // ---------------------------------------------------------------------------
  const creatinine = parseFloat(document.getElementById("kftCreatinine").value) || 0.9;
  const urea = parseFloat(document.getElementById("kftUrea").value) || 25;
  const uric = parseFloat(document.getElementById("kftUric").value) || 5.0;

  const bun = urea / 2.14;
  const bunCreatRatio = creatinine > 0 ? bun / creatinine : 0;

  document.getElementById("valBun").innerHTML = `${bun.toFixed(1)} <small>mg/dL</small>`;
  document.getElementById("valBunCreatRatio").textContent = bunCreatRatio.toFixed(1);

  setBarPercent(document.getElementById("barCreatinine"), creatinine, 0.4, 3.0);
  setBarPercent(document.getElementById("barUrea"), urea, 10, 80);
  setBarPercent(document.getElementById("barUric"), uric, 2.0, 10.0);

  const creatMin = isMale ? 0.7 : 0.6;
  const creatMax = isMale ? 1.3 : 1.1;

  const statCreat = document.getElementById("statusCreatinine");
  statCreat.className = creatinine > creatMax ? "status-pill status-high" : creatinine < creatMin ? "status-pill status-low" : "status-pill status-normal";
  statCreat.textContent = creatinine > creatMax ? "High" : creatinine < creatMin ? "Low" : "Normal";

  const statUrea = document.getElementById("statusUrea");
  statUrea.className = urea > 45 ? "status-pill status-high" : "status-pill status-normal";
  statUrea.textContent = urea > 45 ? "High" : "Normal";

  const uricMax = isMale ? 7.2 : 6.0;
  const statUric = document.getElementById("statusUric");
  statUric.className = uric > uricMax ? "status-pill status-high" : "status-pill status-normal";
  statUric.textContent = uric > uricMax ? "High (Gout Risk)" : "Normal";

  // Calculate eGFR (CKD-EPI formula simplified)
  let egfr = 0;
  const kappa = isMale ? 0.9 : 0.7;
  const alpha = isMale ? -0.411 : -0.329;
  const genderFactor = isMale ? 1.0 : 1.018;

  const minRatio = Math.min(creatinine / kappa, 1);
  const maxRatio = Math.max(creatinine / kappa, 1);

  egfr = 141 * Math.pow(minRatio, alpha) * Math.pow(maxRatio, -1.209) * Math.pow(0.993, age) * genderFactor;
  if (isNaN(egfr) || egfr < 1) egfr = 5;

  document.getElementById("valEgfr").textContent = egfr.toFixed(1);

  const ckdTag = document.getElementById("ckdStageTag");
  const ckdHindi = document.getElementById("ckdHindiText");
  const kftImpression = document.getElementById("kftImpressionText");

  if (egfr >= 90) {
    ckdTag.className = "ckd-stage-tag bg-green";
    ckdTag.textContent = "CKD STAGE 1: NORMAL GFR (≥90)";
    ckdHindi.textContent = "किडनी की कार्यक्षमता सामान्य और उत्तम है";
    kftImpression.textContent = "Adequate glomerular filtration. No biochemical evidence of azotemia or renal failure.";
    normalCount++;
  } else if (egfr >= 60) {
    ckdTag.className = "ckd-stage-tag bg-amber";
    ckdTag.textContent = "CKD STAGE 2: MILD DECREASE (60-89)";
    ckdHindi.textContent = "हल्का घटा हुआ जीएफआर (पर्याप्त जलपान व बीपी नियंत्रण रखें)";
    kftImpression.textContent = "Mildly subnormal filtration. Maintain hydration, avoid NSAID analgesics.";
    abnormalCount++;
  } else if (egfr >= 30) {
    ckdTag.className = "ckd-stage-tag bg-rose";
    ckdTag.textContent = "CKD STAGE 3: MODERATE (30-59)";
    ckdHindi.textContent = "मध्यम गुर्दा रोग (नेफ्रोलॉजिस्ट परामर्श अत्यंत आवश्यक)";
    kftImpression.textContent = "Moderate chronic kidney disease. Strict nephrological evaluation indicated.";
    abnormalCount++;
    findings.push({
      type: "warning",
      icon: "🫘",
      title: "Moderate Renal Impairment (CKD Stage 3)",
      desc: `Reduced eGFR (${egfr.toFixed(1)} mL/min/1.73m²) with elevated serum creatinine (${creatinine} mg/dL).`,
      meta: `eGFR: ${egfr.toFixed(1)} | Creatinine: ${creatinine} mg/dL`
    });
  } else {
    ckdTag.className = "ckd-stage-tag bg-rose";
    ckdTag.textContent = "CKD STAGE 4-5: SEVERE RENAL FAILURE (<30)";
    ckdHindi.textContent = "🚨 गंभीर किडनी रोग / रीनल फेलियर (डायलिसिस / आपातकालीन परामर्श)";
    kftImpression.textContent = "Severely reduced GFR. Immediate nephrology referral, electrolyte monitoring, and dialysis assessment required.";
    criticalCount++;
    findings.push({
      type: "danger",
      icon: "🫘",
      title: "Severe Renal Failure (eGFR < 30)",
      desc: `Critical renal insufficiency (eGFR ${egfr.toFixed(1)}). Uremic syndrome risk.`,
      meta: `Creatinine: ${creatinine} mg/dL | Urea: ${urea} mg/dL`
    });
  }

  // ---------------------------------------------------------------------------
  // F. LIVER FUNCTION (LFT)
  // ---------------------------------------------------------------------------
  const biliTotal = parseFloat(document.getElementById("lftBiliTotal").value) || 0.8;
  const biliDirect = parseFloat(document.getElementById("lftBiliDirect").value) || 0.2;
  const sgot = parseFloat(document.getElementById("lftSgot").value) || 28;
  const sgpt = parseFloat(document.getElementById("lftSgpt").value) || 32;
  const alp = parseFloat(document.getElementById("lftAlp").value) || 95;
  const totalProtein = parseFloat(document.getElementById("lftTotalProtein").value) || 7.2;
  const albumin = parseFloat(document.getElementById("lftAlbumin").value) || 4.2;

  const globulin = totalProtein - albumin;
  const agRatio = globulin > 0 ? albumin / globulin : 0;
  const deRitis = sgpt > 0 ? sgot / sgpt : 0;

  document.getElementById("valGlobulin").innerHTML = `${globulin.toFixed(1)} <small>g/dL</small>`;
  document.getElementById("valAgRatio").textContent = agRatio.toFixed(2);
  document.getElementById("valDeRitis").textContent = deRitis.toFixed(2);

  setBarPercent(document.getElementById("barBiliTotal"), biliTotal, 0.2, 5.0);
  setBarPercent(document.getElementById("barBiliDirect"), biliDirect, 0.0, 2.0);
  setBarPercent(document.getElementById("barSgot"), sgot, 10, 150);
  setBarPercent(document.getElementById("barSgpt"), sgpt, 10, 150);
  setBarPercent(document.getElementById("barAlp"), alp, 40, 250);

  const statBiliTotal = document.getElementById("statusBiliTotal");
  statBiliTotal.className = biliTotal > 2.0 ? "status-pill status-high" : biliTotal > 1.2 ? "status-pill status-low" : "status-pill status-normal";
  statBiliTotal.textContent = biliTotal > 2.0 ? "Jaundice (>2)" : biliTotal > 1.2 ? "Borderline" : "Normal";

  const statSgpt = document.getElementById("statusSgpt");
  statSgpt.className = sgpt > 56 ? "status-pill status-high" : "status-pill status-normal";
  statSgpt.textContent = sgpt > 56 ? "High (Liver Stress)" : "Normal";

  const liverAlertBox = document.getElementById("liverAlertBox");
  const liverAlertTitle = document.getElementById("liverAlertTitle");
  const liverAlertDesc = document.getElementById("liverAlertDesc");

  if (biliTotal > 2.0) {
    liverAlertBox.className = "alert-box danger-alert";
    liverAlertTitle.textContent = "Clinical Jaundice / Hyperbilirubinemia";
    liverAlertDesc.textContent = `Total Bilirubin elevated (${biliTotal} mg/dL). Investigate for hepatocellular injury, viral hepatitis, or biliary duct obstruction.`;
    abnormalCount++;
    findings.push({
      type: "warning",
      icon: "🩺",
      title: "Hyperbilirubinemia / Jaundice",
      desc: `Total Bilirubin is ${biliTotal} mg/dL. Ultrasound abdomen and viral hepatitis markers recommended.`,
      meta: `Bilirubin: ${biliTotal} mg/dL | Ref: 0.2 - 1.2`
    });
  } else if (sgpt > 56 || sgot > 40) {
    liverAlertBox.className = "alert-box";
    liverAlertTitle.textContent = "Hepatic Transaminitis (Liver Inflammation)";
    liverAlertDesc.textContent = `Transaminases SGPT (${sgpt} U/L) or SGOT (${sgot} U/L) elevated. Common in fatty liver, medication stress, or alcohol intake.`;
    abnormalCount++;
    findings.push({
      type: "warning",
      icon: "🩺",
      title: "Hepatic Transaminitis (Liver Enzyme Elevation)",
      desc: `Elevated SGPT (${sgpt} U/L) suggests hepatocellular stress or Non-Alcoholic Fatty Liver (NAFLD).`,
      meta: `SGPT: ${sgpt} U/L | SGOT: ${sgot} U/L`
    });
  } else {
    liverAlertBox.className = "alert-box alert-liver";
    liverAlertTitle.textContent = "Liver Function Normal";
    liverAlertDesc.textContent = "Bilirubin levels, transaminases, and synthetic proteins (Albumin) are within standard physiological limits.";
    normalCount++;
  }

  // ---------------------------------------------------------------------------
  // G. SYSTEMIC SUMMARY & OVERVIEW STRIP
  // ---------------------------------------------------------------------------
  const totalMonitored = 24;
  const healthIndex = Math.max(20, Math.min(99, Math.round(100 - (abnormalCount * 5) - (criticalCount * 22))));

  document.getElementById("statTotalParams").textContent = totalMonitored;
  document.getElementById("statNormalCount").textContent = normalCount;
  document.getElementById("statAlertCount").textContent = abnormalCount;
  document.getElementById("statCriticalCount").textContent = criticalCount;
  document.getElementById("statHealthIndex").textContent = `${healthIndex}%`;

  const statGrade = document.getElementById("statHealthGrade");
  if (healthIndex >= 85) {
    statGrade.className = "health-grade bg-green";
    statGrade.textContent = "EXCELLENT";
  } else if (healthIndex >= 70) {
    statGrade.className = "health-grade bg-cyan";
    statGrade.textContent = "GOOD";
  } else if (healthIndex >= 50) {
    statGrade.className = "health-grade bg-amber";
    statGrade.textContent = "MODERATE RISK";
  } else {
    statGrade.className = "health-grade bg-rose";
    statGrade.textContent = "CRITICAL CARE";
  }

  // Auto-populate CBC clinical notes textarea if empty or generic
  const cbcNotes = document.getElementById("cbcNotes");
  if (cbcNotes) {
    if (platelets < 50000) {
      cbcNotes.value = `Critical Thrombocytopenia noted (${platelets} /µL). Rule out Dengue / viral hemorrhagic etiology. Repeat CBC in 12 hours.`;
    } else if (hb < 9) {
      cbcNotes.value = `Significant anemia (Hb: ${hb} g/dL, MCV: ${mcv.toFixed(1)} fL). Peripheral smear shows microcytes/hypochromia. Ferritin advised.`;
    } else if (wbc > 12000) {
      cbcNotes.value = `Leukocytosis (${wbc} /µL) with neutrophilia (${neutro}%). Clinically correlate with acute septic or localized infection.`;
    } else {
      cbcNotes.value = "CBC parameters demonstrate physiological cellular morphology and adequate platelet distribution.";
    }
  }

  // ---------------------------------------------------------------------------
  // H. PATHO-AI SYNTHESIS & FINDINGS RENDER
  // ---------------------------------------------------------------------------
  renderAiFindings(findings);
  renderRiskMatrix(findings, systolic, hba1c, wbc, egfr);
}

function setBarPercent(barEl, currentVal, minVal, maxVal) {
  if (!barEl) return;
  const pct = Math.min(100, Math.max(5, ((currentVal - minVal) / (maxVal - minVal)) * 100));
  barEl.style.width = `${pct}%`;
}

function renderAiFindings(findings) {
  const container = document.getElementById("findingsContainer");
  const pName = document.getElementById("patientName").value || "Patient";
  document.getElementById("diagPatientName").textContent = pName;

  if (!container) return;

  if (findings.length === 0) {
    container.innerHTML = `
      <div class="finding-card normal">
        <div class="finding-icon">🟢</div>
        <div class="finding-body">
          <h4>All Diagnostic Parameters Within Physiological Limits</h4>
          <p>No pathological anomalies, hemorrhagic tendencies, glycemic dysregulation, or organ stresses detected. Baseline cellular counts, blood pressure, renal clearance, and liver enzymes are optimal.</p>
          <div class="finding-meta">Normal Biomarkers: 24/24 Verified • Clean Pathology Health Profile</div>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = findings.map(f => `
      <div class="finding-card ${f.type}">
        <div class="finding-icon">${f.icon}</div>
        <div class="finding-body">
          <h4>${f.title}</h4>
          <p>${f.desc}</p>
          <div class="finding-meta">${f.meta}</div>
        </div>
      </div>
    `).join("");
  }

  // Action Plan
  const actionList = document.getElementById("actionPlanList");
  if (actionList) {
    const plans = [];
    if (findings.some(f => f.title.includes("Thrombocytopenia"))) {
      plans.push("Hospitalize or closely monitor platelet count and hematocrit every 6-12 hours for Dengue shock / bleeding.");
      plans.push("Avoid NSAIDs (like Ibuprofen/Aspirin) and intramuscular injections.");
    }
    if (findings.some(f => f.title.includes("Anemia"))) {
      plans.push("Evaluate Iron panel (Serum Ferritin, TIBC) or Vitamin B12 levels. Initiate appropriate hematinic therapy.");
      plans.push("Consume iron-rich diet (spinach, beetroot, pomegranate, lentils, lean protein).");
    }
    if (findings.some(f => f.title.includes("Hypertension"))) {
      plans.push("Restrict daily dietary sodium (< 1.5g salt), initiate aerobic exercise, and schedule ECG / echocardiogram.");
    }
    if (findings.some(f => f.title.includes("Diabetes"))) {
      plans.push("Adhere to diabetic medical nutrition therapy (MNT), SMBG self-monitoring, and HbA1c review every 3 months.");
    }
    if (findings.some(f => f.title.includes("Renal"))) {
      plans.push("Strict nephrology consultation, 24-hr urine protein measurement, and avoidance of nephrotoxic medications.");
    }
    if (plans.length === 0) {
      plans.push("Continue routine preventive annual health checkup.");
      plans.push("Maintain well-hydrated state, 7-8 hours sleep, and balanced cardiovascular conditioning.");
    }

    actionList.innerHTML = plans.map(p => `<li>${p}</li>`).join("");
  }
}

function renderRiskMatrix(findings, sys, hba1c, wbc, egfr) {
  // Cardio
  const cardioRisk = sys >= 140 ? 80 : sys >= 130 ? 55 : 20;
  updateRiskBar("barRiskCardio", "riskLabelCardio", cardioRisk);

  // Diabetes
  const diabRisk = hba1c >= 6.5 ? 85 : hba1c >= 5.7 ? 50 : 15;
  updateRiskBar("barRiskDiabetes", "riskLabelDiabetes", diabRisk);

  // Infection
  const infRisk = wbc > 12000 || wbc < 4000 ? 75 : 15;
  updateRiskBar("barRiskInfection", "riskLabelInfection", infRisk);

  // Renal
  const renalRisk = egfr < 60 ? 80 : egfr < 90 ? 45 : 12;
  updateRiskBar("barRiskRenal", "riskLabelRenal", renalRisk);
}

function updateRiskBar(barId, labelId, percent) {
  const bar = document.getElementById(barId);
  const label = document.getElementById(labelId);
  if (!bar || !label) return;

  bar.style.width = `${percent}%`;

  if (percent >= 70) {
    bar.className = "risk-bar-fill bg-rose";
    label.className = "risk-tag high";
    label.textContent = "High Risk";
  } else if (percent >= 40) {
    bar.className = "risk-bar-fill bg-amber";
    label.className = "risk-tag moderate";
    label.textContent = "Moderate";
  } else {
    bar.className = "risk-bar-fill bg-green";
    label.className = "risk-tag low";
    label.textContent = "Low Risk";
  }
}

// =============================================================================
// 8. OFFICIAL REPORT GENERATOR (PRINT / PDF)
// =============================================================================

function bindReportModal() {
  const modal = document.getElementById("reportModal");
  const closeBtn = document.getElementById("closeReportModalBtn");
  const printBtn = document.getElementById("triggerPrintBtn");

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  printBtn.addEventListener("click", () => {
    window.print();
  });

  // Close when clicking backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

function openReportModal() {
  // Update Report Patient Demographics
  const name = document.getElementById("patientName").value || "Patient Name";
  const age = document.getElementById("patientAge").value || "35";
  const gender = document.getElementById("patientGender").value || "Male";
  const bloodGroup = document.getElementById("patientBloodGroup").value || "B+";
  const doctor = document.getElementById("patientDoctor").value || "Self";
  const sampleId = document.getElementById("sampleId").value || "MPL-2026-9042";

  document.getElementById("repPatientName").textContent = name;
  document.getElementById("repAgeGender").textContent = `${age} Yrs / ${gender}`;
  document.getElementById("repBloodGroup").textContent = bloodGroup;
  document.getElementById("repDoctor").textContent = doctor;
  document.getElementById("repSampleId").textContent = sampleId;
  document.getElementById("reportBarcodeText").textContent = sampleId;
  document.getElementById("printReportFilename").textContent = `MEDIPATH_REPORT_${sampleId}.pdf`;

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  document.getElementById("repCollectionDate").textContent = `${dateStr} 08:30 AM`;
  document.getElementById("repReportingDate").textContent = `${dateStr} ${timeStr}`;

  // Build Results Table Rows
  const isMale = gender === "Male";
  const tbody = document.getElementById("reportTableBody");
  tbody.innerHTML = "";

  // Helper to add panel headers
  const addPanelHeader = (title) => {
    const tr = document.createElement("tr");
    tr.className = "panel-row";
    tr.innerHTML = `<td colspan="5">${title}</td>`;
    tbody.appendChild(tr);
  };

  // Helper to add test rows
  const addTestRow = (name, val, unit, refRange, isHigh, isLow, isCritical) => {
    const tr = document.createElement("tr");
    const isAbnormal = isHigh || isLow || isCritical;
    const flagClass = isCritical ? "rep-flag rep-flag-high" : isHigh ? "rep-flag rep-flag-high" : isLow ? "rep-flag rep-flag-low" : "rep-flag rep-flag-normal";
    const flagText = isCritical ? "CRITICAL" : isHigh ? "HIGH" : isLow ? "LOW" : "NORMAL";

    tr.innerHTML = `
      <td><strong>${name}</strong></td>
      <td class="val-bold ${isAbnormal ? 'val-abnormal' : ''}">${val}</td>
      <td>${unit}</td>
      <td>${refRange}</td>
      <td><span class="${flagClass}">${flagText}</span></td>
    `;
    tbody.appendChild(tr);
  };

  // 1. CBC Panel
  addPanelHeader("🩸 COMPLETE BLOOD COUNT (CBC / HEMOGRAM)");
  const plat = parseFloat(document.getElementById("plateletsInput").value);
  addTestRow("Platelet Count (प्लेटलेट्स)", plat.toLocaleString(), "/µL", "150,000 - 450,000", plat > 450000, plat < 150000, plat < 50000);

  const hb = parseFloat(document.getElementById("hbInput").value);
  const hbMin = isMale ? 13.0 : 12.0;
  const hbMax = isMale ? 17.5 : 15.5;
  addTestRow("Hemoglobin (Hb - हीमोग्लोबिन)", hb.toFixed(1), "g/dL", `${hbMin} - ${hbMax}`, hb > hbMax, hb < hbMin, hb < 8.0);

  const rbc = parseFloat(document.getElementById("rbcInput").value);
  const rbcMin = isMale ? 4.5 : 4.0;
  const rbcMax = isMale ? 5.5 : 5.0;
  addTestRow("Total RBC Count (लाल रक्त कण)", rbc.toFixed(2), "10^6/µL", `${rbcMin} - ${rbcMax}`, rbc > rbcMax, rbc < rbcMin, false);

  const pcv = parseFloat(document.getElementById("pcvInput").value);
  const pcvMin = isMale ? 40 : 36;
  const pcvMax = isMale ? 52 : 48;
  addTestRow("Packed Cell Volume (PCV / Hematocrit)", pcv.toFixed(1), "%", `${pcvMin} - ${pcvMax}`, pcv > pcvMax, pcv < pcvMin, false);

  const wbc = parseFloat(document.getElementById("wbcInput").value);
  addTestRow("Total Leukocyte Count (WBC)", wbc.toLocaleString(), "/µL", "4,000 - 11,000", wbc > 11000, wbc < 4000, false);

  const neutro = parseFloat(document.getElementById("dlcNeutro").value);
  addTestRow("• Neutrophils", neutro, "%", "40 - 70", neutro > 70, neutro < 40, false);

  const lympho = parseFloat(document.getElementById("dlcLympho").value);
  addTestRow("• Lymphocytes", lympho, "%", "20 - 40", lympho > 40, lympho < 20, false);

  const mcv = parseFloat(document.getElementById("valMcv").textContent) || 88;
  addTestRow("MCV (Mean Corpuscular Volume)", mcv.toFixed(1), "fL", "80.0 - 100.0", mcv > 100, mcv < 80, false);

  const esr = parseFloat(document.getElementById("esrInput").value);
  const esrMax = isMale ? 15 : 20;
  addTestRow("ESR (Erythrocyte Sedimentation Rate)", esr, "mm/1st hr", `0 - ${esrMax}`, esr > esrMax, false, false);

  // 2. Hemodynamics & BP Panel
  addPanelHeader("🫀 HEMODYNAMICS & BLOOD PRESSURE");
  const sys = parseFloat(document.getElementById("bpSystolic").value);
  const dia = parseFloat(document.getElementById("bpDiastolic").value);
  const pulse = parseFloat(document.getElementById("bpPulse").value);
  const map = parseFloat(document.getElementById("valMap").textContent);

  addTestRow("Systolic Blood Pressure", sys, "mmHg", "< 120 (Normal)", sys >= 130, sys < 90, sys >= 180);
  addTestRow("Diastolic Blood Pressure", dia, "mmHg", "< 80 (Normal)", dia >= 85, dia < 60, dia >= 120);
  addTestRow("Mean Arterial Pressure (MAP)", map.toFixed(1), "mmHg", "70.0 - 100.0", map > 100, map < 70, false);
  addTestRow("Resting Heart Rate (Pulse)", pulse, "BPM", "60 - 100", pulse > 100, pulse < 60, false);

  // 3. Diabetes & Sugar Panel
  addPanelHeader("🧪 DIABETES & GLYCEMIC PROFILE");
  const fbs = parseFloat(document.getElementById("sugarFbs").value);
  const ppbs = parseFloat(document.getElementById("sugarPpbs").value);
  const hba1c = parseFloat(document.getElementById("sugarHba1c").value);
  const eag = parseFloat(document.getElementById("valEag").textContent);

  addTestRow("Fasting Blood Sugar (FBS)", fbs, "mg/dL", "70 - 99", fbs >= 100, fbs < 70, fbs < 60);
  addTestRow("Post-Prandial Glucose (PPBS)", ppbs, "mg/dL", "< 140", ppbs >= 140, false, false);
  addTestRow("HbA1c (Glycosylated Hemoglobin)", hba1c.toFixed(1), "%", "< 5.7 (Normal)", hba1c >= 5.7, false, hba1c >= 8.5);
  addTestRow("Calculated Average Glucose (eAG)", eag.toFixed(0), "mg/dL", "< 117", eag > 117, false, false);

  // 4. Lipid Profile
  addPanelHeader("🧬 LIPID PROFILE & CHOLESTEROL");
  const chol = parseFloat(document.getElementById("lipidChol").value);
  const hdl = parseFloat(document.getElementById("lipidHdl").value);
  const ldl = parseFloat(document.getElementById("lipidLdl").value);
  const trig = parseFloat(document.getElementById("lipidTrig").value);
  const cholHdlRatio = parseFloat(document.getElementById("valCholHdlRatio").textContent);

  addTestRow("Total Cholesterol", chol, "mg/dL", "< 200", chol >= 200, false, false);
  addTestRow("HDL Cholesterol (Good)", hdl, "mg/dL", isMale ? "> 40.0" : "> 50.0", false, hdl < (isMale ? 40 : 50), false);
  addTestRow("LDL Cholesterol (Bad)", ldl, "mg/dL", "< 100.0", ldl >= 100, false, false);
  addTestRow("Serum Triglycerides", trig, "mg/dL", "< 150.0", trig >= 150, false, false);
  addTestRow("Total Chol / HDL Ratio", cholHdlRatio.toFixed(2), "Ratio", "< 4.5", cholHdlRatio > 4.5, false, false);

  // 5. Kidney Function (KFT)
  addPanelHeader("🫘 RENAL FUNCTION TEST (KFT / RFT)");
  const creat = parseFloat(document.getElementById("kftCreatinine").value);
  const urea = parseFloat(document.getElementById("kftUrea").value);
  const uric = parseFloat(document.getElementById("kftUric").value);
  const egfr = parseFloat(document.getElementById("valEgfr").textContent);

  const creatRef = isMale ? "0.7 - 1.3" : "0.6 - 1.1";
  addTestRow("Serum Creatinine", creat.toFixed(2), "mg/dL", creatRef, creat > (isMale ? 1.3 : 1.1), creat < (isMale ? 0.7 : 0.6), creat > 3.0);
  addTestRow("Blood Urea", urea, "mg/dL", "15.0 - 45.0", urea > 45, false, false);
  addTestRow("Serum Uric Acid", uric.toFixed(1), "mg/dL", isMale ? "3.5 - 7.2" : "2.6 - 6.0", uric > (isMale ? 7.2 : 6.0), false, false);
  addTestRow("Estimated GFR (eGFR)", egfr.toFixed(1), "mL/min/1.73m²", "> 90.0", false, egfr < 60, egfr < 30);

  // 6. Liver Function (LFT)
  addPanelHeader("🔬 LIVER FUNCTION TEST (LFT)");
  const biliTotal = parseFloat(document.getElementById("lftBiliTotal").value);
  const sgot = parseFloat(document.getElementById("lftSgot").value);
  const sgpt = parseFloat(document.getElementById("lftSgpt").value);
  const alp = parseFloat(document.getElementById("lftAlp").value);
  const alb = parseFloat(document.getElementById("lftAlbumin").value);

  addTestRow("Total Bilirubin", biliTotal.toFixed(2), "mg/dL", "0.2 - 1.2", biliTotal > 1.2, false, biliTotal > 3.0);
  addTestRow("SGOT / AST", sgot, "U/L", "5 - 40", sgot > 40, false, false);
  addTestRow("SGPT / ALT", sgpt, "U/L", "7 - 56", sgpt > 56, false, false);
  addTestRow("Alkaline Phosphatase (ALP)", alp, "U/L", "44 - 147", alp > 147, false, false);
  addTestRow("Serum Albumin", alb.toFixed(1), "g/dL", "3.5 - 5.0", alb > 5.0, alb < 3.5, false);

  // Build Pathologist Remarks
  const remarksBox = document.getElementById("reportRemarksContent");
  const customNotes = document.getElementById("cbcNotes").value;
  let autoRemarks = "";

  if (plat < 50000) {
    autoRemarks += `<p>• <strong>CRITICAL ALERT:</strong> Significant Thrombocytopenia (Platelets ${plat.toLocaleString()}/µL). Immediate danger of microvascular or mucous bleeding. Dengue NS1 / IgM testing and urgent clinical management advised.</p>`;
  }
  if (hb < hbMin) {
    autoRemarks += `<p>• <strong>HEMATOLOGY:</strong> Low hemoglobin (${hb} g/dL, MCV: ${mcv.toFixed(1)} fL). Microcytic picture suggestive of Iron Deficiency or hemoglobinopathy. Correlate with Serum Ferritin.</p>`;
  }
  if (sys >= 140 || dia >= 90) {
    autoRemarks += `<p>• <strong>CARDIOVASCULAR:</strong> Hemodynamics denote Stage 2 Hypertension (${sys}/${dia} mmHg). DASH diet and medical control advised.</p>`;
  }
  if (hba1c >= 6.5) {
    autoRemarks += `<p>• <strong>METABOLIC:</strong> Glycated hemoglobin (${hba1c}%) is consistent with Type 2 Diabetes Mellitus with an estimated average glucose of ${eag.toFixed(0)} mg/dL.</p>`;
  }
  if (egfr < 60) {
    autoRemarks += `<p>• <strong>NEPHROLOGY:</strong> Estimated GFR reduced to ${egfr.toFixed(1)} mL/min/1.73m². Correlate with renal ultrasound and 24-hr urinary protein excretion.</p>`;
  }
  if (!autoRemarks) {
    autoRemarks = "<p>• Evaluated biochemical, hematological, and hemodynamic profiles are within standard biological reference intervals. No acute pathological anomalies observed.</p>";
  }
  if (customNotes) {
    autoRemarks += `<p>• <strong>Lab Tech Note:</strong> ${customNotes}</p>`;
  }

  remarksBox.innerHTML = autoRemarks;

  // Show modal
  document.getElementById("reportModal").classList.add("active");
}

// =============================================================================
// 9. ENCYCLOPEDIA RENDERER
// =============================================================================

function renderEncyclopedia(filter = "") {
  const grid = document.getElementById("encyclopediaGrid");
  if (!grid) return;

  const filtered = ENCYCLOPEDIA_DATA.filter(item => {
    if (!filter) return true;
    return item.title.toLowerCase().includes(filter) ||
           item.hindi.toLowerCase().includes(filter) ||
           item.desc.toLowerCase().includes(filter);
  });

  grid.innerHTML = filtered.map(item => `
    <div class="encyclopedia-card">
      <div class="encyclopedia-header">
        <span class="encyclopedia-icon">${item.icon}</span>
        <div>
          <h3 class="encyclopedia-title">${item.title}</h3>
          <span class="encyclopedia-hindi">${item.hindi}</span>
        </div>
      </div>
      <p class="encyclopedia-desc">${item.desc}</p>
      <div class="encyclopedia-ranges">
        <strong>Normal Reference Interval:</strong><br>
        ${item.range}
      </div>
      <div class="encyclopedia-causes">
        <p><strong>Causes:</strong> ${item.high} ${item.low}</p>
      </div>
    </div>
  `).join("");
}

// =============================================================================
// 10. LOCAL STORAGE / PATIENT HISTORY RECORDS
// =============================================================================

const STORAGE_KEY = "medipath_saved_records";

function bindStorageActions() {
  const saveBtn = document.getElementById("saveCurrentRecordBtn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => saveCurrentRecord());
  }

  const clearBtn = document.getElementById("clearAllRecordsBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear all saved patient records?")) {
        localStorage.removeItem(STORAGE_KEY);
        renderSavedRecords();
        showToast("Cleared all local test records");
      }
    });
  }
}

function saveCurrentRecord() {
  const record = {
    id: document.getElementById("sampleId").value || `MPL-${Date.now()}`,
    name: document.getElementById("patientName").value || "Anonymous Patient",
    age: document.getElementById("patientAge").value || "30",
    gender: document.getElementById("patientGender").value || "Male",
    date: new Date().toLocaleString(),
    platelets: document.getElementById("plateletsInput").value,
    hb: document.getElementById("hbInput").value,
    bp: `${document.getElementById("bpSystolic").value}/${document.getElementById("bpDiastolic").value}`,
    fbs: document.getElementById("sugarFbs").value,
    healthIndex: document.getElementById("statHealthIndex").textContent
  };

  const records = getSavedRecords();
  records.unshift(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records.slice(0, 50)));

  renderSavedRecords();
  showToast(`Record for ${record.name} saved successfully!`);
}

function getSavedRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function renderSavedRecords() {
  const tbody = document.getElementById("recordsTableBody");
  if (!tbody) return;

  const records = getSavedRecords();
  if (records.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="10" style="text-align: center; color: var(--text-dim); padding: 2rem;">
          No saved records yet. Click "Save Current Patient Record" above to archive test data.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = records.map(r => `
    <tr>
      <td><strong>${r.id}</strong></td>
      <td>${r.name}</td>
      <td>${r.age} Y / ${r.gender}</td>
      <td>${r.date}</td>
      <td><strong>${parseInt(r.platelets).toLocaleString()}</strong></td>
      <td>${r.hb} g/dL</td>
      <td>${r.bp} mmHg</td>
      <td>${r.fbs} mg/dL</td>
      <td><span class="badge badge-accent">${r.healthIndex}</span></td>
      <td>
        <button class="btn btn-tiny" onclick="printSavedRecord('${r.id}')">View</button>
      </td>
    </tr>
  `).join("");
}

window.printSavedRecord = function(recordId) {
  openReportModal();
};

// =============================================================================
// 11. TOAST NOTIFICATIONS
// =============================================================================

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✓</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

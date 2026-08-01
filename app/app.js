/* 期末テスト対策トレーナー
   出題エンジン: Leitner方式の間隔反復 + セッション内の即時再出題。
   進捗は localStorage に保存。ビルド不要・外部依存なし。 */

/* ---------------- 定数 ---------------- */

const STORAGE_KEY = "study-trainer-progress-v3";
const LEGACY_KEY_V2 = "study-trainer-progress-v2";
const LEGACY_KEY_V1 = "history-trainer-progress-v1";

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
/* 箱が上がるほど再出題までの間隔が伸びる。試験直前なので最長でも1週間。 */
const BOX_INTERVALS = [90 * 1000, 10 * MINUTE, HOUR, 6 * HOUR, DAY, 3 * DAY, 7 * DAY];
const MAX_BOX = BOX_INTERVALS.length - 1;
/* 3回連続正解（次の復習が6時間後）まで到達したら「定着」とみなす。 */
const MASTERED_BOX = 3;
const LEECH_LAPSES = 3;
const RETRY_GAP = 3;
const AUTO_ADVANCE_MS = 850;

/* ---------------- 問題プール ---------------- */

const HISTORY_POOL = HISTORY_QUESTIONS.map((question) => ({
  ...question,
  subject: "history",
  type: "term",
  group: String(question.lesson),
  groupTitle: `第${question.lesson}回 ${question.lessonTitle}`,
  prompt: question.prompt.replace(/^第\d+回「[^」]*」[:：]\s*/, "")
}));

const PROGRAMMING_POOL = PROGRAMMING_QUESTIONS.map((question) => ({
  ...question,
  subject: "programming",
  group: question.topic,
  groupTitle: question.topic
}));

const ENGLISH_POOL = ENGLISH_QUESTIONS;

const TYPE_LABELS = {
  term: "用語",
  choice: "4択",
  fill: "穴埋め",
  bug: "バグ発見",
  output: "実行結果",
  order: "並べ替え",
  compose: "和文英訳"
};

const SUBJECTS = {
  history: {
    label: "歴史",
    eyebrow: "History",
    blurb: "第1〜15回を、書き込み・4択・単語・過去問で確実に固める。",
    groupLabel: "出題する回",
    pool: HISTORY_POOL,
    groupOrder: (a, b) => Number(a) - Number(b),
    groupChip: (group) => `第${group}回`,
    modes: [
      { key: "mix", label: "ミックス", desc: "書き込みと4択を交ぜる。思い出す力と見分ける力を同時に鍛える。" },
      { key: "write", label: "書き込み", desc: "自力で思い出す。かな入力・軽い誤字も正解にする。" },
      { key: "choice", label: "4択", desc: "選ぶだけ。移動中や直前の総ざらい向き。" },
      { key: "term-write", label: "単語・人物｜書き込み", desc: "主要用語・概念・人物名だけを、自力で入力して練習。", historyKinds: ["term"], historyRender: "input" },
      { key: "term-choice", label: "単語・人物｜4択", desc: "主要用語・概念・人物名だけを、4択でテンポよく練習。", historyKinds: ["term"], historyRender: "choice" },
      { key: "past-write", label: "過去問だけ｜書き込み", desc: "資料中の★実出題だけを、自力で入力して練習。", actualOnly: true, historyRender: "input" },
      { key: "past-choice", label: "過去問だけ｜4択", desc: "資料中の★実出題だけを、4択で確認。", actualOnly: true, historyRender: "choice" }
    ]
  },
  english: {
    label: "英語",
    eyebrow: "English II",
    blurb: "語彙・表現・文法・中間テストA〜C・読解。リスニング以外をまとめて対策。",
    groupLabel: "出題する範囲",
    pool: ENGLISH_POOL,
    groupOrder: (a, b) => {
      const order = ["VOC7", "VOC8", "GQ8", "GQ9", "GQ10", "GQ11", "EV6", "EV7", "EV8", "EV9", "MIDA", "MIDB", "MIDC", "READ7", "READS", "READ8"];
      return order.indexOf(a) - order.indexOf(b);
    },
    groupChip: (group) => ({
      VOC7: "語彙 Unit 7",
      VOC8: "語彙 Unit 8",
      GQ8: "GQ 8",
      GQ9: "GQ 9",
      GQ10: "GQ 10",
      GQ11: "GQ 11",
      EV6: "Evergreen 態",
      EV7: "Evergreen 不定詞",
      EV8: "Evergreen 動名詞",
      EV9: "Evergreen 209-228",
      MIDA: "中間 A",
      MIDB: "中間 B",
      MIDC: "中間 C",
      READ7: "読解 Unit 7",
      READS: "読解 Standard",
      READ8: "読解 Unit 8"
    }[group] || group),
    modes: [
      { key: "all", label: "総合", desc: "語彙・文法・読解を混ぜる。本番前の総仕上げ。" },
      { key: "vocab", label: "語彙・表現", desc: "Impact Vocabulary List 1 の billion 以降とUnit 7/8語彙。", parts: ["vocab"] },
      { key: "grammar", label: "文法", desc: "GQ8〜11、中間テストA〜C、Evergreen 141〜228。", parts: ["gq", "midterm", "evergreen"] },
      { key: "reading", label: "読解", desc: "Unit 7、Standard記事、Unit 8をT/F・選択・抜き出しで練習。", parts: ["reading"] },
      { key: "compose", label: "英作文・和文英訳", desc: "英文を手で書く問題だけ。", types: ["compose"] }
    ]
  },
  programming: {
    label: "基礎プログラミングII",
    eyebrow: "Programming",
    blurb: "構造体・malloc/free・ファイル操作・GitHub。試験の第1〜4問に対応。",
    groupLabel: "出題する分野",
    pool: PROGRAMMING_POOL,
    groupOrder: null,
    groupChip: (group) => group,
    modes: [
      { key: "mixed", label: "試験形式ミックス", desc: "4択・穴埋め・バグ発見を混ぜて出題。" },
      { key: "fill", label: "穴埋め集中", desc: "malloc、fopen、fgets、sscanf を手で書く。第2問対策。", types: ["fill"] },
      { key: "bug", label: "バグ発見集中", desc: "コードの誤りを探す。第3問は30点で配点最大。", types: ["bug"] },
      { key: "choice", label: "4択集中", desc: "知識の総ざらい。第1問対策。", types: ["choice"] }
    ]
  }
};

const SUBJECT_KEYS = ["history", "english", "programming"];

/* ---------------- DOM ---------------- */

const views = {
  subject: document.querySelector("#subject-view"),
  setup: document.querySelector("#setup-view"),
  quiz: document.querySelector("#quiz-view"),
  result: document.querySelector("#result-view")
};

const els = {
  subjectGrid: document.querySelector("#subject-grid"),
  setupEyebrow: document.querySelector("#setup-eyebrow"),
  setupTitle: document.querySelector("#setup-title"),
  masteryBar: document.querySelector("#mastery-bar"),
  modeGrid: document.querySelector("#mode-grid"),
  groupLabel: document.querySelector("#group-label"),
  groupChips: document.querySelector("#group-chips"),
  filterChips: document.querySelector("#filter-chips"),
  lengthChips: document.querySelector("#length-chips"),
  optAuto: document.querySelector("#opt-auto"),
  optCopy: document.querySelector("#opt-copy"),
  optExplain: document.querySelector("#opt-explain"),
  poolNote: document.querySelector("#pool-note"),
  modeLabel: document.querySelector("#mode-label"),
  scoreLabel: document.querySelector("#score-label"),
  progressFill: document.querySelector("#progress-fill"),
  questionMeta: document.querySelector("#question-meta"),
  questionText: document.querySelector("#question-text"),
  jpLine: document.querySelector("#jp-line"),
  sentenceLine: document.querySelector("#sentence-line"),
  codeBlock: document.querySelector("#code-block"),
  writeForm: document.querySelector("#write-form"),
  writeAnswer: document.querySelector("#write-answer"),
  choiceArea: document.querySelector("#choice-area"),
  orderArea: document.querySelector("#order-area"),
  orderSlot: document.querySelector("#order-slot"),
  orderBank: document.querySelector("#order-bank"),
  result: document.querySelector("#result"),
  explanation: document.querySelector("#explanation"),
  copyDrill: document.querySelector("#copy-drill"),
  copyTarget: document.querySelector("#copy-target"),
  copyInput: document.querySelector("#copy-input"),
  copyStatus: document.querySelector("#copy-status"),
  showAnswer: document.querySelector("#show-answer"),
  nextQuestion: document.querySelector("#next-question"),
  reportScore: document.querySelector("#report-score"),
  reportMetrics: document.querySelector("#report-metrics"),
  reportMissed: document.querySelector("#report-missed")
};

/* ---------------- 状態 ---------------- */

let state = loadState();
let currentSubject = "history";
let session = null;
let current = null;
let answered = false;
let choiceButtons = [];
let orderTokens = [];
let orderPlaced = [];
let autoAdvanceTimer = null;

/* ---------------- 保存 ---------------- */

function emptySubjectState() {
  return { stats: {}, totalCorrect: 0, totalSeen: 0, releaseTracks: {} };
}

function defaultSettings() {
  return {
    autoAdvance: true,
    copyDrill: true,
    explainOnCorrect: false,
    setup: {}
  };
}

function defaultSetup(subjectKey) {
  const subject = SUBJECTS[subjectKey];
  return {
    mode: subject.modes[0].key,
    groups: groupsOf(subjectKey),
    filter: "all",
    length: 20
  };
}

function freshState() {
  const clean = { version: 3, settings: defaultSettings(), subjects: {} };
  SUBJECT_KEYS.forEach((key) => {
    clean.subjects[key] = emptySubjectState();
  });
  return clean;
}

function loadState() {
  const clean = freshState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      clean.settings = { ...clean.settings, ...(parsed.settings || {}) };
      clean.settings.setup = { ...(parsed.settings && parsed.settings.setup) };
      SUBJECT_KEYS.forEach((key) => {
        const saved = parsed.subjects && parsed.subjects[key];
        if (saved) clean.subjects[key] = { ...emptySubjectState(), ...saved };
      });
      return clean;
    }
    migrateLegacy(clean);
  } catch {
    return freshState();
  }
  return clean;
}

/* v2 は {seen, correct} しか持たないので、箱と期限を補って引き継ぐ。 */
function migrateLegacy(target) {
  const now = Date.now();
  const lift = (stats) => {
    const result = {};
    Object.entries(stats || {}).forEach(([id, value]) => {
      const seen = Number(value.seen) || 0;
      const correct = Number(value.correct) || 0;
      result[id] = { seen, correct, streak: 0, box: 0, due: now, lapses: Math.max(0, seen - correct) };
    });
    return result;
  };

  const rawV2 = localStorage.getItem(LEGACY_KEY_V2);
  if (rawV2) {
    const parsed = JSON.parse(rawV2);
    ["history", "programming"].forEach((key) => {
      const saved = parsed.subjects && parsed.subjects[key];
      if (!saved) return;
      target.subjects[key] = {
        stats: lift(saved.stats),
        totalCorrect: Number(saved.totalCorrect) || 0,
        totalSeen: Number(saved.totalSeen) || 0
      };
    });
    return;
  }

  const rawV1 = localStorage.getItem(LEGACY_KEY_V1);
  if (rawV1) {
    const saved = JSON.parse(rawV1);
    target.subjects.history = {
      stats: lift(saved.stats),
      totalCorrect: Number(saved.totalCorrect) || 0,
      totalSeen: Number(saved.totalSeen) || 0
    };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* 保存できなくても学習は続けられるようにする */
  }
}

function subjectState(subjectKey = currentSubject) {
  if (!state.subjects[subjectKey]) state.subjects[subjectKey] = emptySubjectState();
  return state.subjects[subjectKey];
}

function setupOf(subjectKey) {
  if (!state.settings.setup) state.settings.setup = {};
  const saved = state.settings.setup[subjectKey];
  const base = defaultSetup(subjectKey);
  if (!saved) return base;
  const valid = groupsOf(subjectKey);
  const legacyHistoryMode = subjectKey === "history"
    ? { term: "term-write", past: "past-choice" }[saved.mode]
    : undefined;
  const requestedMode = legacyHistoryMode || saved.mode;
  return {
    mode: SUBJECTS[subjectKey].modes.some((m) => m.key === requestedMode) ? requestedMode : base.mode,
    groups: Array.isArray(saved.groups) ? saved.groups.filter((g) => valid.includes(g)) : base.groups,
    filter: saved.filter || base.filter,
    length: typeof saved.length === "number" ? saved.length : base.length
  };
}

function saveSetup(subjectKey, setup) {
  if (!state.settings.setup) state.settings.setup = {};
  state.settings.setup[subjectKey] = setup;
  saveState();
}

/* ---------------- 統計 ---------------- */

function emptyStats() {
  return { seen: 0, correct: 0, streak: 0, box: 0, due: 0, lapses: 0 };
}

function statsFor(question) {
  const store = subjectState(question.subject).stats;
  const saved = store[question.id];
  return saved ? { ...emptyStats(), ...saved } : emptyStats();
}

function isLeech(question) {
  const stats = statsFor(question);
  return stats.lapses >= LEECH_LAPSES && stats.box < MASTERED_BOX;
}

function masteryOf(subjectKey) {
  const pool = SUBJECTS[subjectKey].pool;
  let fresh = 0;
  let learning = 0;
  let mastered = 0;
  let weak = 0;
  pool.forEach((question) => {
    const stats = statsFor(question);
    if (!stats.seen) fresh += 1;
    else if (stats.box >= MASTERED_BOX) mastered += 1;
    else learning += 1;
    if (stats.lapses >= LEECH_LAPSES && stats.box < MASTERED_BOX) weak += 1;
  });
  return { total: pool.length, fresh, learning, mastered, weak };
}

/* ---------------- 出題プールの絞り込み ---------------- */

function groupsOf(subjectKey) {
  const subject = SUBJECTS[subjectKey];
  const seen = [];
  subject.pool.forEach((question) => {
    if (!seen.includes(question.group)) seen.push(question.group);
  });
  return subject.groupOrder ? seen.sort(subject.groupOrder) : seen;
}

function modeOf(subjectKey, modeKey) {
  return SUBJECTS[subjectKey].modes.find((mode) => mode.key === modeKey) || SUBJECTS[subjectKey].modes[0];
}

function poolFor(subjectKey, setup) {
  const mode = modeOf(subjectKey, setup.mode);
  const now = Date.now();
  return SUBJECTS[subjectKey].pool.filter((question) => {
    if (mode.parts && !mode.parts.includes(question.part)) return false;
    if (mode.types && !mode.types.includes(question.type)) return false;
    if (mode.historyKinds && !mode.historyKinds.includes(question.historyKind)) return false;
    if (mode.actualOnly && !question.actual) return false;
    if (!setup.groups.includes(question.group)) return false;
    const stats = statsFor(question);
    if (setup.filter === "new") return stats.seen === 0;
    if (setup.filter === "weak") return stats.lapses > 0 && stats.box < MASTERED_BOX;
    if (setup.filter === "due") return stats.seen > 0 && stats.due <= now;
    return true;
  });
}

/* 正解5回・正答率80%に届くまでは、早く出題頻度を落とさない。
   条件を満たした問題も基準の約10%で残し、忘却チェックを続ける。 */
function questionWeight(question, now) {
  const stats = statsFor(question);
  const learningWeight = 12;
  const masteredWeight = learningWeight * 0.1;
  if (!stats.seen) return learningWeight;
  const accuracy = stats.correct / stats.seen;
  const readyToReduce = stats.correct >= 5 && accuracy >= 0.8;
  if (readyToReduce) return masteredWeight;

  /* 苦手・期限超過は少し増やすが、少数回の正解だけでは下げない。 */
  const overdueHours = Math.max(0, (now - stats.due) / HOUR);
  const overdueBoost = stats.due <= now ? 1 + Math.min(0.35, overdueHours * 0.03) : 1;
  const errorBoost = 1 + (1 - accuracy) * 0.8;
  const leechBoost = stats.lapses >= LEECH_LAPSES ? 1.25 : 1;
  return learningWeight * overdueBoost * errorBoost * leechBoost;
}

/* 歴史は第1回から一問ずつ新規問題を開放する。
   通常問題の出現率の合計を100%から引いた残りを「現在の新規1問」に割り当て、
   20%を超えたら通常問題へ移して次の問題を新規にする。新規の間は記録した率を
   下げないので、一度出始めた問題が正解だけで急に消えることはない。 */
function historyTrackKey(setup) {
  const mode = modeOf("history", setup.mode);
  const kind = mode.actualOnly ? "past" : mode.historyKinds ? mode.historyKinds.join("-") : "all";
  return `${kind}:${setup.groups.slice().sort((a, b) => Number(a) - Number(b)).join(",")}`;
}

function historyProgressiveEntries(pool, setup, now) {
  const ordered = pool.slice().sort((a, b) => a.lesson - b.lesson || a.id.localeCompare(b.id));
  if (!ordered.length) return [];

  const store = subjectState("history");
  if (!store.releaseTracks) store.releaseTracks = {};
  const key = historyTrackKey(setup);
  const track = store.releaseTracks[key] || { regularIds: [], currentId: null, currentRate: 0 };
  store.releaseTracks[key] = track;

  const availableIds = new Set(ordered.map((question) => question.id));
  const regularIds = new Set(track.regularIds.filter((id) => availableIds.has(id)));
  let regular = ordered.filter((question) => regularIds.has(question.id));
  let currentNew = ordered.find((question) => !regularIds.has(question.id));
  let regularTotal = regular.reduce((sum, question) => sum + questionWeight(question, now), 0);
  let rawNewRate = Math.max(0, 100 - regularTotal);
  let changed = false;

  /* 余りが20%を超えたら、その問題を通常問題にして次へ進む。 */
  while (currentNew && rawNewRate > 20) {
    regularIds.add(currentNew.id);
    regular = ordered.filter((question) => regularIds.has(question.id));
    regularTotal = regular.reduce((sum, question) => sum + questionWeight(question, now), 0);
    currentNew = ordered.find((question) => !regularIds.has(question.id));
    rawNewRate = Math.max(0, 100 - regularTotal);
    changed = true;
  }

  if (currentNew) {
    if (track.currentId !== currentNew.id) {
      track.currentId = currentNew.id;
      track.currentRate = rawNewRate;
      changed = true;
    } else if (rawNewRate > track.currentRate) {
      track.currentRate = rawNewRate;
      changed = true;
    }
  } else if (track.currentId || track.currentRate) {
    track.currentId = null;
    track.currentRate = 0;
    changed = true;
  }

  track.regularIds = ordered.filter((question) => regularIds.has(question.id)).map((question) => question.id);
  if (changed) saveState();

  if (!currentNew) return regular.map((question) => ({ question, weight: questionWeight(question, now) }));

  /* 新規問題の率を固定し、残りの率を通常問題へ比例配分する。 */
  const newRate = Math.min(100, Math.max(0, track.currentRate));
  const normalScale = regularTotal > 0 ? Math.max(0, 100 - newRate) / regularTotal : 0;
  return [
    ...regular.map((question) => ({ question, weight: questionWeight(question, now) * normalScale })),
    { question: currentNew, weight: newRate }
  ].filter((item) => item.weight > 0);
}

function drawQuestions(pool, count, subjectKey = currentSubject, setup = setupOf(subjectKey)) {
  const now = Date.now();
  const remaining = subjectKey === "history"
    ? historyProgressiveEntries(pool, setup, now)
    : pool.map((question) => ({ question, weight: questionWeight(question, now) }));
  const picked = [];
  const limit = Math.min(count, remaining.length);
  for (let n = 0; n < limit; n += 1) {
    const total = remaining.reduce((sum, item) => sum + item.weight, 0);
    let marker = Math.random() * total;
    let index = remaining.length - 1;
    for (let i = 0; i < remaining.length; i += 1) {
      marker -= remaining[i].weight;
      if (marker <= 0) {
        index = i;
        break;
      }
    }
    picked.push(remaining[index].question);
    remaining.splice(index, 1);
  }
  return picked;
}

/* ---------------- 画面遷移 ---------------- */

function showView(name) {
  Object.values(views).forEach((view) => view.classList.remove("active"));
  views[name].classList.add("active");
  window.scrollTo(0, 0);
}

function renderSubjectGrid() {
  els.subjectGrid.innerHTML = "";
  SUBJECT_KEYS.forEach((key) => {
    const subject = SUBJECTS[key];
    const mastery = masteryOf(key);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "subject-card";
    button.innerHTML = `
      <span>${subject.label}</span>
      <small>${subject.blurb}</small>
      <em>全${mastery.total}問 ・ 定着 ${mastery.mastered} ・ 未学習 ${mastery.fresh}</em>`;
    button.addEventListener("click", () => openSetup(key));
    els.subjectGrid.appendChild(button);
  });
}

function openSetup(subjectKey) {
  currentSubject = subjectKey;
  renderSetup();
  showView("setup");
}

function renderSetup() {
  const subject = SUBJECTS[currentSubject];
  const setup = setupOf(currentSubject);
  els.setupEyebrow.textContent = subject.eyebrow;
  els.setupTitle.textContent = subject.label;
  els.groupLabel.textContent = subject.groupLabel;

  const mastery = masteryOf(currentSubject);
  const pct = (value) => (mastery.total ? (value / mastery.total) * 100 : 0);
  els.masteryBar.innerHTML = `
    <div class="mastery-track">
      <span class="seg mastered" style="width:${pct(mastery.mastered)}%"></span>
      <span class="seg learning" style="width:${pct(mastery.learning)}%"></span>
      <span class="seg fresh" style="width:${pct(mastery.fresh)}%"></span>
    </div>
    <p class="mastery-legend">
      <span><i class="dot mastered"></i>定着 ${mastery.mastered}</span>
      <span><i class="dot learning"></i>練習中 ${mastery.learning}</span>
      <span><i class="dot fresh"></i>未学習 ${mastery.fresh}</span>
      <span><i class="dot weak"></i>苦手 ${mastery.weak}</span>
    </p>`;

  els.modeGrid.innerHTML = "";
  subject.modes.forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `mode-card${mode.key === setup.mode ? " active" : ""}`;
    button.innerHTML = `<span>${mode.label}</span><small>${mode.desc}</small>`;
    button.addEventListener("click", () => {
      setup.mode = mode.key;
      saveSetup(currentSubject, setup);
      renderSetup();
    });
    els.modeGrid.appendChild(button);
  });

  els.groupChips.innerHTML = "";
  groupsOf(currentSubject).forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${setup.groups.includes(group) ? " active" : ""}`;
    button.textContent = subject.groupChip(group);
    button.addEventListener("click", () => {
      const next = setup.groups.includes(group)
        ? setup.groups.filter((item) => item !== group)
        : setup.groups.concat(group);
      setup.groups = next;
      saveSetup(currentSubject, setup);
      renderSetup();
    });
    els.groupChips.appendChild(button);
  });

  els.filterChips.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === setup.filter);
  });
  els.lengthChips.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("active", Number(chip.dataset.length) === setup.length);
  });

  els.optAuto.checked = state.settings.autoAdvance;
  els.optCopy.checked = state.settings.copyDrill;
  els.optExplain.checked = state.settings.explainOnCorrect;

  const pool = poolFor(currentSubject, setup);
  els.poolNote.textContent = pool.length
    ? `この設定で出題できるのは ${pool.length}問です。`
    : "この設定では出題できる問題がありません。範囲か出題対象を広げてください。";
  document.querySelector("#start-session").disabled = pool.length === 0;
}

/* ---------------- セッション ---------------- */

function startSession(options = {}) {
  const setup = setupOf(currentSubject);
  const pool = options.queue ? null : poolFor(currentSubject, setup);
  if (!options.queue && pool.length === 0) return;

  const length = setup.length > 0 ? setup.length : 10;
  const queue = options.queue ? options.queue.slice() : drawQuestions(pool, length, currentSubject, setup);
  if (!queue.length) return;

  session = {
    subject: currentSubject,
    mode: setup.mode,
    setup,
    endless: !options.queue && setup.length === 0,
    queue,
    index: 0,
    answeredCount: 0,
    correctCount: 0,
    missed: [],
    startedAt: Date.now()
  };
  showView("quiz");
  renderQuestion();
}

function refillIfNeeded() {
  if (!session.endless) return;
  if (session.queue.length - session.index > 2) return;
  const pool = poolFor(session.subject, session.setup).filter(
    (question) => !session.queue.slice(session.index).some((queued) => queued.id === question.id)
  );
  if (pool.length) session.queue = session.queue.concat(drawQuestions(pool, Math.min(10, pool.length), session.subject, session.setup));
}

function finishSession() {
  renderReport();
  showView("result");
}

/* ---------------- 出題描画 ---------------- */

function renderKindOf(question) {
  if (question.subject === "history") {
    const mode = modeOf("history", session.mode);
    if (mode.historyRender) return mode.historyRender;
    if (session.mode === "write") return "input";
    if (session.mode === "choice") return "choice";
    return Math.random() < 0.5 ? "input" : "choice";
  }
  if (question.type === "order") return "order";
  if (question.type === "fill" || question.type === "compose") return "input";
  return "choice";
}

function renderQuestion() {
  clearTimeout(autoAdvanceTimer);
  refillIfNeeded();

  if (session.index >= session.queue.length) {
    finishSession();
    return;
  }

  current = session.queue[session.index];
  current.renderKind = renderKindOf(current);
  answered = false;

  els.result.textContent = "";
  els.result.className = "result";
  els.explanation.textContent = "";
  els.explanation.classList.remove("visible");
  els.copyDrill.classList.remove("visible");
  els.copyInput.value = "";
  els.copyStatus.textContent = "";
  els.writeAnswer.value = "";
  els.showAnswer.disabled = false;

  els.questionMeta.textContent = `${current.groupTitle} ・ ${TYPE_LABELS[current.type] || "問題"}`;
  els.questionText.textContent = current.prompt;

  setBlock(els.jpLine, current.jp || "");
  setBlock(els.codeBlock, current.code || "");
  renderSentence(current, false);

  els.writeForm.style.display = current.renderKind === "input" ? "grid" : "none";
  els.choiceArea.style.display = current.renderKind === "choice" ? "grid" : "none";
  els.orderArea.style.display = current.renderKind === "order" ? "block" : "none";

  if (current.renderKind === "choice") renderChoices();
  if (current.renderKind === "order") renderOrder();
  if (current.renderKind === "input") {
    els.writeAnswer.rows = current.type === "compose" ? 2 : 1;
    els.writeAnswer.placeholder = current.type === "compose" ? "英文を入力" : "答えを入力";
    els.writeAnswer.focus();
  }

  renderHud();
}

function setBlock(element, text) {
  element.textContent = text;
  element.style.display = text ? "block" : "none";
}

function renderSentence(question, reveal) {
  if (!question.sentence) {
    els.sentenceLine.style.display = "none";
    return;
  }
  els.sentenceLine.style.display = "block";
  els.sentenceLine.innerHTML = "";
  const parts = question.sentence.split("___");
  parts.forEach((part, index) => {
    els.sentenceLine.appendChild(document.createTextNode(part));
    if (index < parts.length - 1) {
      const blank = document.createElement("span");
      blank.className = reveal ? "blank filled" : "blank";
      blank.textContent = reveal ? question.answer : "？";
      els.sentenceLine.appendChild(blank);
    }
  });
}

function renderHud() {
  const modeLabel = modeOf(session.subject, session.mode).label;
  els.modeLabel.textContent = `${SUBJECTS[session.subject].label} ・ ${modeLabel}`;
  const position = Math.min(session.index + 1, session.queue.length);
  els.scoreLabel.textContent = session.endless
    ? `${position}問目 ・ 正解 ${session.correctCount}`
    : `${position} / ${session.queue.length}問 ・ 正解 ${session.correctCount}`;
  const ratio = session.queue.length ? session.index / session.queue.length : 0;
  els.progressFill.style.width = `${Math.min(100, ratio * 100)}%`;
}

function renderChoices() {
  els.choiceArea.innerHTML = "";
  choiceButtons = [];
  const choices = current.subject === "history" ? historyChoices(current) : shuffle(current.choices.slice());
  choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.innerHTML = `<i>${index + 1}</i><span></span>`;
    button.querySelector("span").textContent = choice;
    button.addEventListener("click", () => submitChoice(choice, button));
    choiceButtons.push({ button, choice });
    els.choiceArea.appendChild(button);
  });
}

function renderOrder() {
  orderTokens = shuffle(current.tokens.map((text, index) => ({ id: index, text })));
  orderPlaced = [];
  paintOrder();
}

function paintOrder() {
  els.orderSlot.innerHTML = "";
  const lead = current.lead ? `${current.lead} ` : "";
  const tail = current.tail ? ` ${current.tail}` : "";
  if (lead) {
    const fixed = document.createElement("span");
    fixed.className = "token fixed";
    fixed.textContent = current.lead;
    els.orderSlot.appendChild(fixed);
  }
  orderPlaced.forEach((token) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "token";
    chip.textContent = token.text;
    chip.addEventListener("click", () => {
      if (answered) return;
      orderPlaced = orderPlaced.filter((item) => item.id !== token.id);
      orderTokens.push(token);
      paintOrder();
    });
    els.orderSlot.appendChild(chip);
  });
  if (current.tail) {
    const fixed = document.createElement("span");
    fixed.className = "token fixed";
    fixed.textContent = current.tail;
    els.orderSlot.appendChild(fixed);
  }
  if (!orderPlaced.length && !lead && !tail) els.orderSlot.textContent = "下の語句をタップして並べる";

  els.orderBank.innerHTML = "";
  orderTokens.forEach((token, index) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "token bank";
    chip.innerHTML = `<i>${index + 1}</i>`;
    chip.appendChild(document.createTextNode(token.text));
    chip.addEventListener("click", () => {
      if (answered) return;
      orderTokens = orderTokens.filter((item) => item.id !== token.id);
      orderPlaced.push(token);
      paintOrder();
    });
    els.orderBank.appendChild(chip);
  });
}

function assembledOrder() {
  return [current.lead, ...orderPlaced.map((token) => token.text), current.tail]
    .filter(Boolean)
    .join(" ");
}

/* 誤答は実在する用語だけを使う。崩した文字列を混ぜると、内容ではなく
   「形が変な選択肢を外す」ゲームになって暗記の役に立たない。

   最優先は questions.js に手で用意した distractors。これは問題文の5W1H
   （誰か／何年か／どこか／なぜか／三つ答えよ…）に答えの型をそろえてある。
   自動生成だと「誰か？」に年号が混ざり、型で消せる問題になってしまう。
   distractors が足りないときだけ、同じ回 → 近い回の順に実答案で補う。 */
function historyChoices(question) {
  const authored = shuffle((question.distractors || []).slice());
  const sameLesson = shuffle(
    HISTORY_POOL.filter((item) => item.lesson === question.lesson && item.id !== question.id)
  );
  const nearby = HISTORY_POOL.filter((item) => item.lesson !== question.lesson).sort(
    (a, b) => Math.abs(a.lesson - question.lesson) - Math.abs(b.lesson - question.lesson)
  );
  const wrong = uniqueChoices([
    question.answer,
    ...authored,
    ...sameLesson.map((item) => item.answer),
    ...nearby.map((item) => item.answer)
  ]).slice(1);
  return shuffle([question.answer, ...wrong.slice(0, 3)]);
}

function uniqueChoices(choices) {
  const seen = new Set();
  return choices.filter((choice) => {
    const key = normalizeJa(choice);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/* ---------------- 判定 ---------------- */

function normalizeJa(value) {
  return String(value)
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/[ァ-ン]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60))
    .replace(/[ヴゔ]/g, "う")
    .replace(/[・\s、。，．,.!！?？「」『』（）()％%]/g, "");
}

function normalizeEn(value) {
  return String(value)
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/n't\b/g, " not")
    .replace(/'ll\b/g, " will")
    .replace(/'ve\b/g, " have")
    .replace(/'re\b/g, " are")
    .replace(/\bi'm\b/g, "i am")
    .replace(/'/g, "")
    .replace(/[.,!?;:"]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeCode(value) {
  return String(value).normalize("NFKC").toLowerCase().replace(/\s+/g, "");
}

function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j += 1) dp[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[a.length][b.length];
}

function aliasesOf(question) {
  const list = question.aliases && question.aliases.length ? question.aliases : [question.answer];
  return list.filter(Boolean);
}

function isCorrect(input, question) {
  const aliases = aliasesOf(question);

  if (question.subject === "programming") {
    const value = normalizeCode(input);
    return Boolean(value) && aliases.some((alias) => normalizeCode(alias) === value);
  }

  if (question.subject === "english") {
    const value = normalizeEn(input);
    if (!value) return false;
    return aliases.some((alias) => {
      const target = normalizeEn(alias);
      if (value === target) return true;
      const tolerance = target.length >= 25 ? 2 : target.length >= 12 ? 1 : 0;
      return tolerance > 0 && levenshtein(value, target) <= tolerance;
    });
  }

  const value = normalizeJa(input);
  if (!value) return false;
  return aliases.some((alias) => {
    const target = normalizeJa(alias);
    if (!target) return false;
    if (value === target) return true;
    /* 部分一致は長さが近いときだけ許す。「技」で「技術」を正解にしない。 */
    if (value.includes(target) || target.includes(value)) {
      const ratio = Math.min(value.length, target.length) / Math.max(value.length, target.length);
      if (ratio >= 0.7) return true;
    }
    return levenshtein(value, target) <= Math.floor(target.length * 0.2);
  });
}

/* ---------------- 回答処理 ---------------- */

function submitChoice(choice, button) {
  if (answered || !current) return;
  const ok = choice === current.answer;
  button.classList.add(ok ? "correct" : "wrong");
  if (!ok) {
    const right = choiceButtons.find((item) => item.choice === current.answer);
    if (right) right.button.classList.add("correct");
  }
  choiceButtons.forEach((item) => {
    item.button.disabled = true;
  });
  finishAnswer(ok);
}

function submitWritten() {
  if (answered || !current) return;
  const ok = isCorrect(els.writeAnswer.value, current);
  finishAnswer(ok);
}

function submitOrder() {
  if (answered || !current) return;
  if (!orderPlaced.length) return;
  const ok = normalizeEn(assembledOrder()) === normalizeEn(current.answer);
  els.orderSlot.classList.add(ok ? "correct" : "wrong");
  finishAnswer(ok);
}

function finishAnswer(ok, revealed = false) {
  answered = true;
  els.showAnswer.disabled = true;
  recordAnswer(current, ok);
  session.answeredCount += 1;
  if (ok) session.correctCount += 1;

  if (!ok) {
    if (!session.missed.some((item) => item.id === current.id)) session.missed.push(current);
    requeueCurrent();
  }

  renderSentence(current, true);
  showResult(ok, revealed);
  renderHud();

  if (ok && state.settings.autoAdvance) {
    autoAdvanceTimer = setTimeout(advance, AUTO_ADVANCE_MS);
  }
}

/* 間違えた問題は数問あとに必ずもう一度出す。翌日に回さないのが定着の要。 */
function requeueCurrent() {
  const insertAt = Math.min(session.index + 1 + RETRY_GAP, session.queue.length);
  session.queue.splice(insertAt, 0, current);
}

function recordAnswer(question, ok) {
  const store = subjectState(question.subject);
  const stats = statsFor(question);
  stats.seen += 1;
  store.totalSeen += 1;
  if (ok) {
    stats.correct += 1;
    stats.streak += 1;
    stats.box = Math.min(MAX_BOX, stats.box + 1);
    store.totalCorrect += 1;
  } else {
    stats.streak = 0;
    stats.lapses += 1;
    stats.box = 0;
  }
  stats.due = Date.now() + BOX_INTERVALS[stats.box];
  store.stats[question.id] = stats;
  saveState();
}

function showResult(ok, revealed) {
  const stats = statsFor(current);
  const rate = Math.round((stats.correct / Math.max(1, stats.seen)) * 100);
  els.result.className = `result ${ok ? "good" : "bad"}`;

  if (ok) {
    els.result.textContent = `正解。この問題の正答率 ${rate}%（${stats.correct}/${stats.seen}）`;
  } else {
    const answerText = current.full || current.answer;
    els.result.textContent = `${revealed ? "答えはこちら。" : "不正解。"} 正答: ${answerText} ／ 正答率 ${rate}%（${stats.correct}/${stats.seen}）`;
  }

  if (current.explanation && (!ok || state.settings.explainOnCorrect)) {
    els.explanation.textContent = current.explanation;
    els.explanation.classList.add("visible");
  }

  const canCopy = current.renderKind === "input" || current.renderKind === "order";
  if (!ok && canCopy && state.settings.copyDrill) {
    els.copyTarget.textContent = current.full || current.answer;
    els.copyDrill.classList.add("visible");
    els.copyInput.focus();
  } else if (!state.settings.autoAdvance || !ok) {
    els.nextQuestion.focus();
  }
}

function advance() {
  clearTimeout(autoAdvanceTimer);
  els.orderSlot.classList.remove("correct", "wrong");
  session.index += 1;
  renderQuestion();
}

/* ---------------- 結果画面 ---------------- */

function renderReport() {
  const total = session.answeredCount;
  const rate = total ? Math.round((session.correctCount / total) * 100) : 0;
  const minutes = Math.max(1, Math.round((Date.now() - session.startedAt) / MINUTE));
  els.reportScore.textContent = `${session.correctCount} / ${total}問 正解（${rate}%）`;

  const mastery = masteryOf(session.subject);
  els.reportMetrics.innerHTML = `
    <div><p class="metric-label">学習時間</p><p class="metric">${minutes}分</p></div>
    <div><p class="metric-label">定着</p><p class="metric">${mastery.mastered}</p></div>
    <div><p class="metric-label">練習中</p><p class="metric">${mastery.learning}</p></div>
    <div><p class="metric-label">未学習</p><p class="metric">${mastery.fresh}</p></div>`;

  if (!session.missed.length) {
    els.reportMissed.innerHTML = `<p class="all-clear">全問正解。範囲を広げるか、出題対象を「すべて」にして総ざらいしましょう。</p>`;
  } else {
    const items = session.missed
      .map((question) => `
        <li>
          <p class="missed-meta">${escapeHtml(question.groupTitle)}</p>
          <p class="missed-prompt">${escapeHtml(question.jp || question.prompt)}</p>
          <p class="missed-answer">${escapeHtml(question.full || question.answer)}</p>
          ${question.explanation ? `<p class="missed-note">${escapeHtml(question.explanation)}</p>` : ""}
        </li>`)
      .join("");
    els.reportMissed.innerHTML = `<p class="block-label">間違えた ${session.missed.length}問</p><ul class="missed-list">${items}</ul>`;
  }
  document.querySelector("#retry-missed").disabled = session.missed.length === 0;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

/* ---------------- イベント ---------------- */

document.querySelectorAll("[data-goto]").forEach((button) => {
  button.addEventListener("click", () => {
    clearTimeout(autoAdvanceTimer);
    const target = button.dataset.goto;
    if (target === "setup") renderSetup();
    if (target === "subject") renderSubjectGrid();
    showView(target);
  });
});

document.querySelector("#group-all").addEventListener("click", () => {
  const setup = setupOf(currentSubject);
  setup.groups = groupsOf(currentSubject);
  saveSetup(currentSubject, setup);
  renderSetup();
});

document.querySelector("#group-none").addEventListener("click", () => {
  const setup = setupOf(currentSubject);
  setup.groups = [];
  saveSetup(currentSubject, setup);
  renderSetup();
});

els.filterChips.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  const setup = setupOf(currentSubject);
  setup.filter = chip.dataset.filter;
  saveSetup(currentSubject, setup);
  renderSetup();
});

els.lengthChips.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  const setup = setupOf(currentSubject);
  setup.length = Number(chip.dataset.length);
  saveSetup(currentSubject, setup);
  renderSetup();
});

els.optAuto.addEventListener("change", () => {
  state.settings.autoAdvance = els.optAuto.checked;
  saveState();
});
els.optCopy.addEventListener("change", () => {
  state.settings.copyDrill = els.optCopy.checked;
  saveState();
});
els.optExplain.addEventListener("change", () => {
  state.settings.explainOnCorrect = els.optExplain.checked;
  saveState();
});

document.querySelector("#start-session").addEventListener("click", () => startSession());

document.querySelector("#reset-progress").addEventListener("click", () => {
  if (!confirm(`${SUBJECTS[currentSubject].label}の学習進捗をリセットします。よろしいですか？`)) return;
  state.subjects[currentSubject] = emptySubjectState();
  saveState();
  renderSetup();
});

els.writeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (answered) advance();
  else submitWritten();
});

els.writeAnswer.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.shiftKey || event.isComposing) return;
  event.preventDefault();
  if (answered) advance();
  else submitWritten();
});

document.querySelector("#order-submit").addEventListener("click", () => {
  if (answered) advance();
  else submitOrder();
});

document.querySelector("#order-clear").addEventListener("click", () => {
  if (answered) return;
  orderTokens = orderTokens.concat(orderPlaced);
  orderPlaced = [];
  paintOrder();
});

els.copyInput.addEventListener("input", () => {
  const target = els.copyTarget.textContent;
  const ok = current.subject === "english"
    ? normalizeEn(els.copyInput.value) === normalizeEn(target)
    : normalizeJa(els.copyInput.value) === normalizeJa(target);
  els.copyStatus.textContent = ok ? "書き写し完了。Enter で次へ。" : "";
  els.copyStatus.className = `copy-status${ok ? " good" : ""}`;
});

els.copyInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.isComposing) {
    event.preventDefault();
    advance();
  }
});

els.showAnswer.addEventListener("click", () => {
  if (!current || answered) return;
  finishAnswer(false, true);
});

els.nextQuestion.addEventListener("click", advance);

document.querySelector("#retry-missed").addEventListener("click", () => {
  const queue = session.missed.slice();
  currentSubject = session.subject;
  startSession({ queue });
});

document.querySelector("#retry-same").addEventListener("click", () => {
  currentSubject = session.subject;
  startSession();
});

document.addEventListener("keydown", (event) => {
  if (!views.quiz.classList.contains("active")) return;
  const tag = event.target.tagName;
  const typing = tag === "INPUT" || tag === "TEXTAREA";

  if (event.key === "Enter" && answered && !typing) {
    event.preventDefault();
    advance();
    return;
  }
  if (typing || event.isComposing) return;

  if (event.key === " " && answered) {
    event.preventDefault();
    advance();
    return;
  }
  const digit = Number(event.key);
  if (!digit || digit < 1 || digit > 9) return;

  if (!answered && current.renderKind === "choice" && choiceButtons[digit - 1]) {
    event.preventDefault();
    const item = choiceButtons[digit - 1];
    submitChoice(item.choice, item.button);
  } else if (!answered && current.renderKind === "order" && orderTokens[digit - 1]) {
    event.preventDefault();
    const token = orderTokens[digit - 1];
    orderTokens = orderTokens.filter((item) => item.id !== token.id);
    orderPlaced.push(token);
    paintOrder();
  }
});

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

renderSubjectGrid();

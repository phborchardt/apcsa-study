"use strict";

/* ------------------------------------------------------------------
   Configuration
   ------------------------------------------------------------------ */

// Units shown on the home page. Topics come from each unit's question file.
const UNITS = [
  { number: 1, title: "Using Objects and Methods", file: "questions/unit1.js" },
  { number: 2, title: "Selection and Iteration",   file: "questions/unit2.js" },
  { number: 3, title: "Class Creation",            file: "questions/unit3.js" },
  { number: 4, title: "Data Collections",          file: "questions/unit4.js" },
];

// Number of questions drawn (in random order) for each quiz.
const QUIZ_LENGTH = 10;

const LETTERS = ["A", "B", "C", "D", "E"];

/* ------------------------------------------------------------------
   Question registration (called by questions/unitN.js)
   ------------------------------------------------------------------ */

const topicBank = {};      // unit number -> [{ id, title, questions }] in file order
const loadProblems = [];   // human-readable problems found while loading

function defineTopic(unitNumber, topicId, title, questions) {
  const unit = UNITS.find(u => u.number === unitNumber);
  const where = unit ? `${unit.file}, topic ${topicId}` : `defineTopic(${unitNumber}, "${topicId}", ...)`;
  if (!unit) {
    loadProblems.push(`${where}: there is no unit ${unitNumber} in UNITS (js/app.js).`);
    return;
  }
  if (typeof topicId !== "string" || typeof title !== "string" || !title.trim()) {
    loadProblems.push(`${where}: the topic number and title must be text in "double quotes".`);
    return;
  }
  if (!Array.isArray(questions)) {
    loadProblems.push(`${where}: the last argument must be a list [ ... ] of questions.`);
    return;
  }
  const topics = topicBank[unitNumber] = topicBank[unitNumber] || [];
  if (topics.some(t => t.id === topicId)) {
    loadProblems.push(`${where}: topic ${topicId} is defined twice. The second one was skipped.`);
    return;
  }
  const valid = [];
  questions.forEach((q, i) => {
    const problem = validateQuestion(q);
    if (problem) {
      loadProblems.push(`${where}, question #${i + 1}${q && q.id ? ` (${q.id})` : ""}: ${problem}. It was skipped.`);
    } else {
      valid.push(q);
    }
  });
  topics.push({ id: topicId, title, questions: valid });
}

function validateQuestion(q) {
  if (!q || typeof q !== "object") return "not a { ... } object";
  if (typeof q.prompt !== "string" || !q.prompt.trim()) return "missing prompt";
  if (q.code !== undefined && typeof q.code !== "string") return "code must be text";
  if (!Array.isArray(q.choices) || q.choices.length < 2 || q.choices.length > LETTERS.length) {
    return `choices must be a list of 2 to ${LETTERS.length} answers`;
  }
  if (q.choices.some(c => typeof c !== "string")) return "every choice must be text in quotes";
  const idx = LETTERS.indexOf(String(q.answer).toUpperCase());
  if (idx < 0 || idx >= q.choices.length) {
    return `answer must be a letter from A to ${LETTERS[q.choices.length - 1]}`;
  }
  if (typeof q.explanation !== "string" || !q.explanation.trim()) return "missing explanation";
  return null;
}

// Catch syntax errors in question files so the page can say which file broke.
// Chromium hides the details ("Script error.") for pages opened from file://.
window.addEventListener("error", e => {
  const file = (e.filename || "").split("/").slice(-2).join("/");
  if (!file) {
    loadProblems.push("A question file has a typo, and the browser hid the details. The unit card that says " +
      "\"Couldn't load\" names the file. Look for a missing comma, quote, bracket, or ]); near your last edit. " +
      "Firefox shows the exact line in its console (press F12).");
    return;
  }
  const line = e.lineno ? ` line ${e.lineno}` : "";
  loadProblems.push(`${file}${line}: ${e.message}`);
});

/* ------------------------------------------------------------------
   Helpers
   ------------------------------------------------------------------ */

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Escape text, then turn `backticks` into inline code.
function formatText(s) {
  return escapeHtml(s).replace(/`([^`]+)`/g, "<code>$1</code>");
}

// Strip blank lines at the ends and the indentation shared by every line,
// so code can be indented naturally inside the question file.
function dedent(code) {
  const lines = code.replace(/\t/g, "    ").split("\n");
  while (lines.length && !lines[0].trim()) lines.shift();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
  const indents = lines.filter(l => l.trim()).map(l => l.match(/^ */)[0].length);
  const min = indents.length ? Math.min(...indents) : 0;
  return lines.map(l => l.slice(min)).join("\n");
}

function codeBlock(code) {
  return code && code.trim() ? `<pre class="code"><code>${escapeHtml(dedent(code))}</code></pre>` : "";
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function answerIndex(q) {
  return LETTERS.indexOf(String(q.answer).toUpperCase());
}

function plural(n, word) {
  return `${n} ${word}${n === 1 ? "" : "s"}`;
}

/* ------------------------------------------------------------------
   Routing
   #               home (unit list)
   #unit/1         topics in unit 1
   #unit/1/1.3     quiz on topic 1.3
   #unit/1/mixed   quiz drawn from every topic in unit 1
   ------------------------------------------------------------------ */

let app;
let quiz = null;   // current quiz state, or null when not in a quiz

function go(hash) {
  if (location.hash === hash) route();
  else location.hash = hash;
}

function route() {
  quiz = null;
  const parts = location.hash.replace(/^#\/?/, "").split("/");
  const unit = parts[0] === "unit" ? UNITS.find(u => String(u.number) === parts[1]) : null;
  const topics = unit && topicBank[unit.number];

  if (!unit || !topics) return showHome();
  if (!parts[2]) return showUnit(unit);

  if (parts[2] === "mixed") {
    const all = topics.flatMap(t => t.questions);
    if (all.length) return startQuiz({ unit, label: "Mixed review", pool: all });
  } else {
    const topic = topics.find(t => t.id === decodeURIComponent(parts[2]));
    if (topic && topic.questions.length) {
      return startQuiz({ unit, label: `${topic.id} ${topic.title}`, pool: topic.questions });
    }
  }
  showUnit(unit);
}

/* ------------------------------------------------------------------
   Views
   ------------------------------------------------------------------ */

function problemsNotice() {
  if (!loadProblems.length) return "";
  return `
    <div class="notice notice-error">
      <strong>Some questions could not be loaded:</strong>
      <ul>${loadProblems.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
    </div>`;
}

function showHome() {
  const cards = UNITS.map(u => {
    const topics = topicBank[u.number];
    let meta, disabled = "";
    if (!topics) {
      meta = `<span class="warn">Couldn't load ${escapeHtml(u.file)}</span>`;
      disabled = "disabled";
    } else {
      const count = topics.reduce((n, t) => n + t.questions.length, 0);
      meta = `${plural(topics.length, "topic")} · ${plural(count, "question")}`;
      if (!count) disabled = "disabled";
    }
    return `
      <button class="unit-card" data-unit="${u.number}" ${disabled}>
        <span class="unit-num">Unit ${u.number}</span>
        <span class="unit-title">${escapeHtml(u.title)}</span>
        <span class="unit-meta">${meta}</span>
      </button>`;
  }).join("");

  app.innerHTML = `
    <section class="home">
      <h1>Pick a unit to practice</h1>
      <p class="lede">Choose a unit, then a topic. Each quiz is ${QUIZ_LENGTH} multiple-choice questions
        drawn at random, with an explanation after every answer.</p>
      ${problemsNotice()}
      <div class="unit-grid">${cards}</div>
    </section>`;

  app.querySelectorAll(".unit-card:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => go(`#unit/${btn.dataset.unit}`));
  });
  window.scrollTo(0, 0);
}

function showUnit(unit) {
  const topics = topicBank[unit.number];
  const total = topics.reduce((n, t) => n + t.questions.length, 0);

  const rows = topics.map(t => {
    const n = t.questions.length;
    const short = n > 0 && n < QUIZ_LENGTH ? ` <span class="warn">(add ${QUIZ_LENGTH - n}+ for a full quiz)</span>` : "";
    return `
      <li>
        <button class="topic-row" data-topic="${escapeHtml(t.id)}" ${n ? "" : "disabled"}>
          <span class="topic-id">${escapeHtml(t.id)}</span>
          <span class="topic-title">${escapeHtml(t.title)}</span>
          <span class="topic-meta">${n ? plural(n, "question") : "No questions yet"}${short}</span>
        </button>
      </li>`;
  }).join("");

  app.innerHTML = `
    <section class="unit-page">
      <a href="#" class="back">← All units</a>
      <div class="unit-num">Unit ${unit.number}</div>
      <h1>${escapeHtml(unit.title)}</h1>
      <p class="lede">Pick a topic for a ${QUIZ_LENGTH}-question quiz, or mix questions from the whole unit.</p>
      ${problemsNotice()}
      ${total ? `<button class="btn btn-primary mixed-btn" id="mixed">Mixed review: ${QUIZ_LENGTH} questions from all of Unit ${unit.number}</button>` : ""}
      <ol class="topic-list">${rows}</ol>
    </section>`;

  app.querySelectorAll(".topic-row:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => go(`#unit/${unit.number}/${encodeURIComponent(btn.dataset.topic)}`));
  });
  const mixed = document.getElementById("mixed");
  if (mixed) mixed.addEventListener("click", () => go(`#unit/${unit.number}/mixed`));
  window.scrollTo(0, 0);
}

// spec: { unit, label, pool, isRetry? }: draws QUIZ_LENGTH questions from pool.
function startQuiz(spec, questions) {
  quiz = {
    spec,
    questions: questions ? shuffle(questions) : shuffle(spec.pool).slice(0, QUIZ_LENGTH),
    isRetry: Boolean(questions),
    index: 0,
    score: 0,
    answered: false,
    missed: [],      // { q, chosen }
  };
  showQuestion();
}

function quizHeading() {
  const { unit, label } = quiz.spec;
  return `Unit ${unit.number} · ${escapeHtml(label)}${quiz.isRetry ? " · Retry missed" : ""}`;
}

function showQuestion() {
  const q = quiz.questions[quiz.index];
  const total = quiz.questions.length;
  quiz.answered = false;

  const choices = q.choices.map((c, i) => {
    const body = c.includes("\n")
      ? `<pre class="code code-choice"><code>${escapeHtml(dedent(c))}</code></pre>`
      : `<span class="choice-text">${formatText(c)}</span>`;
    return `
      <li>
        <button class="choice" data-index="${i}">
          <span class="choice-letter">${LETTERS[i]}</span>${body}
        </button>
      </li>`;
  }).join("");

  app.innerHTML = `
    <section class="quiz">
      <div class="quiz-top">
        <div>
          <div class="quiz-unit">${quizHeading()}</div>
          <div class="quiz-count">Question ${quiz.index + 1} of ${total}</div>
        </div>
        <div class="quiz-score" aria-live="polite">Score <strong>${quiz.score}</strong> / ${quiz.index}</div>
      </div>
      <div class="progress"><div class="progress-bar" style="width:${(quiz.index / total) * 100}%"></div></div>

      <div class="question">
        <p class="prompt">${formatText(q.prompt)}</p>
        ${codeBlock(q.code)}
        <ol class="choices">${choices}</ol>
        <div class="feedback" id="feedback" hidden></div>
      </div>

      <div class="quiz-actions">
        <button class="btn btn-ghost" id="quit">Quit to topics</button>
        <button class="btn btn-primary" id="next" hidden>${quiz.index + 1 < total ? "Next question" : "See results"}</button>
      </div>
      <p class="hint">Tip: press A–${LETTERS[q.choices.length - 1]} to answer, Enter for the next question.</p>
    </section>`;

  app.querySelectorAll(".choice").forEach(btn => {
    btn.addEventListener("click", () => choose(Number(btn.dataset.index)));
  });
  document.getElementById("next").addEventListener("click", nextQuestion);
  document.getElementById("quit").addEventListener("click", () => go(`#unit/${quiz.spec.unit.number}`));
  window.scrollTo(0, 0);
}

function choose(chosen) {
  if (quiz.answered) return;
  quiz.answered = true;

  const q = quiz.questions[quiz.index];
  const correct = answerIndex(q);
  const isRight = chosen === correct;
  if (isRight) quiz.score++;
  else quiz.missed.push({ q, chosen });

  app.querySelectorAll(".choice").forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add("is-correct");
    if (i === chosen && !isRight) btn.classList.add("is-wrong");
  });

  const fb = document.getElementById("feedback");
  fb.className = `feedback ${isRight ? "feedback-right" : "feedback-wrong"}`;
  fb.innerHTML = `
    <div class="feedback-head">${isRight ? "Correct!" : `Not quite. The correct answer is ${LETTERS[correct]}.`}</div>
    <p>${formatText(q.explanation)}</p>`;
  fb.hidden = false;

  app.querySelector(".quiz-score").innerHTML = `Score <strong>${quiz.score}</strong> / ${quiz.index + 1}`;
  const next = document.getElementById("next");
  next.hidden = false;
  next.focus({ preventScroll: true });
  fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function nextQuestion() {
  if (!quiz || !quiz.answered) return;
  quiz.index++;
  if (quiz.index < quiz.questions.length) showQuestion();
  else showSummary();
}

function showSummary() {
  const total = quiz.questions.length;
  const pct = Math.round((quiz.score / total) * 100);
  const msg = pct === 100 ? "Perfect score!" : pct >= 80 ? "Nice work." : pct >= 60 ? "Getting there." : "Keep practicing.";

  const missedList = quiz.missed.map(({ q, chosen }) => {
    const c = answerIndex(q);
    return `
      <li class="missed-item">
        <p class="prompt">${formatText(q.prompt)}</p>
        ${codeBlock(q.code)}
        <p class="missed-answers">
          <span class="tag tag-wrong">You chose ${LETTERS[chosen]}</span>
          <span class="tag tag-right">Answer: ${LETTERS[c]}. ${formatText(q.choices[c].split("\n")[0])}</span>
        </p>
        <p class="missed-expl">${formatText(q.explanation)}</p>
      </li>`;
  }).join("");

  app.innerHTML = `
    <section class="summary">
      <div class="quiz-unit">${quizHeading()}</div>
      <h1>${quiz.score} / ${total} <span class="pct">(${pct}%)</span></h1>
      <p class="lede">${msg}</p>
      <div class="summary-actions">
        ${quiz.missed.length ? `<button class="btn btn-primary" id="retry">Retry ${plural(quiz.missed.length, "missed question")}</button>` : ""}
        <button class="btn ${quiz.missed.length ? "" : "btn-primary"}" id="again">New quiz on this ${quiz.spec.label === "Mixed review" ? "unit" : "topic"}</button>
        <button class="btn btn-ghost" id="topics">Back to topics</button>
      </div>
      ${quiz.missed.length ? `<h2>Questions you missed</h2><ol class="missed">${missedList}</ol>` : ""}
    </section>`;

  const spec = quiz.spec;
  const missedQs = quiz.missed.map(m => m.q);
  const retry = document.getElementById("retry");
  if (retry) retry.addEventListener("click", () => startQuiz(spec, missedQs));
  document.getElementById("again").addEventListener("click", () => startQuiz(spec));
  document.getElementById("topics").addEventListener("click", () => go(`#unit/${spec.unit.number}`));
  quiz = null;
  window.scrollTo(0, 0);
}

/* ------------------------------------------------------------------
   Startup and keyboard shortcuts
   ------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  app = document.getElementById("app");
  window.addEventListener("hashchange", route);
  route();
});

document.addEventListener("keydown", e => {
  if (!quiz || e.ctrlKey || e.metaKey || e.altKey) return;
  const q = quiz.questions[quiz.index];
  if (!quiz.answered) {
    let i = LETTERS.indexOf(e.key.toUpperCase());
    if (i < 0 && /^[1-9]$/.test(e.key)) i = Number(e.key) - 1;
    if (i >= 0 && i < q.choices.length) {
      e.preventDefault();
      choose(i);
    }
  } else if (e.key === "Enter" || e.key === "ArrowRight") {
    e.preventDefault();
    nextQuestion();
  }
});

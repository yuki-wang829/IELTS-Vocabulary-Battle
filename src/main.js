const vocabulary = [
  { word: "adapt", level: 6, partOfSpeech: "v.", chinese: "适应；改编", synonyms: ["adjust", "modify"] },
  { word: "assess", level: 6, partOfSpeech: "v.", chinese: "评估", synonyms: ["evaluate", "estimate"] },
  { word: "constraint", level: 6, partOfSpeech: "n.", chinese: "约束；限制", synonyms: ["restriction", "limitation"] },
  { word: "cognition", level: 6, partOfSpeech: "n.", chinese: "认知", synonyms: ["mental awareness"] },
  { word: "diminish", level: 6, partOfSpeech: "v.", chinese: "减少；降低", synonyms: ["reduce", "lessen"] },
  { word: "deterioration", level: 6, partOfSpeech: "n.", chinese: "恶化", synonyms: ["decline", "worsening"] },
  { word: "disrupt", level: 6, partOfSpeech: "v.", chinese: "扰乱；干扰", synonyms: ["disturb", "interfere"] },
  { word: "expertise", level: 6, partOfSpeech: "n.", chinese: "专业知识", synonyms: ["special knowledge"] },
  { word: "facilitate", level: 6, partOfSpeech: "v.", chinese: "促进；使便利", synonyms: ["promote", "assist"] },
  { word: "feasible", level: 6, partOfSpeech: "adj.", chinese: "可行的", synonyms: ["practical"] },
  { word: "hypothesis", level: 6, partOfSpeech: "n.", chinese: "假设", synonyms: ["theory", "assumption"] },
  { word: "implication", level: 6, partOfSpeech: "n.", chinese: "启示；潜在影响", synonyms: ["consequence"] },
  { word: "infrastructure", level: 6, partOfSpeech: "n.", chinese: "基础设施", synonyms: ["public facilities"] },
  { word: "inhibit", level: 6, partOfSpeech: "v.", chinese: "抑制；阻碍", synonyms: ["restrain", "hold back"] },
  { word: "initiate", level: 6, partOfSpeech: "v.", chinese: "发起；启动", synonyms: ["launch", "start"] },
  { word: "perceive", level: 6, partOfSpeech: "v.", chinese: "看待；感知", synonyms: ["regard", "view"] },
  { word: "perception", level: 6, partOfSpeech: "n.", chinese: "看法；感知", synonyms: ["understanding", "viewpoint"] },
  { word: "phenomenon", level: 6, partOfSpeech: "n.", chinese: "现象", synonyms: ["occurrence"] },
  { word: "preserve", level: 6, partOfSpeech: "v.", chinese: "保护；保存", synonyms: ["conserve", "maintain"] },
  { word: "prerequisite", level: 6, partOfSpeech: "n.", chinese: "先决条件", synonyms: ["requirement"] },
  { word: "proximity", level: 6, partOfSpeech: "n.", chinese: "邻近；接近", synonyms: ["nearness"] },
  { word: "reliability", level: 6, partOfSpeech: "n.", chinese: "可靠性", synonyms: ["trustworthiness"] },
  { word: "scarcity", level: 6, partOfSpeech: "n.", chinese: "短缺；稀缺", synonyms: ["shortage"] },
  { word: "subsistence", level: 6, partOfSpeech: "n.", chinese: "生存；生计", synonyms: ["survival"] },
  { word: "sustainability", level: 6, partOfSpeech: "n.", chinese: "可持续性", synonyms: ["long-term survival"] },
  { word: "temporary", level: 6, partOfSpeech: "adj.", chinese: "临时的", synonyms: ["short-term"] },
  { word: "cumulative", level: 6, partOfSpeech: "adj.", chinese: "累积的", synonyms: ["gradual"] },
  { word: "intrinsic", level: 6, partOfSpeech: "adj.", chinese: "内在的", synonyms: ["inherent"] },
  { word: "predominantly", level: 6, partOfSpeech: "adv.", chinese: "主要地", synonyms: ["primarily", "chiefly"] },
  { word: "prospective", level: 6, partOfSpeech: "adj.", chinese: "预期的；潜在的", synonyms: ["potential"] },
  { word: "ubiquitous", level: 6, partOfSpeech: "adj.", chinese: "普遍存在的", synonyms: ["widespread"] },
  { word: "complexity", level: 6, partOfSpeech: "n.", chinese: "复杂性", synonyms: ["complication"] },
  { word: "amenity", level: 6, partOfSpeech: "n.", chinese: "便利设施", synonyms: ["facility"] },
  { word: "obscure", level: 6, partOfSpeech: "v.", chinese: "掩盖；使模糊", synonyms: ["conceal", "hide"] },
  { word: "implement", level: 6, partOfSpeech: "v.", chinese: "实施；执行", synonyms: ["carry out"] },
  { word: "extract", level: 6, partOfSpeech: "v.", chinese: "提取；开采", synonyms: ["obtain", "mine"] },
  { word: "simulate", level: 6, partOfSpeech: "v.", chinese: "模拟", synonyms: ["imitate"] },
  { word: "supplement", level: 6, partOfSpeech: "v.", chinese: "补充", synonyms: ["add to"] },
  { word: "marginal", level: 6, partOfSpeech: "adj.", chinese: "微小的；边缘的", synonyms: ["minor"] },
  { word: "permanent", level: 6, partOfSpeech: "adj.", chinese: "永久的", synonyms: ["enduring"] },
  { word: "curtail", level: 7, partOfSpeech: "v.", chinese: "削减；缩减", synonyms: ["restrict", "cut down"], definition: "reduce or limit something", sentence: "The city attempted to ______ private car use during peak hours." },
  { word: "hamper", level: 7, partOfSpeech: "v.", chinese: "妨碍；阻碍", synonyms: ["hinder", "impede"], definition: "make progress more difficult", sentence: "A lack of reliable data can ______ effective planning." },
  { word: "induce", level: 7, partOfSpeech: "v.", chinese: "诱发；导致", synonyms: ["trigger", "bring about"], definition: "cause something to happen", sentence: "The experiment was designed to ______ a measurable response." },
  { word: "manifest", level: 7, partOfSpeech: "v.", chinese: "显现；表明", synonyms: ["reveal", "demonstrate"], definition: "show clearly through signs or actions", sentence: "The effects of stress may ______ in different physical symptoms." },
  { word: "mitigate", level: 7, partOfSpeech: "v.", chinese: "减轻；缓和", synonyms: ["alleviate"], definition: "make a negative effect less severe", sentence: "The new policy was introduced to ______ the environmental damage caused by tourism." },
  { word: "rectify", level: 7, partOfSpeech: "v.", chinese: "纠正；修正", synonyms: ["redress", "correct"], definition: "correct a problem or mistake", sentence: "Further research is needed to ______ errors in the original survey." },
  { word: "daunting", level: 7, partOfSpeech: "adj.", chinese: "令人棘手的", synonyms: ["intimidating", "challenging"], definition: "seeming difficult to deal with", sentence: "For many small firms, entering global markets remains a ______ task." },
  { word: "durable", level: 7, partOfSpeech: "adj.", chinese: "耐用的", synonyms: ["long-lasting"], definition: "able to last for a long time", sentence: "The material is light, flexible, and surprisingly ______." },
  { word: "empirical", level: 7, partOfSpeech: "adj.", chinese: "实证的", synonyms: ["evidence-based"], definition: "based on observation or evidence", sentence: "The claim needs ______ support before it can be accepted." },
  { word: "robust", level: 7, partOfSpeech: "adj.", chinese: "稳固的；强健的", synonyms: ["resilient", "strong"], definition: "strong and reliable", sentence: "Researchers developed a more ______ method for analysing samples." },
  { word: "subjective", level: 7, partOfSpeech: "adj.", chinese: "主观的", synonyms: ["personal"], definition: "based on personal feelings or opinions", sentence: "Beauty ratings are often highly ______ and difficult to measure." },
  { word: "threshold", level: 7, partOfSpeech: "n.", chinese: "阈值；临界点", synonyms: ["cut-off point"], definition: "the level at which something begins to happen", sentence: "Noise below this ______ had little effect on concentration." },
  { word: "vulnerability", level: 7, partOfSpeech: "n.", chinese: "脆弱性", synonyms: ["susceptibility"], definition: "the state of being easily harmed", sentence: "The study examined the ______ of coastal cities to flooding." },
  { word: "prioritize", level: 7, partOfSpeech: "v.", chinese: "优先处理", synonyms: ["attach importance to"], definition: "treat something as more important", sentence: "Governments must ______ public health during severe outbreaks." },
  { word: "inscription", level: 7, partOfSpeech: "n.", chinese: "铭文；刻印", synonyms: ["carved writing"], definition: "words cut into stone, metal, or wood", sentence: "The ______ on the monument records the date of construction." }
];

const teamColors = ["blue", "orange"];
const rounds = [
  { id: 1, label: "ROUND 1", name: "Lightning Round", total: 12, mode: "translation", correct: 10, wrong: -5, ratio: { 6: 10, 7: 2 } },
  { id: 2, label: "ROUND 2", name: "Paraphrase Hunter", total: 10, mode: "synonym", correct: 20, wrong: -10, ratio: { 6: 5, 7: 5 } },
  { id: 3, label: "FINAL ROUND", name: "Word Boss Battle", total: 5, mode: "boss", correct: 30, wrong: -10, ratio: { 7: 5 } }
];
const mysteryCards = [
  { type: "DOUBLE", title: "DOUBLE POINTS", detail: "Next scored answer is worth x2.", className: "double" },
  { type: "STEAL", title: "STEAL", detail: "Correct answer steals 10 points from another team.", className: "steal" },
  { type: "SHIELD", title: "SHIELD", detail: "Wrong answer does not lose points this question.", className: "shield" },
  { type: "SPEED", title: "SPEED ROUND", detail: "This question has only 5 seconds.", className: "speed" },
  { type: "REVENGE", title: "REVENGE", detail: "Last-place team gets +20 bonus if correct.", className: "revenge" }
];
const definitionDistractors = [
  "weak and temporary",
  "difficult to observe",
  "based only on opinion",
  "related to public facilities",
  "able to predict future results",
  "mainly caused by shortage",
  "connected with mental awareness",
  "designed for short-term use"
];
const app = document.querySelector("#app");
let audioCtx = null;
let timer = null;
let state = freshState();

function freshState() {
  return {
    screen: "home",
    exampleAnswered: false,
    exampleCorrect: null,
    sound: true,
    teams: ["Team A", "Team B"].map((name, index) => ({
      id: index,
      name,
      score: 0,
      streak: 0,
      color: teamColors[index]
    })),
    selectedTeam: null,
    selectedBet: "SAFE",
    roundIndex: 0,
    questionIndex: 0,
    questions: [],
    current: null,
    revealed: false,
    timeLeft: 8,
    paused: false,
    history: [],
    wrongCounts: {},
    feedback: null,
    mystery: null,
    pendingMystery: null,
    stealMode: false,
    usedMysteryAt: new Set()
  };
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function sampleByLevel(level, count, used) {
  const pool = shuffle(vocabulary.filter((item) => item.level === level && !used.has(item.word)));
  const chosen = pool.slice(0, count);
  chosen.forEach((item) => used.add(item.word));
  return chosen;
}

function buildGameQuestions() {
  const used = new Set();
  return rounds.map((round) => {
    const words = Object.entries(round.ratio).flatMap(([level, count]) => sampleByLevel(Number(level), count, used));
    return shuffle(words).map((entry, index) => makeQuestion(entry, round, index));
  });
}

function makeQuestion(entry, round, index) {
  if (round.mode === "translation") return translationQuestion(entry);
  if (round.mode === "synonym") return synonymQuestion(entry);
  return bossQuestion(entry, index);
}

function choicesWithCorrect(correct, distractors) {
  return shuffle([correct, ...shuffle([...new Set(distractors)].filter((item) => item !== correct)).slice(0, 3)])
    .map((text, index) => ({ key: String.fromCharCode(65 + index), text, correct: text === correct }));
}

function translationQuestion(entry) {
  const distractors = vocabulary.filter((item) => item.word !== entry.word).map((item) => item.chinese);
  return {
    type: "英文 → 中文",
    prompt: entry.word,
    subtitle: `${entry.partOfSpeech}  Level ${entry.level}`,
    answer: entry.chinese,
    entry,
    choices: choicesWithCorrect(entry.chinese, distractors)
  };
}

function synonymQuestion(entry) {
  const correct = entry.synonyms[0];
  const distractors = vocabulary
    .filter((item) => item.word !== entry.word)
    .flatMap((item) => [item.word, item.synonyms[0]])
    .filter((item) => item && item !== correct);
  return {
    type: "IELTS Reading Paraphrase",
    prompt: entry.word,
    subtitle: "Which word is closest?",
    answer: correct,
    entry,
    choices: choicesWithCorrect(correct, distractors)
  };
}

function bossQuestion(entry, index) {
  const types = ["synonym", "definition", "context"];
  const bossType = types[index % types.length];
  if (bossType === "synonym") return { ...synonymQuestion(entry), type: "BOSS · 同义替换" };
  if (bossType === "definition") {
    return {
      type: "BOSS · English Definition",
      prompt: entry.word,
      subtitle: "Which meaning is closest?",
      answer: entry.definition,
      entry,
      choices: choicesWithCorrect(entry.definition, definitionDistractors)
    };
  }
  const distractors = vocabulary.filter((item) => item.word !== entry.word).map((item) => item.word);
  return {
    type: "BOSS · IELTS Context",
    prompt: entry.sentence,
    subtitle: "Choose the best word for the blank.",
    answer: entry.word,
    entry,
    choices: choicesWithCorrect(entry.word, distractors)
  };
}

function startGame() {
  state.teams = state.teams.map((team, index) => ({
    ...team,
    name: document.querySelector(`#team-name-${index}`)?.value.trim() || team.name,
    score: 0,
    streak: 0
  }));
  state.questions = buildGameQuestions();
  state.screen = "example";
  state.exampleAnswered = false;
  state.exampleCorrect = null;
  state.roundIndex = 0;
  state.questionIndex = 0;
  state.history = [];
  state.wrongCounts = {};
  state.usedMysteryAt = new Set();
  render();
}


function answerExample(isCorrect) {
  if (state.exampleAnswered) return;
  state.exampleAnswered = true;
  state.exampleCorrect = isCorrect;
  playTone(isCorrect ? "correct" : "wrong");
  render();
}

function beginRoundOne() {
  state.screen = "battle";
  state.roundIndex = 0;
  state.questionIndex = 0;
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  const round = rounds[state.roundIndex];
  state.current = state.questions[state.roundIndex][state.questionIndex];
  state.revealed = false;
  state.selectedTeam = null;
  state.selectedBet = "SAFE";
  state.feedback = null;
  state.stealMode = false;
  maybeShowMystery();
  state.timeLeft = state.pendingMystery?.type === "SPEED" ? 5 : 8;
  render();
  startTimer();
}

function maybeShowMystery() {
  const globalNumber = rounds.slice(0, state.roundIndex).reduce((sum, round) => sum + round.total, 0) + state.questionIndex + 1;
  const planned = [4, 9, 17, 23];
  if (!state.usedMysteryAt.has(globalNumber) && planned.includes(globalNumber) && Math.random() > 0.18) {
    state.usedMysteryAt.add(globalNumber);
    state.pendingMystery = mysteryCards[Math.floor(Math.random() * mysteryCards.length)];
    state.mystery = state.pendingMystery;
    setTimeout(() => {
      state.mystery = null;
      render();
    }, 10000);
  }
}

function startTimer() {
  timer = setInterval(() => {
    if (state.paused || state.mystery || state.revealed || state.screen !== "battle") return;
    state.timeLeft -= 1;
    if (state.timeLeft > 0 && state.timeLeft <= 3) playTone("tick");
    if (state.timeLeft <= 0) {
      state.timeLeft = 0;
      clearInterval(timer);
      playTone("wrong");
    }
    render();
  }, 1000);
}

function selectTeam(id) {
  state.selectedTeam = id;
  state.feedback = null;
  render();
}

function chooseAnswer(choice) {
  if (state.revealed || state.selectedTeam === null) return;
  applyAnswer(choice.correct);
}

function applyAnswer(isCorrect) {
  const team = state.teams[state.selectedTeam];
  const round = rounds[state.roundIndex];
  const before = snapshotScores();
  const beforeStreaks = state.teams.map((item) => item.streak);
  let delta = 0;
  let multiplier = 1;
  if (round.id === 2 && isCorrect) {
    if (team.streak >= 3) multiplier = 2;
    else if (team.streak >= 2) multiplier = 1.5;
  }
  if (round.id === 3) {
    const bets = {
      SAFE: { correct: 30, wrong: -10 },
      DOUBLE: { correct: 60, wrong: -30 },
      "ALL IN": { correct: 100, wrong: -50 }
    };
    delta = isCorrect ? bets[state.selectedBet].correct : bets[state.selectedBet].wrong;
  } else {
    delta = isCorrect ? Math.round(round.correct * multiplier) : round.wrong;
  }
  if (!isCorrect && state.pendingMystery?.type === "SHIELD") delta = 0;
  if (state.pendingMystery?.type === "DOUBLE") delta *= 2;
  if (isCorrect && state.pendingMystery?.type === "REVENGE" && state.selectedTeam === lastPlaceTeamId()) delta += 20;
  team.score += delta;
  team.streak = isCorrect ? team.streak + 1 : 0;
  if (!isCorrect) {
    const key = state.current.entry.word;
    state.wrongCounts[key] = (state.wrongCounts[key] || 0) + 1;
  }
  state.history.push({ before, after: snapshotScores(), streaks: beforeStreaks });
  state.feedback = { isCorrect, delta, team: team.name, multiplier };
  state.revealed = true;
  clearInterval(timer);
  playTone(isCorrect ? "correct" : "wrong");
  if (isCorrect && state.pendingMystery?.type === "STEAL") state.stealMode = true;
  else state.pendingMystery = null;
  render();
}

function revealAnswer() {
  state.revealed = true;
  state.feedback = { isCorrect: null, delta: 0, team: "Answer Revealed" };
  clearInterval(timer);
  render();
}

function nextQuestion() {
  state.pendingMystery = null;
  state.mystery = null;
  const round = rounds[state.roundIndex];
  if (state.questionIndex + 1 < round.total) {
    state.questionIndex += 1;
    loadQuestion();
    return;
  }
  if (state.roundIndex + 1 < rounds.length) {
    state.roundIndex += 1;
    state.questionIndex = 0;
    loadQuestion();
    return;
  }
  state.screen = "results";
  clearInterval(timer);
  playTone("victory");
  render();
}

function stealFrom(targetId) {
  if (!state.stealMode || targetId === state.selectedTeam) return;
  const before = snapshotScores();
  const beforeStreaks = state.teams.map((item) => item.streak);
  state.teams[targetId].score -= 10;
  state.teams[state.selectedTeam].score += 10;
  state.history.push({ before, after: snapshotScores(), streaks: beforeStreaks });
  state.stealMode = false;
  state.pendingMystery = null;
  state.feedback = { ...state.feedback, delta: state.feedback.delta + 10, steal: state.teams[targetId].name };
  render();
}

function manualAdjust(teamId, amount) {
  const before = snapshotScores();
  const beforeStreaks = state.teams.map((item) => item.streak);
  state.teams[teamId].score += amount;
  state.history.push({ before, after: snapshotScores(), streaks: beforeStreaks, manual: true });
  render();
}

function undoScore() {
  const previous = state.history.pop();
  if (!previous) return;
  state.teams.forEach((team, index) => {
    team.score = previous.before[index];
    team.streak = previous.streaks[index];
  });
  state.feedback = { isCorrect: null, delta: 0, team: "Undo complete" };
  render();
}

function resetGame() {
  clearInterval(timer);
  state = freshState();
  render();
}

function snapshotScores() {
  return state.teams.map((team) => team.score);
}

function lastPlaceTeamId() {
  return [...state.teams].sort((a, b) => a.score - b.score)[0].id;
}

function sortedTeams() {
  return [...state.teams].sort((a, b) => b.score - a.score);
}

function reviewWords() {
  return Object.entries(state.wrongCounts)
    .map(([word, count]) => ({ ...vocabulary.find((item) => item.word === word), count }))
    .sort((a, b) => b.count - a.count || b.level - a.level)
    .slice(0, 5);
}

function playTone(type) {
  if (!state.sound) return;
  audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
  const now = audioCtx.currentTime;
  const sequences = {
    correct: [[523, 0], [659, 0.08], [784, 0.16]],
    wrong: [[220, 0], [164, 0.12]],
    tick: [[900, 0]],
    victory: [[523, 0], [659, 0.12], [784, 0.24], [1046, 0.38]]
  };
  sequences[type].forEach(([frequency, delay]) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type === "wrong" ? "sawtooth" : "sine";
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.001, now + delay);
    gain.gain.exponentialRampToValueAtTime(0.12, now + delay + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.16);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(now + delay);
    osc.stop(now + delay + 0.18);
  });
}

function render() {
  app.innerHTML = state.screen === "home" ? homeTemplate() : state.screen === "example" ? exampleTemplate() : state.screen === "results" ? resultsTemplate() : battleTemplate();
  bindEvents();
}

function homeTemplate() {
  return `
    <main class="home-screen">
      <section class="hero">
        <p class="eyebrow">2 Teams Vocabulary Battle</p>
        <h1>IELTS VOCABULARY BATTLE</h1>
        <h2>Cambridge IELTS 14-16</h2>
        <p class="tagline">2 Teams · 15 Minutes · Vocabulary + Paraphrase</p>

        <section class="rules-panel">
          <h3>HOW TO PLAY</h3>
          <div class="rules-grid">
            <article>
              <strong>ROUND 1 · LIGHTNING</strong>
              <span>Correct +10 · Wrong −5</span>
            </article>
            <article>
              <strong>ROUND 2 · PARAPHRASE</strong>
              <span>Correct +20 · Wrong −10 · Streak bonus up to ×2</span>
            </article>
            <article>
              <strong>FINAL · BOSS BATTLE</strong>
              <span>SAFE +30/−10 · DOUBLE +60/−30 · ALL IN +100/−50</span>
            </article>
            <article>
              <strong>TIMER</strong>
              <span>8 seconds per question · SPEED card = 5 seconds</span>
            </article>
            <article>
              <strong>MYSTERY CARDS</strong>
              <span>Random events: Double Points, Steal, Shield, Speed, Revenge</span>
            </article>
            <article>
              <strong>CARD DISPLAY</strong>
              <span>Mystery cards stay on screen for 10 seconds. Timer pauses while the card is shown.</span>
            </article>
          </div>
          <p class="rules-note">Before Round 1, there is one practice example. The example does not affect team scores.</p>
        </section>

        <div class="team-setup">
          ${state.teams.map((team) => `
            <label class="setup-card ${team.color}">
              <span>${team.name}</span>
              <input id="team-name-${team.id}" value="${team.name}" maxlength="24" />
            </label>
          `).join("")}
        </div>
        <button class="start-button" data-action="start">START BATTLE</button>
      </section>
    </main>`;
}

function exampleTemplate() {
  const choices = [
    { key: "A", text: "适应；改编", correct: true },
    { key: "B", text: "短缺；稀缺", correct: false },
    { key: "C", text: "基础设施", correct: false },
    { key: "D", text: "可靠性", correct: false }
  ];

  return `
    <main class="example-screen">
      <section class="example-card">
        <p class="eyebrow">PRACTICE EXAMPLE · NO SCORE</p>
        <h1>adapt</h1>
        <p class="question-subtitle">v. · Choose the closest Chinese meaning</p>

        <div class="choices">
          ${choices.map((choice) => `
            <button
              class="choice ${state.exampleAnswered && choice.correct ? "correct-choice" : ""}"
              data-example="${choice.correct ? "1" : "0"}"
              ${state.exampleAnswered ? "disabled" : ""}
            >
              <span>${choice.key}</span>${choice.text}
            </button>
          `).join("")}
        </div>

        ${state.exampleAnswered ? `
          <div class="answer-panel">
            <strong>${state.exampleCorrect ? "CORRECT" : "TRY AGAIN NEXT TIME"}</strong>
            <span>adapt = 适应；改编</span>
            <em>This example does not add or deduct any points.</em>
          </div>
          <button class="start-button" data-action="begin-round-one">START ROUND 1</button>
        ` : `
          <p class="example-note">Choose an answer to see how the game works. No points are counted here.</p>
        `}
      </section>
    </main>`;
}

function battleTemplate() {
  const round = rounds[state.roundIndex];
  const progress = Math.round(((state.questionIndex + 1) / round.total) * 100);
  const current = state.current;
  return `
    <main class="battle-screen">
      ${state.mystery ? mysteryTemplate(state.mystery) : ""}
      <header class="topbar">
        <div class="round-meta">
          <strong>${round.label} / 3</strong>
          <span>${round.name}</span>
          <span>QUESTION ${state.questionIndex + 1} / ${round.total}</span>
        </div>
        <div class="timer ${state.timeLeft <= 3 ? "danger" : ""}">${state.timeLeft > 0 ? String(state.timeLeft).padStart(2, "0") : "TIME'S UP!"}</div>
        <div class="sound-toggle">
          <button data-action="sound">${state.sound ? "SOUND ON" : "SOUND OFF"}</button>
        </div>
      </header>
      <section class="score-strip">
        ${state.teams.map((team) => teamCard(team, "mini")).join("")}
      </section>
      <div class="round-track"><span style="width:${progress}%"></span></div>
      <section class="arena">
        <aside class="team-picker">
          <p>Buzzing Team</p>
          ${state.teams.map((team) => `
            <button class="team-pick ${team.color} ${state.selectedTeam === team.id ? "selected" : ""}" data-team="${team.id}">
              <span>${team.name}</span>
              <strong>${team.score}</strong>
            </button>
          `).join("")}
          ${round.id === 3 ? betTemplate() : ""}
        </aside>
        <section class="question-zone">
          <p class="question-type">${current.type}</p>
          <h1 class="${current.prompt.length > 70 ? "sentence-prompt" : ""}">${current.prompt}</h1>
          <p class="question-subtitle">${current.subtitle}</p>
          <div class="choices">
            ${current.choices.map((choice) => `
              <button class="choice ${state.revealed && choice.correct ? "correct-choice" : ""}" data-choice="${choice.key}">
                <span>${choice.key}</span>${choice.text}
              </button>
            `).join("")}
          </div>
          ${state.revealed ? answerTemplate() : ""}
          ${state.feedback ? feedbackTemplate() : ""}
        </section>
      </section>
      <section class="teacher-control">
        <details open>
          <summary>TEACHER CONTROL</summary>
          <div class="control-grid">
            <button data-action="next">NEXT QUESTION</button>
            <button data-action="reveal">REVEAL ANSWER</button>
            <button data-action="undo">UNDO SCORE</button>
            <button data-action="pause">${state.paused ? "RESUME" : "PAUSE"}</button>
            <button data-action="reset">RESET GAME</button>
          </div>
          <div class="manual-grid">
            ${state.teams.map((team) => `
              <div class="manual-team">
                <span>${team.name}</span>
                <button data-manual="${team.id}:10">+10</button>
                <button data-manual="${team.id}:-10">-10</button>
              </div>
            `).join("")}
          </div>
        </details>
      </section>
    </main>`;
}

function teamCard(team, size = "large") {
  return `
    <article class="score-card ${team.color} ${size}">
      <span>${team.name}</span>
      <strong>${team.score}</strong>
      ${team.streak > 1 ? `<em>STREAK ${team.streak}</em>` : ""}
    </article>`;
}

function betTemplate() {
  return `
    <div class="bet-panel">
      <p>BET YOUR POINTS</p>
      ${["SAFE", "DOUBLE", "ALL IN"].map((bet) => `
        <button class="${state.selectedBet === bet ? "active" : ""}" data-bet="${bet}">${bet}</button>
      `).join("")}
    </div>`;
}

function answerTemplate() {
  const entry = state.current.entry;
  return `
    <div class="answer-panel">
      <strong>${entry.word} <small>${entry.partOfSpeech}</small></strong>
      <span>${entry.chinese}</span>
      <em>${entry.synonyms.join(" / ")}</em>
      <p>IELTS Reading Paraphrase · Level ${entry.level}</p>
    </div>`;
}

function feedbackTemplate() {
  const result = state.feedback.isCorrect === null ? "REVEALED" : state.feedback.isCorrect ? "CORRECT" : "WRONG";
  const sign = state.feedback.delta > 0 ? "+" : "";
  return `
    <div class="feedback ${state.feedback.isCorrect ? "good" : state.feedback.isCorrect === false ? "bad" : ""}">
      <b>${result}</b>
      <span>${state.feedback.team} ${state.feedback.delta ? `${sign}${state.feedback.delta}` : ""}</span>
      ${state.feedback.multiplier > 1 ? `<small>NEXT SCORE MULTIPLIER USED x${state.feedback.multiplier}</small>` : ""}
      ${state.feedback.steal ? `<small>Stole 10 from ${state.feedback.steal}</small>` : ""}
      ${state.stealMode ? stealTemplate() : ""}
    </div>`;
}

function stealTemplate() {
  return `<div class="steal-targets">
    <p>Choose a team to steal 10 points from</p>
    ${state.teams.map((team) => `
      <button data-steal="${team.id}" ${team.id === state.selectedTeam ? "disabled" : ""}>${team.name}</button>
    `).join("")}
  </div>`;
}

function mysteryTemplate(card) {
  return `
    <div class="mystery-overlay">
      <div class="mystery-card ${card.className}">
        <p>MYSTERY CARD</p>
        <h2>${card.title}</h2>
        <span>${card.detail}</span>
      </div>
    </div>`;
}

function resultsTemplate() {
  const ranked = sortedTeams();
  const medals = ["1st", "2nd"];
  const reviews = reviewWords();
  return `
    <main class="results-screen">
      <section class="champion">
        <div class="trophy">TROPHY</div>
        <h1>VOCABULARY CHAMPIONS</h1>
        <h2>CAMBRIDGE 14-16</h2>
        <div class="ranking">
          ${ranked.map((team, index) => `
            <article class="${index === 0 ? "winner" : ""}">
              <span>${medals[index]}</span>
              <strong>${team.name}</strong>
              <em>${team.score}</em>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="review">
        <h2>WORDS TO REVIEW</h2>
        ${reviews.length ? reviews.map((item, index) => `
          <article>
            <b>${index + 1}. ${item.word}</b>
            <span>${item.chinese}</span>
            <em>${item.synonyms.join(" / ")}</em>
            <small>Wrong ${item.count} · Level ${item.level}</small>
          </article>
        `).join("") : `<p class="no-mistakes">No wrong answers recorded. Sharp work.</p>`}
        <button class="start-button" data-action="reset">PLAY AGAIN</button>
      </section>
      <div class="confetti">${Array.from({ length: 36 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
    </main>`;
}

function bindEvents() {
  document.querySelectorAll("[data-example]").forEach((button) => {
    button.addEventListener("click", () => answerExample(button.dataset.example === "1"));
  });
  document.querySelector("[data-action='begin-round-one']")?.addEventListener("click", beginRoundOne);
  document.querySelector("[data-action='start']")?.addEventListener("click", startGame);
  document.querySelector("[data-action='sound']")?.addEventListener("click", () => {
    state.sound = !state.sound;
    render();
  });
  document.querySelector("[data-action='next']")?.addEventListener("click", nextQuestion);
  document.querySelector("[data-action='reveal']")?.addEventListener("click", revealAnswer);
  document.querySelector("[data-action='undo']")?.addEventListener("click", undoScore);
  document.querySelector("[data-action='pause']")?.addEventListener("click", () => {
    state.paused = !state.paused;
    render();
  });
  document.querySelectorAll("[data-action='reset']").forEach((button) => button.addEventListener("click", resetGame));
  document.querySelectorAll("[data-team]").forEach((button) => button.addEventListener("click", () => selectTeam(Number(button.dataset.team))));
  document.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => chooseAnswer(state.current.choices.find((choice) => choice.key === button.dataset.choice)));
  });
  document.querySelectorAll("[data-bet]").forEach((button) => button.addEventListener("click", () => {
    state.selectedBet = button.dataset.bet;
    render();
  }));
  document.querySelectorAll("[data-manual]").forEach((button) => button.addEventListener("click", () => {
    const [teamId, amount] = button.dataset.manual.split(":").map(Number);
    manualAdjust(teamId, amount);
  }));
  document.querySelectorAll("[data-steal]").forEach((button) => button.addEventListener("click", () => stealFrom(Number(button.dataset.steal))));
}

render();

// Minimal p5.js + RiveScript chatbot UI
var bot = new RiveScript();
let outputDiv, inputEl, sendBtn;

p5.preload = function () {
  // RiveScript files load relative to this folder
  return bot
    .loadFile(["begin.rive", "dialogue.rive"])
    .then(botReady)
    .catch(botError);
};

function botReady() {
  bot.sortReplies();
  console.log("RiveScript bot ready");
}
function botError(err) {
  console.error("RiveScript error", err);
}

function setup() {
  // We don't need a canvas for this sketch but keep p5 instance running
  noCanvas();
  outputDiv = select("#output");
  inputEl = select("#input");
  sendBtn = select("#send");

  sendBtn.mousePressed(botChat);
  inputEl.elt.addEventListener("keydown", (e) => {
    if (e.key === "Enter") botChat();
  });

  // Intro message
  appendBot(
    "Hi — I'm <strong>Critical No-AI Bot</strong>. Ask me about ELIZA or rule-based chatbots. Type 'help' for suggestions.",
  );
}

function appendUser(text) {
  const p = createP(text).class("p-user").parent(outputDiv);
  outputDiv.elt.scrollTop = outputDiv.elt.scrollHeight;
}
function appendBot(text) {
  const p = createP(text).class("p-bot").parent(outputDiv);
  outputDiv.elt.scrollTop = outputDiv.elt.scrollHeight;
}

function botChat() {
  const username = "local-user";
  const inputValue = inputEl.value().trim();
  if (!inputValue) return;
  appendUser(inputValue);

  // RiveScript reply can be sync or promise depending on remote calls
  bot
    .reply(username, inputValue)
    .then(function (reply) {
      appendBot(reply);
    })
    .catch((err) => {
      console.error(err);
      appendBot("(oops - bot error)");
    });

  inputEl.value("");
}

// expose for debugging
window.__rivescriptBot = bot;

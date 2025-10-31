const quotes = [
  'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
  'There is nothing more deceptive than an obvious fact.',
  'I never make exceptions. An exception disproves the rule.',
  'What one man can invent another can discover.',
  'Education never ends, Watson. It is a series of lessons, with the greatest for the last.'
];

const quoteElement = document.getElementById('quote');
const typedValue = document.getElementById('typed-value');
const startButton = document.getElementById('start-button');
const message = document.getElementById('message');
const modal = document.getElementById('result-modal');
const resultText = document.getElementById('result-text');
const closeModal = document.getElementById('close-modal');
const bestTimeElement = document.getElementById('best-time');

let currentQuote = '';
let startTime = 0;
let bestTime = localStorage.getItem('bestTime') ? parseFloat(localStorage.getItem('bestTime')) : 0;

// 최고 기록 표시
if (bestTime > 0) {
  bestTimeElement.textContent = bestTime.toFixed(2);
}

function startGame() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[randomIndex];
  quoteElement.textContent = currentQuote;
  typedValue.value = '';
  typedValue.disabled = false;
  message.textContent = '';
  typedValue.className = '';
  typedValue.focus();
  startTime = new Date().getTime();
}

function finishGame() {
  const elapsedTime = (new Date().getTime() - startTime) / 1000;
  typedValue.disabled = true;

  // 최고 기록 저장
  if (bestTime === 0 || elapsedTime < bestTime) {
    bestTime = elapsedTime;
    localStorage.setItem('bestTime', bestTime.toFixed(2));
    bestTimeElement.textContent = bestTime.toFixed(2);
  }

  // 모달 표시
  resultText.textContent = `소요 시간: ${elapsedTime.toFixed(2)}초`;
  modal.style.display = 'flex';
}

function checkInput() {
  const typedText = typedValue.value;
  if (currentQuote.startsWith(typedText)) {
    typedValue.className = 'correct';
  } else {
    typedValue.className = 'wrong';
  }

  if (typedText === currentQuote) {
    typedValue.className = 'correct';
    finishGame();
  }
}

// 이벤트 등록
typedValue.addEventListener('input', checkInput);
startButton.addEventListener('click', startGame);
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

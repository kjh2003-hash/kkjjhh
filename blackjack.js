// 랜덤 카드 생성 함수 (1~11)
function getRandomCard() {
  return Math.floor(Math.random() * 11) + 1; // 1~11
}

// 플레이어 카드
let cardOne = getRandomCard();
let cardTwo = getRandomCard();
let cardThree = getRandomCard();
let playerSum = cardOne + cardTwo + cardThree;

// 딜러 카드
let cardOneBank = getRandomCard();
let cardTwoBank = getRandomCard();
let cardThreeBank = getRandomCard();
let cardFourBank = getRandomCard();
let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;

// 결과 출력
console.log(`Player cards: ${cardOne}, ${cardTwo}, ${cardThree}`);
console.log(`Dealer cards: ${cardOneBank}, ${cardTwoBank}, ${cardThreeBank}, ${cardFourBank}`);

// 플레이어 상태 체크
if (playerSum > 21) {
console.log(`You have ${playerSum} points`);
console.log('Bust! You lost');
} else if (playerSum === 21) {
console.log(`You have ${playerSum} points`);
console.log('Blackjack! You win');
} else {
console.log(`You have ${playerSum} points`);

if (bankSum > 21) {
  console.log(`Bank has ${bankSum} points`);
  console.log('Bank bust! You win');
} else {
  console.log(`Bank has ${bankSum} points`);
  if (playerSum > bankSum) {
    console.log('You win');
  } else if (playerSum < bankSum) {
    console.log('Bank wins');
  } else {
    console.log('Draw');
  }
}
}

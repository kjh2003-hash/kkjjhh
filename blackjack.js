// 플레이어 카드
let cardOne = 7;
let cardTwo = 5;
let cardThree = 7;
let playerSum = cardOne + cardTwo + cardThree;

// 딜러 카드
let cardOneBank = 7;
let cardTwoBank = 5;
let cardThreeBank = 6;
let cardFourBank = 4;

// 딜러 합계 계산
let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;

// 플레이어 상태 체크
if (playerSum > 21) {
  console.log(`You have ${playerSum} points`);
  console.log('Bust! You lost');
} else if (playerSum === 21) {
  console.log(`You have ${playerSum} points`);
  console.log('Blackjack! You win');
} else {
  console.log(`You have ${playerSum} points`);

  // 딜러가 17 이상이면 멈추고, 17 미만이면 추가 카드 뽑음 (여기서는 이미 cardSum으로 계산)
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

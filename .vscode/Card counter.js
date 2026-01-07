let count = 0;

function cardCounter(card) {
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  } else if (card === 7 || card === 8 || card === 9) {

  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  } else {
    return "invalid";
  }

  if (count > 0) {
    return count + " Bet";
  } else if (count <= 0) {
    return count + " Hold";
  }
}

console.log(cardCounter("Q"))

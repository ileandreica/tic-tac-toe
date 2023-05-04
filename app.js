const gameBoxes = document.querySelectorAll(".game-box");
const gamePlayerTurnInfo = document.querySelector(".game-info");
let round = 0;

for (let i = 0; i <= gameBoxes.length - 1; i++) {
  gameBoxes[i].addEventListener("click", onMakeMove);
}

function onMakeMove(e) {
  const currentBox = e.target;
  if (!currentBox.className.includes("player")) {
    round++;
    if (round % 2 == 1) {
      currentBox.classList.add("player1");
      currentBox.innerHTML = "X";
      if (isWinner("player1")) {
        gamePlayerTurnInfo.innerHTML = "Player 1 wins";
        gamePlayerTurnInfo.style.color = "red";
        endGame();
      } else {
        if (round == 9) {
          gamePlayerTurnInfo.innerHTML = "No winner. Restart The Game";
          endGame();
        } else {
          gamePlayerTurnInfo.innerHTML = "Player 2's turn";
        }
      }
    } else {
      currentBox.classList.add("player2");
      currentBox.innerHTML = "0";
      if (isWinner("player2")) {
        gamePlayerTurnInfo.innerHTML = "Player 2 wins";
        gamePlayerTurnInfo.style.color = "red";
        endGame();
      } else {
        if (round == 9) {
          gamePlayerTurnInfo.innerHTML = "No winner. Restart The Game";
          endGame();
        } else {
          gamePlayerTurnInfo.innerHTML = "Player 1's turn";
        }
      }
    }
  }
}

function isWinner(playerClassName) {
  if (
    (gameBoxes[0].classList.contains(playerClassName) &&
      gameBoxes[1].classList.contains(playerClassName) &&
      gameBoxes[2].classList.contains(playerClassName)) ||
    (gameBoxes[3].classList.contains(playerClassName) &&
      gameBoxes[4].classList.contains(playerClassName) &&
      gameBoxes[5].classList.contains(playerClassName)) ||
    (gameBoxes[6].classList.contains(playerClassName) &&
      gameBoxes[7].classList.contains(playerClassName) &&
      gameBoxes[8].classList.contains(playerClassName)) ||
    (gameBoxes[0].classList.contains(playerClassName) &&
      gameBoxes[3].classList.contains(playerClassName) &&
      gameBoxes[6].classList.contains(playerClassName)) ||
    (gameBoxes[1].classList.contains(playerClassName) &&
      gameBoxes[4].classList.contains(playerClassName) &&
      gameBoxes[7].classList.contains(playerClassName)) ||
    (gameBoxes[2].classList.contains(playerClassName) &&
      gameBoxes[5].classList.contains(playerClassName) &&
      gameBoxes[8].classList.contains(playerClassName)) ||
    (gameBoxes[0].classList.contains(playerClassName) &&
      gameBoxes[4].classList.contains(playerClassName) &&
      gameBoxes[8].classList.contains(playerClassName)) ||
    (gameBoxes[2].classList.contains(playerClassName) &&
      gameBoxes[4].classList.contains(playerClassName) &&
      gameBoxes[6].classList.contains(playerClassName))
  ) {
    return true;
  }

  return false;
}

function endGame() {
  for (let i = 0; i <= gameBoxes.length - 1; i++) {
    console.log("remove event listener");
    gameBoxes[i].removeEventListener("click", onMakeMove);
  }
  const restartButton = document.querySelector(".restart button");
  console.log(restartButton);
  restartButton.style.display = "block";
  restartButton.addEventListener("click", restartGame);
}

function restartGame() {
  for (let i = 0; i <= gameBoxes.length - 1; i++) {
    gameBoxes[i].innerHTML = "";
  }
  round = 0;
  gamePlayerTurnInfo.innerHTML = "Player 1's turn";
  gamePlayerTurnInfo.style.color = "black";
  for (let i = 0; i <= gameBoxes.length - 1; i++) {
    gameBoxes[i].classList.remove("player1");
    gameBoxes[i].classList.remove("player2");
    gameBoxes[i].addEventListener("click", onMakeMove);
  }
}

let turn = "X";
let gameOver = false;

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxText = document.getElementsByClassName("boxContent");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      document.querySelector(".result").innerText =
        boxText[e[0]].innerText + " Won";
      gameOver = true;
    }
  });
};

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxContent");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!gameOver) {
        document.getElementsByClassName("turn")[0].innerText =
          "Turn For " + turn;
      } else {
        document.getElementsByClassName("turn")[0].innerText = "Game Over";
        document.querySelector(".ins").style.visibility = "hidden";
        document.querySelector(".result").style.visibility = "visible";
      }
    }
  });
});

document.querySelector(".reset").addEventListener("click", () => {
  let boxTexts = document.querySelectorAll(".boxContent");
  Array.from(boxTexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameOver = false;
  document.getElementsByClassName("turn")[0].innerText = "Turn For " + turn;
  document.querySelector(".ins").style.visibility = "visible";
  document.querySelector(".result").style.visibility = "hidden";
});

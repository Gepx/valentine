const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const message = document.querySelector(".message");
const container = document.querySelector(".container");

let currentScale = 1;
let height = 100;
let clickCount = 0;

const noButtonText = [
  "Are you sure?",
  "Really sure?",
  "Think again...",
  "You don't mean it..",
  "You might regret this...",
  "Noooo wayyy..",
  "You're kidding right?",
  "You're not serious...",
];

function moveButton() {
  const viewportWidth = window.innerWidth - noButton.offsetWidth;
  const viewportHeight = window.innerHeight - noButton.offsetHeight;

  const rightSideStart = viewportWidth * 0.7;
  const availableWidth = viewportWidth - rightSideStart;

  const randomX = rightSideStart + Math.random() * availableWidth;
  const randomY = Math.floor(Math.random() * viewportHeight);

  noButton.style.position = "fixed";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

noButton.addEventListener("click", () => {
  clickCount++;

  if (clickCount >= noButtonText.length) {
    noButton.style.display = "none";
    return;
  }

  moveButton();

  currentScale += 1;
  height += 10;

  yesButton.style.transform = `scale(${currentScale})`;
  yesButton.style.height = `${height}px`;

  noButton.textContent = noButtonText[clickCount];
});

yesButton.addEventListener("click", () => {
  container.style.display = "none";
  message.classList.remove("hidden");
});

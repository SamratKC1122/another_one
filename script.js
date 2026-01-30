const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const popSound = document.getElementById("popSound");

let score = 0;
let gameSpeed = 900;

const faces = [
  "assets/oli.png",
  "assets/deuva.png",
  "assets/prachanda.png"
];

function randomHole() {
  return holes[Math.floor(Math.random() * holes.length)];
}

function randomFace() {
  return faces[Math.floor(Math.random() * faces.length)];
}

function showFace() {
  const hole = randomHole();
  hole.innerHTML = "";

  const img = document.createElement("img");
  img.src = randomFace();
  hole.appendChild(img);

  setTimeout(() => {
    img.classList.add("show");
  }, 10);

  img.onclick = () => {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    popSound.currentTime = 0;
    popSound.play();
    img.remove();
  };

  setTimeout(() => {
    if (hole.contains(img)) img.remove();
  }, gameSpeed);
}

setInterval(showFace, gameSpeed);

setInterval(() => {
  if (gameSpeed > 300) gameSpeed -= 50;
}, 5000);

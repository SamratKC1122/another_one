const game = document.getElementById("game");
const scoreText = document.getElementById("score");

let score = 0;

const faces = [
  "assets/oli.jpg",
  "assets/deuva.jpg",
  "assets/prachanda.jpg"
];

// Create 9 holes
for(let i=0;i<9;i++){
  const hole = document.createElement("div");
  hole.className = "hole";
  game.appendChild(hole);
}

function spawnFace(){
  const holes = document.querySelectorAll(".hole");

  holes.forEach(hole => hole.innerHTML = "");

  const randomHole = holes[Math.floor(Math.random()*holes.length)];
  const img = document.createElement("img");

  img.src = faces[Math.floor(Math.random()*faces.length)];
  img.className = "face";

  img.onclick = () => {
    score++;
    scoreText.innerText = score;
    img.remove();
  };

  randomHole.appendChild(img);

  setTimeout(()=>{
    if(img.parentNode){
      img.remove();
    }
  },800);
}

setInterval(spawnFace,1000);


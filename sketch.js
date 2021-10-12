let petali = [];
let velvariabile = 1.2;
const numeroPetali = 230;
const aumento = 0.02;
const raggioBase = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numeroPetali; i++) {
    petali[i] = generatePetali(i);
  }
  colorMode(RGB, 255);
}

function generatePetali(number) {
  return {
    x: random(windowWidth),
    y: random(windowHeight),
    distanza: number,
    //color: "(255, 255, 255, " + Math.floor(random(0, 255)) + ")",
    velocita: {
      x: 0,
      y: random(),
    },
  };
}

function draw() {
  background(145, 162, 163);
  noStroke();
  //lenght è la lunghezza di una stringa, in questo caso petali.lenght è 0 perchè è vuota
  for (let i = 0; i < petali.length; i++) {
    animatePetali(petali[i]);
    drawPetali(petali[i]);
  }
  //velocità variabile al movimento del mouse
  velvariabile = map(mouseY, 0, height, 0, 10);
}

function drawPetali(petalo) {
  let raggio = raggioBase + petalo.distanza * aumento;
  raggio = exp(raggio / 2);
  //let raggio = raggioBase + random(0, 5);  non posso usarlo perchè riaggiorna ad ogni frame
  circle(petalo.x, petalo.y, raggio);

  // console.log(petalo.color);
  if (raggio > 4) {
    //fill(petalo.color);
    fill(255, 255, 255, 170);
  } else {
    fill("white");
  }
}

//simil-parallasse, prendo velocità randomica da generatePetali e sommo a velocità variabile decisa dalla posizione del mouse
function animatePetali(petalo) {
  petalo.y += petalo.velocita.y * velvariabile;
  petalo.y %= windowHeight;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

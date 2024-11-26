let system;
let systems = [];

let g;
let wind;

let repeller;
let repellerHitsWall = true;
let repeller_dx, repeller_dy = 0;

function setup() {
  createCanvas(720, 400);
  // system = new ParticleSystem(createVector(width / 2, 50));
  g = createVector(0, 0.05);
  wind = createVector(0.02, -0.02);
  
  repeller = new Repeller(width/2, height/2);
}

function draw() {
  background(51);

  for (let s of systems){
    s.addParticle();
    s.applyForce(g);
    s.applyForce(wind);
    s.applyRepeller(repeller);
    s.run();
  }

  let fla
  const choice = random([0, 1]);
  if (choice == 0 && repellerHitsWall){
    repellerHitsWall = false;
    repeller.position.x = 0;
    repeller.position.y = random(0, height);
    repeller_dx = 5;
    repeller_dy = 0;
  }
  if (choice == 1 && repellerHitsWall){
    repellerHitsWall = false;
    repeller.position.x = random(0, width);
    repeller.position.y = 0;
    repeller_dx = 0;
    repeller_dy = 5;
  }
  repeller.position.x += repeller_dx;
  repeller.position.y += repeller_dy;

  if(repeller.position.x > width){
    repellerHitsWall = true;
  }
  if(repeller.position.y > height){
    repellerHitsWall = true;
  }

  repeller.show();
}

function mouseClicked() {
  let mPos = createVector(mouseX, mouseY)
  let system = new ParticleSystem(mPos);
  systems.push(system);
}

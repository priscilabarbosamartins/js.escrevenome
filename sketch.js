let song;

function preload () {
  song = loadSound ('agua.mp3');
}

function setup() {
  createCanvas(600, 600);
  song.loop ();
}
  function mousePressed() {
  //let fs = fullscreen();
  //fullscreen(!fs);
}

function draw() {
  if (mouseIsPressed) {
fill (120, 145, 156, 30);
  }
  else {
    fill (255, 69, 210, 20);
  }
  //background(190, 45, 255);
  ellipse(mouseX, mouseY, 200, 200);
  fill (120, 30, 28, 120);
  rect (mouseY, mouseX, 120, 120);
  triangle (mouseX, mouseY, 120, 100, 200, 250);
  fill (29, 130, 120);
  //noStroke ();
  noCursor ();


}

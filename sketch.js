const friction = 0.999
const gravity = 1
const bounce = 0.9

const points = []
const sticks = []

let myKonstrukt

function setup() {
  createCanvas(400, 400)
  colorMode(HSL, 360, 100, 100)

  // Punkt-Positionen
  const p1p = createVector(50, 50)
  const p1op = createVector(50, 40)

  const p2p = createVector(200, 50)
  const p2op = createVector(190, 50)

  // Punkte generieren
  points.push(new VerletPoint(p1p, p1op, 2, 80))
  points.push(new VerletPoint(p2p, p2op, 2, 80))

  myKonstrukt = new Konstrukt(points)

  // Stick definieren
  myKonstrukt.addStick(0, 1)


}

function draw() {
  background(0)

  myKonstrukt.drawSticks()

  for (let i = 0; i < 3; i++) {
    // sticks optimieren: 3-fach Korrektur
    myKonstrukt.updateSticks()
    myKonstrukt.checkBoundaries()
  }

  myKonstrukt.showPoints()
  myKonstrukt.updatePoints()
}

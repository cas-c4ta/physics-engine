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
  const p0p = createVector(50, 100)
  const p0op = createVector(50, 100)

  const p1p = createVector(50, 50)
  const p1op = createVector(50, 40)

  const p2p = createVector(100, 50)
  const p2op = createVector(100, 50)

  const p3p = createVector(100, 100)
  const p3op = createVector(100, 100)

  const p4p = createVector(50, 100)
  const p4op = createVector(50, 100)

  // Punkte generieren
  points.push(new VerletPoint(p1p, p1op, 2, 50))
  points.push(new VerletPoint(p2p, p2op, 2, 240))
  points.push(new VerletPoint(p3p, p3op, 2, 140))
  points.push(new VerletPoint(p4p, p4op, 2, 0))
  points.push(new VerletPoint(p0p, p0op, 2, 0))

  points[4].pinned = true

  myKonstrukt = new Konstrukt(points)

  // Sticks definieren

  // Box
  myKonstrukt.addStick(0, 1)
  myKonstrukt.addStick(1, 2)
  myKonstrukt.addStick(2, 3)
  myKonstrukt.addStick(3, 0)
  myKonstrukt.addStick(0, 1)

  // Strebe
  myKonstrukt.addStick(0, 2, true)
  myKonstrukt.addStick(1, 3, true)

  // Aufhängung
  myKonstrukt.addStick(4, 0)
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

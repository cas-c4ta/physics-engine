class Konstrukt {
  constructor(points) {
    this.points = points || []
    this.sticks = []
  }

  showPoints() {
    for (const point of this.points) {
      point.show()
    }
  }

  updatePoints() {
    for (const point of this.points) {
      if (!point.pinned) {
        let v = p5.Vector.sub(point.pos, point.oldPos)
        v.mult(friction)
        point.oldPos.set(point.pos)
        point.pos.add(v)
        point.pos.y += gravity
      }
    }
  }

  checkBoundaries() {
    for (const point of this.points) {
      // Abprall
      if (point.pos.x + point.rad > width) {
        // hit right
        let v = p5.Vector.sub(point.pos, point.oldPos)
        point.pos.set(width - point.rad, point.pos.y)
        point.oldPos.set(point.pos.x + v.x * bounce, point.oldPos.y)
      }
      if (point.pos.x - point.rad < 0) {
        // hit left
        let v = p5.Vector.sub(point.pos, point.oldPos)
        point.pos.set(0 + point.rad, point.pos.y)
        point.oldPos.set(point.pos.x + v.x * bounce, point.oldPos.y)
      }
      if (point.pos.y + point.rad > height) {
        // hit bottom
        let v = p5.Vector.sub(point.pos, point.oldPos)
        point.pos.set(point.pos.x, height - point.rad)
        point.oldPos.set(point.oldPos.x, point.pos.y + v.y * bounce)
      }
      if (point.pos.y - point.rad < 0) {
        // hit top
        let v = p5.Vector.sub(point.pos, point.oldPos)
        point.pos.set(point.pos.x, 0 + point.rad)
        point.oldPos.set(point.oldPos.x, point.pos.y + v.y * bounce)
      }
    }
  }

  addStick(index1, index2, isHidden) {
    // adds a stick to the stick array
    // indexes refer to points array
    // isHidden is optional, defaults to false
    const stick = {
      start: points[index1],
      end: points[index2],
      length: points[index1].pos.dist(points[index2].pos),
      hidden: isHidden || false
    }
    this.sticks.push(stick)
  }

  updateSticks() {
    for (const stick of this.sticks) {
      const start = stick.start.pos
      const end = stick.end.pos

      // update stick positions
      // neuen Abstand messen
      const length = stick.length
      const v_d = end.copy().sub(start)
      const v_d_length = v_d.mag()

      // differenz zur Länge des Sticks
      const difference = length - v_d_length

      // Differenz teilen
      const percentage = difference / v_d_length / 2
      const offset = v_d.mult(percentage)

      // 2 Teilstücke an Stick-Enden anfügen
      if (!stick.start.pinned) {
        start.sub(offset)
      }
      if (!stick.end.pinned) {
        end.add(offset)
      }
    }
  }

  drawSticks() {
    for (const stick of this.sticks) {
      // drawSticks(stick)
      if (!stick.hidden) {
        const start = stick.start.pos
        const end = stick.end.pos
        // draw stick
        push()
        noFill()
        stroke(0, 100, 100)
        line(start.x, start.y, end.x, end.y)
        pop()
      }
    }
  }
}

class VerletPoint {
  constructor(v_pos, v_oldPos, rad, hue) {
    this.pos = v_pos || null
    this.oldPos = v_oldPos || null
    this.rad = rad || 5
    this.hue = hue || 0
  }
  show() {
    push()
    noStroke()
    fill(this.hue, 100, 50)
    ellipse(this.pos.x, this.pos.y, this.rad * 2)
    pop()
  }
}

# Physics Engine

Eine einfache Physics Engine mit Schwerkraft. Bewegungen werden amit Verlet Integration berechnet.

- Eine Einheit besteht aus einem Punkt, repräsentiert durch eine Ellipse.
- Auf Punkte wirkt Schwerkraft.
- Ein Punkt kann zu Beginn auch eine eigene Geschwindigkeit haben.
- Ein Punkt kann fixiert (*pinned*) werden. Dann haben Geschwindigkeit und Schwerkraft keine Wirkung.
- Zwei Punkte können zu einem Stick verbunden werden.
- Ein Stick hat eine definierte Länge, die sich nicht ändert.

# Klasse «VerletPoint»

    const point1 = new VerletPoint(v_pos, v_oldPos, rad, hue)

Die Argumente *v_pos* und *v_oldPos* sind p5-Vektoren.

Die Argumente *rad* und *hue* sind optional.

## Klasse «Konstrukt»

    const myKonstrukt = new Konstrukt(points)

Das Argument *points* ist ein Array aus mehreren Instanzen von *VerletPoint*.

## Links

- Diese Physics Engine basiert auf der Playlist [Coding Math, Physics (36–39)](https://www.youtube.com/playlist?list=PL7wAPgl1JVvXBCTmnGwysy9OtR-5nOmz3) von [Keith Peters](https://bit-101.com/blog/).
- Eine vertiefte Besprechung von Verlet Integration macht [Gustavo Pezzi (Pikuma)](https://www.youtube.com/watch?v=-GWTDhOQU6M). 

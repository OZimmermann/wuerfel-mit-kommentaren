function taste_a_gedrueckt(Zufallszahl: number) {
    //  Anzeige der Zufallszahl als Augen
    if (Zufallszahl == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (Zufallszahl == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (Zufallszahl == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    } else if (Zufallszahl == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (Zufallszahl == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (Zufallszahl == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showString("ERROR")
    }
    
}

function Taste_b_gedrückt(Zufallszahl: number) {
    //  Anzeige der Zufallszahls als Zahl
    basic.showNumber(Zufallszahl)
}

/** globale Variablen: */
let gZufallszahl = 0
let b = 0
//  ###########################################
//  Hauptprogramm
while (true) {
    //  Zufallszahl zwischen 1 und 6 ermitteln und in Variable gZufallszahl speichern:
    gZufallszahl = randint(1, 6)
    //  Überprüfung der Tasten
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        //  A und B gedrückt
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.A)) {
        //  Nur Taste A
        taste_a_gedrueckt(gZufallszahl)
    } else if (input.buttonIsPressed(Button.B)) {
        //  Nur Taste B
        Taste_b_gedrückt(gZufallszahl)
    }
    
}

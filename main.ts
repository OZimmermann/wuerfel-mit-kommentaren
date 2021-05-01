// Globale Variablen:
let gZufallszahl = 0
function on_button_pressed_a(Zufallszahl: number) {
    let b = 0
    //  Anzeige der Würfelzahlen als Augen
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

// input.on_button_pressed(Button.A, on_button_pressed_a)
function on_button_pressed_b(Zufallszahl: number) {
    // global zahl
    //  Zufallszahl zwischen 1 und 6 ermitteln und in Variable Zahl speichern:
    // zahl = randint(1, 6)
    //  Anzeige der Zufallszahl auf Display
    basic.showNumber(Zufallszahl)
}

// input.on_button_pressed(Button.B, on_button_pressed_b)
// ###########################################
//  Hauptprogramm
while (true) {
    //  Zufallszahl zwischen 1 und 6 ermitteln und in Variable gZufallszahl speichern:
    gZufallszahl = randint(1, 6)
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        basic.showString("ERROR")
        
    } else if (input.buttonIsPressed(Button.A)) {
        on_button_pressed_a(gZufallszahl)
        
    } else if (input.buttonIsPressed(Button.B)) {
        on_button_pressed_b(gZufallszahl)
        
    }
    
    
}

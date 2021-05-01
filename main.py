#Globale Variablen:
gZufallszahl = 0

def on_button_pressed_a(Zufallszahl):
    b = 0
    
    # Anzeige der Würfelzahlen als Augen
    if Zufallszahl == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
    elif Zufallszahl == 2:
        basic.show_leds("""
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            """)
    elif Zufallszahl == 3:
        basic.show_leds("""
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            """)
    elif Zufallszahl == 4:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            """)
    elif Zufallszahl == 5:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            """)
    elif Zufallszahl == 6:
        basic.show_leds("""
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            """)
    else:
        basic.show_string("ERROR")
#input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b(Zufallszahl):
    #global zahl
    # Zufallszahl zwischen 1 und 6 ermitteln und in Variable Zahl speichern:
    #zahl = randint(1, 6)
    # Anzeige der Zufallszahl auf Display
    basic.show_number(Zufallszahl)
#input.on_button_pressed(Button.B, on_button_pressed_b)

############################################
# Hauptprogramm
while True:
    # Zufallszahl zwischen 1 und 6 ermitteln und in Variable gZufallszahl speichern:
    gZufallszahl = randint(1, 6)

    if input.button_is_pressed(Button.A) and input.button_is_pressed(Button.B) :
        basic.show_string("ERROR")
        pass

    elif input.button_is_pressed(Button.A) :
        on_button_pressed_a(gZufallszahl)
        pass
    
    elif input.button_is_pressed(Button.B) :
        on_button_pressed_b(gZufallszahl)
        pass
    pass

 

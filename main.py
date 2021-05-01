def taste_a_gedrueckt(Zufallszahl: number):
    # Anzeige der Zufallszahl als Augen
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
def Taste_b_gedrückt(Zufallszahl: number):
    # Anzeige der Zufallszahls als Zahl
    basic.show_number(Zufallszahl)
"""

globale Variablen:

"""
gZufallszahl = 0
b = 0
# ###########################################
# Hauptprogramm
while True:
    # Zufallszahl zwischen 1 und 6 ermitteln und in Variable gZufallszahl speichern:
    gZufallszahl = randint(1, 6)
    # Überprüfung der Tasten
    if input.button_is_pressed(Button.A) and input.button_is_pressed(Button.B):
        # A und B gedrückt
        basic.clear_screen()
    elif input.button_is_pressed(Button.A):
        # Nur Taste A
        taste_a_gedrueckt(gZufallszahl)
    elif input.button_is_pressed(Button.B):
        # Nur Taste B
        Taste_b_gedrückt(gZufallszahl)
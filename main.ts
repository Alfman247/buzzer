input.onPinPressed(TouchPin.P0, function () {
	
})
input.onPinReleased(TouchPin.P0, function () {
    if (NO == 0) {
        NO = 1
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
	
})
input.onPinReleased(TouchPin.P1, function () {
    if (NO == 0) {
        NO = 1
        music.playMelody("C D E F G A B C5 ", 120)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
    }
})
let NO = 0
NO = 0
basic.forever(function () {
	
})

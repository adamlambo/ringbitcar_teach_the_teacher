basic.forever(function () {
    basic.showLeds(`
        # . . . #
        # . . . .
        # # # . #
        # . # . #
        # . # . #
        `)
    basic.pause(2000)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(3000)
})
basic.forever(function () {
    music.playMelody("C5 E A B E G E F ", 120)
})
basic.forever(function () {
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 2)
    RingbitCar.turnleft()
})

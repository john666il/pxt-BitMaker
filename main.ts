let water = 0
basic.forever(function () {
    water = input.rotation(Rotation.Pitch)
    if (water > 90) {
        servos.P0.setAngle(70)
        basic.pause(100)
    } else if (water < 90) {
        servos.P0.setAngle(0)
        basic.pause(100)
    }
})
basic.forever(function () {
    basic.showNumber(water)
})

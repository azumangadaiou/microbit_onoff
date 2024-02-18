input.onButtonPressed(Button.A, function () {
    if (P0 == 0) {
        P0 = 1
    } else {
        P0 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (P1 == 0) {
        P1 = 1
    } else {
        P1 = 0
    }
})
let P1 = 0
let P0 = 0
P0 = 0
P1 = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, P0)
    pins.digitalWritePin(DigitalPin.P1, P1)
    if (P0 == 0) {
        led.unplot(0, 2)
    } else {
        led.plot(0, 2)
    }
    if (P1 == 0) {
        led.unplot(4, 2)
    } else {
        led.plot(4, 2)
    }
})

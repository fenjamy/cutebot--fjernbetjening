input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("V")
    basic.showString("V")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("S")
    basic.showString("S")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (receivedString == "F") {
        cuteBot.forward()
    }
    if (receivedString == "B") {
        cuteBot.backforward()
    }
    if (receivedString == "H") {
        cuteBot.turnright()
    }
    if (receivedString == "V") {
        cuteBot.turnleft()
    }
    if (receivedString == "S") {
        cuteBot.stopcar()
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("H")
    basic.showString("H")
})
radio.setGroup(88)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -30) {
        radio.sendString("F")
        basic.showString("F")
    }
    if (input.rotation(Rotation.Pitch) > 30) {
        radio.sendString("B")
        basic.showString("B")
    }
})
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ffff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0080)
})

radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (0 == receivedNumber) {
        wuKong.mecanumStop()
    } else if (1 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.Front, 100)
    } else if (2 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.left, 100)
    } else if (3 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.right, 100)
    } else if (4 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.rear, 100)
    } else if (5 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.LeftFront, 100)
    } else if (6 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.RightFront, 100)
    } else if (7 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.LeftRear, 100)
    } else if (8 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.RightRear, 100)
    } else if (9 == receivedNumber) {
        wuKong.setServoSpeed(wuKong.ServoList.S0, 15)
    } else if (10 == receivedNumber) {
        wuKong.mecanumDrift(wuKong.TurnList.Left)
    } else if (11 == receivedNumber) {
        wuKong.mecanumDrift(wuKong.TurnList.Right)
    } else if (12 == receivedNumber) {
        wuKong.mecanumSpin(wuKong.TurnList.Left, 75)
    } else if (13 == receivedNumber) {
        wuKong.mecanumSpin(wuKong.TurnList.Right, 75)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(3)
    wuKong.mecanumRun(wuKong.RunList.stop, 0)
    wuKong.setServoSpeed(wuKong.ServoList.S0, 0)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
radio.setGroup(3)
radio.setFrequencyBand(33)
radio.setTransmitPower(7)
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
wuKong.setLightMode(wuKong.LightMode.BREATH)
basic.showIcon(IconNames.Butterfly)

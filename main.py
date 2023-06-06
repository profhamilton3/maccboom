def on_received_number(receivedNumber):
    if 0 == receivedNumber:
        wuKong.mecanum_stop()
    elif 1 == receivedNumber:
        wuKong.mecanum_run(wuKong.RunList.FRONT, 100)
    elif 2 == receivedNumber:
        wuKong.mecanum_run(wuKong.RunList.LEFT, 100)
    elif 3 == receivedNumber:
        wuKong.mecanum_run(wuKong.RunList.RIGHT, 100)
    elif 4 == receivedNumber:
        wuKong.mecanum_run(wuKong.RunList.REAR, 100)
    elif 5 == receivedNumber:
        wuKong.mecanum_run(wuKong.RunList.LEFT_FRONT, 100)
    elif 6 == receivedNumber:
        wuKong.mecanum_run(wuKong.RunList.RIGHT_FRONT, 100)
    elif 7 == receivedNumber:
        wuKong.mecanum_run(wuKong.RunList.LEFT_REAR, 100)
    elif 8 == receivedNumber:
        wuKong.mecanum_run(wuKong.RunList.RIGHT_REAR, 100)
    elif 9 == receivedNumber:
        wuKong.mecanum_run(wuKong.RunList.STOP, 0)
    elif 10 == receivedNumber:
        wuKong.mecanum_drift(wuKong.TurnList.LEFT)
    elif 11 == receivedNumber:
        wuKong.mecanum_drift(wuKong.TurnList.RIGHT)
    elif 12 == receivedNumber:
        wuKong.mecanum_spin(wuKong.TurnList.LEFT, 75)
    elif 13 == receivedNumber:
        wuKong.mecanum_spin(wuKong.TurnList.RIGHT, 75)
    else:
        basic.show_icon(IconNames.NO)
radio.on_received_number(on_received_number)


radio.set_group(1)
radio.set_frequency_band(16)
wuKong.mecanum_wheel(wuKong.ServoList.S1,
    wuKong.ServoList.S2,
    wuKong.ServoList.S3,
    wuKong.ServoList.S4)
basic.show_icon(IconNames.ASLEEP)
wuKong.set_light_mode(wuKong.LightMode.OFF)
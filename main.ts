led.setDisplayMode(DisplayMode.BlackAndWhite)
basic.showIcon(IconNames.Heart)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.pause(5000)
led.enable(true)
led.stopAnimation()

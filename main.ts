input.onButtonPressed(Button.A, function () {
    basic.showString("" + (iBIT.ReadADC(ibitReadADC.ADC1)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (iBIT.ReadADC(ibitReadADC.ADC2)))
})

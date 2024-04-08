input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
    	
    }
    tempo += -1
    basic.showNumber(tempo)
    basic.pause(100)
    basic.showString("PERDEU")
    music.play(music.stringPlayable("A D C C A D F C ", 120), music.PlaybackMode.UntilDone)
})
let tempo = 0
basic.showNumber(10)
tempo = 10

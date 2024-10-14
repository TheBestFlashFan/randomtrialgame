function quest3 () {
    music.play(music.createSong(assets.song`smth1`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`BOAT`)
    adventure.addToTextlog("A travelling merchant comes and asks you to join their adventure.")
    adventure.addToTextlog("Press (A) to join the good outcome of the story.")
    adventure.addToTextlog("Press (B) to take the bad story.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Excellent choice, I must say. Enjoy ur adventure!")
        game.gameOver(true)
    } else {
        adventure.addToTextlog("Ur Adventure is over before it begun. Hard Luck!")
        game.over(false)
    }
}
function quest1 () {
    music.play(music.createSong(assets.song`smth0`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`BOAT`)
    adventure.addToTextlog("A traveling witch approaches and asks you to join her adventure.")
    adventure.addToTextlog("Press (A) to join the good outcome of the story.")
    adventure.addToTextlog("Press (B) to take the bad story.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Excellent choice, I must say. Enjoy ur adventure!")
        adventure.changeScoreOverride(adventure.Currency.Coins, 5)
        quest2()
    } else {
        adventure.addToTextlog("Ur Adventure is over before it begun. Hard Luck!")
        info.changeLifeBy(-1)
        quest3()
    }
}
function quest2 () {
    music.play(music.createSong(assets.song`smth1`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`BOAT`)
    adventure.addToTextlog("A travelling merchant comes and asks you to join their adventure.")
    adventure.addToTextlog("Press (A) to join the good outcome of the story.")
    adventure.addToTextlog("Press (B) to take the bad story.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Excellent choice, I must say. Enjoy ur adventure!")
        game.gameOver(true)
    } else {
        adventure.addToTextlog("Ur Adventure is over before it begun. Hard Luck!")
        game.over(false)
    }
}
info.onLifeZero(function () {
    game.over(false)
})
info.onScore(20, function () {
    game.gameOver(true)
})
info.setLife(5)
quest1()

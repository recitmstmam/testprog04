input.onButtonPressed(Button.A, function () {
    let PosMinimale = 0
    while (Position <= PosMaximale) {
        Position = Position + 1
        servos.P0.setAngle(Position)
        basic.pause(10)
    }
    while (Position >= PosMinimale) {
        Position = Position - 1
        servos.P0.setAngle(Position)
        basic.pause(10)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let Position = 0; Position <= 180; Position++) {
        servos.P0.setAngle(Position)
        basic.pause(10)
    }
    for (let Position = 0; Position <= 180; Position++) {
        servos.P0.setAngle(180 - Position)
        basic.pause(10)
    }
})
let PosMaximale = 0
let Position = 0
Position = 0
PosMaximale = 180
/**
 * TEST #4
 * 
 * Lorsque j'appuie sur le bouton A, le servomoteur tourne de 2 degrés
 */
basic.forever(function () {
    for (let index = 0; index < 180; index++) {
        if (input.lightLevel() > 128) {
            servos.P0.stop()
            basic.pause(5000)
        } else {
            Position = Position + 1
            servos.P0.setAngle(Position)
            basic.pause(10)
        }
    }
    for (let index = 0; index < 180; index++) {
        if (input.lightLevel() > 128) {
            servos.P0.stop()
            basic.pause(5000)
        } else {
            Position = Position - 1
            servos.P0.setAngle(Position)
            basic.pause(10)
        }
    }
})

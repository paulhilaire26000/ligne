function stop () {
    mecanumRobotV2.state()
}
function avencer_d (vit: number) {
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, vit)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, vit)
}
function avancer (vit: number) {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, vit)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, vit)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, vit)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, vit)
}
function avancer_g (vit: number) {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, vit)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, vit)
}
mecanumRobotV2.initializeRobot()
let strip = mecanumRobotV2.createLedStrip()
avancer(20)
strip.clear()
basic.forever(function () {
    if (mecanumRobotV2.LineTracking(LT.Left)) {
        avencer_d(40)
    }
    if (mecanumRobotV2.LineTracking(LT.Right)) {
        avancer_g(40)
    }
})

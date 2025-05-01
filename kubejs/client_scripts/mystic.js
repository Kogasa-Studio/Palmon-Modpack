let $GuiGraphics = Java.loadClass("net.minecraft.client.gui.GuiGraphics")

NativeEvents.onEvent("net.minecraftforge.client.event.RenderGuiEvent$Pre", event => {
    global.renderGuiEvent(event)

})

global.renderGuiEvent = function (event) {
    let guiGraphics = event.getGuiGraphics()
    let poseStack = guiGraphics.pose()
    let window = Client.getWindow()

    poseStack.pushPose()
    {
        poseStack.translate(24, window.getGuiScaledHeight() - 16, 0)
        poseStack.pushPose()
        {
            poseStack.translate(-15, -10, 0)
            guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                Client.font,
                Text.translate("ui.kubejs.marker").getString(),
                0, 0,
                getColorWithRGBA(128, 255, 255, 100),
                false
            )
        }
        poseStack.popPose()

    }
    poseStack.popPose()
}

let $Color = Java.loadClass('java.awt.Color')
/**
 * @param {number} R 
 * @param {number} G 
 * @param {number} B 
 * @param {number} A 
 * @returns {number}
 */
function getColorWithRGBA(R, G, B, A) {
    return new $Color(R / 255, G / 255, B / 255, A / 100).getRGB()
}



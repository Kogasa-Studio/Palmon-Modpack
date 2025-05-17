let $GuiGraphics = Java.loadClass("net.minecraft.client.gui.GuiGraphics")
let $ClimateRenderCache = Java.loadClass("net.dries007.tfc.client.ClimateRenderCache")
let $Calendars = Java.loadClass("net.dries007.tfc.util.calendar.Calendars")
let $Month = Java.loadClass("net.dries007.tfc.util.calendar.Month")

NativeEvents.onEvent("net.minecraftforge.client.event.RenderGuiEvent$Pre", event => {
    global.renderGuiEvent(event)

})

global.renderGuiEvent = function (event) {
    let guiGraphics = event.getGuiGraphics()
    let poseStack = guiGraphics.pose()
    let window = Client.getWindow()

    let climateCache = $ClimateRenderCache.INSTANCE
    let calendarsClient = $Calendars.CLIENT

    poseStack.pushPose()
    {
        poseStack.translate(24, 32, 0)
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
            guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                Client.font,
                Text.translate("tfc.tooltip.calendar_date", calendarsClient.getCalendarTimeAndDate().getString()).getString(),
                0, 12,
                getColorWithRGBA(55, 255, 155, 100),
                false
            )
            guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                Client.font,
                Text.translate("tfc.screen.climate").getString(),
                0, 24,
                getColorWithRGBA(55, 255, 155, 100),
                false
            )
            guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                Client.font,
                Text.translate("tfc.tooltip.climate_average_temperature", climateCache.getAverageTemperature().toFixed(1)).getString(),
                4, 36,
                getColorWithRGBA(55, 255, 155, 100),
                false
            )
            guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                Client.font,
                Text.translate("tfc.tooltip.climate_annual_rainfall", climateCache.getRainfall().toFixed(1)).getString(),
                4, 48,
                getColorWithRGBA(55, 255, 155, 100),
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



PlayerEvents.decorateChat(event => {
    if (event.player.getStages().has('baby')) {
        event.setMessage(Text.literal('👶: ').append(event.message).gold())

    }

})
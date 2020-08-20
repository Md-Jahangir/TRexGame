var Utils = {
    //ScaleManager of All
    ScaleManager: function() {
        if (game.device.desktop) {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
        } else {
            game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        }
    },

}
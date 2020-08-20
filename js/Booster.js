var boosterGroup;
var boosterArray = [];
var isBoosterActive;
var boosterTimer;

var Booster = {
    CreateBooster: function() {
        if (isGameRunning) {
            boosterGroup = game.add.group();
            var boosterImage = game.add.sprite(game.world.width + 40, (game.height / 2) -
                (obstacleHeight), 'booster');
            boosterImage.anchor.setTo(0.5);
            boosterImage.scale.setTo(1);
            boosterImage.enableBody = true;
            game.physics.arcade.enable(boosterImage);
            boosterImage.body.immovable = true;
            boosterArray.push(boosterImage);
            boosterGroup.add(boosterImage);
        }
    },

    ShiftBooster: function() {
        for (var i = 0; i < boosterArray.length; i++) {
            boosterArray[i].body.x -= speed;
        }
    },


}
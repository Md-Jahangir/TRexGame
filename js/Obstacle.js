var obstacleGroup;
var obstacleArray = [];
var obstacleRate;
var obstacleHeight;
var obstacleTimer;
var obstacleLife;

var Obstacle = {
    CreateObstacles: function() {
        if (isGameRunning) {
            if (speed < 25) {
                speed += 0.3;
            }

            var randomNo = parseInt(1 + Math.random() * (2 - 1 + 1));
            var image = game.add.sprite(game.world.width + 10, (game.height / 1.5) -
                (obstacleHeight), 'obstacle_' + randomNo);
            image.anchor.setTo(0.5);
            image.scale.setTo(1);
            image.enableBody = true;
            game.physics.arcade.enable(image);
            image.body.immovable = true;
            image.checkWorldBounds = true;
            image.outOfBoundsKill = true;
            image.body.setSize(48, 68, 0, 7);
            obstacleArray.push(image);
            obstacleGroup.add(image);
        }
    },

    MoveObstacles: function() {
        for (var i = 0; i < obstacleArray.length; i++) {
            obstacleArray[i].body.x -= speed;
        }
    },


}
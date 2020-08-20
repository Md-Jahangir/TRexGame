var player;
var isJumping;
var jumps;

var Player = {
    CreatePlayer: function() {
        player = game.add.sprite(game.world.width / 5, (game.height / 1.5) -
            (tileHeight * 2), 'player');
        player.anchor.set(0.5, 1);
        player.scale.setTo(4);
        game.physics.arcade.enable(player);
        player.body.gravity.y = 2200;
        player.body.collideWorldBounds = true;
        player.body.bounce.y = 0.1;
        player.body.drag.x = 150;
        player.animations.add('walk', [1, 2, 3, 4, 5, 6, 7, 8]);
        player.animations.add('jump', [16, 17, 18, 19, 20, 21, 22]);
        player.body.setSize(16, 22, 5.5, -0.5);
    },

    PlayerInput: function() {
        var onTheGround = player.body.touching.down;
        //Enable jump when touch to the ground
        if (onTheGround) {
            jumps = 1;
            isJumping = false;
        }

        //Jump when press up and space button
        if (jumps > 0 && this.UpInputIsActive(5)) {
            player.body.velocity.y = -1000;
            isJumping = true;
        }

        //When up button release
        if (isJumping > 0 && this.UpInputReleased()) {
            // console.log("upInputReleased");
            isJumping = false;
            jumps--;
        }

        //Down the character when press Down button
        if (onTheGround && this.DownInputIsActive(5)) {
            console.log("DownInputIsActive");
            player.body.setSize(16, 14, 5.5, 5.5);
            this.PlayPlayerJumpAnimation();
            player.body.enable = false;
        }
        //When Down button release
        if (onTheGround && this.DownInputReleased()) {
            console.log("DownInputIsActive");
            player.body.enable = true;
            player.body.setSize(16, 22, 5.5, -0.5);
            this.PlayPlayerWalkAnimation();
        }
    },

    UpInputIsActive: function(duration) {
        var isActive = false;
        isActive = game.input.keyboard.downDuration(Phaser.Keyboard.UP, duration) || game.input.keyboard.downDuration(Phaser.Keyboard.SPACEBAR, duration);
        return isActive;
    },

    UpInputReleased: function() {
        var released = false;
        released = game.input.keyboard.upDuration(Phaser.Keyboard.UP) || game.input.keyboard.upDuration(Phaser.Keyboard.SPACEBAR);
        return released;
    },

    DownInputIsActive: function(duration) {
        var isActive = false;
        isActive = game.input.keyboard.downDuration(Phaser.Keyboard.DOWN, duration);
        return isActive;
    },
    DownInputReleased: function() {
        var released = false;
        released = game.input.keyboard.upDuration(Phaser.Keyboard.DOWN);
        return released;
    },

    PlayPlayerWalkAnimation: function() {
        player.animations.play('walk', 20, true);
    },

    StopPlayerWalkAnimation: function() {
        player.animations.stop('walk');
        player.frame = 0;
    },

    PlayPlayerJumpAnimation: function() {
        player.animations.play('jump', 30, false);
    },


}
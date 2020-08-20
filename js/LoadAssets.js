var LoadAssets = {
    LoadAllAssets: function() {
        game.load.image('tile', 'assets/tile.png');
        game.load.image('booster', 'assets/booster.png');
        game.load.image('bullet', 'assets/bullet.png');
        for (var i = 1; i <= 2; i++) {
            game.load.image('obstacle_' + i, 'assets/obstacle_' + i + '.png');
        }
        game.load.spritesheet('player', 'assets/player.png', 24, 24, 22);
    }
}
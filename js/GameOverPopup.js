var resumeSpaceBar;
var pressRestartText;

var GameOverPopup = {

    ShowGameOverPopup: function() {
        setTimeout(() => {
            resumeSpaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            resumeSpaceBar.onDown.add(this.RestartGame, this);
        }, 500);

        game.time.events.remove(obstacleTimer);
        game.time.events.remove(boosterTimer);
        game.time.events.remove(scoreTimer);

        pressRestartText = game.add.text(game.width / 2, game.height / 3, "Press Spacebar to restart", { font: "40px Arial", fill: "#fff", align: 'center' });

        pressRestartText.anchor.set(0.5, 0.5);
        game.world.bringToTop(pressRestartText);

        isGameRunning = false;
        speed = 0;
        Player.StopPlayerWalkAnimation();
        player.body.velocity.y = 0;
        player.body.enable = false;
        player.position.set(game.world.width / 5, (game.height / 1.5) - 19);

        if (score > (window.localStorage.getItem('trex_high_score'))) {
            highScore.setText(score);
            window.localStorage.setItem('trex_high_score', score);
        } else {
            highScore.setText(window.localStorage.getItem('trex_high_score'));
        }
    },

    RestartGame: function() {
        isGameRunning = true;
        resumeSpaceBar.onDown.remove(this.RestartGame, this);
        pressRestartText.destroy();
        game.state.start("Gameplay");
    },
}
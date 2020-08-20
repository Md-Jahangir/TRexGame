var scoreLabel;
var scoreText;
var score;
var highScoreLabel;
var highScore;
var scoreTimer;

var ScorePanel = {

    ScorePanel: function() {
        scoreLabel = game.add.text(game.world.centerX + game.width / 3, game.world.centerY - game.height / 2.4, "SCORE : ", { font: "25px Arial", fill: "#fff", align: 'center' });
        scoreLabel.anchor.set(1, 0.5);
        game.world.bringToTop(scoreLabel);

        scoreText = game.add.text(game.world.centerX + game.width / 3, game.world.centerY - game.height / 2.4, "0", { font: "26px Arial", fill: "#fff", align: 'center' });
        scoreText.anchor.set(0, 0.5);
        game.world.bringToTop(scoreText);

        highScoreLabel = game.add.text(game.world.centerX + game.width / 3, game.world.centerY - game.height / 3, "HIGH SCORE : ", { font: "25px Arial", fill: "#fff", align: 'center' });
        highScoreLabel.anchor.set(1, 0.5);
        game.world.bringToTop(highScoreLabel);

        highScore = game.add.text(game.world.centerX + game.width / 3, game.world.centerY - game.height / 3, "", { font: "26px Arial", fill: "#fff", align: 'center' });
        highScore.anchor.set(0, 0.5);
        game.world.bringToTop(highScore);

        if (window.localStorage.getItem('trex_high_score') == null) {
            highScore.setText(0);
            window.localStorage.setItem('trex_high_score', 0);
        } else {
            highScore.setText(window.localStorage.getItem('trex_high_score'));
        }
    },

    IncrementScore: function() {
        if (isGameRunning) {
            score += 1;
            scoreText.setText(score);
            game.world.bringToTop(scoreText);
        }
    },
}
var tileWidth;
var tileHeight;
var cursors;
var isGameRunning = false;
var speed;
var startSpaceBar;
var pressText;

var Gameplay = function() {};

Gameplay.prototype = {
    init: function() {
        Utils.ScaleManager();
    },

    preload: function() {},

    InitializeAllVariable: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        cursors = game.input.keyboard.createCursorKeys();

        tileWidth = game.cache.getImage('tile').width;
        tileHeight = game.cache.getImage('tile').height;
        obstacleHeight = game.cache.getImage('obstacle_1').height - 11;

        speed = 4;
        score = 0;
        isJumping = false;
        jumps = 0;
        numberOfBlock = 25;
        startBlockIndex = 0;
        lastBlockIndex = numberOfBlock - 1;
        obstacleGroup = game.add.group();
        obstacleRate = 1700;
        obstacleArray = [];
        obstacleLife = 2;
        isBoosterActive = false;
        boosterArray = [];
        fireRate = 200;
        nextFire = 0;
    },

    create: function() {
        game.stage.backgroundColor = '479cde';

        this.InitializeAllVariable();

        //Create Obstacles
        obstacleTimer = game.time.events.loop(obstacleRate, Obstacle.CreateObstacles, this);
        //Create the floor
        Floor.CreateFloor();
        //Create Player
        Player.CreatePlayer();
        //Create booster
        boosterTimer = game.time.events.loop(13000, Booster.CreateBooster, this);
        //Create Bullets
        Bullet.CreateBullets();

        ScorePanel.ScorePanel();
        scoreTimer = game.time.events.loop(100, ScorePanel.IncrementScore, this);

        startSpaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        startSpaceBar.onDown.add(this.StartGame, this);
        if (isGameRunning == false) {
            pressText = game.add.text(game.width / 2, game.height / 3, "Press Spacebar to start", { font: "40px Arial", fill: "#fff", align: 'center' });
            pressText.anchor.set(0.5, 0.5);
            game.world.bringToTop(pressText);
        }
    },

    StartGame: function() {
        isGameRunning = true;
        startSpaceBar.onDown.remove(this.StartGame, this);
        pressText.destroy();
    },

    update: function() {
        game.physics.arcade.collide(player, floorGroup);
        if (isGameRunning) {
            //Play CharacterAnimation
            Player.PlayPlayerWalkAnimation();

            //Move the Floor
            Floor.MoveFloor();
            //Move the obstacles
            Obstacle.MoveObstacles();
            //Move the Boosters
            Booster.ShiftBooster();
            //checking and Jump player
            Player.PlayerInput();

            game.physics.arcade.collide(player, obstacleGroup, this.CollideWithObstacle, null, this);
            game.physics.arcade.collide(bulletsGroup, obstacleGroup, this.DestroyObstacles, null, this);
            game.physics.arcade.overlap(player, boosterGroup, this.EnableBooster, null, this);

            if (isBoosterActive) {
                Bullet.FireBullets();
                setTimeout(() => {
                    isBoosterActive = false;
                }, 3000);
            }
        }
    },

    CollideWithObstacle: function() {
        GameOverPopup.ShowGameOverPopup();
    },

    DestroyObstacles: function(bullet, obstacle) {
        bullet.kill();
        obstacle.kill();
        obstacleLife--;
        if (obstacleLife < 1) {
            obstacle.kill();
        }
    },
    EnableBooster: function(player, booster) {
        booster.kill();
        isBoosterActive = true;
    },

}
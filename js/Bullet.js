var bulletsGroup;
var fireRate;
var nextFire;

var Bullet = {

    CreateBullets: function() {
        bulletsGroup = game.add.group();
        bulletsGroup.enableBody = true;
        bulletsGroup.physicsBodyType = Phaser.Physics.ARCADE;

        bulletsGroup.createMultiple(10, 'bullet');
        bulletsGroup.setAll('checkWorldBounds', true);
        bulletsGroup.setAll('outOfBoundsKill', true);
    },
    FireBullets: function() {
        if (game.time.now > nextFire && bulletsGroup.countDead() > 0) {
            nextFire = game.time.now + fireRate;
            var bullet = bulletsGroup.getFirstDead();
            bullet.reset(player.x + 35, player.y - 70);
            bullet.body.velocity.x = 500;
        }
    },

}
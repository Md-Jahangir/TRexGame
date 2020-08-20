var floorArray = [];
var floorGroup;
var numberOfBlock;
var startBlockIndex;
var lastBlockIndex;

var Floor = {
    CreateFloor: function() {
        floorArray = [];
        floorGroup = game.add.group();

        for (var i = 0; i < numberOfBlock; i++) {
            var image = game.add.sprite((i * tileWidth), game.height / 1.5, 'tile');
            image.anchor.setTo(0.5);
            image.scale.setTo(1);
            image.enableBody = true;
            game.physics.arcade.enable(image);
            image.body.immovable = true;
            floorArray.push(image);
            floorGroup.add(floorArray[i]);
        }
    },
    MoveFloor: function() {
        for (var i = 0; i < numberOfBlock; i++) {
            floorArray[i].x -= speed;
        }
        //When cross the 1st block then reposition to the last of the array
        var startBlock = floorArray[startBlockIndex];
        if (startBlock.x <= -tileWidth) {
            startBlock.x = (floorArray[lastBlockIndex].x + (tileWidth - 1));
            lastBlockIndex = startBlockIndex;
            startBlockIndex++;
            if (startBlockIndex > (numberOfBlock - 1)) {
                startBlockIndex = 0;
            }
        }
    },


}
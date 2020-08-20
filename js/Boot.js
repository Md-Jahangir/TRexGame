var Boot = function() {};

Boot.prototype = {
    init: function() {

        Utils.ScaleManager();
    },
    preload: function() {
        game.load.script('Main', 'js/Main.js');
    },
    create: function() {
        game.state.add('Main', Main);
        game.state.start('Main');
    }
};
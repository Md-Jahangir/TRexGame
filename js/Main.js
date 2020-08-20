var Main = function() {};

Main.prototype = {
    init: function() {
        Utils.ScaleManager();
    },
    preload: function() {

        game.load.script('Gameplay', 'js/Gameplay.js');

        LoadAssets.LoadAllAssets();

    },
    create: function() {
        game.state.add('Gameplay', Gameplay);

        game.state.start('Gameplay');
    },

};
game.state.add('Main', Main);
game.state.start('Main');
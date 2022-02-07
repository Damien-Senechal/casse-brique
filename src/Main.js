
let gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    pixelArt: true,
    backgroundColor: '#000000',
    parent: 'game',
    physics: {
        default: 'arcade',
        /*arcade: {
            gravity: { y: 200 },
            //debug : true
        }*/
    },
    scene: new Scene()
};
let game = new Phaser.Game(gameConfig);
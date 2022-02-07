class Wall extends Phaser.Physics.Arcade.Sprite {

    //Constructeur de Wall

    constructor (scene, x, y, wall) {
        //On appelle le constructeur parent avec super
        super(scene, x, y, 'square', wall);
        //On ajoute le sprite et ça physique a la scene
        scene.add.existing(this);
        scene.physics.add.existing(this);

        //On initialise ces paramètre de creation
        if(wall === "LEFT" || wall === "RIGHT"){
            this.setDisplaySize(scene.wallSize, game.config.height)
        }
        else{
            this.setDisplaySize(game.config.width, scene.wallSize)
        }
        this.body.setAllowGravity(false)
        this.setImmovable(true);
        this.setOrigin(0, 0)
    }

}
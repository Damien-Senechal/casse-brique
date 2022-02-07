class Player extends Phaser.Physics.Arcade.Sprite {

    //Constructeur de Wall

    constructor (scene, x, y) {
        //On appelle le constructeur parent avec super
        super(scene, x, y, 'square');
        //On ajoute le sprite et ça physique a la scene
        scene.add.existing(this);
        scene.physics.add.existing(this);

        //On initialise ces paramètre de creation
        this.setDisplaySize(scene.playerSizeX, scene.playerSizeY)
        this.setTintFill(0XFFFFFF)
        this.body.setAllowGravity(false)
        this.body.setImmovable(true)
        this.setOrigin(0, 0)
        this.speed = 0;
    }

}
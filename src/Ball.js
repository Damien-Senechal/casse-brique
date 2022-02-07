class Ball extends Phaser.Physics.Arcade.Sprite {

    //Constructeur de Wall

    constructor (scene, x, y) {
        //On appelle le constructeur parent avec super
        super(scene, x, y, 'circle');
        //On ajoute le sprite et ça physique a la scene
        scene.add.existing(this);
        scene.physics.add.existing(this);

        //On initialise ces paramètre de creation
        this.setDisplaySize(scene.ballSize, scene.ballSize);
        this.body.setBounce(1, 1);
        this.body.setAllowGravity(false);
    }

}
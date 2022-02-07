class Brick extends Phaser.Physics.Arcade.Sprite {

    //Constructeur de Wall

    constructor (scene, x, y, color) {
        //On appelle le constructeur parent avec super
        super(scene, x, y, color);
        //On ajoute le sprite et ça physique a la scene
        scene.add.existing(this);
        scene.physics.add.existing(this);

        //On initialise ces paramètre de creation
        if(color === "RED"){
            this.setTintFill(0XFF0000);
        }
        else if(color === "GREEN"){
            this.setTintFill(0X00FF00);
        }
        else if(color === "GREY"){
            this.setTintFill(0X808080);
        }
        else{
            console.error("La couleur passé en argument pour la creation de la brick n'est pas valide")
        }
        this.setDisplaySize(scene.brickSizeX, scene.brickSizeY)
        this.body.setAllowGravity(false)
        this.body.setImmovable(true)
        this.color = color;
    }

}
class Scene extends Phaser.Scene{

    preload(){
        this.load.image('square','assets/carre.png');
        this.load.image('circle','assets/cercle.png');
    }

    initVariables(){
        this.gridBrickX = 170;
        this.gridBrickY = 220;
        this.playerSpeed = 200;
        this.playerSizeX = 200;
        this.playerSizeY = 20;
        this.wallSize = 20;
        this.ballSize = 20;
        this.brickSizeX = 60;
        this.brickSizeY = 30;
        this.lifeNumber = 3;
    }

    createInput(){
        let me = this
        this.input.keyboard.on('keydown-RIGHT', function () {
            me.player.body.setVelocityX(me.playerSpeed)
        });
        this.input.keyboard.on('keydown-LEFT', function () {
            me.player.body.setVelocityX(-me.playerSpeed)
        });
        this.input.keyboard.on('keyup-RIGHT', function () {
            me.player.body.setVelocityX(0)
        });
        this.input.keyboard.on('keyup-LEFT', function () {
            me.player.body.setVelocityX(0)
        });
    }

    createCollision(){
        let me = this;
        if(this.player.x <= 20){
            this.player.x = 20;
        }
        if(this.player.x >= game.config.width-(this.playerSizeX+20)){
            this.player.x = game.config.width-(this.playerSizeX+20);
        }

        if(this.ball.y >=800){
            this.balleAucentre()
            this.vie.score--;
        }

        this.physics.add.collider(this.player, this.ball, function () {
            //console.log('touche player 1')
            me.rebond(me.player)
        })

        this.physics.add.collider(this.walls, this.ball);
        this.physics.add.collider(this.bricks, this.ball, function (obj1, obj2) {
            //console.log(obj2.color)
            if(obj2.color === "RED"){
                me.score.score+=10;
            }
            else if(obj2.color === "GREEN"){
                me.vie.score++;
                me.score.score++;
            }
            else{
                me.score.score++;
            }
            obj2.destroy()
        })
    }

    rebond(player){
        let me = this ;
        //console.log(me.player.x);
        //console.log(me.ball.x);
        let largeurPlayer = player.displayWidth;

        let positionRelativePlayer = (me.ball.x - player.x);

        positionRelativePlayer = (positionRelativePlayer / largeurPlayer)
        positionRelativePlayer = positionRelativePlayer*2-1;

        this.ball.setVelocityX(me.ball.body.velocity.x + positionRelativePlayer * largeurPlayer);
        this.ball.setVelocityY(me.ball.body.velocity.y-25);
    }


    balleAucentre(){
        this.ball.x = game.config.width/2
        this.ball.y = game.config.height/2
        this.ball.setVelocityX(0)
        this.ball.setVelocityY(500)
    }

    create(){

        this.initVariables();
        this.createInput();

        this.vie = new PlayerScore('Vies :', 'joueurGauche');
        this.vie.score = this.lifeNumber;
        this.score = new PlayerScore('Score : ', 'joueurDroite');

        //Creation du joueur avec la classe Player
        this.player = new Player(this, game.config.width /2-100, game.config.height-20);


        //Creation des murs avec la classe Wall, un if et un switch
        this.walls = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        for(let i = 0; i<3; i++){
            let wall = null;
            switch (i){
                case 0:
                    wall = new Wall(this, 0, 0)
                    this.walls.add(wall);
                    break;
                case 1:
                    wall = new Wall(this, 0, 0, "LEFT")
                    this.walls.add(wall);
                    break;
                case 2:
                    wall = new Wall(this, 780, 0, "RIGHT")
                    this.walls.add(wall);
                    break;
            }
        }

        //Creation des briques avec une double boucles
        this.bricks = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        for(let i = 0; i<9; i++) {
            for (let j = 0; j < 5; j++) {
                let brick = null
                if (i === 3 && j === 3) {
                    brick = new Brick(this, this.gridBrickX + i * 61, this.gridBrickY + j * 31, "GREEN");
                } else if (i === 4 && j === 3) {
                    brick = new Brick(this, this.gridBrickX + i * 61, this.gridBrickY + j * 31, "RED");
                } else {
                    brick = new Brick(this, this.gridBrickX + i * 61, this.gridBrickY + j * 31, "GREY");
                }
                this.bricks.add(brick);
            }
        }

        this.ball = new Ball(this, game.config.width/2, game.config.height/2);
        this.balleAucentre();
    }

    update(){
        this.createCollision();
        if(this.vie.score <= 0){
            this.scene.restart();
            alert("Vous avez perdu !");
        }
        if(this.bricks.getLength() <= 0){
            this.scene.restart();
            alert("Vous avez gagné !");
        }
        console.log(this.ball.body.velocity.y)
    }

}
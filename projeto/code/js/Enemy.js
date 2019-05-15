class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, sprite){
        super(scene,x, y, sprite, 0);
        this.dir = 1;
        this.speed = 100;
        this.lifespan = 0;
        this.paused = false; //ai pause
        this.texture = sprite;

    }
    spawn(){
        //Setup important stuff after we have been created
        //this.texture = texture;
        this.setScale(0.3);
        this.anims.play(this.texture);
        this.body.setVelocity(0);
        this.body.setSize(300, 340).setOffset(100,145);
        this.body.setBounce(0);
        this.setGravityY(3500);
        // this.body.setCircle(7, 1, 1.5);
        //Random dir
        /*if(Math.round(Math.random())){
            this.changeDir()
        }*/
    }

    changeDir(){
        this.dir *= -1;
        //Update sprite flip
        if(this.dir === 1)
            this.flipX = true;
        else
            this.flipX = false;
    }

    pause(){
        //if not paused yet
        if(!this.paused){
            this.paused = true;
            //disable body mainly
            this.body.enable = false;
            this.anims.pause();
            this.setFrame(0);
        }
    }

    resume(){
        //only if we're actually paused
        if(this.paused){
            this.paused = false;
            this.body.enable = true;
            this.anims.resume();
        }
    }

    update(_, dt){
        if(this.paused) return;

        this.body.setVelocity(0);


        //------------------------ Enemy AI ------------------------------------
        this.chasing = false;

        if(this.chasing === false){
            console.log(Math.round(this.y) === Math.round(player.y));
            console.log(Math.round(this.y));
            console.log(Math.round(player.y));
        }

        //verifica se a posicao jogador e do inimigo no mesmo plano

        if (((Math.round(this.y)-Math.round(player.y)) < 50 || (Math.round(this.y)-Math.round(player.y)) > 50)) {

            //se o inimigo e o jogador estiveram na mesma camada este vai seguilo
            if (Math.round(player.x) > Math.round(this.x)) {
                // we increase the speed from the default 80 to 200
                this.body.velocity.x = 100;
            } else {
                this.body.velocity.x = -100;
            }
            this.chasing = true;
        }

        if(!this.chasing){
            // when the slime isn't actively chasing the player,
            // reduce speeds back to normal
            if(this.body.velocity.x > 0){
                this.body.velocity.x = 50;
            }

            else

                if(this.body.velocity.x < 0){
                    this.body.velocity.x = -50;
                }
        }

        /*
        this.game.physics.arcade.collide(this, player, function () {
            if (slime.body.velocity.x > 0 && slime.x > platform.x + (platform.width - slime.width) ||
                slime.body.velocity.x < 0 && slime.x < platform.x) { // this is still the old platform patrol AI from before // we added the chasing check so the slime will stop at the edge closest to the player if (chasing) { slime.body.velocity.x = 0; } else { slime.body.velocity.x *= -1; } } }); game.physics.arcade.collide(this, slimes, function (slime, slimes) { slime.body.velocity.x *= -1; }); if (this.body.velocity.x > 0) {
                // this.animations.stop();
                this.anims.play('right');
            } else {
                //this.animations.stop();
                this.anims.play('left');
            }
            console.log("hit");
        },this);
        */


    }
}
class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, sprite){
        super(scene,x, y, sprite, 0);
        this.dir = 1;
        this.speed = 100;
        this.lifespan = 0;
        this.paused = false; //ai pause
        this.texture = sprite;
        this.hp = new HealthBar(scene, x - 100, y - 110);
    }


    spawn(){
        //Setup important stuff after we have been created
        //this.texture = texture;
        this.setScale(0.3);
        this.anims.play(this.texture);
        this.body.setVelocity(0);
        this.body.setSize(300, 340).setOffset(100,145);
        this.body.bounce.y = 0;
        this.body.bounce.x = 2;
        //this.setGravityY(3500);
        //this.setCollideWorldBounds(true);
        this.enableBody = true;
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

    update(_, dt, time) {
        if (this.paused) return;

        //this.body.setVelocityY(1);


        //------------------------ Enemy AI ------------------------------------
        this.chasing = false;


        //verifica se a posicao jogador e do inimigo no mesmo plano

        if (Math.abs((Math.round(this.y) - Math.round(player.y)) < 60)) {

            //se o inimigo e o jogador estiveram na mesma camada este vai seguilo
            if (Math.round(player.x) > Math.round(this.x)) {
                // we increase the speed from the default 80 to 200
                this.body.velocity.x = 120;
                this.dir = 1;
            } else {
                this.body.velocity.x = -100;
                this.dir = -1;
            }
        } else {


            if (this.dir === 1) {
                if (this.body.velocity.x === 0 && this.dir === 1) {
                    this.dir = -1;
                    this.body.velocity.x = -80;
                }
                else{
                    this.body.velocity.x = 80;
                }
            } else if (this.dir === -1) {
                if (this.body.velocity.x === 0 && this.dir === -1) {
                    this.dir = 1;
                    this.body.velocity.x = 80;
                }
                else {
                    this.body.velocity.x = -80;
                }
            }
        }

        this.hp.x = this.x - 40;
        this.hp.y = this.y - 80;
        this.hp.draw();

    }
}
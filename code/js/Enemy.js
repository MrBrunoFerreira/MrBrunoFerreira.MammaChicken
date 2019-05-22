class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, sprite, attack, run){
        super(scene,x, y, sprite, 0);
        this.dir = 1;
        this.speed = 100;
        this.lifespan = 0;
        this.paused = false; //ai pause
        this.texture = sprite;
        this.attack = attack;
        this.run = run;
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

    update(time) {
        if (this.paused) return;



        //------------------------ Enemy AI ------------------------------------

        /*
        if(time > this.lastFired && this.hp.value !== 0 &&  this.hDif < 300){

            this.body.setVelocityX(100);
            this.anims.play(enemyCorrer);
            this.lastFiredtt = time + 100;

        }

        /*
        if (this.hDif < 30 &&  this.wDif < 500) {

            if(this.hDif < 30 &&  this.wDif < 120){
                console.log("1");
                this.anims.play(this.attack);
            }
            if (Math.round(player.x) > Math.round(this.x)) {
                // we increase the speed from the default 80 to 200
                console.log("2");
                this.play(this.run);
                this.body.velocity.x = 250;
                this.dir = 1;
            } else {
                console.log("3");
                this.play(this.run);
                this.body.velocity.x = -250;
                this.dir = -1;
            }
        }


        else {


            if (this.dir === 1) {
                if (this.body.velocity.x === 0 && this.dir === 1) {
                    this.dir = -1;
                    this.body.velocity.x = -150;
                }
                else{
                    this.play(this.run);
                    this.body.velocity.x = 150;
                }
            } else if (this.dir === -1) {
                if (this.body.velocity.x === 0 && this.dir === -1) {
                    this.dir = 1;
                    this.play(this.run);
                    this.body.velocity.x = 150;
                }
                else {
                    this.body.velocity.x = -150;
                }
            }
        }

        /*if(Math.abs((Math.round(this.x) - Math.round(player.x)) > 20) && Math.abs((Math.round(this.y) - Math.round(player.y)) < 10)){
            console.log(Math.abs((Math.round(this.x) - Math.round(player.x)) > 20)+"    " + Math.abs((Math.round(this.y) - Math.round(player.y)) < 10) );

            this.anims.play(this.attack);
            this.lastFired = time + 500;
        }

        if(time > this.lastFired){
            this.anims.play(this.texture);
        }*/

        this.hp.x = this.x - 40;
        this.hp.y = this.y - 80;
        this.hp.draw();

    }
}
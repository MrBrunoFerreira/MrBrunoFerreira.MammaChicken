class Bala extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, frame){
        super(scene, x, y, 'bullet', frame);
    }

    fire(source){
        //General setup stuff
        this.setScale(0.1);
        //this.body.isCircle = true;
        this.body.allowGravity = false;
        //Direction false: left, true: right
        this.dir = source.dir;
        let speed = 600;
        if(this.dir === 1 || this.dir===0) {
            this.body.setVelocityX(speed);
            this.bulletDir = 1;
        }
        else {
            this.body.setVelocityX(-speed);
            this.bulletDir = -1;
        }
        this.setActive(true);
        this.setVisible(true);
    }

    hit(other){
        //tira vida ao inimigo
        this.setActive(false);
        this.setVisible(false);
    }


    update(time) {

    }
}
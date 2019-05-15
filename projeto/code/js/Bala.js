class Bala extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, frame){
        super(scene, x, y, 'bullet', frame);
    }

    fire(source){
        //General setup stuff
        this.setScale(1.5);
        //this.body.isCircle = true;
        this.body.allowGravity = false;
        //Direction false: left, true: right
        let dir = source.flipX;
        let speed = 500;
        if(dir)
            this.body.setVelocityX(speed);
        else
            this.body.setVelocityX(-speed);
    }

    hit(other){
        //tira vida ao inimigo
    }
}
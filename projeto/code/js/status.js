"use strict";

var prevpage;

var brilho;

var hit;

class status extends Phaser.Scene{
    constructor(){
        super({
            key: "status"
        });
    }

    init(data){
        brilho=data.brilho;
        prevpage=data.nextpage;
        hit=data.hit;
    }

    preload(){

    }

    create(){
        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //background
        let bck_bar=this.add.image(80 , 20 ,"bck_health").setScale(0.3).setVisible(true);
        //load hearts
        let heart1=this.add.image(40 , 20 ,"img_heart").setScale(0.3).setVisible(true);
        let heart2=this.add.image(80 , 20 ,"img_heart").setScale(0.3).setVisible(true);
        let heart3=this.add.image(120 , 20 ,"img_heart").setScale(0.3).setVisible(true);

        //console.log("heart1.visible="+heart1.visible);

        //brilho
        this.cameras.main.setAlpha(brilho);

    }

    getheart(){
        if(status.heart1.visible && status.heart2.visible && status.heart3.visible){
            return 3;
        } else if (heart1.visible && heart2.visible && !heart3.visible) {
            return 2;
        }else if (heart1.visible && !heart2.visible && !heart3.visible) {
            return 1;
        }else if (!heart1.visible && !heart2.visible && !heart3.visible) {
            return 0;
        }
    }
    

    update(){
        //variavies
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        if(hit){
            console.log("hit");
          
        }
    }

}
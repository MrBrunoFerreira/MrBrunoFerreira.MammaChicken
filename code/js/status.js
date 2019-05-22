"use strict";

var prevpage;

var brilho;

var heart1;
let heart2;
let heart3;

class status extends Phaser.Scene{
    constructor(){
        super({
            key: "status"
        });
    }

    init(data){
        brilho=data.brilho;
        prevpage=data.nextpage;
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
        heart1=this.add.image(40 , 20 ,"img_heart").setScale(0.3).setVisible(true);
        heart2=this.add.image(80 , 20 ,"img_heart").setScale(0.3).setVisible(true);
        heart3=this.add.image(120 , 20 ,"img_heart").setScale(0.3).setVisible(true);

        //console.log("heart1.visible="+heart1.visible);

        //brilho
        this.cameras.main.setAlpha(brilho);

    }

    update(){
        //variavies
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

    }

}
"use strict";

var prevpage;

var brilho;

class survive extends Phaser.Scene{
    constructor(){
        super({
            key: "survive"
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

        //contador sobrevivencia
        text1 = this.add.text(cw/2 - 60, 30);

        //brilho
        this.cameras.main.setAlpha(brilho);

    }
    

    update(time){

        //update sobrevivencia
        text1.setText('Sobreviveu:' + time + "segundos");

    }

}
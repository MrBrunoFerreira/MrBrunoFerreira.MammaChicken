"use strict";

var prevpage;

var brilho;

var timer;
var elapsed ;

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

        //timer = this.scene.time.delayedCall(0,null);
        /*timer = this.scene.time.addEvent({
            delay: 0,                // ms
            callback: null
            //args: [],
            callbackScope: thisArg,
            loop: true
        });*/
        
        timer = this.time.delayedCall(100000000, null, [], this);

        //brilho
        this.cameras.main.setAlpha(brilho);

    }
    

    update(time){

        //update sobrevivencia
        
        //elapsed = timer.getElapsed(); 
        text1.setText('Event.progress: ' + timer.getProgress().toString().substr(0, 4));
        //text1.setText('Sobreviveu:' + timer + "segundos");

    }

}
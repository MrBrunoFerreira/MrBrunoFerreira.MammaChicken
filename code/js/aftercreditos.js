"use strict";

var prevpage;

var brilho;

var timehelp=0;

class aftercreditos extends Phaser.Scene{
    constructor(){
        super({
            key: "aftercreditos"
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

        btnSound=this.sound.add("btn_music");
        levelSound.stop();

        var content = [
        "Assim acompanhamos o inicio da jornada do Vito.",
        "Mas como é que ele vai salvar a sua mãe??",
        " ",
        "Para descobrir como é que vito irá salvar a sua mãe",
        "basta ajudar os criadores deste projeto.",
        " ",
        "Criadores:",
        "-Bruno Ferreira",
        "-Sergio Machado"
    ];

    this.add.text(100, 60, content, {
        fontFamily: 'Arial',
        color: '#00ff00',
        lineSpacing: 10
    });

        //brilho
        this.cameras.main.setAlpha(brilho);

        setTimeout(function () {

            timehelp=1;
            
        }, 10000); 

    }
    

    update(){

        if(timehelp==1){
            this.scene.stop();
            this.scene.start("menu_historia",brilho);
            this.sound.stopAll();
            let music_menu=this.sound.add("menu_music");
            music_menu.play({
                loop:true
            }); 
        }

    }

}
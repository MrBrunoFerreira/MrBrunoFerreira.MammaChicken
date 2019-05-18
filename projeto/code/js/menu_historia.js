"use strict";

var brilho;

class menu_historia extends Phaser.Scene{
    constructor(){
        super({
            key: "menu_historia"
        });
    }

    init(data) {
        //console.log(data);
        brilho=data;
    }

    preload() {

       
    }
    create() {
        //console.log("Menu Jogar!");        
        
        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //mostrar imagens
        //background
        let bck_historia=this.add.image(cw/2,ch/2,"bck_historia").setScale(0.3);
        //botao voltar
        let btn_voltar=this.add.image(90,ch-60,"btn_voltar").setScale(0.3).setInteractive({cursor:"pointer"});
        //botao sair
        let btn_opcoes=this.add.image(cw-90,ch-60,"btn_opcoes").setScale(0.3).setInteractive({cursor:"pointer"});
        //botao level1
        let btn_level1=this.add.image(cw/2 +10,ch/2 +10,"btn_level").setScale(0.3).setInteractive({cursor:"pointer"});        
        //botao level2
        let btn_level2=this.add.image(cw/2 +150,ch/2 +10,"btn_level").setScale(0.3).setInteractive({cursor:"pointer"});        
        //botao level3
        let btn_level3=this.add.image(cw/2 +10,ch/2 +150,"btn_level").setScale(0.3).setInteractive({cursor:"pointer"});
        //botao level4
        let btn_level4=this.add.image(cw/2 +150,ch/2 +150,"btn_level").setScale(0.3).setInteractive({cursor:"pointer"});        

        //brilho
        bck_historia.setAlpha(brilho);
        btn_voltar.setAlpha(brilho);
        btn_opcoes.setAlpha(brilho);
        btn_level1.setAlpha(brilho);
        btn_level2.setAlpha(brilho);
        btn_level3.setAlpha(brilho);
        btn_level4.setAlpha(brilho);

        //efeitos
        //clicar btn
        let btnSound=this.sound.add("btn_music");
        //btnSound.play();

        //eventListerens dos btns

        //btn_voltar
        btn_voltar.on("pointerover",function(){
            this.setScale(0.32);
        });


        btn_voltar.on("pointerdown",function(){
            btnSound.play();
            this.scene.start("menu_jogar",brilho);
        },this);


        btn_voltar.on("pointerout",function(){
            this.setScale(0.3);
        });


        //btn_opcoes
        btn_opcoes.on("pointerover",function(){
            this.setScale(0.32);
        });


        btn_opcoes.on("pointerdown",function(){
            btnSound.play();
            console.log("cliquei botao opcoes");
            this.scene.start("menu_opcoes","3");
        },this);


        btn_opcoes.on("pointerout",function(){
            this.setScale(0.3);
        });


        //btn_level1
        btn_level1.on("pointerover",function(){
            this.setScale(0.32);
        });


        btn_level1.on("pointerdown",function(){
            btnSound.play();
            this.scene.start("level1",brilho);
        },this);


        btn_level1.on("pointerout",function(){
            this.setScale(0.3);
        });



        //btn_level2
        btn_level2.on("pointerover",function(){
            this.setScale(0.32);
        });


        btn_level2.on("pointerdown",function(){
            btnSound.play();
            this.scene.start("level2",brilho);
        },this);


        btn_level2.on("pointerout",function(){
            this.setScale(0.3);
        });



        //btn_level3
        btn_level3.on("pointerover",function(){
            this.setScale(0.32);
        });


        btn_level3.on("pointerdown",function(){
            btnSound.play();
            this.scene.start("level3",brilho);
        },this);


        btn_level3.on("pointerout",function(){
            this.setScale(0.3);
        });
    }


    update(){

    }

}
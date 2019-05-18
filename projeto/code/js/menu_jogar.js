"use strict";

var brilho;

class menu_jogar extends Phaser.Scene{
    constructor(){
        super({
            key: "menu_jogar"
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
        let bck_jogar=this.add.image(cw/2,ch/2,"bck_jogar").setScale(0.3);
        //botao voltar
        let btn_voltar=this.add.image(90,ch-60,"btn_voltar").setScale(0.3).setInteractive({cursor:"pointer"});
        //botao sair
        let btn_opcoes=this.add.image(cw-90,ch-60,"btn_opcoes").setScale(0.3).setInteractive({cursor:"pointer"});
        //botao historia
        let btn_historia=this.add.image(cw/2 +77,ch/2,"btn_historia").setScale(0.3).setInteractive({cursor:"pointer"});        
        //botao arcada
        let btn_arcada=this.add.image(cw/2 +77,ch/2+75,"btn_arcada").setScale(0.3).setInteractive({cursor:"pointer"});        
        //botao ranking
        let btn_ranking=this.add.image(cw/2 +77,ch/2+150,"btn_ranking").setScale(0.3).setInteractive({cursor:"pointer"});        

        //brilho
        bck_jogar.setAlpha(brilho);
        btn_voltar.setAlpha(brilho);
        btn_opcoes.setAlpha(brilho);
        btn_historia.setAlpha(brilho);
        btn_arcada.setAlpha(brilho);
        btn_ranking.setAlpha(brilho);

        //efeitos
        //clicar btn
        let btnSound=this.sound.add("btn_music");
        //btnSound.play();

        //eventListerens dos btns
        //btn_voltar
        btn_voltar.on("pointerover",function(event){
            this.setScale(0.32);
        });
        btn_voltar.on("pointerdown",function(event){
            btnSound.play();
            console.log("cliquei")
            this.scene.start("menu_inicial",brilho);
        },this);
        btn_voltar.on("pointerout",function(event){
            this.setScale(0.3);
        });
        //btn_opcoes
        btn_opcoes.on("pointerover",function(event){
            this.setScale(0.32);
        });
        btn_opcoes.on("pointerdown",function(event){
            btnSound.play();
            console.log("cliquei botao opcoes");
            this.scene.start("menu_opcoes","2");
        },this);
        btn_opcoes.on("pointerout",function(event){
            this.setScale(0.3);
        });
        //btn_historia
        btn_historia.on("pointerover",function(event){
            this.setScale(0.32);
        });
        btn_historia.on("pointerdown",function(event){
            btnSound.play();
            //console.log("cliquei botao historia");
            this.scene.start("menu_historia",brilho);
        },this);
        btn_historia.on("pointerout",function(event){
            this.setScale(0.3);
        });
        //btn_arcada
        btn_arcada.on("pointerover",function(event){
            this.setScale(0.32);
        });
        btn_arcada.on("pointerdown",function(event){
            this.scene.start("arcade",brilho);
        },this);
        btn_arcada.on("pointerout",function(event){
            this.setScale(0.3);
        });
        //btn_ranking
        btn_ranking.on("pointerover",function(event){
            this.setScale(0.32);
        });
        /*btn_ranking.on("pointerdown",function(event){
            console.log("cliquei botao opcoes");
            this.scene.start("menu_opcoes","Passei data para menu_opcoes");
        },this);*/
        btn_ranking.on("pointerout",function(event){
            this.setScale(0.3);
        });

    }
    update(){

    }

}
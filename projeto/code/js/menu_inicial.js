"use strict";

var brilho;

class menu_inicial extends Phaser.Scene{
    constructor(){
        super({
            key: "menu_inicial"
        });
    }

    init(data) {
        //console.log(data);
        brilho=data;
    }

    preload() {

       
    }
    create() {
    //console.log("Menu Inicial!");        
    //variaveis
    let ch=this.game.renderer.height;
    let cw=this.game.renderer.width;

    //mostrar imagens
    //background
    let bck_inicial=this.add.image(cw/2,ch/2,"bck_inicial").setScale(0.3);
    //botao jogar
    let btn_jogar=this.add.image(cw/2+80,ch/2-50,"btn_jogar").setScale(0.33).setInteractive({cursor:"pointer"});
    //botao opcoes
    let btn_opcoes=this.add.image(cw/2+80,ch/2+75-50,"btn_opcoes").setScale(0.33).setInteractive({cursor:"pointer"});
    //botao creditos
    let btn_creditos=this.add.image(cw/2+80,ch/2+150-50,"btn_creditos").setScale(0.33).setInteractive({cursor:"pointer"});
    //botao sair
    let btn_sair=this.add.image(cw/2+80,ch/2+225-50,"btn_sair").setScale(0.33).setInteractive({cursor:"pointer"});

    //brilho
    bck_inicial.setAlpha(brilho);
    btn_jogar.setAlpha(brilho);
    btn_opcoes.setAlpha(brilho);
    btn_creditos.setAlpha(brilho);
    btn_sair.setAlpha(brilho);

    //efeitos
    //clicar btn
    let btnSound=this.sound.add("btn_music");
    //btnSound.play();

    //eventListeners dos btns
    this.input.manager.enable=true;

        
    //btn_jogar
    btn_jogar.on("pointerover",function(event){
        this.setScale(0.35);
    });
    btn_jogar.on("pointerdown",function(event){
        btnSound.play();
        //console.log("cliquei botao jogar");
        
        this.scene.start("menu_jogar",brilho);
    },this);

    btn_jogar.on("pointerout",function(event){
        this.setScale(0.33);
    });
    //btn_opcoes
    btn_opcoes.on("pointerover",function(event){
        this.setScale(0.35);
    });
    btn_opcoes.on("pointerdown",function(event){
        btnSound.play();
        console.log("cliquei botao opcoes");
        
        this.scene.start("menu_opcoes","1");
    },this);

    btn_opcoes.on("pointerout",function(event){
        this.setScale(0.33);
    });
    //btn_creditos
    btn_creditos.on("pointerover",function(event){
        this.setScale(0.35);
    });

    btn_creditos.on("pointerdown",function(event){
        console.log("cliquei botao creditos");
        btnSound.play();
        this.scene.start("menu_creditos",brilho);
    },this);

    btn_creditos.on("pointerout",function(event){
        this.setScale(0.33);
    });
    //btn_sair
    btn_sair.on("pointerover",function(event){
        this.setScale(0.35);
    });
    btn_sair.on("pointerdown",function(event){
        //console.log("cliquei botao creditos");
        btnSound.play();
        this.sys.game.destroy(true);
    },this);
    

    btn_sair.on("pointerout",function(event){
        this.setScale(0.33);
    });



    }

    update(){

    }

}
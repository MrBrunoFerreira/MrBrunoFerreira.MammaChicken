"use strict";

var brilho;

class menu_creditos extends Phaser.Scene{
    constructor(){
        super({
            key: "menu_creditos"
        });
    }

    init(data) {
        //console.log(data);
        brilho=data;
    }

    preload() {

       
    }
    create() {
        //console.log("Menu Creditos!");        
        
        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //mostrar imagens
        //background
        let bck_creditos=this.add.image(cw/2,ch/2,"bck_creditos").setScale(0.3);
        //botao voltar
        let btn_voltar=this.add.image(90,ch-60,"btn_voltar").setScale(0.3).setInteractive({cursor:"pointer"});
        //botao sair
        let btn_sair=this.add.image(cw-90,ch-60,"btn_sair").setScale(0.3).setInteractive({cursor:"pointer"});

        //brilho
        bck_creditos.setAlpha(brilho);
        btn_voltar.setAlpha(brilho);
        btn_sair.setAlpha(brilho);

        //var music_menu=this.sound.add("menu_music");
        //music_menu.play();

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
            this.scene.start("menu_inicial",brilho);
        },this);
        btn_voltar.on("pointerout",function(event){
            this.setScale(0.3);
        });
        //btn_sair
        btn_sair.on("pointerover",function(event){
            this.setScale(0.32);
        });
        btn_sair.on("pointerdown",function(event){
            btnSound.play();
            this.sys.game.destroy(true);
        },this);

        btn_sair.on("pointerout",function(event){
            this.setScale(0.3);
        });

    }
    update(){

    }

}
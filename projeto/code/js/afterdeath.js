"use strict";

var prevpage;

var brilho;


class afterdeath extends Phaser.Scene{
    constructor(){
        super({
            key: "afterdeath"
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

        levelSound.stop();

        //background
        let bck_panel=this.add.image(cw/2 + 30 ,ch/2 + 30  ,"bck_alert").setScale(0.5).setVisible(true);
        //botao errado ->voltar menus
        let btn_errado=this.add.image(cw/2 - 90,ch/2  +110 ,"btn_errado").setScale(0.3).setInteractive({cursor:"pointer"}).setVisible(true);
        //botao certo ->reiniciar nivel
        let btn_certo=this.add.image(cw/2 + 150,ch/2  +110 ,"btn_certo").setScale(0.3).setInteractive({cursor:"pointer"}).setVisible(true);

        //btn_certoR
        btn_certo.on("pointerover",function(event){
            this.setScale(0.35);
        });
        btn_certo.on("pointerdown",function(event){
            //btnSound.play();
            let scene1 = this.scene.get('status');
            scene1.scene.stop();
            let scene3 = this.scene.get('menu_pause');
            scene3.scene.stop();
            if(prevpage==1){
                let theOtherScene = this.scene.get('level1');
                theOtherScene.scene.restart();
                bck_panel.setVisible(false);
                btn_errado.setVisible(false);
                btn_certo.setVisible(false);
                text0.setVisible(false);
                this.scene.resume("level1");
            }
            if(prevpage==2){
                let theOtherScene = this.scene.get('level2');
                theOtherScene.scene.restart();
                bck_panel.setVisible(false);
                btn_errado.setVisible(false);
                btn_certo.setVisible(false);
                text0.setVisible(false);
                this.scene.resume("level2");
            }
            if(prevpage==3){
                let theOtherScene = this.scene.get('level3');
                theOtherScene.scene.restart();
                bck_panel.setVisible(false);
                btn_errado.setVisible(false);
                btn_certo.setVisible(false);
                text0.setVisible(false);
                this.scene.resume("level3");
            }
            if(prevpage==4){
                let theOtherScene = this.scene.get('level4');
                theOtherScene.scene.restart();
                bck_panel.setVisible(false);
                btn_errado.setVisible(false);
                btn_certo.setVisible(false);
                text0.setVisible(false);
                this.scene.resume("level4");
            }
            if(prevpage==5){
                let theOtherScene = this.scene.get('arcade');
                theOtherScene.scene.restart();
                bck_panel.setVisible(false);
                btn_errado.setVisible(false);
                btn_certo.setVisible(false);
                text0.setVisible(false);
                this.scene.resume("arcade");
            }
            
        },this);
        btn_certo.on("pointerout",function(event){
            this.setScale(0.3);
        });
        //btn_certoH
        btn_errado.on("pointerover",function(event){
            this.setScale(0.35);
        });
        btn_errado.on("pointerdown",function(event){
            //btnSound.play();
            //para voltar para o menu historia
            let scene2 = this.scene.get('status');
            scene2.scene.stop();
            let scene4 = this.scene.get('menu_pause');
            scene4.scene.stop();
            if(prevpage==1){
                this.scene.resume("level1");
                let theOtherScene = this.scene.get('level1');
                theOtherScene.scene.stop();
                this.scene.start("menu_historia");
            }
            if(prevpage==2){
                this.scene.resume("level2");
                let theOtherScene = this.scene.get('level2');
                theOtherScene.scene.stop();
                this.scene.start("menu_historia");
            }
            if(prevpage==3){
                this.scene.resume("level3");
                let theOtherScene = this.scene.get('level3');
                theOtherScene.scene.stop();
                this.scene.start("menu_historia");
            }
            if(prevpage==4){
                this.scene.resume("level4");
                let theOtherScene = this.scene.get('level4');
                theOtherScene.scene.stop();
                this.scene.start("menu_historia");
            }
            if(prevpage==5){
                this.scene.resume("arcade");
                let theOtherScene = this.scene.get('arcade');
                theOtherScene.scene.stop();
                this.scene.start("menu_jogar");
            }
            
        },this);
        btn_errado.on("pointerout",function(event){
            this.setScale(0.3);
        });

        //text0 ->Morreu
        let content0 = [
            " Infelizmente Morreu :(",
            "Quer recomeçar no nível?"  
        ];
        let text0 = this.add.text(cw/2 -100,ch/2 - 20, content0, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            //backgroundColor: '#000000',
            fill: '#000000'
        });
        text0.setScrollFactor(1);
        text0.setVisible(true);


        //brilho
        this.cameras.main.setAlpha(brilho);

    }
    

    update(){

    }

}
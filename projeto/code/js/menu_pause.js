"use strict";

var prevpage;

var volumeBar;
var volumeBox;

class menu_pause extends Phaser.Scene{
    constructor(){
        super({
            key: "menu_pause"
        });
    }

    init(data){
        prevpage=data;
    }

    preload(){

    }

    create(){


        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //background
        let bck_pause=this.add.image(cw/2 - 50,ch/2 - 50,"bck_pause").setScale(0.3);
        //bck alert
        let bck_alert=this.add.image(cw/2 + 30 ,ch/2 + 30  ,"bck_alert").setScale(0.5).setVisible(false);

        //botao pause
        let btn_pause=this.add.image(cw - 40,40,"btn_pause").setScale(0.33).setInteractive({cursor:"pointer"}).setVisible(true);
        //botao minus volume
        let btn_vMinus=this.add.image(cw/2 + 15,ch/2 - 35,"btn_minus").setScale(0.2).setInteractive({cursor:"pointer"});
        //botao plus volume
        let btn_vPlus=this.add.image(cw/2 + 140,ch/2 - 35,"btn_plus").setScale(0.2).setInteractive({cursor:"pointer"});
        //botao reiniciar
        let btn_reiniciar=this.add.image(cw/2 - 20,ch/2 + 50,"btn_reiniciar").setScale(0.4).setInteractive({cursor:"pointer"});
        //botao reiniciar
        let btn_menuVoltar=this.add.image(cw/2 + 100,ch/2  +50 ,"btn_menuVoltar").setScale(0.4).setInteractive({cursor:"pointer"});
        //botao errado
        let btn_erro=this.add.image(cw/2 - 90,ch/2  +110 ,"btn_errado").setScale(0.3).setInteractive({cursor:"pointer"}).setVisible(false);
        //botao certo Home ->vai menu_historia
        let btn_certoH=this.add.image(cw/2 + 150,ch/2  +110 ,"btn_certo").setScale(0.3).setInteractive({cursor:"pointer"}).setVisible(false);
        //botao certo Reiniciar ->Reinicia nivel
        let btn_certoR=this.add.image(cw/2 + 150,ch/2  +110 ,"btn_certo").setScale(0.3).setInteractive({cursor:"pointer"}).setVisible(false);

        //eventListerens
        //btn_pause
        btn_pause.on("pointerover",function(event){
            this.setScale(0.35);
        });
        btn_pause.on("pointerdown",function(event){
            //btnSound.play();
            btn_pause.setVisible(false);
            bck_pause.setVisible(false);
            btn_vMinus.setVisible(false);
            btn_vPlus.setVisible(false);
            volumeBox.setVisible(false);
            volumeBar.setVisible(false);
            btn_reiniciar.setVisible(false);
            btn_menuVoltar.setVisible(false);
            bck_alert.setVisible(false);
            btn_erro.setVisible(false);
            btn_certoR.setVisible(false);
            btn_certoH.setVisible(false);
            text0.setVisible(false);
            text1.setVisible(false);
            if(prevpage==1){
                this.scene.resume("level1");
            }
            

        },this);
        btn_pause.on("pointerout",function(event){
            this.setScale(0.33);
        });

        //btn_vMinus
        btn_vMinus.on("pointerover",function(event){
            this.setScale(0.22);
        });
        btn_vMinus.on("pointerdown",function(event){
            //btnSound.play();
            //console.log("Volume:"+this.sound.volume);
            volumeBar.clear();
            if(this.sound.volume>0){
                this.sound.volume = this.sound.volume - 0.1;
            }
        },this);
        btn_vMinus.on("pointerout",function(event){
            this.setScale(0.2);
        });
        //btn_vPlus
        btn_vPlus.on("pointerover",function(event){
            this.setScale(0.22);
        });
        btn_vPlus.on("pointerdown",function(event){
            //btnSound.play();
            //console.log("Volume:"+this.sound.volume);
            if(this.sound.volume<1){
                this.sound.volume = this.sound.volume + 0.1;
            }  
        },this);
        btn_vPlus.on("pointerout",function(event){
            this.setScale(0.2);
        });
        //btn_reiniciar
        btn_reiniciar.on("pointerover",function(event){
            this.setScale(0.45);
        });
        btn_reiniciar.on("pointerdown",function(event){
            //btnSound.play();
            //console.log("Volume:"+this.sound.volume);
            bck_alert.setVisible(true);
            btn_erro.setVisible(true);
            btn_certoR.setVisible(true);
            text0.setVisible(true);
            bck_alert.setDepth(10);
            btn_erro.setDepth(10);
            btn_certoR.setDepth(10);
            text0.setDepth(10);
            
        },this);
        btn_reiniciar.on("pointerout",function(event){
            this.setScale(0.4);
        });
        //btn_menuVoltar
        btn_menuVoltar.on("pointerover",function(event){
            this.setScale(0.45);
        });
        btn_menuVoltar.on("pointerdown",function(event){
            //btnSound.play();
            bck_alert.setVisible(true);
            btn_erro.setVisible(true);
            btn_certoH.setVisible(true);
            text1.setVisible(true);
            bck_alert.setDepth(10);
            btn_erro.setDepth(10);
            btn_certoH.setDepth(10);
            text1.setDepth(10);


            
            
        },this);
        btn_menuVoltar.on("pointerout",function(event){
            this.setScale(0.4);
        });
        //btn_errado
        btn_erro.on("pointerover",function(event){
            this.setScale(0.35);
        });
        btn_erro.on("pointerdown",function(event){
            //btnSound.play();
            text0.setVisible(false);
            text1.setVisible(false);
            bck_alert.setVisible(false);
            btn_certoR.setVisible(false);
            btn_certoH.setVisible(false);
            btn_erro.setVisible(false);
            
        },this);
        btn_erro.on("pointerout",function(event){
            this.setScale(0.3);
        });
        //btn_certoR
        btn_certoR.on("pointerover",function(event){
            this.setScale(0.35);
        });
        btn_certoR.on("pointerdown",function(event){
            //btnSound.play();
            if(prevpage==1){
                let theOtherScene = this.scene.get('level1');
                theOtherScene.scene.restart();
                btn_pause.setVisible(false);
                bck_pause.setVisible(false);
                btn_vMinus.setVisible(false);
                btn_vPlus.setVisible(false);
                volumeBox.setVisible(false);
                volumeBar.setVisible(false);
                btn_reiniciar.setVisible(false);
                btn_menuVoltar.setVisible(false);
                bck_alert.setVisible(false);
                btn_erro.setVisible(false);
                btn_certoR.setVisible(false);
                text1.setVisible(false);
                text0.setVisible(false);
                this.scene.resume("level1");
            }
            
        },this);
        btn_certoR.on("pointerout",function(event){
            this.setScale(0.3);
        });
        //btn_certoH
        btn_certoH.on("pointerover",function(event){
            this.setScale(0.35);
        });
        btn_certoH.on("pointerdown",function(event){
            //btnSound.play();
            //para voltar para o menu historia
            if(prevpage==1){
                this.scene.resume("level1");
                let theOtherScene = this.scene.get('level1');
                theOtherScene.scene.stop();
                this.scene.start("menu_historia");
            }
            
        },this);
        btn_certoH.on("pointerout",function(event){
            this.setScale(0.3);
        });
        

        //text0 ->Voltar Menu Historia
        let content0 = [
            "      !!ALERTA!!",
            "Se clicar no certo vai",
            "Reiniciar o Nivel atual!"   
        ];
        let text0 = this.add.text(cw/2 -100,ch/2 - 20, content0, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            //backgroundColor: '#000000',
            fill: '#000000'
        });
        text0.setScrollFactor(1);
        text0.setVisible(false);
        //text1 ->Reiniciar Nivel
        let content1 = [
            "      !!ALERTA!!",
            "Se clicar no certo vai",
            "voltar ao Menu Historia!"      
        ];
        let text1 = this.add.text(cw/2 - 100,ch/2 - 20 , content1, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            //backgroundColor: '#000000',
            fill: '#000000'
        });
        text1.setScrollFactor(1);
        text1.setVisible(false);


        //gui
        //volume box
        volumeBox=this.add.graphics();
        volumeBox.fillStyle(0x222222,1);
        volumeBox.fillRect(cw/2 + 35,ch/2 - 50, 85, 35);
        //volume bar
        volumeBar=this.add.graphics();

    }

    update(){
        //variavies
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //console.log("Volume="+this.sound.volume);

        //volumeBar update
        //volumeBar.fillStyle(0xe6e6e6,0.5);
        volumeBar.fillStyle(0xe6e6e6,1);
        volumeBar.fillRect(cw/2 + 37 ,ch/2 -48 ,this.sound.volume*81,32);
        
    }

}
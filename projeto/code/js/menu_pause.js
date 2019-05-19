"use strict";

var prevpage;

var brilho;

var volumeBar;
var volumeBox;

class menu_pause extends Phaser.Scene{
    constructor(){
        super({
            key: "menu_pause"
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

        //background
        let bck_pause=this.add.image(cw/2 - 50,ch/2 - 50,"bck_pause").setScale(0.3).setVisible(false);
        //bck alert
        let bck_alert=this.add.image(cw/2 + 30 ,ch/2 + 30  ,"bck_alert").setScale(0.5).setVisible(false);

        //botao pause
        let btn_pause=this.add.image(cw - 40,40,"btn_pause").setScale(0.33).setInteractive({cursor:"pointer"}).setVisible(false);
        //botao minus volume
        let btn_vMinus=this.add.image(cw/2 + 15,ch/2 - 35,"btn_minus").setScale(0.2).setInteractive({cursor:"pointer"}).setVisible(false);
        //botao plus volume
        let btn_vPlus=this.add.image(cw/2 + 140,ch/2 - 35,"btn_plus").setScale(0.2).setInteractive({cursor:"pointer"}).setVisible(false);
        //botao reiniciar
        let btn_reiniciar=this.add.image(cw/2 - 20,ch/2 + 50,"btn_reiniciar").setScale(0.4).setInteractive({cursor:"pointer"}).setVisible(false);
        //botao reiniciar
        let btn_menuVoltar=this.add.image(cw/2 + 100,ch/2  +50 ,"btn_menuVoltar").setScale(0.4).setInteractive({cursor:"pointer"}).setVisible(false);
        //botao errado
        let btn_erro=this.add.image(cw/2 - 90,ch/2  +110 ,"btn_errado").setScale(0.3).setInteractive({cursor:"pointer"}).setVisible(false);
        //botao certo Home ->vai menu_historia
        let btn_certoH=this.add.image(cw/2 + 150,ch/2  +110 ,"btn_certo").setScale(0.3).setInteractive({cursor:"pointer"}).setVisible(false);
        //botao certo Reiniciar ->Reinicia nivel
        let btn_certoR=this.add.image(cw/2 + 150,ch/2  +110 ,"btn_certo").setScale(0.3).setInteractive({cursor:"pointer"}).setVisible(false);
        //botao play
        let btn_play=this.add.image(cw - 40, 40,"btn_play").setScale(0.2).setInteractive({cursor:"pointer"}).setVisible(true);

        //eventListerens
        //btn_play
        btn_play.on("pointerover",function(event){
            this.setScale(0.22);
        });
        btn_play.on("pointerdown",function(event){
            player.body.setVelocity(0);  
            btnSound.play();
            if(prevpage==1){
                let theOtherScene = this.scene.get('level1');
                theOtherScene.scene.pause();
                levelSound.pause();
            }else if(prevpage==2){
                let theOtherScene = this.scene.get('level2');
                theOtherScene.scene.pause();
                levelSound.pause();
            }
            else if(prevpage==3){
                let theOtherScene = this.scene.get('level3');
                theOtherScene.scene.pause();
                levelSound.pause();
            }
            else if(prevpage==4){
                let theOtherScene = this.scene.get('level4');
                theOtherScene.scene.pause();
                levelSound.pause();
            }
            else if(prevpage==5){
                let theOtherScene = this.scene.get('arcade');
                theOtherScene.scene.pause();
                levelSound.pause();
                let theOtherScene1 = this.scene.get('survive');
                theOtherScene1.scene.pause();
            }
            btn_play.setVisible(false);
            bck_pause.setVisible(true);
            btn_pause.setVisible(true);
            btn_vMinus.setVisible(true);
            btn_vPlus.setVisible(true);
            volumeBox.setVisible(true);
            volumeBar.setVisible(true);
            btn_reiniciar.setVisible(true);
            btn_menuVoltar.setVisible(true);

            //this.scene.launch("menu_pause",1);
        },this);
        btn_play.on("pointerout",function(event){
            this.setScale(0.2);
        });

        //btn_pause
        btn_pause.on("pointerover",function(event){
            this.setScale(0.35);
        });
        btn_pause.on("pointerdown",function(event){
            btnSound.play();
        
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
            volumeBox.setVisible(false);
            volumeBar.setVisible(false);
            btn_play.setVisible(true);
            if(prevpage==1){
                this.scene.resume("level1");
                levelSound.resume();
            }
            if(prevpage==2){
                this.scene.resume("level2");
                levelSound.resume();
            }
            if(prevpage==3){
                this.scene.resume("level3");
                levelSound.resume();
            }
            if(prevpage==4){
                this.scene.resume("level4");
                levelSound.resume();
            }
            if(prevpage==5){
                this.scene.resume("arcade");
                levelSound.resume();
                let theOtherScene = this.scene.get('survive');
                theOtherScene.scene.resume();
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
            btnSound.play();
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
            btnSound.play();
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
            btnSound.play();
            //console.log("Volume:"+this.sound.volume);
            bck_alert.setVisible(true);
            text0.setVisible(true);
            btn_certoR.setVisible(true);
            btn_erro.setVisible(true);
            bck_alert.setDepth(10);
            text0.setDepth(10);
            btn_certoR.setDepth(10);
            btn_erro.setDepth(10);  
            
        },this);
        btn_reiniciar.on("pointerout",function(event){
            this.setScale(0.4);
        });
        //btn_menuVoltar
        btn_menuVoltar.on("pointerover",function(event){
            this.setScale(0.45);
        });
        btn_menuVoltar.on("pointerdown",function(event){
            btnSound.play();
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
            btnSound.play();
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
            btnSound.play();
            let scene1 = this.scene.get('status');
            scene1.scene.stop();
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
            if(prevpage==2){
                let theOtherScene = this.scene.get('level2');
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
                this.scene.resume("level2");
            }
            if(prevpage==3){
                let theOtherScene = this.scene.get('level3');
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
                this.scene.resume("level3");
            }
            if(prevpage==4){
                let theOtherScene = this.scene.get('level4');
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
                this.scene.resume("level4");
            }
            if(prevpage==5){
                let theOtherScene = this.scene.get('arcade');
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
                this.scene.resume("arcade");
                let theOtherScene1 = this.scene.get('survive');
                theOtherScene1.scene.restart();
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
            btnSound.play();
            //para voltar para o menu historia
            let scene2 = this.scene.get('status');
            scene2.scene.stop();
            if(prevpage==1){
                this.scene.resume("level1");
                let theOtherScene = this.scene.get('level1');
                theOtherScene.scene.stop();
                this.scene.start("menu_historia");
                let music_menu=this.sound.add("menu_music");
                music_menu.play({
                    loop:true
                });
            }
            if(prevpage==2){
                this.scene.resume("level2");
                let theOtherScene = this.scene.get('level2');
                theOtherScene.scene.stop();
                this.scene.start("menu_historia");
                let music_menu=this.sound.add("menu_music");
                music_menu.play({
                    loop:true
                });
            }
            if(prevpage==3){
                this.scene.resume("level3");
                let theOtherScene = this.scene.get('level3');
                theOtherScene.scene.stop();
                this.scene.start("menu_historia");
                let music_menu=this.sound.add("menu_music");
                music_menu.play({
                    loop:true
                });
            }
            if(prevpage==4){
                this.scene.resume("level4");
                let theOtherScene = this.scene.get('level4');
                theOtherScene.scene.stop();
                this.scene.start("menu_historia");
                let music_menu=this.sound.add("menu_music");
                music_menu.play({
                    loop:true
                });
            }
            if(prevpage==5){
                this.scene.resume("arcade");
                let theOtherScene = this.scene.get('arcade');
                theOtherScene.scene.stop();
                let theOtherScene1 = this.scene.get('survive');
                theOtherScene1.scene.stop();
                this.scene.start("menu_jogar");
                let music_menu=this.sound.add("menu_music");
                music_menu.play({
                    loop:true
                });
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
            "   voltar ao Menu!"      
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
        volumeBox=this.add.graphics().setVisible(false);
        volumeBox.fillStyle(0x222222,1);
        volumeBox.fillRect(cw/2 + 35,ch/2 - 50, 85, 35);
        //volume bar
        volumeBar=this.add.graphics().setVisible(false);

        //brilho
        this.cameras.main.setAlpha(brilho);

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
"use strict";

var volumeBar;
var volumeBox;
var brilhoBar;
var brilhoBox;

var obj={
            brilho:1
        };

class menu_pause extends Phaser.Scene{
    constructor(){
        super({
            key: "menu_pause"
        });
    }

    init(data){

    }

    preload(){

    }

    create(){


        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //background
        let bck_pause=this.add.image(cw/2 - 50,ch/2 - 50,"bck_pause").setScale(0.3);

        //botao pause
        let btn_pause=this.add.image(cw - 40,40,"btn_pause").setScale(0.33).setInteractive({cursor:"pointer"}).setVisible(true);

        //botao minus volume
        let btn_vMinus=this.add.image(cw/2 + 15,ch/2 - 35,"btn_minus").setScale(0.2).setInteractive({cursor:"pointer"});
        //botao plus volume
        let btn_vPlus=this.add.image(cw/2 + 140,ch/2 - 35,"btn_plus").setScale(0.2).setInteractive({cursor:"pointer"});
        //botao minus brilho
        let btn_bMinus=this.add.image(cw/2 + 15,ch/2 + 50,"btn_minus").setScale(0.2).setInteractive({cursor:"pointer"});
        //botao plus brilho
        let btn_bPlus=this.add.image(cw/2 + 140,ch/2 + 50,"btn_plus").setScale(0.2).setInteractive({cursor:"pointer"});

        //btn_pause
        btn_pause.on("pointerover",function(event){
            this.setScale(0.35);
        });
        btn_pause.on("pointerdown",function(event){
            //btnSound.play();
            
            this.scene.resume("level1");
            btn_pause.setVisible(false);
            bck_pause.setVisible(false);
            btn_vMinus.setVisible(false);
            btn_vPlus.setVisible(false);
            btn_bMinus.setVisible(false);
            btn_bPlus.setVisible(false);
            volumeBox.setVisible(false);
            volumeBar.setVisible(false);
            brilhoBox.setVisible(false);
            brilhoBar.setVisible(false);


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
        //btn_bMinus
        btn_bMinus.on("pointerover",function(event){
            this.setScale(0.22);
        });
        btn_bMinus.on("pointerdown",function(event){
            //btnSound.play();
            console.log("brilho:"+obj.brilho);
            if(obj.brilho>0){
                obj.brilho=obj.brilho - 0.1;
            }
        },this);
        btn_bMinus.on("pointerout",function(event){
            this.setScale(0.2);
        });
        //btn_bPlus
        btn_bPlus.on("pointerover",function(event){
            this.setScale(0.22);
        });
        btn_bPlus.on("pointerdown",function(event){
            //btnSound.play();
            console.log("brilho:"+obj.brilho);
            if(obj.brilho<1){
                obj.brilho = obj.brilho + 0.1;
            }  
        },this);
        btn_bPlus.on("pointerout",function(event){
            this.setScale(0.2);
        });


        //gui
        //volume box
        volumeBox=this.add.graphics();
        volumeBox.fillStyle(0x222222,1);
        volumeBox.fillRect(cw/2 + 35,ch/2 - 50, 85, 35);
        //volume bar
        volumeBar=this.add.graphics();
        //brilho box
        brilhoBox=this.add.graphics();
        brilhoBox.fillStyle(0x222222,1);
        brilhoBox.fillRect(cw/2 + 35,ch/2 + 35 , 85, 35);
        //brilho bar
        brilhoBar=this.add.graphics();

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

        //brilhoBar update
        //volumeBar.fillStyle(0xe6e6e6,0.5);
        brilhoBar.fillStyle(0xe6e6e6,1);
        brilhoBar.fillRect(cw/2 + 37,ch/2 + 36 ,obj.brilho*81,32);
        
    }

}
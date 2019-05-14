"use strict";

var pagina_ant;
var volumeBar;
var volumeBox;
var brilhoBar;
var brilhoBox;

var obj={
            brilho:1
        };

class menu_opcoes extends Phaser.Scene{
    constructor(){
        super({
            key: "menu_opcoes"
        });
    }

    init(data) {
        //this.utils.String=true;
        console.log(data);
        pagina_ant=data;
        console.log(pagina_ant);
        //console.log('"'+pagina_ant+'"');
        //pagina_ant=pagina_ant.toString();
        //pagina_ant=Format('%1',[pagina_ant]);
        //console.log(pagina_ant);
    }

    preload() {

       
    }
    create() {
        //console.log("Menu Opcoes!");        
        
        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //mostrar imagens
        //background
        let bck_opcoes=this.add.image(cw/2,ch/2,"bck_opcoes").setScale(0.3);
        //botao voltar
        let btn_voltar=this.add.image(90,ch-60,"btn_voltar").setScale(0.3).setInteractive({cursor:"pointer"});
        //botao sair
        let btn_sair=this.add.image(cw-90,ch-60,"btn_sair").setScale(0.3).setInteractive({cursor:"pointer"});
        //botao minus volume
        let btn_vMinus=this.add.image(cw/2 + 65,ch/2 + 15,"btn_minus").setScale(0.2).setInteractive({cursor:"pointer"});
        //botao plus volume
        let btn_vPlus=this.add.image(cw/2 + 190,ch/2 + 15,"btn_plus").setScale(0.2).setInteractive({cursor:"pointer"});
        //botao minus brilho
        let btn_bMinus=this.add.image(cw/2 + 65,ch/2 + 90,"btn_minus").setScale(0.2).setInteractive({cursor:"pointer"});
        //botao plus brilho
        let btn_bPlus=this.add.image(cw/2 + 190,ch/2 + 90,"btn_plus").setScale(0.2).setInteractive({cursor:"pointer"});

        //brilho
        //pequena função de loop
        let  myVar=setInterval(litte, 10);
        function litte(){
            bck_opcoes.setAlpha(obj.brilho);
            btn_voltar.setAlpha(obj.brilho);
            btn_sair.setAlpha(obj.brilho);
            btn_vMinus.setAlpha(obj.brilho);
            btn_vPlus.setAlpha(obj.brilho);
            btn_bMinus.setAlpha(obj.brilho+0.2);
            btn_bPlus.setAlpha(obj.brilho+0.2);
            volumeBox.setAlpha(obj.brilho);
            volumeBar.setAlpha(obj.brilho);
            brilhoBar.setAlpha(obj.brilho);
            brilhoBox.setAlpha(obj.brilho);         

        }

        //efeitos
        //clicar btn
        let btnSound=this.sound.add("btn_music");
        //btnSound.play();

        //eventListeners dos btns
        this.input.manager.enable=true;

        //btn_voltar
        btn_voltar.on("pointerover",function(event){
            this.setScale(0.32);    
        });
        btn_voltar.once("pointerdown",function(event){
            btnSound.play();
            //gui.destroy();
            console.log("cliquei botao voltar");

            //dependente da pagina anterior->a btn voltar tem de voltar a essa scene
            //menu_inicial=1
            //menu_jogar=2
            //menu_historia=3
            if(pagina_ant==1){
                this.scene.start("menu_inicial",obj.brilho);
            }
            if(pagina_ant==2){
                this.scene.start("menu_jogar",obj.brilho);
            }
            if(pagina_ant==3){
                this.scene.start("menu_historia",obj.brilho);
            }
            
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
            //gui.destroy();
            console.log("cliquei");
        },this);

        btn_sair.on("pointerout",function(event){
            this.setScale(0.3);
        });
        //btn_vMinus
        btn_vMinus.on("pointerover",function(event){
            this.setScale(0.22);
        });
        btn_vMinus.on("pointerdown",function(event){
            btnSound.play();
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
            btnSound.play();
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
            btnSound.play();
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
            btnSound.play();
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
        volumeBox.fillRect(ch/2 + 185,cw/2 - 100, 85, 35);
        //volume bar
        volumeBar=this.add.graphics();
        //brilho box
        brilhoBox=this.add.graphics();
        brilhoBox.fillStyle(0x222222,1);
        brilhoBox.fillRect(ch/2 + 185,cw/2 - 27, 85, 35);
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
        volumeBar.fillRect(ch/2+187,cw/2 -98 ,this.sound.volume*81,32);

        //brilhoBar update
        //volumeBar.fillStyle(0xe6e6e6,0.5);
        brilhoBar.fillStyle(0xe6e6e6,1);
        brilhoBar.fillRect(ch/2+187,cw/2 -25 ,obj.brilho*81,32);

    }

}
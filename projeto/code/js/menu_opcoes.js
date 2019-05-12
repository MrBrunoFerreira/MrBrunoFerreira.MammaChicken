"use strict";

var pagina_ant;

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
        
        //brilho
        //pequena função de loop
        let  myVar=setInterval(litte, 10);
        function litte(){
            bck_opcoes.setAlpha(obj.brilho);
            btn_voltar.setAlpha(obj.brilho);
            btn_sair.setAlpha(obj.brilho);
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


        //gui Opcoes ->dat.gui
        /*let gui = new dat.GUI({width :300});
        gui.domElement.id = 'gui';
        let sm = gui.addFolder("Opções");
        sm.add(this.sound, "volume", 0, 1).listen();
        sm.add(obj, "brilho",0,1).listen();
        sm.open();*/

        //gui Opcoes->phaser-ui-tools
        

    }

    update(){

    }

}
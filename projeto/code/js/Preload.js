"use strict";

class Preload extends Phaser.Scene{
    constructor(){
        super({
            key: 'Preload'
        });
    }

    init(data) {
        //console.log(data);
    }

    preload() {

        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //load todos os assets

        //load logo inicial
        this.load.image("logo","assets/icon/Titulo.png");
        //este ciclo for é só para dar load da imagem 500 vezes 
        //para a barra do loading demorar mais tempo a percorrer.
        //quando tivermos todos os assets a dar load não será necessario este ciclo
        for(let i=0; i<100; i++){
            this.load.image("logo"+i,"assets/icon/Titulo.png");
        }
        //load start image
        this.load.image("start","assets/Menus/start.png");

        //LOAD MENUS
        //load background menu_inicial
        this.load.image("bck_inicial","assets/Menus/menu_inicial.png");
        //load background menu_jogar
        this.load.image("bck_jogar","assets/Menus/menu_jogar.png");
        //load background menu_creditos
        this.load.image("bck_creditos","assets/Menus/menu_creditos.png");
        //load background menu historia
        this.load.image("bck_historia","assets/Menus/menu_historia.png");
        //load background menu opcoes
        this.load.image("bck_opcoes","assets/Menus/bck_opcoes.png");
        //load background menu pausa
        this.load.image("bck_pause","assets/Menus/menu_pausa.png");
        //load background alert pausa
        this.load.image("bck_alert","Chicken Run Platformer Game Assets 17/Game Ui/Image (105).png");
        //load background healthbar
        this.load.image("bck_health","Chicken Run Platformer Game Assets 17/Game Ui/Image (84).png");

        //LOAD BOTOES
        //load btn jogar
        this.load.image("btn_jogar","assets/Botoes/btn_jogar.png");
        //load btn opcoes
        this.load.image("btn_opcoes","assets/Botoes/btn_opcoes.png");
        //load btn creditos
        this.load.image("btn_creditos","assets/Botoes/btn_creditos.png");
        //load btn sair
        this.load.image("btn_sair","assets/Botoes/btn_sair.png");
        //load btn voltar
        this.load.image("btn_voltar","assets/Botoes/btn_voltar.png");
        //load btn historia
        this.load.image("btn_historia","assets/Botoes/btn_historia.png");
        //load btn arcada
        this.load.image("btn_arcada","assets/Botoes/btn_arcada.png");
        //load btn_ranking
        this.load.image("btn_ranking","assets/Botoes/btn_ranking.png");
        //load btn_level
        this.load.image("btn_level","assets/Botoes/btn_level.png");
        //load btn_minus
        this.load.image("btn_minus","Chicken Run Platformer Game Assets 17/Game Ui/Image (20).png");
        //load btn_plus
        this.load.image("btn_plus","Chicken Run Platformer Game Assets 17/Game Ui/Image (19).png");
        //load btn_play
        this.load.image("btn_play","Chicken Run Platformer Game Assets 17/Game Ui/Image (48).png");
        //load btn_pause
        this.load.image("btn_pause","Chicken Run Platformer Game Assets 17/Game Ui/Image (18).png");
        //load btn_minivoltar
        this.load.image("btn_menuVoltar","Chicken Run Platformer Game Assets 17/Game Ui/Image (70).png");
        //load btn_reiniciar
        this.load.image("btn_reiniciar","Chicken Run Platformer Game Assets 17/Game Ui/Image (39).png");
        //load btn_certo
        this.load.image("btn_certo","Chicken Run Platformer Game Assets 17/Game Ui/Image (47).png");
        //load btn_errado
        this.load.image("btn_errado","Chicken Run Platformer Game Assets 17/Game Ui/Image (57).png");
        //load img heart
        this.load.image("img_heart","Chicken Run Platformer Game Assets 17/Game Ui/Image (2).png");

        //load music
        this.load.audio("loading_music","assets/Music/loading_music.mp3");
        this.load.audio("menu_music","assets/Music/menu_music.mp3");
        this.load.audio("btn_music","assets/Music/btn_music.mp3")
        
        //LOADING
        //loading box
        let loadingbox=this.add.graphics();
        loadingbox.fillStyle(0x222222,1);
        loadingbox.fillRect(ch/2-50,cw/2.5,300,50);

        //loading bar
        let loadingbar=this.add.graphics();

        this.load.on("progress",(percent)=>{
            //loadingbar.fillRect(0,this.game.renderer.height/3,this.game.renderer.width*percent,50);
            //console.log(percent);
            loadingbar.clear();
            loadingbar.fillStyle(0xe6e6e6,0.5);
            loadingbar.fillRect(ch/2-50,cw/2.5,300*percent,50);
            
        });

        //Loading TEXT
        let loadingtext=this.make.text({
            x:cw/2,
            y:ch/2,
            text:"Loading...",
            style:{
                font: "20px monospace",
                fill: "#ffffff"
            }
        });
        loadingtext.setOrigin(0.5,0.5);

        //loading completo
        this.load.on("complete",function(){
            loadingbar.destroy();
            loadingbox.destroy();
            loadingtext.destroy();
        });

        

    }

    create() {
        

        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //mostrar imagem
        let logo=this.add.image(cw/2,ch/2,"logo").setScale(0.8);

        //let start=this.add.image(cw/2,ch/2,"start").setScale(0.9);

        //play music
        let music_loading=this.sound.add("loading_music");
        music_loading.play({
            loop:true
        });
        

        let text=this.make.text({
            x:cw/2,
            y:ch/2+125,
            text:"Clique no ecrã",
            style:{
                font: "32px",
                fill:"#ffffff"
            }
        });
        text.setOrigin(0.5,0.5);
        text.setAlpha(0);
        //piscar do texto
        this.tweens.add({
            targets:text,
            alpha: { value: 1, duration: 700, ease: 'Power1' },
            yoyo:true,
            loop:-1
        });

        this.input.manager.enable=true;

        this.input.once("pointerdown",function(event){
            this.scene.start("menu_inicial",1);
            music_loading.stop();
            let music_menu=this.sound.add("menu_music");
            music_menu.play({
                loop:true
            });
            //this.scene.start("menu_historia","main");
        },this);

    }

    update(){
        this.input.addDownCallback(function() {
                
                if (game.sound.context.state == 'suspended') {
                    game.sound.context.resume();
                }
                
            });
    }
}
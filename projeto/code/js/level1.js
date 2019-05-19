"use strict";

var obj={
        brilho:1,
        nextpage:1
};

var player;
var scene0;

var levelSound;
var jumpSound;

class level1 extends Phaser.Scene{
    constructor(){
        super({
            key: "level1"
        });
    }

    init(data) {
        //console.log(data);
        obj.brilho=data;
        obj.nextpage=1;
    }

    preload() {

        scene0 = 0;

        //Height and width
        this.ch=this.game.renderer.height;
        this.cw=this.game.renderer.width;

        //Load tiled map
        this.load.tilemapTiledJSON("map1", "maps/level1.json");
        this.load.image("chao","Chicken Run Platformer Game Assets 17/BG & Platform/image-09.png");
        this.load.image("Sky","Chicken Run Platformer Game Assets 17/BG & Platform/image-02.png");
        this.load.image("Arvore1","assets/Backgrounds/image2.png");
        this.load.image("Arvore2","assets/Backgrounds/image1.png");
        this.load.image("placa","assets/Backgrounds/teste1.png");
        this.load.image("owl","assets/Backgrounds/owl6.png");
        this.load.image("horse","assets/Backgrounds/horse-white.png");
        this.load.image("horseBrown","assets/Backgrounds/horse_brown.png");

        //Load all images
        //Load gun
        this.load.image('gun', 'Chicken Run Platformer Game Assets 17/Spriter/Character/gun.png');

        //como as animacoes dos characters estao em png tenho de dar load de cada uma
        //load run direita
        this.load.image('run0', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_000.png');
        this.load.image('run1', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_001.png');
        this.load.image('run2', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_002.png');
        this.load.image('run3', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_003.png');
        this.load.image('run4', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_004.png');
        this.load.image('run5', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_005.png');
        this.load.image('run6', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_006.png');
        this.load.image('run7', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_007.png');

        //load run esquerda
        this.load.image('run10', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_010.png');
        this.load.image('run11', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_011.png');
        this.load.image('run12', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_012.png');
        this.load.image('run13', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_013.png');
        this.load.image('run14', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_014.png');
        this.load.image('run15', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_015.png');
        this.load.image('run16', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_016.png');
        this.load.image('run17', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run_017.png');

        //load idle direita
        this.load.image('idle0', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_000.png');
        this.load.image('idle1', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_001.png');
        this.load.image('idle2', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_002.png');
        this.load.image('idle3', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_003.png');
        this.load.image('idle4', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_004.png');
        this.load.image('idle5', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_005.png');
        this.load.image('idle6', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_006.png');
        this.load.image('idle7', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_007.png');
        this.load.image('idle8', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_008.png');
        this.load.image('idle9', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_009.png');
        this.load.image('idle10', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_010.png');
        this.load.image('idle11', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_011.png');

        //load idle esquerda
        this.load.image('idle20', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_020.png');
        this.load.image('idle21', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_021.png');
        this.load.image('idle22', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_022.png');
        this.load.image('idle23', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_023.png');
        this.load.image('idle24', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_024.png');
        this.load.image('idle25', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_025.png');
        this.load.image('idle26', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_026.png');
        this.load.image('idle27', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_027.png');
        this.load.image('idle28', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_028.png');
        this.load.image('idle29', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_029.png');
        this.load.image('idle30', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_030.png');
        this.load.image('idle31', 'Chicken Run Platformer Game Assets 17/Character Sprites/Idle_031.png');

        //load jump direita
        this.load.image('jump0', 'Chicken Run Platformer Game Assets 17/Character Sprites/Jump_000.png');
        this.load.image('jump1', 'Chicken Run Platformer Game Assets 17/Character Sprites/Jump_001.png');
        this.load.image('jump2', 'Chicken Run Platformer Game Assets 17/Character Sprites/Jump_002.png');
        this.load.image('jump3', 'Chicken Run Platformer Game Assets 17/Character Sprites/Jump_003.png');
        this.load.image('jump4', 'Chicken Run Platformer Game Assets 17/Character Sprites/Jump_004.png');


        //para o loading demorar mais
        //retirar no futuro
        for(let i=0; i<100; i++){
            this.load.image("map1"+i,"maps/level1.json");
        }
        //LOADING
        //loading box
        let loadingbox=this.add.graphics();
        loadingbox.fillStyle(0x222222,1);
        loadingbox.fillRect(this.ch/2-50,this.cw/2.5,300,50);

        //loading bar
        let loadingbar=this.add.graphics();

        this.load.on("progress",(percent)=>{
            //loadingbar.fillRect(0,this.game.renderer.height/3,this.game.renderer.width*percent,50);
            //console.log(percent);
            loadingbar.clear();
            loadingbar.fillStyle(0xe6e6e6,0.5);
            loadingbar.fillRect(this.ch/2-50,this.cw/2.5,300*percent,50);
            
        });

        //Loading TEXT
        let loadingtext=this.make.text({
            x:this.cw/2,
            y:this.ch/2,
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
        //menu_pause sobre o level
        this.scene.launch("menu_pause",obj);
        //status do player sobre o level
        this.scene.launch("status",obj);

        //efeitos
        //clicar btn
        this.btnSound=this.sound.add("btn_music");
        //this.sound.mute=true;
        levelSound=this.sound.add("level1_music");
        levelSound.play({
            loop:true
        });
        jumpSound=this.sound.add("jump_music");

        //creat mapa/tilesets
        let map = this.make.tilemap({ key: "map1" });      
        let tileset1 = map.addTilesetImage("Sky");
        let tileset2 = map.addTilesetImage("chao");
        let tileset3 = map.addTilesetImage("Arvore1");
        let tileset4 = map.addTilesetImage("Arvore2");
        let tileset6 = map.addTilesetImage("placa");
        let tileset7 = map.addTilesetImage("owl");
        let tileset8 = map.addTilesetImage("horse");
        let tileset9 = map.addTilesetImage("horseBrown");
        let layer1 = map.createStaticLayer('Background', tileset1,0,0);
        let layer2 = map.createStaticLayer('Arvores', [tileset3,tileset4,tileset6,tileset7,tileset8,tileset9],0,0);
        let layer3 = map.createStaticLayer('Ground', tileset2,0,0);
        let layer4 = map.createStaticLayer('Worldbounds', tileset3,0,0);

        //load colisoes
        layer3.setCollisionByProperty({ collides: true });
        layer4.setCollisionByProperty({ collides: true });

        
        //objeto layer
        this.spawnPoint = map.findObject("Objects", obj => obj.name === "Start");
        this.ponto1 = map.findObject("Objects", obj => obj.name === "Ponto1");
        this.ponto2 = map.findObject("Objects", obj => obj.name === "Ponto2");
        this.ponto3 = map.findObject("Objects", obj => obj.name === "Ponto3");
        this.ponto4 = map.findObject("Objects", obj => obj.name === "Ponto4");
        this.ponto5 = map.findObject("Objects", obj => obj.name === "Ponto5");
        

        //gun
        this.gun=this.add.image(this.ponto5.x,150,"gun").setScale(0.5).setVisible(false);

        //spawn player
        player=this.physics.add.sprite(this.spawnPoint.x,this.spawnPoint.y-100,"idle0").setScale(0.25);
        //bounding box of player
        player.setSize(300, 340).setOffset(100,135);
        
        //colisoes entre objetos
        this.physics.add.collider(player, layer3);
        this.physics.add.collider(player, layer4);


        /*this.physics.add.collider(player, layer3,function ()
            {
            console.log("hit");
        },null, this);*/
        
        //bounce do objeto
        player.setBounce(0);

        //default camera
        this.camera = this.cameras.main;
        this.camera.startFollow(player);

        // Set up the arrows 
        this.cursors = this.input.keyboard.createCursorKeys();

        // Constrain the camera
        this.camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        //animações
        this.anims.create({
            key: 'right1',
            frames:[
                { key: 'run0' },
                { key: 'run1' },
                { key: 'run2' },
                { key: 'run3' },
                { key: 'run4' },
                { key: 'run5' },
                { key: 'run6' },
                { key: 'run7'}
            ],
            frameRate: 24     
        });

        this.anims.create({
            key: 'left1',
            frames:[
                { key: 'run10' },
                { key: 'run11' },
                { key: 'run12' },
                { key: 'run13' },
                { key: 'run14' },
                { key: 'run15' },
                { key: 'run16' },
                { key: 'run17'}
            ],
            frameRate: 24     
        });

        this.anims.create({
            key: 'down',
            frames:[
                { key: 'idle0' },
                { key: 'idle1' },
                { key: 'idle2' },
                { key: 'idle3' },
                { key: 'idle4' },
                { key: 'idle5' },
                { key: 'idle6' },
                { key: 'idle7' },
                { key: 'idle8' },
                { key: 'idle9' },
                { key: 'idle10' },
                { key: 'idle11' }   
            ],
            frameRate: 11
        });

        this.anims.create({
            key: 'up',
            frames:[
                { key: 'jump0' },
                { key: 'jump1' },
                { key: 'jump2' },
                { key: 'jump3' },
                { key: 'jump4' }
            ],
            frameRate: 5
        });


        // Debug graphics
        this.input.keyboard.once("keydown_D", () => {
            // Turn on physics debugging to show player's hitbox
            this.physics.world.createDebugGraphic();
            // Create worldLayer collision graphic above the player, but below the help text
            const graphics = this.add
              .graphics()
              .setAlpha(0.75)
              .setDepth(20);
            layer1.renderDebug(graphics, {
                tileColor: null, // Color of non-colliding tiles
                collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
                faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
            });
        });
    

        //criar textos
        //textInicial
        this.textInicial = this.add.text(this.ponto3.x, 30, 'Use as setas para correr e saltar', {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.textInicial.setScrollFactor(1);
        this.textInicial.setVisible(false);
        //text1
        let content1 = [
            "A história de Vito, o super pintainho!"
        ];

        this.text1 = this.add.text(this.ponto1.x-(this.ponto1.width), 30, content1, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text1.setScrollFactor(1);
        this.text1.setVisible(false);
        //text2
        let content2 = [
            "Alguns dizem que já é uma lenda, alguns não acreditam...",
            "mas, esta é a história de Vito, o Super Pintainho.",
            "Tudo começou quando Vito era muito pequeno, muito inocente,", 
            "nos tempos em que ele ainda acreditava no Galo Natal....",
            "porém, o maior pesadelo da sua vida ocorreu!"
        ];
        this.text2 = this.add.text(this.ponto2.x-200, 30, content2, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text2.setScrollFactor(1);
        this.text2.setVisible(false);
        //text3
        let content3 = [
            "Coruja Mu: Vito!? Como é que estás vivo?",
            "A tua mãe foi capturada pelos TALHANTES!",
            "Pensei que tu também tivesses sido..."
        ];
        this.text3 = this.add.text(this.ponto4.x-200, 30, content3, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text3.setScrollFactor(1);
        this.text3.setVisible(false);
        //text4 ->update interactividade
        let content4 = [
            "Pressione F para interagir",
            "com a Coruja Mu"
        ];
        this.text4 = this.add.text(this.ponto4.x-100, 30, content4, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text4.setScrollFactor(1);
        this.text4.setVisible(false);
        //text5 ->Fala vito
        let content5 = [
            "Vito: A minha mãe o quê??...",
        ];
        this.text5 = this.add.text(this.ponto4.x-100, 30, content5, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text5.setScrollFactor(1);
        this.text5.setVisible(false);
        //text6 
        let content6 = [
            "Coruja Mu: Sim Vito, ela foi raptada",
            "Não há nada que possamos fazer :(",
            "A não ser..."
        ];
        this.text6 = this.add.text(this.ponto4.x-100, 30, content6, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text6.setScrollFactor(1);
        this.text6.setVisible(false);
        //text7 
        let content7 = [
            "Coruja Mu:Vito! Vai falar com o Joni!",
            "Já!! Vai a correr!",
            "Ele está no campo a pastar."
        ];
        this.text7 = this.add.text(this.ponto4.x-100, 30, content7, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text7.setScrollFactor(1);
        this.text7.setVisible(false);
        //text8 
        let content8 = [
            "Cavalo Joni:Oi Vito, tudo bem?"
        ];
        this.text8 = this.add.text(this.ponto5.x-100, 30, content8, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text8.setScrollFactor(1);
        this.text8.setVisible(false);
        //text9 
        let content9 = [
            "Vito:Não Joni! Não estou nada bem!..."
        ];
        this.text9 = this.add.text(this.ponto5.x-100, 30, content9, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text9.setScrollFactor(1);
        this.text9.setVisible(false);
        //text10 
        let content10 = [
            "Vito:O Mu disse que a minha mãe foi raptada",
            "e que só tu me poderias ajudar!",
            "Por favor!!Ajuda-me!..."
        ];
        this.text10 = this.add.text(this.ponto5.x-100, 30, content10, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text10.setScrollFactor(1);
        this.text10.setVisible(false);
        //text11 
        let content11 = [
            "Cavalo Joni:Vito, tu sabes que eu já fui",
            "um cavalo de guerra não sabes?..."
        ];
        this.text11 = this.add.text(this.ponto5.x-100, 30, content11, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text11.setScrollFactor(1);
        this.text11.setVisible(false);
        //text12
        let content12 = [
            "Cavalo Joni:Para esta tua missão vou-te",
            "dar algo sagrado..."
        ];
        this.text12 = this.add.text(this.ponto5.x-100, 30, content12, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text12.setScrollFactor(1);
        this.text12.setVisible(false);
        //text13
        let content13 = [
            "Cavalo Joni: A minha P90!"
        ];
        this.text13 = this.add.text(this.ponto5.x-100, 30, content13, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text13.setScrollFactor(1);
        this.text13.setVisible(false);
        //text14
        let content14 = [
            "Vito: Adoro!",
            "E quem se colocar no meu caminho não",
            "tem a minima chance!"
        ];
        this.text14 = this.add.text(this.ponto5.x-100, 30, content14, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text14.setScrollFactor(1);
        this.text14.setVisible(false);
        //text15
        let content15 = [
            "Vito: Obrigado Joni"
        ];
        this.text15 = this.add.text(this.ponto5.x-100, 30, content15, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text15.setScrollFactor(1);
        this.text15.setVisible(false);
        //text16 ->interactividade
        let content16 = [
            "Pressione F para interagir",
            "com o Cavalo Joni"
        ];
        this.text16 = this.add.text(this.ponto5.x-100, 30, content16, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text16.setScrollFactor(1);
        this.text16.setVisible(false);

        //brilho
        this.camera.setAlpha(obj.brilho);
        scene0=1;

    }
  
    update(time, delta) {



        //impedir que o update ocorra primeiro que o load e create
        if(scene0===0){
            
            return;
        }

        //variaveis
        let speed = 300;
        let prevVelocity = player.body.velocity.clone();


        if ((this.cursors.up.isDown) && player.body.onFloor() ){
            jumpSound.play();
            player.body.setVelocityY(-400); 
        }

        if(player.body.velocity.y!==0){
            player.anims.play('up', true);
        }

        if (this.cursors.left.isDown) {

            player.body.setVelocityX(-speed);
            player.anims.play('left1', true); 
        }
        else if (this.cursors.right.isDown){

                player.body.setVelocityX(speed); 
                player.anims.play('right1', true); 

        } else {
            player.body.setVelocityX(0);
            player.anims.play('down', true);
        }


        //KeyCodes
        //var keyObjF = this.input.keyboard.addKey('F'); 

        // Normalize and scale the velocity so that player can't move faster along a diagonal
        //player.body.velocity.normalize().scale(speed);

        //Horse interactivity
        if(player.x-32 <= this.ponto5.x + this.ponto5.width && player.x + 32 >= this.ponto5.x){
            player.body.debugBodyColor = 0xffff00;
            this.text16.setVisible(true);
            this.input.keyboard.once("keydown_F", () => {
                this.text16.destroy();
                this.text8.setVisible(true);
                this.input.keyboard.once("keydown_F", () => {
                    this.text8.destroy();
                    this.text9.setVisible(true);
                    this.input.keyboard.once("keydown_F", () => {
                        this.text9.destroy();
                        this.text10.setVisible(true);
                        this.input.keyboard.once("keydown_F", () => {
                            this.text10.destroy();
                            this.text11.setVisible(true);
                            this.input.keyboard.once("keydown_F", () => {
                                this.text11.destroy();
                                this.text12.setVisible(true);
                                this.input.keyboard.once("keydown_F", () => {
                                    this.text12.destroy();
                                    this.text13.setVisible(true);
                                    this.gun.setVisible(true);
                                    this.input.keyboard.once("keydown_F", () => {
                                        this.gun.destroy();
                                        this.text13.destroy();
                                        this.text14.setVisible(true);
                                        this.input.keyboard.once("keydown_F", () => {
                                            this.text14.destroy();
                                            this.text15.setVisible(true);
                                            this.input.keyboard.once("keydown_F", () => {
                                                this.text15.destroy();
                                                levelSound.stop();
                                                let scene1 = this.scene.get('status');
                                                scene1.scene.stop();
                                                let scene2 = this.scene.get('menu_pause');
                                                scene2.scene.stop();
                                                this.scene.stop();
                                                this.scene.start("menu_historia",brilho);
                                                let music_menu=this.sound.add("menu_music");
                                                music_menu.play({
                                                    loop:true
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });

                });
                
            });
        }
        else
            if(player.x - 32 <= this.ponto1.x + this.ponto1.width && player.x+32 >= this.ponto1.x){
                player.body.debugBodyColor = 0xffff00;
                this.text1.setVisible(true);
            }

            else
                if(player.x - 32 <= this.ponto2.x + this.ponto2.width && player.x+32 >= this.ponto2.x){
                    player.body.debugBodyColor = 0xffff00;
                    this.text2.setVisible(true);
                }

                else
                    if(player.x <= this.ponto3.x + this.ponto3.width && player.x >= this.ponto3.x && player.y >= this.ponto3.y && player.y <= this.ponto3.y + this.ponto3.height){
                        player.body.debugBodyColor = 0xffff00;
                        this.textInicial.setVisible(true);
                    }

                    else
                        if(player.x-32 <= this.ponto4.x + this.ponto4.width && player.x+32 >= this.ponto4.x){
                            player.body.debugBodyColor = 0xffff00;
                            this.text4.setVisible(true);
                            this.input.keyboard.once("keydown_F", () => {
                                this.text4.destroy();
                                this.text3.setVisible(true);
                                this.input.keyboard.once("keydown_F", () => {
                                    this.text3.destroy();
                                    this.text5.setVisible(true);
                                    this.input.keyboard.once("keydown_F", () => {
                                        this.text5.destroy();
                                        this.text6.setVisible(true);
                                        this.input.keyboard.once("keydown_F", () => {
                                            this.text6.destroy();
                                            this.text7.setVisible(true);
                                            this.input.keyboard.once("keydown_F", () => {
                                                this.text7.destroy();

                                            });
                                        });
                                    });

                                });
                            });
                        }

        //Text control
        else {
            player.body.debugBodyColor = 0xff00ff; 
            this.text1.setVisible(false);
            this.text2.setVisible(false);
            this.text3.setVisible(false);
            this.text4.setVisible(false);
            this.textInicial.setVisible(false);
            this.text16.setVisible(false);
        }

    }

}
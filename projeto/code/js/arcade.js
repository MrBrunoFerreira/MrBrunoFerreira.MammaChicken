"use strict";

var obj={
        brilho:1,
        nextpage:3
};

var player;
var volumeBar;
var volumeBox;

//pontos
var ponto0;
var ponto1;

//textos
var text1;

var scene5;

class arcade extends Phaser.Scene{
    constructor(){
        super({
            key: "arcade"
        });
    }

    init(data){
        obj.brilho=data;
        obj.nextpage=5;
    }
    preload(){

        scene5=0;

        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //dar load do mapa 
        this.load.tilemapTiledJSON("map5", "maps/arena.json");
        this.load.image("sky","Chicken Run Platformer Game Assets 17/BG & Platform/image-02.png");
        this.load.image("arena","assets/Backgrounds/arena2.png");
        this.load.image("arvore2","assets/Backgrounds/image2.png");
        this.load.image("plantaforma1","Chicken Run Platformer Game Assets 17/BG & Platform/image-06.png");
        this.load.image("chao","Chicken Run Platformer Game Assets 17/BG & Platform/image-09.png");
        this.load.image("armadilha1","Chicken Run Platformer Game Assets 17/Obstacles/obstacles-02.png");
        this.load.image("metal1","assets/Backgrounds/metal1.png");
        this.load.image("metal2","assets/Backgrounds/metal2.png");
        this.load.image("metal3","assets/Backgrounds/metal3.png");


        //como as animacoes dos characters estao em png tenho de dar load de cada uma
        //load run direita
        this.load.image('0run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_000.png');
        this.load.image('1run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_001.png');
        this.load.image('2run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_002.png');
        this.load.image('3run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_003.png');
        this.load.image('4run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_004.png');
        this.load.image('5run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_005.png');
        this.load.image('6run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_006.png');
        this.load.image('7run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_007.png');
        //load run esquerda
        this.load.image('10run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_010.png');
        this.load.image('11run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_011.png');
        this.load.image('12run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_012.png');
        this.load.image('13run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_013.png');
        this.load.image('14run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_014.png');
        this.load.image('15run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_015.png');
        this.load.image('16run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_016.png');
        this.load.image('17run', 'Chicken Run Platformer Game Assets 17/Character Sprites/Run with Gun_017.png');
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
        //load jump direita
        this.load.image('jump0', 'Chicken Run Platformer Game Assets 17/Character Sprites/Jump_000.png');
        this.load.image('jump1', 'Chicken Run Platformer Game Assets 17/Character Sprites/Jump_001.png');
        this.load.image('jump2', 'Chicken Run Platformer Game Assets 17/Character Sprites/Jump_002.png');
        this.load.image('jump3', 'Chicken Run Platformer Game Assets 17/Character Sprites/Jump_003.png');
        this.load.image('jump4', 'Chicken Run Platformer Game Assets 17/Character Sprites/Jump_004.png');



        this.spawnPoint = map.findObject("Objects", obj => obj.name === "Start");
        //para o loading demorar mais
        //retirar no futuro
        for(let i=0; i<100; i++){
            this.load.image("map"+i,"maps/arena.json");
        }
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

    create(){

        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //menu_pause sobre o level
        this.scene.launch("menu_pause",obj);
        //status do player sobre o level
        this.scene.launch("status",obj);

        //creat mapa/tilesets
        let map = this.make.tilemap({ key: "map5" });      
        let tileset1 = map.addTilesetImage("sky");
        let tileset2 = map.addTilesetImage("chao");
        let tileset3 = map.addTilesetImage("arena");
        let tileset4 = map.addTilesetImage("plantaforma1");
        let tileset5 = map.addTilesetImage("arvore2");
        let tileset6 = map.addTilesetImage("metal1");
        let tileset7 = map.addTilesetImage("metal2");
        let tileset8 = map.addTilesetImage("metal3");
        let tileset9 = map.addTilesetImage("armadilha1");


        //let layer1 = map.createStaticLayer('Background', tileset1,0,0);
        let layer2 = map.createStaticLayer('Ground', [tileset6 ,tileset7,tileset8],0,0);

        //let layer3 = map.createStaticLayer('Arvores', [tileset6 ,tileset7,tileset8],0,0);
        let layer4 = map.createStaticLayer('Worldbounds', [tileset5],0,0);
        let layer5 = map.createStaticLayer('arenabck', [tileset3],0,0);
        let layer6 = map.createStaticLayer('Armadilhas', [tileset9],0,0);
        //let layer4 = map.createStaticLayer('Armadilhas', [tileset8,tileset9,tileset10,tileset11],0,0);
        //set depth
        layer2.setDepth(10);

        //load colisoes
        layer2.setCollisionByProperty({ collides: true });
        layer4.setCollisionByProperty({ collides: true });
        layer6.setCollisionByProperty({ collides: true });

        //layer4.setCollisionByProperty({ collides: true });

        //objeto layer
        spawnPoint = map.findObject("Objects", obj => obj.name === "Start");
        //ponto0 = map.findObject("Objects", obj => obj.name === "Ponto0");
        //ponto1 = map.findObject("Objects", obj => obj.name === "Ponto1");


        //spawn player
        player=this.physics.add.sprite(spawnPoint.x,spawnPoint.y-100,"idle0").setScale(0.25);
        //bounding box of player
        player.setSize(200, 310).setOffset(140,165);
        player.setBounce(0);

        //colisoes entre objetos
        this.physics.add.collider(player, layer2);
        this.physics.add.collider(player, layer4);
        this.physics.add.collider(player, layer6,function ()
            {
                player.body.setVelocityY(-400);

                if(!heart1.visible && !heart2.visible && !heart3.visible){
                    morte=true;
                    //ecrã de morte
                    this.scene.pause();
                    this.scene.launch("afterdeath",obj);
                }else if (heart1.visible && !heart2.visible && !heart3.visible) {
                    heart1.setVisible(false);
                }else if (heart1.visible && heart2.visible && !heart3.visible) {
                    heart2.setVisible(false);   
                }else if (heart1.visible && heart2.visible && heart3.visible) {
                    heart3.setVisible(false);
                } 
        },null, this);

        

        // Phaser supports multiple cameras, but you can access the default camera like this:
        camera = this.cameras.main;
        camera.startFollow(player);
        // Set up the arrows 
        cursors = this.input.keyboard.createCursorKeys();

        // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);


        //animações
        this.anims.create({
            key: 'right',
            frames:[
                { key: '0run' },
                { key: '1run' },
                { key: '2run' },
                { key: '3run' },
                { key: '4run' },
                { key: '5run' },
                { key: '6run' },
                { key: '7run'}
            ],
            frameRate: 24     
        });

        this.anims.create({
            key: 'left',
            frames:[
                { key: '10run' },
                { key: '11run' },
                { key: '12run' },
                { key: '13run' },
                { key: '14run' },
                { key: '15run' },
                { key: '16run' },
                { key: '17run'}
            ],
            frameRate: 24     
        });

        this.anims.create({
            key: 'downr',
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

        //create text
        //text1

        scene5=1;
        
        //brilho
        camera.setAlpha(obj.brilho);

        
    }

    update(){
       
        //impedir que o update ocorra primeiro que o load e create
        if(scene5==0){
            
            return;
        }
               
        //variaveis
        let speed = 300;
        let prevVelocity = player.body.velocity.clone();

        if ((cursors.space.isDown || cursors.up.isDown) && player.body.onFloor()){
                player.body.setVelocityY(-500); // jump up
                //player.anims.play('rjump', true);
        }
        if(player.body.velocity.y!=0){
            player.anims.play('up', true);
        }

        if (cursors.left.isDown){
            player.body.setVelocityX(-speed); // move left
            player.anims.play('left', true); // play walk animation
        }else if (cursors.right.isDown){
            player.body.setVelocityX(speed); // move right
            player.anims.play('right', true); // play walk animatio
        } else {
            player.body.setVelocityX(0);
            player.anims.play('downr', true);
        }

        //interactividade nos pontos
        

        //colisoes

    }

}
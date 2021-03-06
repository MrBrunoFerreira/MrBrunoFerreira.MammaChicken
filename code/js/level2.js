"use strict";

var obj={
        brilho:1,
        nextpage:2,
};

var morte=false;

var player;
var volumeBar;
var volumeBox;

//music
var levelSound;
var shootSound;
var playerHurt;
var jumpSound;


//pontos
var ponto0;
var ponto1;

//textos
var text1;
var text2;
var text3;

var scene1;


class level2 extends Phaser.Scene{
    constructor(){
        super({
            key: "level2"
        });
    }

    init(data){
        obj.brilho=data;
        obj.nextpage=2;
    }

    preload(){

        scene1=0;

        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //dar load do mapa 
        this.load.tilemapTiledJSON("map2", "maps/level2.json");
        this.load.image("sky","Chicken Run Platformer Game Assets 17/BG & Platform/image-02.png");
        this.load.image("arvore1","assets/Backgrounds/image1.png");
        this.load.image("arvore2","assets/Backgrounds/image2.png");
        this.load.image("placa","assets/Backgrounds/teste1.png");
        this.load.image("plantaforma1","Chicken Run Platformer Game Assets 17/BG & Platform/image-06.png");
        this.load.image("plantaforma2","Chicken Run Platformer Game Assets 17/BG & Platform/image-07.png");
        this.load.image("plantaforma3","Chicken Run Platformer Game Assets 17/BG & Platform/image-08.png");
        this.load.image("plantaforma4","Chicken Run Platformer Game Assets 17/BG & Platform/image-09.png");
        this.load.image("Obstaculos","Chicken Run Platformer Game Assets 17/Obstacles/obstacles-02.png");
        this.load.image("Obstaculos1","Chicken Run Platformer Game Assets 17/Obstacles/obstacles-03.png");
        this.load.image("Obstaculos2","Chicken Run Platformer Game Assets 17/Obstacles/obstacles-04.png");
        this.load.image("Obstaculos3","Chicken Run Platformer Game Assets 17/Obstacles/obstacles-05.png");


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
        //load shoot direita
        this.load.image('shootr0', 'Chicken Run Platformer Game Assets 17/Character Sprites/Shoot_000.png');
        this.load.image('shootr1', 'Chicken Run Platformer Game Assets 17/Character Sprites/Shoot_001.png');
        this.load.image('shootr2', 'Chicken Run Platformer Game Assets 17/Character Sprites/Shoot_002.png');
        this.load.image('shootr3', 'Chicken Run Platformer Game Assets 17/Character Sprites/Shoot_003.png');
        this.load.image('shootr4', 'Chicken Run Platformer Game Assets 17/Character Sprites/Shoot_004.png');
        this.load.image('shootr5', 'Chicken Run Platformer Game Assets 17/Character Sprites/Shoot_005.png');
        //load shoot esquerda
        this.load.image('shootl0', 'Chicken Run Platformer Game Assets 17/Character Sprites/Shoot_010.png');
        this.load.image('shootl1', 'Chicken Run Platformer Game Assets 17/Character Sprites/Shoot_011.png');
        this.load.image('shootl2', 'Chicken Run Platformer Game Assets 17/Character Sprites/Shoot_012.png');
        this.load.image('shootl3', 'Chicken Run Platformer Game Assets 17/Character Sprites/Shoot_013.png');
        this.load.image('shootl4', 'Chicken Run Platformer Game Assets 17/Character Sprites/Shoot_014.png');
        this.load.image('shootl5', 'Chicken Run Platformer Game Assets 17/Character Sprites/Shoot_015.png');


        //--------------------------------------Bala------------------------------------------
        this.load.image('bullet', "Chicken Run Platformer Game Assets 17/Coins, PowerUps & bullets/Bullet-1.png");
        this.load.image('bulletR', "Chicken Run Platformer Game Assets 17/Coins, PowerUps & bullets/Bullet-1-R.png");

        this.cursors = this.input.keyboard.createCursorKeys();

        //para o loading demorar mais
        //retirar no futuro
        for(let i=0; i<100; i++){
            this.load.image("map"+i,"maps/level2.json");
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


        //-------------------------Bala-----------------------------
        this.bullets = this.physics.add.group({
            classType: Bala,
            maxSize: 1000,
            runChildUpdate:true
        });

        this.lastFired = 0;

        this.physics.add.collider(this.bullets, this.enemies, function(){this.bullet.hit(this.enemy);}, undefined, this)


    }

    create(){

        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //menu_pause sobre o level
        this.scene.launch("menu_pause",obj);
        //status do player sobre o level
        this.scene.launch("status",obj);

        levelSound=this.sound.add("level2_music");
        levelSound.play({
            loop:true
        });
        shootSound=this.sound.add("shoot_music");
        playerHurt=this.sound.add("player_hurt");
        jumpSound=this.sound.add("jump_music");

        //creat mapa/tilesets
        let map = this.make.tilemap({ key: "map2" });      
        let tileset1 = map.addTilesetImage("sky");
        let tileset2 = map.addTilesetImage("plantaforma1");
        let tileset3 = map.addTilesetImage("plantaforma2");
        let tileset4 = map.addTilesetImage("plantaforma3");
        let tileset5 = map.addTilesetImage("plantaforma4");
        let tileset6 = map.addTilesetImage("arvore1");
        let tileset7 = map.addTilesetImage("arvore2");
        let tileset8 = map.addTilesetImage("Obstaculos");
        let tileset9 = map.addTilesetImage("Obstaculos1");
        let tileset10 = map.addTilesetImage("Obstaculos2");
        let tileset11 = map.addTilesetImage("Obstaculos3");
        let tileset12 = map.addTilesetImage("placa");


        let layer1 = map.createStaticLayer('Background', tileset1,0,0);
        let layer2 = map.createStaticLayer('Ground', [tileset2 ,tileset3 ,tileset4 ,tileset5],0,0);
        let layer3 = map.createStaticLayer('Arvores', [tileset6 ,tileset7,tileset12],0,0);
        let layer4 = map.createStaticLayer('Armadilhas', [tileset8,tileset10,tileset11],0,0);
        let layer5 = map.createStaticLayer('Box', [tileset9],0,0);
        let layer6 = map.createStaticLayer('Worldbounds', [tileset7],0,0);

        //set depth
        layer2.setDepth(10);

        //load colisoes
        layer2.setCollisionByProperty({ collides: true });
        layer4.setCollisionByProperty({ collides: true });
        layer5.setCollisionByProperty({ collides: true });
        layer6.setCollisionByProperty({ collides: true });

        //objeto layer
        this.spawnPoint = map.findObject("Objects", obj => obj.name === "Start");
        ponto0 = map.findObject("Objects", obj => obj.name === "Ponto0");
        ponto1 = map.findObject("Objects", obj => obj.name === "Ponto1");


        //spawn player
        player=this.physics.add.sprite(this.spawnPoint.x,this.spawnPoint.y-100,"idle0").setScale(0.25);
        //bounding box of player
        player.setSize(200, 310).setOffset(140,165);
        player.setBounce(0);

        //colisoes entre objetos
        this.physics.add.collider(player, layer4,function ()
            {
                playerHurt.play();
                player.body.setVelocityY(-400);

                if(!heart1.visible && !heart2.visible && !heart3.visible){
                    console.log("Morreu");
                    //animação para morrer
                    morte=true;
                    //ecrã de morte
                    this.scene.pause();
                    this.scene.launch("afterdeath",obj);
                }else if (heart1.visible && !heart2.visible && !heart3.visible) {
                    console.log("hit e 1 coraçao");
                    heart1.setVisible(false);
                }else if (heart1.visible && heart2.visible && !heart3.visible) {
                    console.log("hit e 2 coraçoes");
                    heart2.setVisible(false);
                    
                }else if (heart1.visible && heart2.visible && heart3.visible) {
                    console.log("hit e 3 coraçoes");
                    heart3.setVisible(false);
                } 

        },null, this);
        this.physics.add.collider(player, layer2,function ()
            {
        },null, this);
        this.physics.add.collider(player, layer5,function ()
            {
        },null, this);
        this.physics.add.collider(player, layer6,function ()
            {
        },null, this);
        
        // Phaser supports multiple cameras, but you can access the default camera like this:
        this.camera = this.cameras.main;
        this.camera.startFollow(player);
        // Set up the arrows 
        this.cursors = this.input.keyboard.createCursorKeys();

        // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
        this.camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

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
        this.anims.create({
            key: 'shootr',
            frames:[
                { key: 'shootr0' },
                { key: 'shootr1' },
                { key: 'shootr2' },
                { key: 'shootr3' },
                { key: 'shootr4' },
                { key: "shootr5" }
            ],
            frameRate: 1
        });
        this.anims.create({
            key: 'shootl',
            frames:[
                { key: 'shootl0' },
                { key: 'shootl1' },
                { key: 'shootl2' },
                { key: 'shootl3' },
                { key: 'shootl4' },
                { key: "shootl5" }
            ],
            frameRate: 1
        });

        //create text
        //text1
        let content1 = [
            "Desvie-se das armadilhas"
        ];
        text1 = this.add.text(ponto0.x, 225, content1, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        text1.setScrollFactor(1);
        text1.setVisible(false);
        //text2
        let content2 = [
            "Pressione F para interagir"
        ];
        text2 = this.add.text(ponto1.x, 250, content2, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        text2.setScrollFactor(1);
        text2.setVisible(false);
        //text3
        let content3 = [
            "Bem... não sei porque",
            "razão o Joni me deu a P90!?"
        ];
        text3 = this.add.text(ponto1.x, 250, content3, {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        text3.setScrollFactor(1);
        text3.setVisible(false);

        
        //brilho
        this.camera.setAlpha(obj.brilho);

        scene1=1;

        
    }

    update(time, delta){


        //impedir que o update ocorra primeiro que o load e create
        if(scene1===0){
            
            return;
        }

        //variaveis
        let speed = 300;
        let prevVelocity = player.body.velocity.clone();

        //cursors.space.isDown ||
        if ((this.cursors.up.isDown) && player.body.onFloor()){
            jumpSound.play();
            player.body.setVelocityY(-400); // jump up
            //player.anims.play('rjump', true);
        }
        if(player.body.velocity.y!==0){
            player.anims.play('up', true);
        }

        if (this.cursors.left.isDown){
            player.body.setVelocityX(-speed); // move left
            player.anims.play('left', true); // play walk animation
            player.dir = -1
        }else if (this.cursors.right.isDown){
            player.body.setVelocityX(speed); // move right
            player.anims.play('right', true); // play walk animatio
            player.dir = 1
        } else {
            player.body.setVelocityX(0);
            player.anims.play('downr', true);
            player.dir = 0;
        }

        //interactividade nos pontos
        //Ponto0
        if(player.x-32<=ponto0.x+ponto0.width && player.x+32>=ponto0.x){
            player.body.debugBodyColor = 0xffff00; //cor para debug
            text1.setVisible(true);
        }else if (player.x-32<=ponto1.x+ponto1.width && player.x+32>=ponto1.x) {
             player.body.debugBodyColor = 0xffff00; //cor para debug
             text2.setVisible(true);
             this.input.keyboard.once("keydown_F", event => {
                text2.destroy();
                text3.setVisible(true);
                this.input.keyboard.once("keydown_F", event => {
                    text3.destroy();
                    levelSound.stop();
                    let scene1 = this.scene.get('status');
                    scene1.scene.stop();
                    let scene2 = this.scene.get('menu_pause');
                    scene2.scene.stop();
                    this.scene.stop();
                    this.scene.start("menu_historia",brilho);
                    this.sound.stopAll();
                    let music_menu=this.sound.add("menu_music");
                    music_menu.play({
                        loop:true
                    });
                });
            });
        }
        else{
            player.body.debugBodyColor = 0xff00ff; //cor para debug
            text1.setVisible(false);
            text2.setVisible(false);
        }

        //Bullet fire
        if (this.cursors.space.isDown && time > this.lastFired /*&& (this.cursors.left.down || this.cursors.right.down)*/) {
            if(player.body.velocity.x>=0){
                shootSound.play();
                player.anims.play('shootr', true);
                this.bullet = this.bullets.get(player.x + 45, player.y+25, 'bullet');
            }else{
                shootSound.play();
                player.anims.play('shootl', true);
                this.bullet = this.bullets.get(player.x + 45, player.y+25, 'bulletR');
            }

            //console.log("cliquei espaco");

            if (this.bullet)
            {
                this.bullet.fire(player);

                //incrementa o tempo que tem que esperar ate ao proximo tiro
                this.lastFired = time + 500;
            }
        }



    }

}
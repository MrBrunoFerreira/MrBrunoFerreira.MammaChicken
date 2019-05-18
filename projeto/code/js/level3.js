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

var scene2;

class level3 extends Phaser.Scene{
    constructor(){
        super({
            key: "level3"
        });
    }

    init(data){
        obj.brilho=data;
        obj.nextpage=3;
    }
    preload(){

        scene2=0;

        //variaveis
        let ch=this.game.renderer.height;
        let cw=this.game.renderer.width;

        //dar load do mapa 
        this.load.tilemapTiledJSON("map3", "maps/level3.json");
        this.load.image("sky","Chicken Run Platformer Game Assets 17/BG & Platform/image-02.png");
        this.load.image("arvore1","assets/Backgrounds/image1.png");
        this.load.image("arvore2","assets/Backgrounds/image2.png");
        this.load.image("placa","assets/Backgrounds/teste1.png");
        this.load.image("plantaforma1","Chicken Run Platformer Game Assets 17/BG & Platform/image-06.png");
        this.load.image("plantaforma2","Chicken Run Platformer Game Assets 17/BG & Platform/image-07.png");
        this.load.image("plantaforma3","Chicken Run Platformer Game Assets 17/BG & Platform/image-08.png");
        this.load.image("plantaforma4","Chicken Run Platformer Game Assets 17/BG & Platform/image-09.png");
        /*this.load.image("Obstaculos","Chicken Run Platformer Game Assets 17/Obstacles/obstacles-02.png");
        this.load.image("Obstaculos1","Chicken Run Platformer Game Assets 17/Obstacles/obstacles-03.png");
        this.load.image("Obstaculos2","Chicken Run Platformer Game Assets 17/Obstacles/obstacles-04.png");
        this.load.image("Obstaculos3","Chicken Run Platformer Game Assets 17/Obstacles/obstacles-05.png");*/


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

        //--------------------------INIMIGO----------------------------------------
        //attack
        this.load.image('eAttack1', "Chicken Run Platformer Game Assets 17/Enemy/Attack_000.png");
        this.load.image('eAttack2', "Chicken Run Platformer Game Assets 17/Enemy/Attack_001.png");
        this.load.image('eAttack3', "Chicken Run Platformer Game Assets 17/Enemy/Attack_002.png");
        this.load.image('eAttack4', "Chicken Run Platformer Game Assets 17/Enemy/Attack_003.png");
        this.load.image('eAttack5', "Chicken Run Platformer Game Assets 17/Enemy/Attack_004.png");
        this.load.image('eAttack6', "Chicken Run Platformer Game Assets 17/Enemy/Attack_005.png");

        //iddle
        this.load.image('eIdle1', "Chicken Run Platformer Game Assets 17/Enemy/Idle_000.png");
        this.load.image('eIdle2', "Chicken Run Platformer Game Assets 17/Enemy/Idle_001.png");
        this.load.image('eIdle3', "Chicken Run Platformer Game Assets 17/Enemy/Idle_002.png");
        this.load.image('eIdle4', "Chicken Run Platformer Game Assets 17/Enemy/Idle_003.png");
        this.load.image('eIdle5', "Chicken Run Platformer Game Assets 17/Enemy/Idle_004.png");
        this.load.image('eIdle6', "Chicken Run Platformer Game Assets 17/Enemy/Idle_005.png");
        this.load.image('eIdle7', "Chicken Run Platformer Game Assets 17/Enemy/Idle_006.png");
        this.load.image('eIdle8', "Chicken Run Platformer Game Assets 17/Enemy/Idle_007.png");

        //run
        this.load.image('eRun1', "Chicken Run Platformer Game Assets 17/Enemy/Run_000.png");
        this.load.image('eRun2', "Chicken Run Platformer Game Assets 17/Enemy/Run_001.png");
        this.load.image('eRun3', "Chicken Run Platformer Game Assets 17/Enemy/Run_002.png");
        this.load.image('eRun4', "Chicken Run Platformer Game Assets 17/Enemy/Run_003.png");
        this.load.image('eRun5', "Chicken Run Platformer Game Assets 17/Enemy/Run_004.png");
        this.load.image('eRun6', "Chicken Run Platformer Game Assets 17/Enemy/Run_005.png");
        this.load.image('eRun7', "Chicken Run Platformer Game Assets 17/Enemy/Run_006.png");
        this.load.image('eRun8', "Chicken Run Platformer Game Assets 17/Enemy/Run_007.png");


        //--------------------------------------Bala------------------------------------------
        this.load.image('bullet', "Chicken Run Platformer Game Assets 17/Coins, PowerUps & bullets/Bullet-1.png");


        //para o loading demorar mais
        //retirar no futuro
        for(let i=0; i<100; i++){
            this.load.image("map"+i,"maps/level3.json");
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
        let map = this.make.tilemap({ key: "map3" });      
        let tileset1 = map.addTilesetImage("sky");
        let tileset2 = map.addTilesetImage("plantaforma1");
        let tileset3 = map.addTilesetImage("plantaforma2");
        let tileset4 = map.addTilesetImage("plantaforma3");
        let tileset5 = map.addTilesetImage("plantaforma4");
        let tileset6 = map.addTilesetImage("arvore1");
        let tileset7 = map.addTilesetImage("arvore2");
        let tileset8 = map.addTilesetImage("placa");


        let layer1 = map.createStaticLayer('Background', tileset1,0,0);
        let layer2 = map.createStaticLayer('Ground', [tileset2 ,tileset3 ,tileset4 ,tileset5],0,0);

        let layer3 = map.createStaticLayer('Arvores', [tileset6 ,tileset7,tileset8],0,0);
        let layer4 = map.createStaticLayer('Worldbounds', [tileset7],0,0);

        //let layer4 = map.createStaticLayer('Armadilhas', [tileset8,tileset9,tileset10,tileset11],0,0);
        //set depth
        layer2.setDepth(10);

        //load colisoes
        layer2.setCollisionByProperty({ collides: true });
        layer4.setCollisionByProperty({ collides: true });

        //layer4.setCollisionByProperty({ collides: true });

        //objeto layer
        this.spawnPoint = map.findObject("Objects", obj => obj.name === "Start");
        ponto0 = map.findObject("Objects", obj => obj.name === "Ponto0");
        ponto1 = map.findObject("Objects", obj => obj.name === "Ponto1");


        //spawn player
        player=this.physics.add.sprite(this.spawnPoint.x,this.spawnPoint.y-100,"idle0").setScale(0.25);
        //bounding box of player
        player.setSize(200, 310).setOffset(140,165);        
        player.setBounce(0);
        player.dir = 0;
        //colisoes entre objetos
        this.physics.add.collider(player, layer2);
        this.physics.add.collider(player, layer4);

        

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

        //create text
        //text1

        scene2=1;
        
        //brilho
        this.camera.setAlpha(obj.brilho);


        scene2=1;


        //--------------------------INIMIGO----------------------------------------

        //animações
        this.anims.create({
            key: 'rightEnemy',
            frames:[
                { key: 'eAttack1' },
                { key: 'eAttack2' },
                { key: 'eAttack3' },
                { key: 'eAttack4' },
                { key: 'eAttack5' },
                { key: 'eAttack6' },
            ],
            frameRate: 24
        });

        //animações
        this.anims.create({
            key: 'downEnemy',
            frames:[
                { key: 'eIdle1' },
                { key: 'eIdle2' },
                { key: 'eIdle3' },
                { key: 'eIdle4' },
                { key: 'eIdle5' },
                { key: 'eIdle6' },
                { key: 'eIdle7' },
                { key: 'eIdle8'}
            ],
            frameRate: 24
        });


        //animações
        this.anims.create({
            key: 'upEnemy',
            frames:[
                { key: 'eRun1' },
                { key: 'eRun2' },
                { key: 'eRun3' },
                { key: 'eRun4' },
                { key: 'eRun5' },
                { key: 'eRun6' },
                { key: 'eRun7' },
                { key: 'eRun8'}
            ],
            frameRate: 24
        });





        this.enemies = this.physics.add.group({
            classType: Enemy,
            maxSize: 20,
            runChildUpdate: true,
        });


        this.enemy = this.enemies.get(250, 250, 'downEnemy', player);
        this.physics.add.collider(this.enemy, layer2);
        this.physics.add.collider(this.enemy, player);
        this.enemy.spawn();

        //-------------------------Bala-----------------------------
        this.bullets = this.physics.add.group({
            classType: Bala,
            maxSize: 1000,
            runChildUpdate:true
        });

        this.lastFired = 0;

        this.physics.add.collider(this.bullets, this.enemies, function(){
            this.bullet.hit(this.enemy);
            this.enemy.hp.decrease(20);
            }, undefined, this)

    }


    update(time, delta){
       
        //impedir que o update ocorra primeiro que o load e create
        if(scene2===0){
            
            return;
        }

        //variaveis
        let speed = 300;
        let prevVelocity = player.body.velocity.clone();


        //cursors.space.isDown ||
        if ((this.cursors.up.isDown) && player.body.onFloor()){
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


        //Bullet fire
        if (this.cursors.space.isDown && time > this.lastFired /*&& (cursors.left.isDown || cursors.right.isDown )*/) {
            this.bullet = this.bullets.get(player.x + 45, player.y+25, 'bullet');
            console.log("cliquei espaco");

            if (this.bullet)
            {
                this.bullet.fire(player);

                //incrementa o tempo que tem que esperar ate ao proximo tiro
                this.lastFired = time + 500;
            }
        }

    }

}
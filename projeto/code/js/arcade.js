"use strict";

var obj={
        brilho:1,
        nextpage:3
};

var player;
var volumeBar;
var volumeBox;

//sound
var levelSound;
var shootSound;
var playerHurt;
var jumpSound;

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

        //--------------------------INIMIGO----------------------------------------
        //attack
        this.load.image('eiAttack1', "Chicken Run Platformer Game Assets 17/Enemy/Attack_000.png");
        this.load.image('eiAttack2', "Chicken Run Platformer Game Assets 17/Enemy/Attack_001.png");
        this.load.image('eiAttack3', "Chicken Run Platformer Game Assets 17/Enemy/Attack_002.png");
        this.load.image('eiAttack4', "Chicken Run Platformer Game Assets 17/Enemy/Attack_003.png");
        this.load.image('eiAttack5', "Chicken Run Platformer Game Assets 17/Enemy/Attack_004.png");
        this.load.image('eiAttack6', "Chicken Run Platformer Game Assets 17/Enemy/Attack_005.png");

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


        //attackLeft
        this.load.image('eiAttack1R', "Chicken Run Platformer Game Assets 17/Enemy/Attack_000R.png");
        this.load.image('eiAttack2R', "Chicken Run Platformer Game Assets 17/Enemy/Attack_001R.png");
        this.load.image('eiAttack3R', "Chicken Run Platformer Game Assets 17/Enemy/Attack_002R.png");
        this.load.image('eiAttack4R', "Chicken Run Platformer Game Assets 17/Enemy/Attack_003R.png");
        this.load.image('eiAttack5R', "Chicken Run Platformer Game Assets 17/Enemy/Attack_004R.png");
        this.load.image('eiAttack6R', "Chicken Run Platformer Game Assets 17/Enemy/Attack_005R.png");

        //iddleLeft
        this.load.image('eIdle1R', "Chicken Run Platformer Game Assets 17/Enemy/Idle_000R.png");
        this.load.image('eIdle2R', "Chicken Run Platformer Game Assets 17/Enemy/Idle_001R.png");
        this.load.image('eIdle3R', "Chicken Run Platformer Game Assets 17/Enemy/Idle_002R.png");
        this.load.image('eIdle4R', "Chicken Run Platformer Game Assets 17/Enemy/Idle_003R.png");
        this.load.image('eIdle5R', "Chicken Run Platformer Game Assets 17/Enemy/Idle_004R.png");
        this.load.image('eIdle6R', "Chicken Run Platformer Game Assets 17/Enemy/Idle_005R.png");
        this.load.image('eIdle7R', "Chicken Run Platformer Game Assets 17/Enemy/Idle_006R.png");
        this.load.image('eIdle8R', "Chicken Run Platformer Game Assets 17/Enemy/Idle_007R.png");

        //runLeft
        this.load.image('eRun1R', "Chicken Run Platformer Game Assets 17/Enemy/Run_000R.png");
        this.load.image('eRun2R', "Chicken Run Platformer Game Assets 17/Enemy/Run_001R.png");
        this.load.image('eRun3R', "Chicken Run Platformer Game Assets 17/Enemy/Run_002R.png");
        this.load.image('eRun4R', "Chicken Run Platformer Game Assets 17/Enemy/Run_003R.png");
        this.load.image('eRun5R', "Chicken Run Platformer Game Assets 17/Enemy/Run_004R.png");
        this.load.image('eRun6R', "Chicken Run Platformer Game Assets 17/Enemy/Run_005R.png");
        this.load.image('eRun7R', "Chicken Run Platformer Game Assets 17/Enemy/Run_006R.png");
        this.load.image('eRun8R', "Chicken Run Platformer Game Assets 17/Enemy/Run_007R.png");

        //--------------------------------------Bala------------------------------------------
        this.load.image('bullet2', "Chicken Run Platformer Game Assets 17/Coins, PowerUps & bullets/Bullet-2.png");
        this.load.image('bullet2R', "Chicken Run Platformer Game Assets 17/Coins, PowerUps & bullets/Bullet-2-R.png");

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

        playerHurt=this.sound.add("player_hurt");
        enemyHurt=this.sound.add("talhante_hurt");

        //menu_pause sobre o level
        this.scene.launch("menu_pause",obj);
        //status do player sobre o level
        this.scene.launch("status",obj);

        levelSound=this.sound.add("level5_music");
        levelSound.play({
            loop:true
        });
        shootSound=this.sound.add("laser_music");
        playerHurt=this.sound.add("player_hurt");
        jumpSound=this.sound.add("jump_music");

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

        this.spawnPoint = map.findObject("Objects", obj => obj.name === "Start");

        //spawn player
        player=this.physics.add.sprite(this.spawnPoint.x,this.spawnPoint.y-100,"idle0").setScale(0.25);
        //bounding box of player
        player.setSize(200, 310).setOffset(140,165);
        player.setBounce(0);

        //colisoes entre objetos
        this.physics.add.collider(player, layer2);
        this.physics.add.collider(player, layer4);
        this.physics.add.collider(player, layer6,function ()
            {
                playerHurt.play();
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

        scene5=1;
        
        //brilho
        this.camera.setAlpha(obj.brilho);


        //--------------------------INIMIGO----------------------------------------

        //animações
        this.attackEnemyDireita = this.anims.create({
            key: 'rightEnemy',
            frames:[
                { key: 'eiAttack1' },
                { key: 'eiAttack2' },
                { key: 'eiAttack3' },
                { key: 'eiAttack4' },
                { key: 'eiAttack5' },
                { key: 'eiAttack6' },
            ],
            frameRate: 16,
            repeat: -1
        });

        //animações
        this.attackEnemyEsquerda = this.anims.create({
            key: 'leftEnemy',
            frames:[
                { key: 'eiAttack1R' },
                { key: 'eiAttack2R' },
                { key: 'eiAttack3R' },
                { key: 'eiAttack4R' },
                { key: 'eiAttack5R' },
                { key: 'eiAttack6R' },
            ],
            frameRate: 16,
            repeat: -1
        });

        //animações
        this.idleEnemyDireita = this.anims.create({
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
            frameRate: 24,
            repeat: -1
        });

        //animações
        this.idleEnemyEsquerda = this.anims.create({
            key: 'downEnemyL',
            frames:[
                { key: 'eIdle1R' },
                { key: 'eIdle2R' },
                { key: 'eIdle3R' },
                { key: 'eIdle4R' },
                { key: 'eIdle5R' },
                { key: 'eIdle6R' },
                { key: 'eIdle7R' },
                { key: 'eIdle8R'}
            ],
            frameRate: 24,
            repeat: -1
        });


        //animações
        this.runDireita = this.anims.create({
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
            frameRate: 24,
            repeat: -1
        });

        //animações
        this.runEsquerda = this.anims.create({
            key: 'upEnemyL',
            frames:[
                { key: 'eRun1R' },
                { key: 'eRun2R' },
                { key: 'eRun3R' },
                { key: 'eRun4R' },
                { key: 'eRun5R' },
                { key: 'eRun6R' },
                { key: 'eRun7R' },
                { key: 'eRun8R'}
            ],
            frameRate: 24,
            repeat: -1
        });

        this.lastFired = 0;
        this.lastFiredtt1 = 0;
        this.lastFiredtt2 = 0;
        this.lastFiredtt3 = 0;
        this.lastFiredtt4 = 0;
        this.lastFiredtt6 = 0;
        this.lastFiredtt6 = 0;
        this.lastFiredtt6 = 7;

        this.ydif = 0;
        this.xdif = 0;
        this.ydif2 = 0;
        this.xdif2 = 0;
        this.ydif3 = 0;
        this.xdif3 = 0;
        this.ydif4 = 0;
        this.xdif4 = 0;

        this.enemies = this.physics.add.group({
            classType: Enemy,
            maxSize: 20,
            runChildUpdate: true,
        });

        //-------------------------Bala-----------------------------
        this.bullets = this.physics.add.group({
            classType: Bala,
            maxSize: 1000,
            runChildUpdate:true
        });

        this.lastFired = 0;

        this.physics.add.collider(this.bullets, this.enemies, function(){this.bullet.hit(this.enemy);}, undefined, this)


        //--------------------------------- Inimigos --------------------------------------
        //objeto layer
        //Enemy 1
        this.enemy = this.enemies.get(this.spawnPoint.x+450, this.spawnPoint.y, this.idleEnemyDireita, this.attackEnemyDireita, this.runDireita, player);
        this.physics.add.collider(this.enemy, layer2);
        this.physics.add.collider(this.enemy, player);
        this.physics.add.collider(this.enemy, layer4);

        this.enemy.spawn();


        //Enemy
        this.physics.add.collider(this.bullets, this.enemy, function(){
            this.bullet.hit(this.enemy);
            enemyHurt.play();
            this.enemy.hp.decrease(1);

        }, undefined, this);



        //Enemy 2
        this.spawnPoint5 = map.findObject("Objects", obj => obj.name === "Inimigo2");
        this.enemy2 = this.enemies.get(this.spawnPoint5.x, this.spawnPoint5.y, this.idleEnemyDireita, this.attackEnemyDireita, this.runDireita, player);
        this.physics.add.collider(this.enemy2, layer2);
        this.physics.add.collider(this.enemy2, player);
        this.physics.add.collider(this.enemy2, layer4);
        this.enemy2.spawn();

        //Enemy
        this.physics.add.collider(this.bullets, this.enemy2, function(){
            this.bullet.hit(this.enemy2);
            enemyHurt.play();
            this.enemy2.hp.decrease(1);

        }, undefined, this);

        //Enemy 3
        this.spawnPoint6 = map.findObject("Objects", obj => obj.name === "Inimigo3");
        this.enemy3 = this.enemies.get(this.spawnPoint6.x, this.spawnPoint6.y, this.idleEnemyDireita, this.attackEnemyDireita, this.runDireita, player);
        this.physics.add.collider(this.enemy3, layer2);
        this.physics.add.collider(this.enemy3, player);
        this.physics.add.collider(this.enemy3, layer4);
        this.enemy3.spawn();

        //Enemy
        this.physics.add.collider(this.bullets, this.enemy3, function(){
            this.bullet.hit(this.enemy3);
            enemyHurt.play();
            this.enemy3.hp.decrease(1);

        }, undefined, this);
    }

    update(time, delta){
       
        //impedir que o update ocorra primeiro que o load e create
        if(scene5===0){
            
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


        //Bullet fire
        if (this.cursors.space.isDown && time > this.lastFired /*&& (cursors.left.isDown || cursors.right.isDown )*/) {
            if(player.body.velocity.x>=0){
                shootSound.play();
                player.anims.play('shootr', true);
                this.bullet = this.bullets.get(player.x + 45, player.y+25, 'bullet2');
            }else{
                shootSound.play();
                player.anims.play('shootl', true);
                this.bullet = this.bullets.get(player.x + 45, player.y+25, 'bullet2R');
            }

            if (this.bullet)
            {
                this.bullet.fire(player);

                //incrementa o tempo que tem que esperar ate ao proximo tiro
                this.lastFired = time + 500;
            }
        }


        //------------------------------------- Enemy 1--------------------------------------

        if(player.y < this.enemy.y){
            this.ydif = this.enemy.y - player.y;
        }
        else{
            this.ydif = player.y - this.enemy.y;
        }

        if(player.x < this.enemy.x){
            this.xdif = this.enemy.x - player.x;
        }
        else{
            this.xdif = player.x - this.enemy.x;
        }


        if(time > this.lastFiredtt4 && this.enemy.hp.value !== 0 &&  this.xdif < 400 && this.ydif < 100 && this.enemy.dir === 1){
            this.enemy.body.setVelocityX(100);
            this.enemy.anims.play(this.runDireita);

            this.lastFiredtt4 = time + 300;
        }

        if(time > this.lastFiredtt4 && this.enemy.hp.value !== 0 &&  this.xdif < 400 && this.ydif < 200 && this.enemy.dir === -1){
            this.enemy.body.setVelocityX(100);
            this.enemy.anims.play(this.runEsquerda);

            this.lastFiredtt4 = time + 300;
        }

        if(this.ydif < 30 &&  this.xdif < 10 && this.enemy.hp.value !== 0){
            this.anims.play(this.attack);
        }


        if(this.enemy.hp.value !== 0) {
            if (this.ydif < 40 && this.xdif < 500) {

                if(this.xdif < 90 && this.xdif > 50 && this.ydif > 5 && this.ydif < 20 && time > this.lastFiredtt1){
                    playerHurt.play();
                    this.enemy.anims.play('rightEnemy');
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
                    this.lastFiredtt1 = time + 500;
                }

                if (Math.round(player.x) > Math.round(this.enemy.x) && time > this.lastFiredtt2) {
                    // we increase the speed from the default 80 to 200
                    this.enemy.body.velocity.x = 250;
                    this.enemy.dir = 1;
                    this.lastFiredtt2 = time + 10;
                }else{
                    this.enemy.body.velocity.x = -250;
                    this.enemy.dir = -1;
                }
            } else {


                if (this.enemy.dir === 1) {
                    if (this.enemy.body.velocity.x === 0 && this.enemy.dir === 1) {
                        this.enemy.dir = -1;
                        this.enemy.body.velocity.x = -150;
                    } else {
                        this.enemy.body.velocity.x = 150;
                    }
                } else if (this.enemy.dir === -1) {
                    if (this.enemy.body.velocity.x === 0 && this.enemy.dir === -1) {
                        this.enemy.dir = 1;
                        this.enemy.body.velocity.x = 150;
                    } else {
                        this.enemy.body.velocity.x = -150;
                    }
                }
            }
        }


        //------------------------------------- Enemy 2--------------------------------------

        if(player.y < this.enemy2.y){
            this.ydif2 = this.enemy2.y - player.y;
        }
        else{
            this.ydif2 = player.y - this.enemy2.y;
        }

        if(player.x < this.enemy2.x){
            this.xdif2 = this.enemy2.x - player.x;
        }
        else{
            this.xdif2 = player.x - this.enemy2.x;
        }


        if(time > this.lastFiredtt3 && this.enemy2.hp.value !== 0 &&  this.xdif2 < 200 && this.ydif2 < 100 && this.enemy2.dir === 1){
            this.enemy2.body.setVelocityX(100);
            this.enemy2.anims.play(this.runDireita);

            this.lastFiredtt3 = time + 300;
        }

        if(time > this.lastFiredtt3 && this.enemy.hp.value !== 0 &&  this.xdif2 < 200 && this.ydif2 < 200 && this.enemy2.dir === -1){
            this.enemy2.body.setVelocityX(100);
            this.enemy2.anims.play(this.runEsquerda);

            this.lastFiredtt3 = time + 300;
        }

        if(this.ydif2 < 30 &&  this.xdif2 < 10 && this.enemy2.hp.value !== 0){
            this.anims.play(this.attack);
        }


        if(this.enemy2.hp.value !== 0) {
            if (this.ydif2 < 40 && this.xdif2 < 200) {

                if(this.xdif2 < 90 && this.xdif2 > 50 && this.ydif2 > 5 && this.ydif2 < 20 && time > this.lastFiredtt1){
                    playerHurt.play();
                    this.enemy2.anims.play('rightEnemy');
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
                    this.lastFiredtt1 = time + 500;
                }

                if (Math.round(player.x) > Math.round(this.enemy2.x) && time > this.lastFiredtt2) {
                    // we increase the speed from the default 80 to 200
                    this.enemy2.body.velocity.x = 250;
                    this.enemy2.dir = 1;
                    this.lastFiredtt2 = time + 10;
                }else{
                    this.enemy2.body.velocity.x = -250;
                    this.enemy2.dir = -1;
                }
            } else {


                if (this.enemy2.dir === 1) {
                    if (this.enemy2.body.velocity.x === 0 && this.enemy2.dir === 1) {
                        this.enemy2.dir = -1;
                        this.enemy2.body.velocity.x = -150;
                    } else {
                        this.enemy2.body.velocity.x = 150;
                    }
                } else if (this.enemy2.dir === -1) {
                    if (this.enemy2.body.velocity.x === 0 && this.enemy2.dir === -1) {
                        this.enemy2.dir = 1;
                        this.enemy2.body.velocity.x = 150;
                    } else {
                        this.enemy2.body.velocity.x = -150;
                    }
                }
            }
        }


        //------------------------------------- Enemy 3--------------------------------------

        if(player.y < this.enemy3.y){
            this.ydif3 = this.enemy3.y - player.y;
        }
        else{
            this.ydif3 = player.y - this.enemy3.y;
        }

        if(player.x < this.enemy3.x){
            this.xdif3 = this.enemy3.x - player.x;
        }
        else{
            this.xdif3 = player.x - this.enemy3.x;
        }


        if(time > this.lastFiredtt5 && this.enemy3.hp.value !== 0 &&  this.xdif3 < 400 && this.ydif3 < 100 && this.enemy3.dir === 1){
            this.enemy3.body.setVelocityX(100);
            this.enemy3.anims.play(this.runDireita);

            this.lastFiredtt5 = time + 300;
        }

        if(time > this.lastFiredtt5 && this.enemy3.hp.value !== 0 &&  this.xdif3 < 400 && this.ydif3 < 200 && this.enemy3.dir === -1){
            this.enemy3.body.setVelocityX(100);
            this.enemy3.anims.play(this.runEsquerda);

            this.lastFiredtt5 = time + 300;
        }

        if(this.ydif3 < 30 &&  this.xdif3 < 10 && this.enemy3.hp.value !== 0){
            this.anims.play(this.attack);
        }


        if(this.enemy3.hp.value !== 0) {
            if (this.ydif3 < 40 && this.xdif3 < 500) {

                if(this.xdif3 < 90 && this.xdif3 > 50 && this.ydif3 > 5 && this.ydif3 < 20 && time > this.lastFiredtt1){
                    playerHurt.play();
                    this.enemy3.anims.play('rightEnemy');
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
                    this.lastFiredtt1 = time + 500;
                }

                if (Math.round(player.x) > Math.round(this.enemy3.x) && time > this.lastFiredtt2) {
                    // we increase the speed from the default 80 to 200
                    this.enemy3.body.velocity.x = 250;
                    this.enemy3.dir = 1;
                    this.lastFiredtt2 = time + 10;
                }else{
                    this.enemy3.body.velocity.x = -250;
                    this.enemy3.dir = -1;
                }
            } else {


                if (this.enemy3.dir === 1) {
                    if (this.enemy3.body.velocity.x === 0 && this.enemy3.dir === 1) {
                        this.enemy3.dir = -1;
                        this.enemy3.body.velocity.x = -150;
                    } else {
                        this.enemy.body.velocity.x = 150;
                    }
                } else if (this.enemy3.dir === -1) {
                    if (this.enemy3.body.velocity.x === 0 && this.enemy3.dir === -1) {
                        this.enemy3.dir = 1;
                        this.enemy3.body.velocity.x = 150;
                    } else {
                        this.enemy3.body.velocity.x = -150;
                    }
                }
            }
        }


        //Destruir inimigos
        if(this.enemy.hp.value === 0){
            this.enemy.destroy();
        }

        if(this.enemy2.hp.value === 0){
            this.enemy2.destroy();
        }

        if(this.enemy3.hp.value === 0){
            this.enemy3.destroy();
        }

    }

}
"use strict";

(function()
{
    window.addEventListener("load", main);
}());

function main(){
    const game = new Phaser.Game({
        "title":"Mama Chicken",
        "width":800,
        "height":600,
        "type": Phaser.CANVAS,
        "backgroundColor": "#000",
        "parent": "game-container",
        "scale":{
            "mode": Phaser.Scale.FIT,
            "autoCenter": Phaser.Scale.CENTER_BOTH
        },
        physics:{
            default: "arcade",
            arcade: {
                gravity:{ y:600},
                debug: true
            }
        },
        pixelArt: false,
        scene: [Boot, Preload, menu_inicial, menu_creditos, menu_opcoes, menu_jogar,menu_historia,level1,level2,level3,level4,arcade,menu_pause,status,afterdeath]
    });

    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();

}

class Boot extends Phaser.Scene{

    preload(){
        
    }
    create(){
        this.scene.start("Preload","main");
    }

    update(){
    
    }
}



var config = {
    type: Phaser.AUTO,
    width: 1024,
    height:768,
    parent:window__game,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 10 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
}
var game = new Phaser.Game(config);
var gameOver = false;
var cursors;

var kosz_bio;
var kosz_metplast;
var kosz_papier;
var kosz_szklo;

var smiec_bio_apple;
var smiec_bio_egg;

var smiec_metal_alum;
var smiec_metal_can;

var smiec_papier_bag;

var smiec_plastic_butelka;

var smiec_szklo_butelka;
var smiec_szklo_sloik;
var player;
var score=0;
var playerT=0;
var rand=0;
function preload(){
this.load.image('kosz_szklo', 'grafika/szklo.png');
this.load.image('kosz_metplast', 'grafika/metale_i_sztuczne.png');
this.load.image('kosz_papier', 'grafika/papier.png');
this.load.image('kosz_bio', 'grafika/bio.png');


this.load.image('smiec_metal_can', 'smiecie/metal_can.png');
this.load.image('smiec_metal_alum', 'smiecie/aluminium_foil.png');

this.load.image('smiec_bio_apple', 'smiecie/apple_core.png');
this.load.image('smiec_bio_egg', 'smiecie/egg_shell.png');

this.load.image('smiec_szklo_butelka', 'smiecie/broken_bottle.png');
this.load.image('smiec_szklo_sloik', 'smiecie/glass_jar.png');

this.load.image('smiec_papier_bag', 'smiecie/paper_bag.png');

this.load.image('smiec_plastic_butelka', 'smiecie/plastic_bottle.png');
}
function create(){
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#FFFFFF' });
    kosz_bio = this.physics.add.staticGroup();
    kosz_metplast = this.physics.add.staticGroup();
    kosz_szklo= this.physics.add.staticGroup();
    kosz_papier= this.physics.add.staticGroup();
   
    kosz_bio.create(90,650, 'kosz_bio').setScale(1).refreshBody();
    kosz_metplast.create(243,650, 'kosz_metplast').setScale(1).refreshBody();
    kosz_papier.create(771,650, 'kosz_papier').setScale(1).refreshBody();
    kosz_szklo.create(924,650, 'kosz_szklo').setScale(1).refreshBody();

    cursors = this.input.keyboard.createCursorKeys();
  
    this.physics.add.collider(player, kosz_bio);
    this.physics.add.collider(player, kosz_metplast);
    this.physics.add.collider(player, kosz_papier);
    this.physics.add.collider(player, kosz_szklo);
    this.physics.add.overlap(player, kosz_bio, CzyBio, null, this);
    this.physics.add.overlap(player, kosz_metplast, CzyMetPlast, null, this);
    this.physics.add.overlap(player, kosz_papier, CzyPapier, null, this);
    this.physics.add.overlap(player, kosz_szklo, CzySzklo, null, this);
    //player.create(300,0,'smiec_metal_can').setScale(1).refreshBody();   

    while(rand=0){
        rand=Math.random()*10;
        if(rand<1){
        player.create(300,0,'smiec_metal_can').setScale(1).refreshBody();
        playerT=1;
        }else  if(rand<2 && rand>=1){
        player.create(300,0,'smiec_metal_alum').setScale(1).refreshBody();
        playerT=1;
        }else  if(rand<3 && rand>=2){
        player.create(300,0,'smiec_bio_apple').setScale(1).refreshBody();
        playerT=2;
        }else  if(rand<4 && rand>=3){
        player.create(300,0,'smiec_bio_egg').setScale(1).refreshBody();
        playerT=2;
        }else  if(rand<5 && rand>=4){
        player.create(300,0,'smiec_szklo_butelka').setScale(1).refreshBody();
        playerT=3;
        }else  if(rand<6 && rand>=5){
        player.create(300,0,'smiec_szklo_sloik').setScale(1).refreshBody();
        playerT=3;
        }else if(rand<7 && rand>=6){
        player.create(300,0,'smiec_papier_bag').setScale(1).refreshBody();
        playerT=4;
        }else if(rand<8 && rand>=7){
        player.create(300,0,'smiec_plastic_butelka').setScale(1).refreshBody();
        playerT=1;
        }
    }
}
function update(){
   
      if (cursors.left.isDown)
    {
        player.setVelocityX(-100);
        player.setVelocityY(-10);

    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(100);
        player.setVelocityY(-10);
    }
    while(player){
        player.setVelocityY(-10)
    }
   

}



function CzyBio(player, playerT){
    player.disableBody(true, true);
    if(playerT==2){
        score += 10;
    }else{
        score -=100;
    }
    rand=0;
    scoreText.setText('Score: ' + score, style);
    player=0;
}
function CzyMetPlast (player, playerT){
    player.disableBody(true, true);
    if(playerT==1){
        score += 10;
    }else{
        score -=100;
    }
    rand=0;
    scoreText.setText('Score: ' + score, style);
    player=0;
}
function CzyPapier (player, playerT){
    player.disableBody(true, true);
    if(playerT==4){
        score += 10;
    }else{
        score -=100;
    }
    rand=0;
    scoreText.setText('Score: ' + score,style);
    player=0;
}
function CzySzklo(player, playerT){
    player.disableBody(true, true);
    if(playerT==3){
        score += 10;
    }else{
        score -=100;
    }
    rand=0;
    scoreText.setText('Score: ' + score,style);
    player=0;
}
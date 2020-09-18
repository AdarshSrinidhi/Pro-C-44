var spidey,spideyimage1,vulture,vultureimage;
var bk1,bkimage1;
var gameState = "start";
var fall1,fall1image;
var remark,remarkimage;
//ADD ALL IMAGES AND SOUNDS, IMAGES IN images FOLDER, SOUNDS IN sounds FOLDER
//GAMESTATES ARE LEVEL1,LEVEL2,LEVEL3(FINAL LEVEL)

function preload(){
spideyimage1 = loadImage("spideyswingright.png");
spideyimage2 = loadImage("spideyswingleft.png")
bkimage1 = loadImage("bk1.jpg")
bkimage2 = loadImage("bk2.png");
fall1image = loadImage("fall1.png");
remarkimage = loadImage("remark.png");
}

function setup() {
  createCanvas(1200,600);

  bk1 = createSprite(470,300);
  bk1.addImage(bkimage1);

  spidey = createSprite(200,200);
  spidey.addImage(spideyimage1);
  spidey.visible = false;
  spidey.scale = 0.3;
  spidey.setCollider("circle",0,0,200);

  fall1 = createSprite(900,210);
  fall1.addImage(fall1image);
  fall1.visible = false;
  fall1.scale = 0.3;
  fall1.setCollider("circle",0,0,200);

  remark = createSprite(600,300);
  remark.addImage(remarkimage);
  remark.scale = 0.5;
  remark.visible = false;
}

function draw() {  
  //fall1.debug = true;
  //spidey.debug = true;
  if (gameState==="start"){
    background("black");
    fill("white");
    textSize(20);
    text("Welcome to Spider-Man:",960,100);
    text("Tangled Web",1010,130);
    text("Press Space to start",980,175);
    text("the Game",1030,205);
    text("Use the J,K,L and M Keys",960,250);
    text("To Move Spidey",1000,280);
    text("Good Luck!",1020,350);

  if (keyDown("space")){
      gameState = "level1";
    }
  }

  if (gameState==="level1"){
    bk1.addImage(bkimage2);
      spidey.visible = true;
      fall1.visible = true;
      fall1.velocityY = 2;
  if (keyDown("space")){
    spidey.velocityX = 0.5;
    spidey.velocityY = 5;
  }
  if (keyDown("j")){
    spidey.velocityX = -5;
    spidey.velocityY = 0.5;
    spidey.addImage(spideyimage2);
    spidey.scale = 0.2;
  }
  if (keyDown("k")){
    spidey.velocityX = 0.5;
    spidey.velocityY = -5;  
  }
  if (keyDown("l")){
    spidey.velocityX = 5;
    spidey.velocityY = 0.5;
  }
  if (keyDown("m")){
    spidey.velocityX = 0.5;
    spidey.velocityY = 5;
  }
  if (keyWentUp("j")){
    spidey.velocityX = 0.5;
    spidey.velocityY = 5;
    spidey.addImage(spideyimage1);
    spidey.scale = 0.3;
  }
  if (keyWentUp("k")){
    spidey.velocityX = 0.5;
    spidey.velocityY = 5;
  }
  if (keyWentUp("l")){
    spidey.velocityX = 0.5;
    spidey.velocityY = 5;
  }
  if (keyWentUp("m")){
    spidey.velocityX = 0.5;
    spidey.velocityY = 5;
  }
  if (spidey.isTouching(fall1)){
    spidey.velocityX = 0;
    spidey.velocityY = 0;
    spidey.visible = false;
    fall1.velocityX = 0;
    fall1.velocityY = 0;
    fall1.visible = false;
    remark.visible = true;
  }
    //ALL CODE RELATED TO LEVEL1: BK CHANGE, SPIDEY visible = true;, SPACEKEY, SCROLLING GROUND, ADD GRAVITY
    //IF SPIDEY TOUCHES GROUND, GAMESTATE = "start", IF FRAMECOUNT MORE THAN XYZ (GAMESTATE=LEVEL2)
    //ADD SEPERATE CONDITIONS FOR GOING BACK IN THE LEVEL
  }

  /*if (keyIsDown(SPACE)){
    bk1.visible = false;
    spidey.visible = true;
    fall1.visible = true;
    //gameState = "level1";
    //playSound("xyz");
  }*/
  
  /*if (gameState==="level2"){
    //BK CHANGE, RANDOMLY SPAWN BPEOPLE AT TOP OF SCREEN FALLING, TOP OF SCREEN VULTURE, POWERUPS WILL ALSO FALL
    //IF SPIDEY IS TOUCING THEM (PEOPLE SAVED), IF FRAMECOUNT>XYZ, TEXT("XYZ")&&GAMESTATE=LEVEL3
    //ADD SEPERATE CONDITIONS FOR GOING BACK IN THE LEVEL
  }
  if (gameState==="level3"){
    //VULTURE DISPLAY AS BIG ON ONE SIDE, SPIDEY ON OTHER SIDE, ESCAPE AND SAVE
  }*/

  drawSprites();
}
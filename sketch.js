var ISS, ISSImage;
var SpaceBackground;
var spacecraft, spacecraftImage, spacecraftImage2, spacecraftImage3, spacecraftImage4;

function preload(){
  SpaceBackground = loadImage("PRO_42_Images/spacebg.jpg");
  ISSImage = loadImage("PRO_42_Images/iss.png");
  spacecraftImage = loadImage("PRO_42_Images/spacecraft1.png");
  spacecraftImage2 = loadImage("PRO_42_Images/spacecraft2.png");
  spacecraftImage3 = loadImage("PRO_42_Images/spacecraft3.png");
  spacecraftImage4 = loadImage("PRO_42_Images/spacecraft4.png");

}

function setup() {
  createCanvas(800,500);

  
  spacecraft = createSprite(300, 400, 50, 50);
  spacecraft.addImage(spacecraftImage);
  spacecraft.scale = 0.15;

  ISS = createSprite(400, 145, 50, 50);
  ISS.addImage(ISSImage);
  ISS.scale = 0.7;
  

}

function draw() {
  background(SpaceBackground);
  
  if(keyDown("up")){
    spacecraft.y = spacecraft.y-1;
    spacecraft.addImage(spacecraftImage2);
  }
  else if(keyDown("down")){
    spacecraft.y = spacecraft.y+1;
  }
  else if(keyDown("left")){
    spacecraft.x = spacecraft.x-1;
    spacecraft.addImage(spacecraftImage4);
  }
  else if(keyDown("right")){
    spacecraft.x = spacecraft.x+1;
    spacecraft.addImage(spacecraftImage3);
  }
  else{
    spacecraft.addImage(spacecraftImage);
    
  }
  drawSprites();

  if(spacecraft.x >= 349 && spacecraft.x <= 351 && spacecraft.y >= 199 && spacecraft.y <= 201){
    textSize(20);
    fill("white");
    text("Docking Successful !", 15, 20);
  }
}

//spacecraft's initial position = 350, 200;
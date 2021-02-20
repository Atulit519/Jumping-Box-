var edges;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    // Loading music
    // music = loadSound("music.mp3");

}

function BounceOff(s1, s2)
{
   // Detecting touch and making the box bounce
   if(s1.y - s2.y < s1.height/2 + s2.height/2 &&
    s2.y - s2.y < s1.height/2 + s2.height/2)
   {
      s2.bounceOff(s1);
      s2.shapeColor = s1.shapeColor

   }

}


function setup(){
    // Creating canvas
    createCanvas(700,600);

    // Creating surfaces
    surface1 = createSprite(80, 600, 155, 50);
    surface2 = createSprite(260, 600, 155, 50);
    surface3 = createSprite(440, 600, 155, 50);
    surface4 = createSprite(620, 600, 155, 50);
    
    surface1.shapeColor = "green";
    surface2.shapeColor = "yellow";
    surface3.shapeColor = "blue";
    surface4.shapeColor = "red";

    // Creating box
    box = createSprite(random(100, 600), 100, 20, 20);
    box.shapeColor = "white";
    box.velocityX = -5;
    box.velocityY = 5;

}

function draw(){
    console.log(box.y);

    // Creating background
    background(rgb(169,169,169));

    // Creating edgeSprites
    edges = createEdgeSprites();

    // Drawing sprites
    drawSprites();

    // Calling bounceOff function
    BounceOff(surface1, box);
    BounceOff(surface2, box);
    BounceOff(surface4, box);

    
    // Calling isTouching function
    if(box.isTouching(surface3))
    {
        box.velocityY = 0;
        box.velocityX = 0;

    }

    // Bouncing off box from edges
    box.bounceOff(edges);

}



var dog,master,ground;
var dogImg;
var ObstaclesGroup;

function preload()
{
	dogImg = loadImage("dog running pic.png");
    obstacle1 = loadImage("mean guy 1.png");
    obstacle2 = loadImage("mean guy 2.png");
    obstacle3 = loadImage("mean guy 3.png");
    obstacle4 = loadImage("mean guy 4.png");
    obstacle5 = loadImage("mean guy 5.png");
    obstacle6 = loadImage("mean guy 6.png");
    obstacle7 = loadImage("mean guy 7.png");
}

function setup() {
	 //creating canvas
	 var canvas = createCanvas(1200,400);
	 //creating dog and ground sprites
	 dog = createSprite(100,380,30,70);
	 dog.addImage("dog running",dogImg);
	 dog.scale = 0.2;
	 //dog.debug = true;
	 dog.setCollider("circle",0,0,100);
	 ground = createSprite(600,390,1200,20);
	 ObstaclesGroup = new Group();
}


function draw() {
	background("black");
	
	dog.velocityY = dog.velocityY + 0.8;
    spawnObstacles();

	dog.collide(ground); 

  drawSprites();
}

function spawnObstacles(){
    if(World.frameCount%90===0){
        var obstacle = createSprite(1200,320,20,40);
        obstacle.velocityX = -8;
        //obstacle.debug = true;
        var rand = Math.floor(Math.random()*7);

        switch (rand) {
            case 0:
                obstacle.addImage(obstacle1);
                obstacle.scale = 0.17;
                break;
            case 1:
                obstacle.addImage(obstacle2);
                obstacle.scale = 0.2;
                break;
            case 2:
                obstacle.addImage(obstacle3);
                obstacle.scale = 0.17;
                break;
            case 3:
                obstacle.addImage(obstacle4);
                obstacle.scale = 0.19;
                obstacle.setCollider("rectangle",0,0,200,obstacle.height);
                break;
            case 4:
                obstacle.addImage(obstacle5);
                obstacle.scale = 0.15;
                break;
            case 5:
                obstacle.addImage(obstacle6);
                obstacle.scale = 0.15;
                break;
            case 6:
                obstacle.addImage(obstacle7);
                obstacle.scale = 0.20;
                obstacle.setCollider("rectangle",0,0,200,obstacle.height);
                break;
            default:
                break;
        }
        ObstaclesGroup.add(obstacle);
    }
}


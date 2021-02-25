//constants
const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Render = Matter.Render;



//variables
var myEngine, myWorld ; 
var rain=[];
var maxDrops = 100;
var boy;
var thunder1, thunder2, thunder3, thunder4;
var thunderCreatedFrame=0, thunder;

function preload (){

    //load all thunder images
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");

}

function setup(){
    //canvas, engine and world
    createCanvas(400,600);
    myEngine = Engine.create ();
    myWorld = myEngine.world;

    //render display
    var render = Render.create({
        element: document.body,
        engine: myEngine,
        options: {
          width: 1200,
          height: 700,
          wireframes: false
        }
    });

    //for loop to create raining drops
    for (var i=0; i<maxDrops; i++){

        //add drops to rain array
        rain.push(new Drop(random(0,400), random (0,400)));

    }

    //create boy with umbrella
    boy=new Umbrella (200,400);

    //run render to see render display
    Render.run(render);
    
}

function draw(){
    background("black");
    Engine.update (myEngine);
    
    for(var i = 0; i<maxDrops; i++){
        //display drops 
        rain[i].display(); 
        //and update position (function in drops.js)
        rain[i].updateY();
    }   

    //show boy
    boy.display();

    //random number from 1 to 4
    rand = Math.round(random(1,4));

    //every 80 framecounts,
    if (frameCount%80==0){

        //make thunderCreatedFrame equal to frameCount
        thunderCreatedFrame=frameCount;

        //create thunder sprite at random positions
        thunder =createSprite (random(10,370), random(10,30),10,10);
        

        switch (rand){

            //assign different images to each random number
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default : break;

        }

        //scale thunder imafe randomly between 0.3 & 0.6
        thunder.scale=random(0.3,0.6);

    }
    
    if(thunderCreatedFrame + 10 ===frameCount && thunder){

        console.log("here!!")
        thunder.destroy();
    }
    

    //show sprites for thunder
    drawSprites();
    
}   


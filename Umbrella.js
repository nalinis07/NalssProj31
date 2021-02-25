class Umbrella {

    //give any x,y,width and height
    constructor (x,y){

        //setup radius
        this.radius = 50;

        var um_options = {
            isStatic : true
        }

        //load image
        this.image=loadImage("walking_4.png");

        //create body
        this.body = Bodies.circle (x, y, this.radius, um_options);

        //add ground body to world
        World.add (myWorld, this.body );
    }

    display () {

        //use pos variable to control body position
        var pos = this.body.position;

        //make image mode center
        imageMode(CENTER);

        //make visible
        image(this.image,pos.x,pos.y+70, 300,300);
        
    }
}
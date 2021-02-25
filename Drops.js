class Drop {

    constructor (x,y){

        //define radius
        this.radius = 5;

        //options
        var drop_options = {
            isStatic : false,
            friction : 0.1
        }

        //create body
        this.body=Bodies.circle (x,y,this.radius, drop_options);

        //add to world
        World.add(myWorld,this.body);

    }

    display(){
        
        //control position
        var pos=this.body.position;

        push()

        //translate origin
        translate(pos.x,pos.y);
        //ellipseMode(RADIUS);
        ellipseMode (RADIUS); 
        //make it purple
        fill ("blue");
        //create ellipse to display
        ellipse(0,0,this.radius);

        pop ()


        
    }

    //to reposition drops after they reach bottom of screem
    updateY(){     

        //when drop reaches bottom
        if(this.body.position.y > height){

            //reset position
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)});
            
        }
    }

}
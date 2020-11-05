class Ball{
    constructor(x,y,r){
        var options = {
            frictionAir:0.005,
            density:1.0
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r=r

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("white");
        fill(0)
        ellipseMode(RADIUS);      
        ellipse(0,0,this.r*2,this.r*2);
        pop();
    }

}
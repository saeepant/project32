class SlingShot{
    constructor(bodyA, pointB){
        var options = {
        
        bodyA : bodyA,
        pointB : pointB,
        stiffness: 0.04,
        length : 10
     }
         this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    fly(){
        this.chain.bodyA = null;

    }

    attach(b1){
        this.chain.bodyA = b1;

    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("pink");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    

}
}
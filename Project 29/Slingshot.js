class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);

    } 
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA) {
            var pointA = this.sling.body.position;
            var pointB = this.pointB;

            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
class Paper {
    constructor(x, y,radius) {
      var options = {

        'restitution':0.5,
        'friction':0.2,
        'density':0.8

      }
      this.body = Bodies.circle(x, y,radius/2, options);
      this.radius = radius;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      ellipseMode(CENTER);
      fill("purple");
      ellipse(pos.x,pos.y, this.radius,this.radius);
    }
  };
  
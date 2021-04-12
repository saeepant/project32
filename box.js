class Box {
    constructor(x, y) {
      var options = {
          'restitution':0.02,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20,30, options);
      this.width = 20;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(0.5);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  
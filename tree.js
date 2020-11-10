class Tree {
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("project28 sprites/tree.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }
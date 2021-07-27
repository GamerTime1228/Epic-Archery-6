class ComputerArcher {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.collapse = false;

    this.image = loadImage("./assets/computerArcher.png");

    World.add(world, this.body);

    Matter.Body.setAngle(this.body, PI / 2); // 90 degree
  }

  remove(index) {
    this.isSink = true;
    Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
    Matter.World.remove(world, this.body);
    balls.splice(index, 1);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, -20, this.width, this.height);
    pop();
  }
}

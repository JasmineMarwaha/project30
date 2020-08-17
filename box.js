class Box  {
    constructor(x, y, width, height){ 
      var options = {
        isStatic: true,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      if(this.body.speed < 3) {
        rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
      }
      else {
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity -5;
        tint(255, this.Visiblity);
        pop();

      }
    }
  }

  //display() {
    //var pos = this.body.position;
    //rectMode(CENTER);
    //fill("pink");
    //rect(pos.x, pos.y, this.width, this.height);
 // }
//}

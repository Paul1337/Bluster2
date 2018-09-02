class EventManager {

  constructor(el) {
    this.el = el;
    this.mousePressed = false;

    this.addEventListener();
  }

  addEventListener() {
    var self = this;

    this.el.addEventListener("mousemove", function(e) {

      if (self.mousePressed) {
        if (self.mouseIsDragging !== undefined) self.mouseIsDragging(e);
      }

    });

    this.el.addEventListener("mousedown", function(e) {
      self.mousePressed = true;
      if (self.mouseIsDown !== undefined) self.mouseIsDown(e);
    });

    this.el.addEventListener("mouseup", function(e) {
      self.mousePressed = false;
      if (self.mouseIsUp !== undefined) self.mouseIsUp(e);
    });


  }
}

class EventManager {

  constructor(el) {
    this.el = el;
    this.mousePressed = false;

    this.addEventListener();
  }

  addEventListener() {
    this.el.addEventListener("mousemove", (e) => {
      if (this.mousePressed) {
        if (this.mouseIsDragging !== undefined) this.mouseIsDragging(e);
      }
    });

    this.el.addEventListener("mousedown", (e) => {
      this.mousePressed = true;
      if (this.mouseIsDown !== undefined) this.mouseIsDown(e);
    });

    this.el.addEventListener("mouseup", (e) => {
      this.mousePressed = false;
      if (this.mouseIsUp !== undefined) this.mouseIsUp(e);
    });


  }
}

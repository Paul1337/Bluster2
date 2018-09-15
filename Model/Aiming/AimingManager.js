class AimingManager {

  constructor() {
  }

  pullAiming(lenA, lenB) {
    this.aiming.pull(lenA, lenB);
    this.aimingPulled(this.aiming);
  }

  updateAimingValidationByY(maxY) {
    this.aiming.updateValidationByY(maxY);
    this.aimingValidationUpdated(this.aiming.isValid);
  }

  createAiming(x, y, k) {
    this.aiming = new Aiming(x, y, k);
    this.aimingCreated(this.aiming);
  }

  destroyAiming() {
    this.aiming = undefined;
    this.aimingDestroyed();
  }

}

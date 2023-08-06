import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Matter.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene.matter.world, x, y, spriteKey, 0, {
      shape: 'circle',
      frictionAir: 1,
      density: 0.04
    });

    scene.add.existing(this);  // Add player to the existing scene

    // Define the key codes for WASD controls
    this.controls = scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
  }

  update() {
    // Reset player's movement each frame
    this.setVelocity(0, 0);

    // Check key states and move accordingly
    if (this.controls.left.isDown) {
      this.setVelocityX(-2);
    } else if (this.controls.right.isDown) {
      this.setVelocityX(2);
    }

    if (this.controls.up.isDown) {
      this.setVelocityY(-2);
    } else if (this.controls.down.isDown) {
      this.setVelocityY(2);
    }
  }
}

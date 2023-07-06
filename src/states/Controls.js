import * as Phaser from 'phaser';

class Player extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y) {
      super(scene.matter.world, x, y, 'charDown');

      scene.add.existing(this);
    };
}
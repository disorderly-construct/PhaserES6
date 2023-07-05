import * as Phaser from 'phaser';

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PlayScene' });
  }

  preload() {
    this.load.image('star', '../static/star.png');
  }

  create() {
      this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'star');
    }
  }
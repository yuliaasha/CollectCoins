
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var player = this.add.image(97.883064, 105.29822, "textures", "player");
		
		var key = this.add.image(426.71924, 151.4395, "textures", "keyblue");
		
		this.fPlayer = player;
		this.fKey = key;
		
	}
	
	
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.add.existing(this.fPlayer);
		this.physics.add.existing(this.fKey);
		
		this.physics.add.overlap(this.fPlayer, this.fKey, this.hit, null, this);
		
		this.creatScore();
	}
	
	creatScore() {
		this.score = 0;
		
		var style = { font: '20px Arial', fill: '#fff'}
		
		this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);
		
		
	}
	
	hit() {
		this.fKey.x = Phaser.Math.Between(0, 1280);
		this.fKey.y = Phaser.Math.Between(0, 900);
		
		this.score += 10;
		
		this.scoreText.setText('score: ' + this.score);	
		
		this.tweens.add({
			targets: this.fPlayer,
			duration: 200,
			scaleX: 1.1,
			scaleY: 1.1,
			yoyo: true
		});	
	}

	update() {
		if (this.cursors.down.isDown) {
		this.fPlayer.y += 3;
		} else if (this.cursors.up.isDown) {
			this.fPlayer.y -= 3;
		} 
		
		if (this.cursors.left.isDown) {
			this.fPlayer.x -= 3;
		} else if (this.cursors.right.isDown) {
			this.fPlayer.x += 3;
		}
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

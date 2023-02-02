export default class Character {
    constructor ({ x, y, w, h}) {
        // Set position of character
        this.pos = { x, y };

        // Set width and height of character
        this.w = w;
        this.h = h;

        // Set state values for the character
        this.velocity = 0;
        this.frames = 0;
        this.framerate = 30;
        this.framecount = 0;
        this.walking = false;
        this.frame = 0;
    }

    draw (c) {
        c.drawImage(this.sprite, this.currentSprite[this.frame].x, this.currentSprite[this.frame].y, this.w, this.h, this.pos.x, this.pos.y, this.w, this.h);
    }

    update (c) {
        let frames = this.currentSprite.length - 1;

        if(this.framecount === 15) {
            if(this.frame === frames){
                this.frame = 0;
                if(this.sprite === this.sprites.attack || this.sprite === this.sprites.walking){
                    this.sprite = this.sprites.idle;
                    this.currentSprite = this.spriteMap.idleFront;
                    this.w = 16;
                    this.h = 16;
                }
            } else {
                this.frame++;
            }


            this.framecount = 0;
        }
        this.framecount++;

        this.draw(c);
    }
}
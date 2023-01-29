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
}
export default class Item {
    constructor ({x, y, w, h}) {
        this.pos = {x, y};
        this.w = w;
        this.h = h;
    }

    draw (c) {
        c.drawImage(this.sprite, this.pos.x, this.pos.y, this.w, this.h);
    }

    update (c) {
        this.draw(c);
    }
}
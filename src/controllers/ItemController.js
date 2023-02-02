import HeartItem from "../models/HeartItem.js";

export default class ItemController {
    constructor () {
        this.heart = new HeartItem({x:100, y:100, w:10, h:10});
    }

    update (c) {
        this.heart.update(c);
    }
}
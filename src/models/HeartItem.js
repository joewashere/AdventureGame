import { importSprite } from "../helpers/importSprite.js";
import Item from "./Item.js";

export default class HeartItem extends Item {
    constructor ({ x, y, w, h }) {
        super({ x, y, w, h });
        this.sprite = importSprite('../../assets/Other/Heart.png');
    }

    update (c) {
        super.update(c);
    }
}
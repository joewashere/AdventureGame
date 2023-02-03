import CoinItem from "../models/CoinItem.js";
import HeartItem from "../models/HeartItem.js";

export default class ItemController {
    constructor () {
        this.heart = new HeartItem({ x:100, y:100, w:10, h:10 });
        this.coins = [
            this.coin = new CoinItem({ x:215, y:100, w:10, h:10 }),
            this.coin = new CoinItem({ x:315, y:200, w:10, h:10 }),
            this.coin = new CoinItem({ x:215, y:300, w:10, h:10 }),
            this.coin = new CoinItem({ x:415, y:120, w:10, h:10 }),
            this.coin = new CoinItem({ x:315, y:180, w:10, h:10 }),
            this.coin = new CoinItem({ x:215, y:220, w:10, h:10 }),
        ];
    }

    update (c, player) {
        this.heart.update(c);
        this.coins.forEach((coin, index) => {

            // Detect if player walks across a coin
            if(
                Math.abs(player.pos.x - coin.pos.x) < coin.w &&
                Math.abs(player.pos.y - coin.pos.y) < coin.w
            ){
                this.coins.splice(index, 1);
                player.coins++;
            }

            coin.update(c);
        });
    }
}
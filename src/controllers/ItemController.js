import CoinItem from "../models/CoinItem.js";
import HeartItem from "../models/HeartItem.js";

export default class ItemController {
    constructor () {
        this.hearts = [];
        this.coins = [];
    }

    update (c, player) {
        this.hearts.forEach((heart, index) => {

            // Detect if player walks across a heart
            if(
                Math.abs(player.pos.x - heart.pos.x) < heart.w &&
                Math.abs(player.pos.y - heart.pos.y) < heart.w
            ){
                this.hearts.splice(index, 1);
                player.life = player.life + 10;
            }

            heart.update(c);
        });

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

    generateItems (item, n) {
        for(let i=0; i<n; i++){
            let pos = this.getRandomPos();
            let size = { w:10, h:10 };
            switch (item) {
                case 'coin':
                    this.coins.push(new CoinItem({ x:pos.x, y:pos.y, w:size.w, h:size.h }));
                    break;
                case 'heart':
                    this.hearts.push(new HeartItem({ x:pos.x, y:pos.y, w:size.w, h:size.h }));
                    break;
            }
        }
    }

    getRandomPos () {
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        return { x, y };
    }
}
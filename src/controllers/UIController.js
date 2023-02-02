export default class UserInterface {
    constructor () {}

    draw (c, life, coins) {
        c.fillStyle ='#FFF';
        c.fillRect(window.innerWidth - 250, 32, 200, 100);

        c.font = "32px serif";
        c.fillStyle ='#000';
        c.fillText(`Life: ${life}`, window.innerWidth - 240, 70);
        c.fillText(`Coins: ${coins}`, window.innerWidth - 240, 110);
    }

    update (c, life, coins) {
        this.draw(c, life, coins);
    }
}
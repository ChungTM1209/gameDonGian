
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;
const UP = 4;

function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;


    this.direction = RIGHT;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += this.speed;
        if (this.left > window.innerWidth - this.size) {
            this.direction = DOWN;
        }
        console.log('ok: ' + this.left);
    }
    this.moveDown = function () {
        this.top += this.speed;
        if (this.top > window.innerHeight - this.size) {
            this.direction = LEFT;
        }
        console.log('ok:' + this.top);
    }
    this.moveLeft = function () {
        this.left -= this.speed;
        if (this.left < this.size - this.left) {

            this.direction = UP;
        }
        console.log('ok:' + this.left);
    }
    this.moveUp = function () {
        this.top -= this.speed;
        if (this.top < this.size - this.top) {
            this.direction = RIGHT;
        }
        console.log('ok:' + this.top);
    }
}

var hero = new Hero('pokemon.jpeg', 20, 30, 200, 100);

function start() {
    switch (hero.direction) {
        case RIGHT:
            hero.moveRight();
            break;
        case DOWN:
            hero.moveDown();
            break;
        case LEFT:
            hero.moveLeft();
            break;
        case UP:
            hero.moveUp();
            break;

    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
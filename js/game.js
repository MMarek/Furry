const Furry = require('./furry');
const Coin = require('./coin');


// główne czynności gry: wyświetlanie furriego i monet

const Game = function () {
    this.board = document.querySelector('#board').querySelectorAll('div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;


    this.index = function (x, y) {
        return x + (y * 10);
    };
    this.showFurry = function () {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    };
    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };


    const self = this;

    // czynności/akcja/opcje poruszania się bohatera /instrukcja warunkowa

    this.moveFurry = function () {
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }

        this.gameOver();
        this.showFurry();
        this.checkCoinCollision();
    };
// funkcja inicjująca rozpoczęcie gry
    this.startGame = function () {
        this.idSetInterval = setInterval(function () {
            self.moveFurry();
            self.showFurry();
            console.log("asdf");
        }, 250);

    };
// funkcja niwelująca duplikacje Furriego
    this.hideVisibleFurry = function () {
        const first = document.querySelector('.furry');

        if (first !== null) {

            first.classList.remove('furry')
        }

    };


    // przypisanie odpowiednich klawiszy do opcji poruszania

    this.turnFurry = function () {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;

        }
    };

    // funkcja ukrywająca zdobytą monete (podobnie jak z Furrym)
    this.checkCoinCollision = function () {

        if ((this.furry.x === this.coin.x) && (this.furry.y === this.coin.y)) {
            this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
            this.score++;
            document.querySelector('#score div strong').innerText = this.score;
            this.coin = new Coin();
            this.showCoin()
        }
    };

    //koniec gry - instrukcja warunkowa/ czynności następujące po zakończeniu gry
    this.gameOver = function () {
        if ((this.furry.x < 0) || (this.furry.y < 0) || (this.furry.x > 9) || (this.furry.y > 9)) {

            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            const over = document.getElementById('over');
            over.classList.remove('invisible');
            over.querySelector('h1').innerText = 'GAME OVER';
            over.querySelector('h2').innerText = "SCORE:";
            over.querySelector('h3').innerText = this.score
        }
    }
}
const fur = new Game();
fur.showFurry();
fur.showCoin();
fur.startGame();

document.addEventListener('keydown', function (event) {
    fur.turnFurry(event);
});

module.exports = Game;




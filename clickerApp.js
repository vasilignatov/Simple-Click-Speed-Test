const start = document.getElementById('start');
const clickBtn = document.getElementById('clickBtn');
const output = document.getElementById('message');
const seconds = document.getElementById('time');
const clickCounter = document.getElementById('clicksCounter');

start.addEventListener('click', (ev) => {
    output.textContent = '';
    let time = 3;
    start.textContent = 3;
    let countdownId = setInterval(startCountdown, 1000);

    function startCountdown() {
        time--;
        start.textContent = time;
        if (time == 0) {
            start.textContent = 'GO';
            start.backgroundColor = 'red'
            clearInterval(countdownId);
            play();
            start.disabled = true;
        }
    }
    
    const gameTimeSeconds = Number(seconds.value);
    
    function play() {
        clickBtn.disabled = false;
        let clicks = 0;
        let gameTimer = setInterval(startGame, 1000);
        let gameTime = gameTimeSeconds;
        clickBtn.addEventListener('click', () => clickCounter.textContent = ++clicks);

        function startGame() {
            gameTime--;
            if (gameTime == 0) {
                time = 3;
                clickBtn.disabled = true;

                clearInterval(gameTimer);

                output.textContent = `For ${gameTimeSeconds} seconds you clicked ${clicks} times!\n
                Average: ${(clicks / gameTimeSeconds).toFixed(1)} CPS`;

                clickCounter.textContent = 0;
                start.disabled = false;
            }
        }
    }
});
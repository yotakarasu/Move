/*クリックして回す*/
let start02 = document.getElementById('start02');
let min02 = document.getElementById('min02');
let sec02 = document.getElementById('sec02');

start02.addEventListener('click', () => {
    
    min02.animate(
    [
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(3600deg)'}
    ],

    {fill: 'forwards',
    duration: 6000
        }
    )

    sec02.animate(
    [
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(360deg)'}
    ],
        
    {fill: 'forwards',
    duration: 6000
        }

    );
});

/*クリックして回して止める。*/
let isRunning = false;
let startTime;
let elapsedTime = 0;

start03.addEventListener('click', function () {
    if (isRunning) {
        isRunning = false;
        elapsedTime += Date.now() - startTime;
        cancelAnimationFrame(intervalId);
        console.log('一時停止');
    } else {
        isRunning = true;
        startTime = Date.now();
        animateClock();
        console.log('再開');
    }
});

function animateClock() {
    const currentTime = Date.now();
    const totalElapsedTime = elapsedTime + (currentTime - startTime);

    min03.style.transform = `rotate(${(totalElapsedTime / 1000) * 360}deg)`;
    sec03.style.transform = `rotate(${(totalElapsedTime / 1000) * 6}deg)`;

    if (isRunning) {
        intervalId = requestAnimationFrame(animateClock);
    }
}

/*TOPに戻す時計*/
let page_top = document.querySelector('tokei99');

page_top.addEventListener('click', scroll_top);

function scroll_top() {
    window.scroll({ top: 0, behavior: 'smooth'});
}

window.addEventListener("scroll", scroll_event);
function scroll_event() {
    if (window.scrollY > 100) {
        page_top.style.opacity = "1";
    } else if (window.scrollY < 100) {
        page_top.style.opacity = "0";
    }
}
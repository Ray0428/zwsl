const pre = document.querySelector('#pre');
const next = document.querySelector('#next');

const sliders = document.querySelectorAll('.slide');

var currentIndex = 0;
// 定义自动播放
var autoPlay = true;
// 向前播放
var forward = true;
// 播放间隔
var interval = 2500;

if (autoPlay) {
    setInterval
        (forward ? handleNextClicked : handlePreClicked, interval);
}
next.addEventListener('click', handleNextClicked)
pre.addEventListener('click',handlePreClicked)


function handleNextClicked() {
    let current = sliders[currentIndex];
    current.classList.remove('current');

    currentIndex++;
    if (currentIndex >= sliders.length) {
        currentIndex = 0;
    }

    sliders[currentIndex].classList.add('current');
}

function handlePreClicked() {
    let current = sliders[currentIndex];
    current.classList.remove('current');

    currentIndex--;
    if (currentIndex < sliders.length) {
        currentIndex = sliders.length - 1 ;
    }

    sliders[currentIndex].classList.add('current');
}



var hoursContainer = document.querySelector('.footer__clock-hours');
var minutesContainer = document.querySelector('.footer__clock-minutes');
var secondsContainer = document.querySelector('.footer__clock-seconds');
var tickElements = Array.from(document.querySelectorAll('.footer__clock-tick'));

var last = new Date(0);
last.setUTCHours(-1);

var tickState = true;

function updateTime() {
    var now = new Date;
//  clockContainer.innerText = new Date().toLocaleTimeString('uk');


    var lastHours = last.getHours().toString();
    var nowHours = now.getHours().toString();
    if (lastHours !== nowHours) {
        updateContainer(hoursContainer, nowHours);
    }

    var lastMinutes = last.getMinutes().toString();
    var nowMinutes = now.getMinutes().toString();
    if (lastMinutes !== nowMinutes) {
        updateContainer(minutesContainer, nowMinutes);
    }

    var lastSeconds = last.getSeconds().toString();
    var nowSeconds = now.getSeconds().toString();
    if (lastSeconds !== nowSeconds) {
        //tick()
        updateContainer(secondsContainer, nowSeconds)
    }

    last = now;
}

function tick() {
    tickElements.forEach(t => t.classList.toggle('tick-hidden'));
}

function updateContainer(container, newTime) {
    var time = newTime.split('');

    if (time.length === 1) {
        time.unshift('0');
    }


    var first = container.firstElementChild;
    if (first.lastElementChild.textContent !== time[0]) {
        updateNumber(first, time[0]);
    }

    var last = container.lastElementChild;
    if (last.lastElementChild.textContent !== time[1]) {
        updateNumber(last, time[1]);
    }
}

function updateNumber(element, number) {
    var second = element.lastElementChild.cloneNode(true);
    second.textContent = number;

    element.appendChild(second);
    element.classList.add('move');

    setTimeout(function () {
        element.classList.remove('move')
    }, 990);
    setTimeout(function () {
        element.removeChild(element.firstElementChild)
    }, 990);
}

setInterval(updateTime, 100);
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // Timer
    let deadline = '2019-06-05';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            // если хотим добавить еще и дни, то используем две строчки ниже
            // hours = Math.floor((t/1000/60/60) % 24),
            // days = Math.floor((t/(1000 * 60 * 60 * 24)));
            hours = Math.floor((t/(1000 * 60 * 60)));
            if (t <= 0 ) {
                seconds = 0,
                minutes = 0,
                hours = 0;
            }
            
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };

    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    // Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelectorAll('.description-btn');

        function showModal() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        };

        function closeModal() {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = 'auto';
        };

    more.addEventListener('click', showModal);
    close.addEventListener('click', closeModal);
    descriptionBtn.forEach(function(item) {
        item.addEventListener('click', showModal);
    });


    // Form

    // форма в модалке

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так!'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formDate = new FormData(form);

        let obj = {};
        formDate.forEach(function(value, key) {
            obj[key] = value;
        });
        
        let json = JSON.stringify(obj);
        request.send(json);

        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }        
    });
    
    // форма внизу
    let form2 = document.querySelector('#form'),
        inputEmail = form2.querySelectorAll('input')[0],
        inputPhone = form2.querySelectorAll('input')[1],
        statusMessage2 = document.createElement('div');
        statusMessage2.classList.add('status');


    form2.addEventListener('submit', function(event) {
        event.preventDefault();
        form2.appendChild(statusMessage2);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formDate = new FormData(form2);

        let obj = {};
        formDate.forEach(function(value, key) {
            obj[key] = value;
        });
        
        let json = JSON.stringify(obj);
        request.send(json);

        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                statusMessage2.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage2.innerHTML = message.success;
            } else {
                statusMessage2.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < inputPhone.length; i++) {
            inputPhone[i].value = '';
        }        
    });

    // ввод чисел в инпуты с телефонами
    document.oninput = function() {
        let input = document.querySelectorAll('input[type=tel]');
        input.forEach(function(item) {
            item.value = item.value.replace(/[^\+\d]/g, '');
        });
    };
    
});
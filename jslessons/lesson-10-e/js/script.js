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

});
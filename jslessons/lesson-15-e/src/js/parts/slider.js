const slider = ()=> {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        // через эту проверку добавляем бесконечную прокрутку вперед
        if(n > slides.length) {
            slideIndex = 1;
        }
        // и назад
        if(n < 1) {
            slideIndex = slides.length;
        }

        // получаем все слайды и скрываем их на странице
        slides.forEach((item) => item.style.display = 'none');
        // получаем все точки и убираем у них класс
        dots.forEach((item) => item.classList.remove('dot-active'));
        // показываем первый слайд 
        slides[slideIndex - 1].style.display = 'block';
        // присваиваем класс активной точке
        dots[slideIndex - 1].classList.add('dot-active');
    } //showSlides


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // навешиваем обработчики событий на стрелки вперед и назад
    prev.addEventListener('click', ()=> {
        plusSlides(-1);
    });
    next.addEventListener('click', ()=> {
        plusSlides(1);
    });

    // делегирование событий, при клике на элемент проверяем, тот ли это элемент, котоый нам нужен и если да, то вешаем на него событие
    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
}

module.exports = slider;

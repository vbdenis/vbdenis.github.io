$(document).ready(function(){
	// слайдер на главной
	$('.main-slider').slick({
		autoplay: true,
		fade: true,
		dots: true,
		infinite: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		   {
		    breakpoint: 960,
		    settings: {
		    	arrows: false
		    }
		   }
		],
		dotsClass: 'slick-dots main-dots',
		nextArrow: '<div class="slider-arrow main-slider-right"></div>',
		prevArrow: '<div class="slider-arrow main-slider-left"></div>'
	});
	
	// слайдер на детальной проекта
	$('.project-slider').slick({
		autoplay: true,
		fade: true,
		dots: true,
		infinite: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: 'slick-dots main-dots',
		nextArrow: '<div class="slider-arrow main-slider-right"></div>',
		prevArrow: '<div class="slider-arrow main-slider-left"></div>'
	});

	// Кнопка каталога
	$('.left-sidebar .title').click(function() {
		$(this).toggleClass('open');
		$('.left-sidebar ul').toggleClass('open');
	});

});


// Карта в контактах
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/ball.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
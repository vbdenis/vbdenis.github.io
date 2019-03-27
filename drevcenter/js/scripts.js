$(document).ready(function(){

	// Показываем блоки слайдера после его загрузки, предотвращая его разваливание
	$('.main-slider').on('init', function(){
		$(this).css({'overflow': 'visible', 'max-height': 'none'});
		$('.main-slider__block').css({'opacity': '1'});
	});
	$('.foto-slider').on('init', function(){
		$(this).css({'overflow': 'visible', 'max-height': 'none'});
		$('.foto-slider__block').css({'opacity': '1'});
	});
	$('.project-slider').on('init', function(){
		$(this).css({'overflow': 'visible', 'max-height': 'none'});
		$('.project-slider__block').css({'opacity': '1'});
	});
	$('.video-slider').on('init', function(){
		$(this).css({'overflow': 'visible', 'max-height': 'none'});
		$('.video-slider__block').css({'opacity': '1'});
	});
	$('.foto-slider--detail').on('init', function(){
		$(this).css({'overflow': 'visible', 'max-height': 'none'});
		$('.foto-slider__block').css({'opacity': '1'});
	});

	// main-slider
	$('.main-slider').slick({
		dots: true,
		dotsClass: 'slick-dots main-dots',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: '<div class="slick-arrow slider-arrow slider-arrow-next"></div>',
		prevArrow: '<div class="slick-arrow slider-arrow slider-arrow-prev"></div>'
	});

	$('.project-slider').slick({
		dots: false,
		lazyLoad: 'ondemand',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1
			}
		}
		],
		nextArrow: '<div class="slick-arrow slider-arrow slider-arrow--green slider-arrow-next slider-arrow-next--out"></div>',
		prevArrow: '<div class="slick-arrow slider-arrow slider-arrow--green slider-arrow-prev slider-arrow-prev--out"></div>'
	});

	$('.foto-slider').slick({
		dots: false,
		lazyLoad: 'ondemand',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1
			}
		}
		],
		nextArrow: '<div class="slick-arrow slider-arrow slider-arrow--green slider-arrow-next slider-arrow-next--out"></div>',
		prevArrow: '<div class="slick-arrow slider-arrow slider-arrow--green slider-arrow-prev slider-arrow-prev--out"></div>'
	});

	$('.video-slider').slick({
		dots: false,
		lazyLoad: 'ondemand',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1
			}
		}
		],
		nextArrow: '<div class="slick-arrow slider-arrow slider-arrow--green slider-arrow-next slider-arrow-next--out"></div>',
		prevArrow: '<div class="slick-arrow slider-arrow slider-arrow--green slider-arrow-prev slider-arrow-prev--out"></div>'
	});

	// слайдер на детальных проекта
	$('.gallery-slider').slick({
		dots: false,
		arrows: false,
		lazyLoad: 'ondemand',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.gallery-thumb',
		nextArrow: '<div class="slick-arrow slider-arrow slider-arrow--green slider-arrow-next slider-arrow-next--out"></div>',
		prevArrow: '<div class="slick-arrow slider-arrow slider-arrow--green slider-arrow-prev slider-arrow-prev--out"></div>'
	});
	$('.gallery-thumb').slick({
		dots: false,
		// arrows: false,
		lazyLoad: 'ondemand',
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.gallery-slider',
		focusOnSelect: true,
		nextArrow: '<div class="slick-arrow slider-arrow slider-arrow--small slider-arrow slider-arrow-next slider-arrow-next--in"></div>',
		prevArrow: '<div class="slick-arrow slider-arrow slider-arrow--small slider-arrow slider-arrow-prev slider-arrow-prev--in"></div>'
	});

	$('.foto-slider--detail').slick({
		dots: false,
		lazyLoad: 'ondemand',
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1
			}
		}
		],
		nextArrow: '<div class="slick-arrow slider-arrow slider-arrow--small slider-arrow--green slider-arrow-next slider-arrow-next--in"></div>',
		prevArrow: '<div class="slick-arrow slider-arrow slider-arrow--small slider-arrow--green slider-arrow-prev slider-arrow-prev--in"></div>'
	});

	// $('.youtube-slider').slick({
	// 	dots: false,
	// 	infinite: true,
	// 	slidesToShow: 2,
	// 	slidesToScroll: 1,
	// 	responsive: [
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 1
	// 		}
	// 	}
	// 	],
	// 	nextArrow: '<div class="slick-arrow slider-arrow slider-arrow--green slider-arrow-next slider-arrow-next--out"></div>',
	// 	prevArrow: '<div class="slick-arrow slider-arrow slider-arrow--green slider-arrow-prev slider-arrow-prev--out"></div>'
	// });

	// select2
    $('.js-select2').select2({
    	minimumResultsForSearch: -1,
    	width: '100%'
    });

    // noUiSlider в фильтре https://refreshless.com/nouislider/examples/#section-html5
    var slider1 = document.getElementById('range__slider1');
	if (slider1 !== null){
		noUiSlider.create(slider1, {
			start: [0, 100],
			connect: true,
			range: {
				'min': 0,
				'max': 100
			}
		});
	}	
    var slider2 = document.getElementById('range__slider2');
	if (slider2 !== null){
		noUiSlider.create(slider2, {
			start: [0, 100],
			connect: true,
			range: {
				'min': 0,
				'max': 100
			}
		});
	}

	/*Кнопка наверх*/
    $(window).scroll(function() {
    	if ($(this).scrollTop() > 500) {
    		$('#go-to-top').addClass('active');
    	} else {
    		$('#go-to-top').removeClass('active');
    	}
    });
    $('#go-to-top').click(function() {
    	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });   


    // Карта в контактах   
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map('map', {
            center: [56.973565, 39.757642],
            zoom: 5,
            controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
        }, {
            searchControlProvider: 'yandex#search'
        });

        var placemark = new ymaps.Placemark(myMap.getCenter(), {
            // Зададим содержимое заголовка балуна.
            // balloonContentHeader: '<div class="balloon__title">Россия, Ивановская обл., посёлок Советский</div>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: 
            					'<div class="balloon__img-wrap">' + 
            					'<img src="img/foto-home/foto-home-1.jpg" alt="" class="balloon__img">' + 
            					'<div class="balloon__text-bottom">№201</div>' +
            					'</div>' + 
            					'<div class="balloon__title">Россия, Ивановская обл., посёлок Советский</div>',

            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<a href="#" class="button balloon__link">Смотреть фотоотчет</a>',
            // Зададим содержимое всплывающей подсказки.
            // hintContent: 'Рога и копыта'
        });
        // Добавим метку на карту.
        myMap.geoObjects.add(placemark);
        // Откроем балун на метке.
        placemark.balloon.open();
        // Заблокируем скролл карты колесом мыши
        myMap.behaviors.disable('scrollZoom');
    }

    // маска номера
    $("input[type=tel]").mask("8(999) 999-99-99");

});
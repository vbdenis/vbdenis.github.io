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
$(document).ready(function(){
	// // Рассчитываем высоту футера и подставляем это значение в padding-bottom для body. Для разрешения > 1000px
	// if ($(window).width() >= 1000) {
	// 	$('footer').addClass('sticky');
	// 	// $('.page-without-footer-wrap').addClass('shadow');
	// 	$('footer').each(function(){
	// 		var footerHeight = $(this).outerHeight();
	// 		$('body').css('padding-bottom', footerHeight);
	// 	});
	// }

	// Показываем блоки слайдера после его загрузки, предотвращая его разваливание
	$('.main-slider').on('init', function(){
		$(this).css({'overflow': 'visible', 'max-height': 'none', 'opacity': '1'});
		$('.main-slider__block').css({'opacity': '1'});
	});
	$('.product-thumb').on('init', function(){
		$(this).css({'overflow': 'visible', 'max-height': 'none', 'opacity': '1'});
		$('.product-thumb__block').css({'opacity': '1'});
	});
	$('.product-photo').on('init', function(){
		$(this).css({'overflow': 'visible', 'max-height': 'none', 'opacity': '1'});
		$('.product-photo__block').css({'opacity': '1'});
		// $('.brief__gallery').css({'overflow': 'visible', 'max-height': 'none', 'opacity': '1'});
	});
	$('.similar-slider').on('init', function(){
		$(this).css({'overflow': 'visible', 'max-height': 'none', 'opacity': '1'});
		$('.similar-slider .slick-track').css({'opacity': '1'});
	});

	// Слайдер на главной странице
	$('.main-slider').slick({
		arrows: false,
		dots: true,
		dotsClass: 'slick-dots custom-dots',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		// speed: 0
		// nextArrow: '<div class="slick-arrow slider-arrow slider-arrow-next"></div>',
		// prevArrow: '<div class="slick-arrow slider-arrow slider-arrow-prev"></div>'
	});

	// Слайдер с превью на детальной
	$('.product-thumb').slick({
		vertical: true,
		verticalSwiping: true,
		// variableWidth: true,
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		lazyLoad: 'ondemand',
		asNavFor: '.product-photo',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				vertical: false,
				verticalSwiping: false,
				variableWidth: false,
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 500,
			settings: {
				vertical: false,
				verticalSwiping: false,
				variableWidth: false,
				slidesToShow: 2,
				slidesToScroll: 1

			}
		},
		],
		nextArrow: '<div class="slick-arrow slider-arrow slider-arrow--vertical slider-arrow-next slider-arrow-next--vertical"></div>',
		prevArrow: '<div class="slick-arrow slider-arrow slider-arrow--vertical slider-arrow-prev slider-arrow-prev--vertical"></div>'
	});
	// Слайдер с фото товара на детальной
	$('.product-photo').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: 'ondemand',
		asNavFor: '.product-thumb',
		// nextArrow: '<div class="slick-arrow slider-arrow slider-arrow-next"></div>',
		// prevArrow: '<div class="slick-arrow slider-arrow slider-arrow-prev"></div>'
	});
	// Слайдер с похожими товарами на  детальной
	$('.similar-slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 6,
		slidesToScroll: 6,
		lazyLoad: 'ondemand',
		asNavFor: '.product-thumb',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5
			}
		},
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 570,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		],
		nextArrow: '<div class="slick-arrow slider-arrow slider-arrow--horizontal slider-arrow-next slider-arrow-next--horizontal slider-arrow-next--out"></div>',
		prevArrow: '<div class="slick-arrow slider-arrow slider-arrow--horizontal slider-arrow-prev slider-arrow-prev--horizontal slider-arrow-prev--out"></div>'
	});

	// Появление плашки с телефонами в шапке
	$("#openPhones").click(function(){
		$("#headerPhones").slideToggle("fast");
	});

	// Сворачивание пунктов меню на телефоне
	$(".mobile-menu__arrow").click(function(){
		$(this).toggleClass("open");
		$(this).siblings(".mobile-menu__sublist").slideToggle("fast");
	});

	// Проверка на заполненность поля для input
	$('input').on('keyup',function(e){
	    if ($(this).val() != "") $(this).addClass('filled');
	    else $(this).removeClass('filled');
	});
	
	// Проверка на заполненность поля для textarea
	$('textarea').on('keyup',function(e){
	    if ($(this).val() != "") $(this).addClass('filled');
	    else $(this).removeClass('filled');
	});

	// маска номера
	$("input[type=tel]").mask("8(999) 999-99-99");

	// Плавная прокрутка к якорю
	$('.js_scrl').click(function () {
	    var elementClick = $(this).attr("href");
	    var destination = $(elementClick).offset().top;
	    $('html, body').animate({ scrollTop: destination }, 500);
	    return false;
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
	var slider1 = document.getElementById('range__slider2');
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

	// Открытие фильтра при клике на кнопку на мобилках
	$("#filterBtn").click(function(){
		$(".overlay").fadeToggle("fast");
		$(this).toggleClass("active");
		$(".filter-mobile__wrap").fadeToggle("fast");
	});
	$(".overlay").click(function(){
		$(this).fadeToggle("fast");
		$("#filterBtn").removeClass("active");		
		$(".filter-mobile__wrap").fadeToggle("fast");
	});

	// кастомный скролл в фильтре
	$(".filter__accordion-content").mCustomScrollbar();

	// Сворачивание пунктов меню в сайдбаре
	$(".sidebar-nav__arr").click(function(){
		$(this).toggleClass("open");
		$(this).siblings(".sidebar-nav__sublist").slideToggle("fast");
	});

	// Одинаковая высота карточек товара (задает высоту от самой большой)
	var cardHeight = [];
	$('.brand').each(function (i, el) {
		return cardHeight.push($(el).outerHeight());
	});
	cardHeight.sort(function(a,b) {
		return b - a;
	});
	console.log(cardHeight[0]);
		$('.brand').map(function (i, el) {
		$(el).css('minHeight', cardHeight[0] + 'px')
	});
	$.each($('.brand'), function (i, el) {
		$(el).css('height',$(el).find('.brand').outerHeight()+'px');
	});



});
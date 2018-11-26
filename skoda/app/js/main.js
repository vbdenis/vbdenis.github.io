$(document).ready(function(){
	// Кнопка меню
	$('.header_menu-btn').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('.mobile_menu').toggleClass('open');
		$('.mobile_menu-wrap').toggleClass('open');
	});

	// Слайдер гелереи
	$('.gallery-slider').slick({
		dots: true,
		arrows: false,
		fade: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		swipe: false,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: false,
				arrows: true
			}
		}
		],
		dotsClass: 'slick-dots gallery-dots',
		nextArrow: '<div class="gallery-arrow gallery-arrow-right"></div>',
		prevArrow: '<div class="gallery-arrow gallery-arrow-left"></div>'
	});
	
	// Проверка для input
	$('input').on('keyup',function(e){
	    if ($(this).val() != "") $(this).addClass('filled');
	    else $(this).removeClass('filled');
	});
	// и select	
	$('select').on('click',function(e){
	    if ($(this).val() != "") $(this).addClass('filled');
	    else $(this).removeClass('filled');
	});

	// запуск youtube
	$('.cover').on('click', function() {
		$('.cover').fadeOut('slow')
		var $video = $('#video'),
			src = $video.attr('src');	 
		$video.attr('src', src + '&autoplay=1');
	});	
	//Останавливаем воспроизведение видео при перелистывании
	$(".gallery-arrow").on("click", function(){
		var video = $("#video").attr("src");
		$("#video").attr("src","");
		$("#video").attr("src",lol);
	});	
	$(".slick-dots li").on("click", function(){
		var video = $("#video").attr("src");
		$("#video").attr("src","");
		$("#video").attr("src",lol);
	});	
	// маска телефона
	$("input[type=tel]").mask("+7(999) 999-9999");

	/*Скролл*/
	$(".scrl").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 15;
		$('html, body').animate({ scrollTop: destination }, 1000);
		return false;
	});
});


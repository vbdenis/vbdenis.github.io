$(document).ready(function() {
	$('.top-button').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	// Слайдер на главной
	$('.main-slider').slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
		autoplaySpeed: 3000,
	  	nextArrow: '<div class="slider-arrow gallery-arr gallery-arr-next"></div>',
		prevArrow: '<div class="slider-arrow gallery-arr gallery-arr-prev"></div>'
	});


	/*Скролл*/
	$(".scrl").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({ scrollTop: destination }, 1000);
		return false;
	});
	/*Скролл*/

		$('#copyBtn').click(function(e) {
		e.preventDefault();
	    var $temp = $("<input>");
	    $("body").append($temp);
	    $temp.val($('#text').text()).select();
	    document.execCommand("copy");
	    $temp.remove();
	    $(this).text('Адрес скопирован!');
	});

});
$(document).ready(function() {
	$('.main_nav li:eq(1), .main_btn, .main_btna').on('click', function() {
		$('.overlay').fadeIn(500);
		$('.modal').slideDown(500);
	});

	$('.close').on('click', function() {
		$('.modal').slideUp(500);
		$('.overlay').fadeOut(500);
	});
});
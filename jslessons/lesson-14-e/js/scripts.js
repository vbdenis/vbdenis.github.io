$(document).ready(function() {
	$('#modal').on('click', function() {
		$('.overlay').fadeIn(500);
		$('.modal').show(500);
	});
});
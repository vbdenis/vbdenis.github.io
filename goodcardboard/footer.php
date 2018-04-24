	<footer class="footer">
		<div class="container">
			<div class="footer-text">&#169; www.gofra-ural.ru 2018, все права защищены</div>
		</div>
	</footer>


	<div class="overlay">
		<div class="popup">
			<div class="popup-tittle">Форма обратной связи</div>
			<!-- /.popup-tittle -->
			<div class="popup-close">&times;</div>
			<!-- /.popup-close -->
			<div class="popup-form">
				<form class="main-form formajax" onsubmit="yaCounter47973992.reachGoal('sellForm'); return true;">
					<div class="popup-form-header">Получите индивидуальное предложение <span>на производство и поставку изделий</span>
						<label class="popup-form__label" for="phone2">Введите ваш номер телефона:</label>
						<input type="tel" class="popup-form__input" name="user_phone" id="phone2" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ" required>
						<button class="popup-form__btn button">Оставить заявку!</button>
						<div class="popup-form__note">*Минимальный заказ 500шт</div>
					</div>
				</form>
			</div>
			<!-- /.popup-form -->
		</div>
		<!-- /.popup -->
	</div>
	<!-- /.overlay -->

	
	<div class="thx-modal">
		<div class="thx-modal__text">Ваша заявка отправлена</div>
		<button class="button thx-modal__btn">Ок</button>
	</div>
	
		
			<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="css/slick.css">
	<link rel="stylesheet" href="css/slick-theme.css">
	<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
	<script src="http://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
	<script src="js/jquery.maskedinput.min.js"></script>
	<script>
		$("input[type=tel]").mask("(999) 999-9999");

		$(document).ready(function(){
			$(".modalbtn").on("click", function(){
				$(".overlay").show('slow');
				$("html,body").css("overflow","hidden");
			});
			$(".popup-close").on("click", function(){
				$(".overlay").hide('slow');
				$("html,body").css("overflow","auto");
			});
		});
	</script>

	<script src="js/slick.min.js"></script>
	<script>
		$('.manufacture-slider_top').slick({
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				speed: 500,
				asNavFor: '.manufacture-slider_bottom'
		});
		$('.manufacture-slider_bottom').slick({
				arrows: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				adaptiveHeight: true,
				responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ],
				nextArrow: '<div class="slider-arrow slider-arrow_manuf slider-arrow_manuf__right"></div>',
				prevArrow: '<div class="slider-arrow slider-arrow_manuf slider-arrow_manuf__left"></div>',
				asNavFor: '.manufacture-slider_top',
				focusOnSelect: true
		});
		$('.feedback-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
			 {
			   breakpoint: 992,
			   settings: {
			     slidesToShow: 2,
			     slidesToScroll: 1
			   }
			 }
  ],
			nextArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow_feedback__right"></div>',
			prevArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow_feedback__left"></div>'			
		});

		$('.main-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			fade: true,
			speed: 5000,
			responsive: [
    {
      breakpoint: 992,
      settings: {
      		autoplaySpeed: 9999999,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false
      }
    }
  ],			
		});

		/*Скролл*/
		$(".scrl").click(function () {
			    var elementClick = $(this).attr("href");
			    var destination = $(elementClick).offset().top;
			    $('html, body').animate({ scrollTop: destination }, 1000);
			    return false;
			});
		/*Скролл*/

		/*mobile-menu*/
		$(".mobile-link").click(function(){
			$(this).toggleClass("mobile-link-active");
			$(".mobile-menu").toggleClass("mobile-menu-active");
			$("html,body").toggleClass("fixed");	
		});
		$('.mobile-menu a').click(function() {
		 $('.mobile-link').removeClass('mobile-link-active');
		 $('.mobile-menu').removeClass('mobile-menu-active');
		 $("html,body").removeClass('fixed');
		})
		/*mobile-menu*/

	</script>
	<script src="js/wow.min.js"></script>
	<script>
		new WOW({
			mobile: false
		}).init();
	</script>

	<script>
		ymaps.ready(function () {
		    var myMap = new ymaps.Map('map', {
		            center: [54.752656, 56.002053],
		            zoom: 17,
		            behaviors: ['scrollZoom', 'drag', 'dblClickZoom']
		        }, {
		            searchControlProvider: 'yandex#search'
		        }),

		        // Создаём макет содержимого.
		        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		        ),

		        myPlacemarkWithContent = new ymaps.Placemark([54.752656, 56.002053], {
		            hintContent: 'Добрый картон',
		            balloonContent: 'Добрый картон'
		        }, {
		            // Опции.
		            // Необходимо указать данный тип макета.
		            iconLayout: 'default#imageWithContent',
		            // Своё изображение иконки метки.
		            iconImageHref: 'img/map/map-icon.png',
		            // Размеры метки.
		            iconImageSize: [48, 48],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-35, -35],
		            // Смещение слоя с содержимым относительно слоя с картинкой.
		            iconContentOffset: [15, 15],
		            // Макет содержимого.
		            iconContentLayout: MyIconContentLayout
		        });

		    myMap.geoObjects
		        // .add(myPlacemark)
		        .add(myPlacemarkWithContent);
      				myMap.behaviors.enable('dblClickZoom');
		        myMap.behaviors.disable('scrollZoom');
      				myMap.behaviors.enable('drag');
		});	


		/*BOTTOM FUTER*/
		if ($(document).height() <= $(window).height())
		  $("footer.footer").addClass("fixed-bottom");


		/*AJAX FORM*/ 
			$(document).ready(function() {
				$('.formajax').submit(function() {
					$.ajax({
						type: "POST",
						url: "mailer/smart.php",
						data: $(this).serialize()
					}).done(function() {
						$(".thx-modal").show('fast');
						$(this).find('input').val('');
						$('.formajax').trigger('reset');
					});
					return false;
				});
				$(".thx-modal__btn").on("click", function(){
					$(".thx-modal").hide('fast');
				});
			});
	</script>


</body>
</html>
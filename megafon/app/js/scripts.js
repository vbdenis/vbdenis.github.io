window.addEventListener('DOMContentLoaded', function(){

	// tabs
	var tab = document.querySelectorAll('.tab__menu-item'),
	    tabMenu = document.querySelector('.tab__menu'),
	    tabContent = document.querySelectorAll('.tab__content-item');
	function hideTabContent(a) {
	    for (let i = a; i < tabContent.length; i++) {
	        tabContent[i].classList.remove('show');
	        tabContent[i].classList.add('hide');
	        tab[i].classList.remove('active');
	    }
	}	
	hideTabContent(1);
	function showTabContent(b) {
	    if (tabContent[b].classList.contains('hide')) {
	    	tab[b].classList.add('active');
	        tabContent[b].classList.remove('hide');
	        tabContent[b].classList.add('show');
	    }
	}
	tabMenu.addEventListener('click', function(event) {
	    var target = event.target;
	    if (target && target.classList.contains('tab__menu-item')) {
	        for(let i = 0; i <= tab.length; i++) {
	            if (target == tab[i]) {
	                hideTabContent(0);
	                showTabContent(i);
	                break;
	            }
	        }
	    }
	});

	// slider 	
	var	slider = document.querySelector('.slider'),
		sliderBlocks = document.querySelectorAll('.slider-block'),
		slideIndex = 1,
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
		sliderBlocks[0].classList.add('active');

    if (document.documentElement.clientWidth < 992) {
    	showSlides(slideIndex);
    	function showSlides(n) {
    	    // через эту проверку добавляем бесконечную прокрутку вперед
    	    if(n > sliderBlocks.length) {
    	        slideIndex = 1;
    	    }
    	    // и назад
    	    if(n < 1) {
    	        slideIndex = sliderBlocks.length;
    	    }
    	    // получаем все слайды и скрываем их на странице
    	    sliderBlocks.forEach(function(item) { 
    	    	item.classList.remove('active');
    	    	var bg = item.getAttribute('data-img');
    	    	item.style.backgroundImage = "url(" + bg + ")";
    	    });
    	    // получаем все точки и убираем у них класс
    	    dots.forEach(function(item) { 
    	    	item.classList.remove('dot-active');
	    	});
    	    // показываем первый слайд 
    	    sliderBlocks[slideIndex - 1].classList.add('active');
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
    	prev.addEventListener('click', function() {
    	    plusSlides(-1);
    	});
    	next.addEventListener('click', function() {
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

	} else {
		sliderBlocks.forEach(function(item) {
			item.addEventListener('click', function() {
				sliderBlocks.forEach(function(itemEl) {
					itemEl.classList.remove('active');
					item.classList.add('active');
				}); 		     
				var bg = item.getAttribute('data-img');
				slider.style.backgroundImage = "url(" + bg + ")";
			});
		});

	};   


	// accordion
	var accordionOpen = document.querySelectorAll('.accordion__title');
	accordionOpen.forEach(function(n) {
		n.onclick = function(){
		  	var child = n.parentNode.querySelector('.accordion__content');
		  	var arr = n.parentNode.querySelector('.accordion__arr');
		    if (child.style.display != 'block') {
		    	n.classList.add('active');
		    	arr.classList.add('active');
		  		child.style.display = 'block';
		    } else {
		    	n.classList.remove('active');
		    	arr.classList.remove('active');
		  		child.style.display = 'none';
		    }
		};
	});

	// toggle-menu 
	var toggleMenu = document.querySelector('.menu-toggle');
	toggleMenu.addEventListener('click', function(item) {
		if (this.classList.contains('open')) {
			this.classList.remove('open');			
		} else {
			this.classList.add('open');
		}
	});

});
$(window).scroll(function(){

				if ($(window).scrollTop() >= 220 && $(window).width() > 1000) {
						$('nav').addClass('fixed-header');
						$('section').addClass('margin');
				}
				else {
						$('nav').removeClass('fixed-header');
						$('section').removeClass('margin');
				}
});

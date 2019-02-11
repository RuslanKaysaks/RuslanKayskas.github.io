$(document).ready(function () {
    svg4everybody({});
    let scrollAnimation = function() {
	    $(window).on('scroll', function () {
	    // console.log($(window).height());
	    let numb_start = $(".perset-first").text();
	    let numb_start2 = $(".perset-second").text();
	    let numb_start3 = $(".perset-three").text();
	    scroll_pos = $(window).scrollTop() + $(window).height();
	    element_pos = $('.skills-item').offset().top + $('.skills-item').height();
	    if (scroll_pos > element_pos) {
	        $('.skills-item__ui').addClass('animation-ui');
	        $('.skills-item__web').addClass('animation-web');
	        $('.skills-item__marketing').addClass('animation-marketing');
	        $({numberValue: numb_start}).animate({numberValue: 75}, {
			duration: 2000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
			easing: "linear",
			step: function(val) {
				$(".perset-first").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				}
			});
			 $({numberValue: numb_start3}).animate({numberValue: 65}, {
			duration: 2000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
			easing: "linear",
			step: function(val) {
				$(".perset-three").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				}
			});
			  $({numberValue: numb_start2}).animate({numberValue: 90}, {
			duration: 2000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
			easing: "linear",
			step: function(val) {
				$(".perset-second").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				}
			});
    		}else{
    			$('.skills-item__ui').removeClass('animation-ui');
	        	$('.skills-item__web').removeClass('animation-web');
	       		$('.skills-item__marketing').removeClass('animation-marketing');
	       		$({numberValue: numb_start}).animate({numberValue: 0}, {
					duration: 0, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
					easing: "linear",
					step: function(val) {
				$(".perset-first").html(Math.ceil(val));
				$(".perset-second").html(Math.ceil(val));
				$(".perset-three").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				}
			});
    		};
		});
    };
    let scrollAnimation2 = function() {
    	$(window).on('scroll', function () {
    		let numb_start4 = $(".number1").text();
	    	let numb_start5 = $(".number2").text();
	    	let numb_start6 = $(".number3").text();
	    	let numb_start7 = $(".number4").text();
	    	scroll_pos = $(window).scrollTop() + $(window).height();
	    	element_pos = $('.statistic-item__numbers').offset().top + $('.statistic-item__numbers').height();
	    	if (scroll_pos > element_pos) {
	    		$({numberValue: numb_start4}).animate({numberValue: 548}, {
				duration: 2000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
				easing: "linear",
				step: function(val) {
				$(".number1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				}
			});
	    		$({numberValue: numb_start5}).animate({numberValue: 1465}, {
				duration: 2000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
				easing: "linear",
				step: function(val) {
				$(".number2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				}
			});
	    		$({numberValue: numb_start6}).animate({numberValue: 612}, {
				duration: 2000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
				easing: "linear",
				step: function(val) {
				$(".number3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				}
			});
	    		$({numberValue: numb_start7}).animate({numberValue: 735}, {
				duration: 2000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
				easing: "linear",
				step: function(val) {
				$(".number4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
					}
				});
	    	}else {
	    		$({numberValue: numb_start4}).animate({numberValue: 0}, {
					duration: 0, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
					easing: "linear",
					step: function(val) {
				$(".number1").html(Math.ceil(val));
				$(".number2").html(Math.ceil(val));
				$(".number3").html(Math.ceil(val));
				$(".number4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				}
			});
	    	}
    	});	
    };
    let magnificGrid = function() {
    	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
	});
    };
    let indexSlider = function() {
    	$('.js-index-slider').slick({
    		dots: true,
    		arrows: false,
    			customPaging : function(slider, i) {
        			return '<a class="js-index-slider-dot"></a>';
   			 },
    		appendDots: '.banner-dots'
    	});
    };
    let menuToggle = function() {
    	$('.sidebar-btn').click(function(){
    		$('.nav-wrapper').toggleClass('activeNav');
    		$('.sidebar-btn').toggleClass('activeNav');		
    	});
    };
    scrollAnimation();
    scrollAnimation2();
    magnificGrid();
    indexSlider();
    menuToggle();
});

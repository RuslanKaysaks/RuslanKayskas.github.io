$(document).ready(function() {
	$('.slider').slick({
		responsive: [{
		breakpoint: 770,
			settings: {
				arrows: false
				}
			}
		]
	});

	let sandwich = function () {
		$(document).on('click', '.sandwich', function () {
			$('.nav').toggleClass('header-bottom__nav-active');
			$(this).toggleClass('active');
		});
	};
	sandwich();
});
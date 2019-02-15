$(document).ready(function() {
	$('.top-nav__toggle').click(function(event) {
 		event.preventDefault();
 	$('.top-nav__container').slideToggle('slow');
 		});
	$('.left-sidebar__toggle').click(function(event) {
		event.preventDefault();
	$('.left-sidebar__container').slideToggle('slow');
		});

	//slick slider
	$('.directions-blocks').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			},
			{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
				}
			},
		]
	});
	//calc
	let elem = document.querySelector('.calc-range');
	let init = new Powerange(elem, { min: 100000, max: 3000000, start: 100000, hideRange: true,step: 100000 });
	let per, month, result, monthly;
	let money = +$('.calc-range').val();

	$('input[name="programms"]').on('change', function(event) {
		event.preventDefault();
		month = +$(this).attr('data-month');
		per = +$(this).attr('data-percents');
		result = Math.round(per/12*month*money);
		total = result + money;
		monthly = parseInt(result/month);
		$('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		$('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		$('#month').text(month);
		/* Act on the event */
	});


	$(elem).on('change', function(event) {
		$('.calc-summ__invest-num span').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		let radio = $('input[name="programms"]:checked');
		money = +$(this).val();
		month = +radio.attr('data-month');
		per = +radio.attr('data-percents');
		result = Math.round(per/12*month*money);
		total = result + money;
		monthly = parseInt(result/month);
		$('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		$('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	});
});
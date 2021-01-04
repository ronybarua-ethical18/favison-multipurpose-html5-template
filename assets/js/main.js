$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	items:1,
	autoplay:true,
	autoplayHoverPause:false,
	autoplayTimeout:4000,
	dots:true,
	nav:false,
	animateIn:'fadeInRight',
	loop:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	margin:30,
	responsive: {
		0: {
			items: 1,
		},
		420: {
			items: 1,
		},
		480: {
			items: 3,
		},
		768: {
			items: 3,
		},
		992: {
			items: 5,
		}
	}
});
});

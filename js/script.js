(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('');
			if (windowpos >= 250) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	if($('.main-menu').length){
		$('.navbar-toggle').click(function() {
		  $( ".navbar-collapse" ).addClass( "menu-transition" );
		   $( ".navbar-collapse" ).fadeToggle( "18000" );
		});
	}
	
	
	//Submenu Dropdown Toggle
	if($('.main-header .navigation li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
		//Main Menu Fade Toggle
		$('.header-style-three .nav-toggler').on('click', function() {
			$('.header-style-three .main-menu').fadeToggle(300);
		});
		
	}
	
	
	if ($('.fullwidth-body-carousel').length) {
		var galleryThumbs = new Swiper('.gallery-thumbs', {
		  spaceBetween: 10,
		  slidesPerView: 8,
		  
		  loop: true,
		  freeMode: true,
		  loopedSlides: 5, //looped slides should be the same
		  watchSlidesVisibility: true,
		  watchSlidesProgress: true,
		});
		var galleryTop = new Swiper('.gallery-top', {
		  spaceBetween: 10,
		  loop:true,
		  loopedSlides: 5, //looped slides should be the same
		  navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		  thumbs: {
			swiper: galleryThumbs,
		  }
		});
	}
	
	
	// Product Carousel Slider
	if ($('.shop-page .image-carousel').length && $('.shop-page .thumbs-carousel').length) {

		var $sync1 = $(".shop-page .image-carousel"),
			$sync2 = $(".shop-page .thumbs-carousel"),
			flag = false,
			duration = 500;

			$sync1
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: false,
					navText: [ '<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>' ],
					dots: false,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync2
				.owlCarousel({
					loop:true,
					margin: 20,
					items: 1,
					nav: true,
					navText: [ '<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>' ],
					dots: false,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:2,
				            autoWidth: false
				        },
				        400:{
				            items:3,
				            autoWidth: false
				        },
				        600:{
				            items:4,
				            autoWidth: false
				        },
				        900:{
				            items:5,
				            autoWidth: false
				        },
				        1000:{
				            items:4,
				            autoWidth: false
				        }
				    },
				})
				
		.on('click', '.owl-item', function () {
			$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});

	}
	
	
	//Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}
	
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	

	//Main Slider Two Height
	//function mainSliderTwoHeight() {
		//if($('.header-style-seven').length){
			//var FullScreenHeight = $(window).height();
			//var MainHeaderHeight = $('.header-style-seven').height();
			//$('.album-block,.album-block .inner-box').css('height',FullScreenHeight-MainHeaderHeight);
		//}
	//}
	
	//mainSliderTwoHeight();
 
 
 	//Main Slider Two Height
	//function fullbodyHeight() {
		//if($('.fullbody-carousel').length){
			//var FullScreensHeight = $(window).height();
			//$('.fullbody-carousel .image').css('height',FullScreensHeight);
		//}
	//}
	
	//fullbodyHeight();
	
	
	
	//Main Slider Two Height
	function fullbodyHeight2() {
		if($('.fullwidth-body-carousel').length){
			var FullScreensHeight = $(window).height();
			$('.fullwidth-body-carousel').css('height',FullScreensHeight);
		}
	}
	
	fullbodyHeight2();
	
	
	
	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-2').length){
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-3').length){
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-4').length){
		var scene = $('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-5').length){
		var scene = $('.parallax-scene-5').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	
	
	
	//Testimonial Slider
	if($('#master-testimonial-slider').length){
		
		var slider = new MasterSlider();
     
		slider.control('arrows');
		slider.setup('master-testimonial-slider' , {
			width:760,
			space:0,
			autoHeight:true,
			wheel:true,
			loop:true,
			speed:17,
			view:'fadeWave',
			layout:'partialview'
		});
	}
	
	
	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// hidding submenu
		menuWrap.find('.dropdown').children('ul').hide();
		// toggling child ul
		menuWrap.find('li.dropdown > a').each(function () {
			$(this).on('click', function (e) {
				e.preventDefault();
				$(this).parent('li.dropdown').children('ul').slideToggle();

				// adding class to item container
				$(this).parent().toggleClass('open');

				return false;

			});
		});
	}

	hiddenBarMenuConfig();
	

	//Hidden Sidebar
	if ($('.hidden-bar').length) {
		var hiddenBar = $('.hidden-bar');
		var hiddenBarOpener = $('.hidden-bar-opener');
		var hiddenBarCloser = $('.hidden-bar-closer');
		$('.hidden-bar-wrapper').mCustomScrollbar();

		//Show Sidebar
		hiddenBarOpener.on('click', function () {
			hiddenBar.addClass('visible-sidebar');
		});

		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			hiddenBar.removeClass('visible-sidebar');
		});

	}
	
	
	//Social Popup / Hide Show
	if($('#social-popup').length){

		//Show Popup
		$('.social-box-btn').on('click', function() {
			$('#social-popup').addClass('popup-visible');
		});

		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
	            $('#social-popup').removeClass('popup-visible');
	        }
	    });
		
		//Hide Popup
		$('.close-search').on('click', function() {
			$('#social-popup').removeClass('popup-visible');
		});
	}
	
	
	//Social Popup / Hide Show
	if($('.searched-popup').length){

		//Show Popup
		$('.search-box-btn').on('click', function() {
			$('.searched-popup').addClass('popup-visible');
		});

		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
	            $('#search-popup').removeClass('popup-visible');
	        }
	    });
		
		//Hide Popup
		$('.close-search').on('click', function() {
			$('.searched-popup').removeClass('popup-visible');
		});
	}

	
	
	// Main Slider Carousel
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			animateOut: 'fadeOut',
			autoHeight: true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	

	//Typeit Text On Main Page
	if ($('.variable-text').length) {
		$('.variable-text').typeIt({
			 strings: ["Hello, my name is Micheal Polo."],
			 speed: 150,
			 breakLines: true,
			 loop:true,
			 autoStart: true
		});	
	}
	
	
	
	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.col-lg-4'
				 },
				animationOptions:{
					duration:0,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 0,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 0,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();
	
	
	//Masonary
	function enableMasonryTwo() {
		if($('.masonry-items-container').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : '.masonry-item.col-lg-3'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.on('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	
	enableMasonryTwo();
	
	
	//Masonary
	function enableMasonryThree() {
		if($('.masonry-items-container-two').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container-two');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : '.masonry-item.col-lg-4'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.on('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	
	enableMasonryThree();
	
	
	//Sortable Masonary with Filters
	function albumMasonry() {
		if($('.album-sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.album-sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.small-column'
				 },
				animationOptions:{
					duration:0,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 0,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 0,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	albumMasonry();
	
	
	//Sortable Masonary with Filters
	function enableMasonryFour() {
		if($('.sortable-masonry-two').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry-two .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.small-column'
				 },
				animationOptions:{
					duration:0,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 0,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 0,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonryFour();
	
	
	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			//animateOut: 'slideOutDown',
			//animateIn: 'flipInX',
			//animateIn: 'fadeIn',
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}
	
	
	// Gallery Carousel
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			//animateOut: 'slideOutDown',
			//animateIn: 'flipInX',
			//animateIn: 'fadeIn',
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:4
				},
				800:{
					items:5
				},
				1024:{
					items:6
				}
			}
		});    		
	}
	
	
	// Main Slider Two Carousel
	if ($('.main-slider-two-carousel').length) {
		$('.main-slider-two-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}
	
	
	// Main Slider Three Carousel
	if ($('.main-slider-three-carousel').length) {
		$('.main-slider-three-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}
	
	
	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:5
				}
			}
		});    		
	}
	
	
	// Sponsors Carousel Two
	if ($('.sponsors-carousel-two').length) {
		$('.sponsors-carousel-two').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:4
				},
				800:{
					items:6
				},
				1024:{
					items:8
				}
			}
		});    		
	}
	
	
	//Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: [ '<span class="ion-ios-arrow-thin-left"></span>', '<span class="ion-ios-arrow-thin-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:3
				},
			}
		});    		
	}
	
	
	//Four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:4
				},
				1200:{
					items:4
				},
			}
		});    		
	}
	
	//3 Column Load More Mixitup Gallery With Filters
	if($('.load-more-gallery-one .filter-gallery').length){
		
		$(".load-more-gallery-one .filter-gallery").mixItUp({
			selectors: {
			  target: ".mix" // As in mixitup
			},
			layout: {
			  display: "inline-block" // As in mixitup
			},
			loadmore: {
			  // The number of items to start with
			  initial: 6,
			  // The number of items to load on click on the loadmore button
			  loadMore: 3,
			  // A selector string for the existing wrapper the buttons will be inserted into
			  buttonWrapper: ".loadmore",
			  // The class of the Load more button
			  buttonClass: "loadmore-button",
			  // The label of the Load more button
			  buttonLabel: "Load More",
			  // The class of the less button
			  lessClass: "loadmore-less",
			  // The label of the less button
			  lessLabel: "Show Less"
			}
		  });
	}
	
	//2 Column Load More Mixitup Gallery With Filters
	if($('.load-more-gallery-two .filter-gallery').length){
		
		$(".load-more-gallery-two .filter-gallery").mixItUp({
			selectors: {
			  target: ".mix" // As in mixitup
			},
			layout: {
			  display: "inline-block" // As in mixitup
			},
			loadmore: {
			  // The number of items to start with
			  initial: 4,
			  // The number of items to load on click on the loadmore button
			  loadMore: 2,
			  // A selector string for the existing wrapper the buttons will be inserted into
			  buttonWrapper: ".loadmore",
			  // The class of the Load more button
			  buttonClass: "loadmore-button",
			  // The label of the Load more button
			  buttonLabel: "Load More",
			  // The class of the less button
			  lessClass: "loadmore-less",
			  // The label of the less button
			  lessLabel: "Show Less"
			}
		  });
	}
	
	//2 Column Load More Mixitup Gallery With Filters
	if($('.load-more-gallery-three .filter-gallery').length){
		
		$(".load-more-gallery-three .filter-gallery").mixItUp({
			selectors: {
			  target: ".mix" // As in mixitup
			},
			layout: {
			  display: "inline-block" // As in mixitup
			},
			loadmore: {
			  // The number of items to start with
			  initial: 6,
			  // The number of items to load on click on the loadmore button
			  loadMore: 2,
			  // A selector string for the existing wrapper the buttons will be inserted into
			  buttonWrapper: ".loadmore",
			  // The class of the Load more button
			  buttonClass: "loadmore-button",
			  // The label of the Load more button
			  buttonLabel: "Load More",
			  // The class of the less button
			  lessClass: "loadmore-less",
			  // The label of the less button
			  lessLabel: "Show Less"
			}
		  });
	}
	
	//4 Column Load More Mixitup Gallery With Filters
	if($('.load-more-gallery-four .filter-gallery').length){
		
		$(".load-more-gallery-four .filter-gallery").mixItUp({
			selectors: {
			  target: ".mix" // As in mixitup
			},
			layout: {
			  display: "inline-block" // As in mixitup
			},
			loadmore: {
			  // The number of items to start with
			  initial: 9,
			  // The number of items to load on click on the loadmore button
			  loadMore: 3,
			  // A selector string for the existing wrapper the buttons will be inserted into
			  buttonWrapper: ".loadmore",
			  // The class of the Load more button
			  buttonClass: "loadmore-button",
			  // The label of the Load more button
			  buttonLabel: "Load More",
			  // The class of the less button
			  lessClass: "loadmore-less",
			  // The label of the less button
			  lessLabel: "Show Less"
			}
		  });
	}
	
	//4 Column Load More Mixitup Gallery With Filters
	if($('.load-more-gallery-five .filter-gallery').length){
		
		$(".load-more-gallery-five .filter-gallery").mixItUp({
			selectors: {
			  target: ".mix" // As in mixitup
			},
			layout: {
			  display: "inline-block" // As in mixitup
			},
			loadmore: {
			  // The number of items to start with
			  initial: 12,
			  // The number of items to load on click on the loadmore button
			  loadMore: 4,
			  // A selector string for the existing wrapper the buttons will be inserted into
			  buttonWrapper: ".loadmore",
			  // The class of the Load more button
			  buttonClass: "loadmore-button",
			  // The label of the Load more button
			  buttonLabel: "Load More",
			  // The class of the less button
			  lessClass: "loadmore-less",
			  // The label of the less button
			  lessLabel: "Show Less"
			}
		  });
	}
	
	//5 Column Load More Mixitup Gallery With Filters
	if($('.load-more-gallery-six .filter-gallery').length){
		
		$(".load-more-gallery-six .filter-gallery").mixItUp({
			selectors: {
			  target: ".mix" // As in mixitup
			},
			layout: {
			  display: "inline-block" // As in mixitup
			},
			loadmore: {
			  // The number of items to start with
			  initial: 10,
			  // The number of items to load on click on the loadmore button
			  loadMore: 5,
			  // A selector string for the existing wrapper the buttons will be inserted into
			  buttonWrapper: ".loadmore",
			  // The class of the Load more button
			  buttonClass: "loadmore-button",
			  // The label of the Load more button
			  buttonLabel: "Load More",
			  // The class of the less button
			  lessClass: "loadmore-less",
			  // The label of the less button
			  lessLabel: "Show Less"
			}
		  });
	}
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
		//albumMasonry();
		//fullbodyHeight();
		//fullbodyHeight();
		fullbodyHeight2();
		//mainSliderTwoHeight();
	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
		albumMasonry();
		enableMasonryTwo();
		//fullbodyHeight();
		fullbodyHeight2();
		enableMasonryThree();
		enableMasonryFour();
		//mainBannerHeight();
		//mainSliderTwoHeight();
	});	
	
/* ==========================================================================
   When document is Resizing, do
   ========================================================================== */
	
	$(window).on('resize', function() {
		//mainSliderTwoHeight();
		//fullbodyHeight();
		//fullbodyHeight();
		fullbodyHeight2();
		albumMasonry();
	});

})(window.jQuery);
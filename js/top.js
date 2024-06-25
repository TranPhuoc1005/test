// DOCUMENT READY
jQuery(document).ready(function() {
    "use strict";

});


// WINDOW LOAD
jQuery(window).bind('load', function() {
    "use strict";
    // SLIDER
    // if( jQuery('#visual').length > 0 ) {
    //     jQuery('#visual').slick({
    //         dots: false,
    //         infinite: true,
    //         speed: 1000,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 5000,
    //         arrows: false,
    //         centerMode: false,
    //         centerPadding: 0,
    //         pauseOnHover: false,
    //         fade: false,
    //         variableWidth: false,
    //     });
    // jQuery('#visual').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        /* proceed before the slider changes slide */
    // });
    // jQuery('#visual').on('afterChange', function(event, slick, currentSlide){
        /* proceed after the slider changes slide */
    // });
    // }
    /*============== END - SLIDER ================*/

    // CONTENT LOAD ANIMATION
    // AOS.init({
    //     duration: 600,
    //     disable: 'mobile',
    //     once: true
    // });
    /*============== END - CONTENT LOAD ANIMATION ================*/


    // (this, function() {
    //     'use strict';

    //     var defaults = {
    //         wrapper: '#luxy',
    //         fixed: '.luxy-fixed',
    //         targets : '.luxy-el',
    //         wrapperSpeed: 0.01,//0.18
    //         targetSpeed: 0.02,//0.02
    //         targetPercentage: 0.1//0.1
    //     };

    //     var winHeight = window.innerHeight;
        
    //     var Luxy = function(){
    //         this.Targets = [];
    //         this.TargetsLength = 0;
    //         this.wrapper = '';
    //         this.fixed = '';
    //         this.windowHeight = 0;
    //         this.wapperOffset = 0;
    //         this.wapperOffsetRev = 0;
    //         this.wapperOffsetRev2 = 0;
    //         this.wapperOffsetRev3 = 0;
    //     };

    //     Luxy.prototype = {
    //         isAnimate: false,
    //         isResize : false,
    //         scrollId: "",
    //         resizeId: "",
    //        init : function(options){
	// 			this.settings = extend(defaults, options || {});
	// 			this.wrapper = document.querySelector(this.settings.wrapper);
	// 			this.fixed = document.querySelectorAll(this.settings.fixed);

	// 			if(this.wrapper==="undefined"){
	// 				return false;
	// 			}
	// 			this.targets = document.querySelectorAll(this.settings.targets);
	// 			document.body.style.height = this.wrapper.clientHeight + 'px';

	// 			var mainElement = document.querySelector("main");
	// 			mainElement.style.setProperty('--i', this.wrapper.clientHeight + 'px');

	// 			this.windowHeight = window.clientHeight;
	// 			this.attachEvent();
	// 			this.apply(this.targets,this.wrapper);
	// 			this.animate();
	// 			this.resize();
	// 		},
            
    //         scroll : function(){
    //             var scrollTopTmp = document.documentElement.scrollTop || document.body.scrollTop;
    //             this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //             var offsetBottom = this.scrollTop + this.windowHeight;
    //             this.wrapperUpdate(this.scrollTop);
    //             for (var i = 0; i < this.Targets.length; i++) {
    //                 this.targetsUpdate(this.Targets[i]);
    //             }
    //         },
    //         wrapperUpdate : function(){
    //             this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //             this.wapperOffset += (this.scrollTop - this.wapperOffset) * this.settings.wrapperSpeed;
    //             // console.log(this.scrollTop,this.wapperOffset,this.settings.wrapperSpeed);
    //             this.wrapper.style.transform = 'translate3d(' + 0 + ',' +  Math.round(-this.wapperOffset* 100) / 100 + 'px ,' + 0 + ')';
    //             for(var j = 0; j < this.fixed.length; ++j){
    //                 this.fixed[j].style.transform = 'translate3d(' + 0 + ',' +  - Math.round(-this.wapperOffset* 100) / 100 + 'px ,' + 0 + ')';
    //             }
            
    //             if($('body').hasClass('is-home')){
    //                 var leadTop = $('.p-top__lead .l-kv__txt1').offset().top;
    //                 var txtOutside = $('.l-kv__txt1.outside').height()/2;
    //                 // console.log(this.scrollTop,leadTop);
    //                 if(this.scrollTop + (winHeight/2) - txtOutside >= leadTop){
    //                     // console.log(leadTop,this.scrollTop);
    //                     // $('.l-kv__txt1.outside').css('transform','translate3d(' + 0 + ',' + (leadTop - (winHeight/2) - txtOutside) + 'px ,' + 0 + ')');
    //                     document.querySelector('.l-kv__txt1.outside').style.opacity = '0';
    //                     document.querySelector('.p-top__lead .l-kv__txt1').style.opacity = '1';
    //                 }else{
    //                     document.querySelector('.l-kv__txt1.outside').style.opacity = '1';
    //                     document.querySelector('.p-top__lead .l-kv__txt1').style.opacity = '0';
    //                 }
    //             }
    //         }
    //     }


    //     var luxy = new Luxy();

    //     return luxy;
    // })

    scroll.init({
        wrapperSpeed:  1
    });

});
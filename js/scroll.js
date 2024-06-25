(function(root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		define([], factory);
	}
	else if (typeof exports === 'object') {
		module.exports = factory();
	}
	else {
		root.scroll = factory();
	}
}(this, function() {

	'use strict';

		var defaults = {
			wrapper: '#scroll',
			fixed: '.scroll-fixed',
			targets : '.scroll-el',
			wrapperSpeed: 0.01,
			targetSpeed: 0.02,
			targetPercentage: 0.1
		};
		var winHeight = window.innerHeight;
		var extend = function () {
			var extended = {};
			var i = 0;
			var length = arguments.length;
			var merge = function (obj) {
				for (var prop in obj) {
					if (obj.hasOwnProperty(prop)) {
						extended[prop] = obj[prop];
					}
				}
			};
			for (i = 0; i < length; i++ ) {
				var obj = arguments[i];
				merge(obj);
			}
			return extended;
		};

		var Scroll = function(){
			this.Targets = [];
			this.windowHeight = 0;
			this.wapperOffset = 0;
		};
		Scroll.prototype = {
			isAnimate: false,
			isResize : false,
			scrollId: "",
			resizeId: "",

			// Khởi tạo
			init : function(options){
				this.settings = extend(defaults, options || {});
				this.wrapper = document.querySelector(this.settings.wrapper);
				this.fixed = document.querySelectorAll(this.settings.fixed);

				if(this.wrapper==="undefined"){
					return false;
				}

				// Tính và set height của main visual -> gán height cho main để tính khoảng cách
				this.targets = document.querySelectorAll(this.settings.targets);
				document.body.style.height = this.wrapper.clientHeight + 'px';

				var mainElement = document.querySelector("main");
				mainElement.style.setProperty('--i', this.wrapper.clientHeight + 'px');
 
				this.windowHeight = window.clientHeight;
				this.apply(this.targets,this.wrapper);
				this.animate();
			},
			apply : function(){
				this.wrapperInit();
			},
			wrapperInit: function(){
				this.wrapper.style.width = '100%';
				this.wrapper.style.position = 'fixed';
			},
			
			scroll : function(){
				this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				this.wrapperUpdate(this.scrollTop);
			},
			
			animate : function(){
				// [ requestAnimationFrame ] thực hiện các hoạt động vẽ animation trên một canvas mỗi khi màn hình được vẽ lại, hoặc để cập nhật các thuộc tính CSS của các phần tử DOM một cách mượt mà mà không gây lag hoặc trì hoãn.
				this.scroll();
				this.scrollId = requestAnimationFrame(this.animate.bind(this));
			},
			wrapperUpdate : function(){
                //Tính toán và Cập nhật giá trị transform
				this.wapperOffset += (this.scrollTop - this.wapperOffset) * this.settings.wrapperSpeed;
				this.wrapper.style.transform = 'translate3d(' + 0 + ',' +  Math.round(-this.wapperOffset* 100) / 100 + 'px ,' + 0 + ')';
				for(var j = 0; j < this.fixed.length; ++j){
					this.fixed[j].style.transform = 'translate3d(' + 0 + ',' +  - Math.round(-this.wapperOffset* 100) / 100 + 'px ,' + 0 + ')';
				}

				// Tính khoảng cách của text 1 để khi scroll đến đúng vị trí text 2 thì text được fixed sẽ ẩn đi và text tại vị trí đó sẽ hiển thị lên = opacity
				if($('body').hasClass('is-home')){
					var leadTop = $('.p-top__lead .l-kv__txt1').offset().top;
					var txtOutside = $('.l-kv__txt1.outside').height()/2;
					if(this.scrollTop + (winHeight/2) - txtOutside >= leadTop){
						document.querySelector('.l-kv__txt1.outside').style.opacity = '0';
						document.querySelector('.p-top__lead .l-kv__txt1').style.opacity = '1';
					}else{
						document.querySelector('.l-kv__txt1.outside').style.opacity = '1';
						document.querySelector('.p-top__lead .l-kv__txt1').style.opacity = '0';
					}
				}

			},
		};
		var scroll = new Scroll();
		return scroll;
	})
);

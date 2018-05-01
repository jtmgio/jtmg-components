;( function( $, window ){
	var
	$w	 		= $( window ), // cache gobal
	c			= console.log, // console alias
	className 	= 'jqwhiteout',
	modalClassName = 'has-modal',
	css			= {};

	$.fn.extend({

		//create a plugin for each el that is attached to this chain
		whiteout: function( options, args )
		{
			//set the options if they are available
			if ( options && typeof( options ) == 'object' )
			{
				options = $.extend( true, {}, $.whiteout.defaults, options );
				css = options.css;
			}
			else
			{
				css = $.whiteout.defaults.css;
			}

			//call a new instance for each elem
			this.each( function() {
				new $.whiteout( this, options, args );
			});

			//chaining
			return this;
		}
	});

	//the actual plugin
	$.whiteout = function( elem, options, args )
	{
		//cache the main els
		var $el 	  = $( elem ).css( 'position', 'relative' ),
		    $whiteout = $("<div></div>", {'class' : className}).css( css );

		if($(elem).hasClass("modal")){
			$whiteout.addClass(modalClassName);
		}
		$whiteout.html('<div class=\"whiteout-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\"/></svg></div>');
		var jtmgioProgressConfig = {
			progressSize : 50,
			strokeWidth : 10,
			duration : 100,
			easeFn : linearEase,

			durationIndeterminate : 500,
			startIndeterminate : 3,
			endIndeterminate : 80,
			easeFnIndeterminate : materialEase,

			easingPresets : {
				linearEase : linearEase,
				materialEase : materialEase
			}
		};

		function linearEase(t, b, c, d) {
			return c * t / d + b;
		}

		function materialEase(t, b, c, d) {
			// via http://www.timotheegroleau.com/Flash/experiments/easing_function_generator.htm
			// with settings of [0, 0, 1, 1]
			var ts = (t /= d) * t;
			var tc = ts * t;
			return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
		}
		var rAF = window.requestAnimationFrame || $.noop;
        var cAF = window.cancelAnimationFrame || $.noop;
        var DEGREE_IN_RADIANS = window.Math.PI / 180;
		function MdProgressCircularLink() {
			var firstTime = true;
			var getNow = window.performance ? function(){ return window.performance.now() } : Date.now || function(){
				return new Date().getTime();
			};
			var node = $whiteout;
			var svg = node.find("svg");
			var path = node.find("path");
			var startIndeterminate = jtmgioProgressConfig.startIndeterminate;
			var endIndeterminate = jtmgioProgressConfig.endIndeterminate;
			var rotationIndeterminate = 0;
			var lastAnimationId = 0;
			var lastDrawFrame;
			var interval;
			var colors = ["#00A3E0", "#6CC24A", "#F1C400"];
			var selectedColor = 0;

			startIndeterminateAnimation();
			setSvgSettings();

			function setSvgSettings(){
				var diameter = getSize();
				var strokeWidth = getStroke(diameter);
				var transformOrigin = (diameter / 2) + "px";
				var dimensions = {
					width : diameter + "px",
					height : diameter + "px"
				};

				// The viewBox has to be applied via setAttribute, because it is
				// case-sensitive. If jQuery is included in the page, `.attr` lowercases
				// all attribute names.
				svg[0].setAttribute("viewBox", "0 0 " + diameter + " " + diameter);

				// Usually viewBox sets the dimensions for the SVG, however that doesn't
				// seem to be the case on IE10.
				// Important! The transform origin has to be set from here and it has to
				// be in the format of "Ypx Ypx Ypx", otherwise the rotation wobbles in
				// IE and Edge, because they don't account for the stroke width when
				// rotating. Also "center" doesn't help in this case, it has to be a
				// precise value.
				svg
					.css(dimensions)
					.css("transform-origin", transformOrigin + " " + transformOrigin + " " + transformOrigin);

				//node.css(dimensions);
				path.css("stroke-width", strokeWidth + "px");
			}
			function renderCircle(animateFrom, animateTo, easing, duration, rotation) {
				var id = ++lastAnimationId;
				var startTime = getNow();
				var changeInValue = animateTo - animateFrom;
				var diameter = getSize();
				var pathDiameter = diameter - getStroke(diameter);
				var ease = easing || jtmgioProgressConfig.easeFn;
				var animationDuration = duration || jtmgioProgressConfig.duration;

				// No need to animate it if the values are the same
				if (animateTo === animateFrom) {
					path.attr("d", getSvgArc(animateTo, diameter, pathDiameter, rotation));
				} else {
					lastDrawFrame = rAF(function animation(now) {
						var currentTime = window.Math.max(0, window.Math.min((now || getNow()) - startTime, animationDuration));
						path.attr("d", getSvgArc(
							ease(currentTime, animateFrom, changeInValue, animationDuration),
							diameter,
							pathDiameter,
							rotation
						));

						// Do not allow overlapping animations
						if (id === lastAnimationId && currentTime < animationDuration) {
							lastDrawFrame = rAF(animation);
						}
					});
				}
			}
			function animateIndeterminate() {
				//check if circle exists, else stop interval to prevent memory leak
				//run at least once incase whiteout has not been added yet
				if(firstTime || $("body").find(node).length){
					if(firstTime){ firstTime = false; }
					renderCircle(
						startIndeterminate,
						endIndeterminate,
						jtmgioProgressConfig.easeFnIndeterminate,
						jtmgioProgressConfig.durationIndeterminate,
						rotationIndeterminate
					);
					path.attr("stroke", colors[selectedColor / 2]);
					selectedColor = (selectedColor + 1 ) % (colors.length * 2);
					// The % 100 technically isn't necessary, but it keeps the rotation
					// under 100, instead of becoming a crazy large number.
					rotationIndeterminate = (rotationIndeterminate + endIndeterminate) % 100;

					var temp = startIndeterminate;
					startIndeterminate = -endIndeterminate;
					endIndeterminate = -temp;
				}else{
					cleanupIndeterminateAnimation();
				}
			}
		
			function startIndeterminateAnimation() {
				if (!interval) {
					// Note that this interval isn't supposed to trigger a digest.
					interval = setInterval(
						animateIndeterminate,
						jtmgioProgressConfig.durationIndeterminate + 50
					);

					animateIndeterminate();
				}
			}

			function cleanupIndeterminateAnimation() {
				if (interval) {
					clearInterval(interval);
					interval = null;
				}
			}
		}

		/**
		 * Generates an arc following the SVG arc syntax.
		 * Syntax spec: https://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands
		 *
		 * @param {number} current Current value between 0 and 100.
		 * @param {number} diameter Diameter of the container.
		 * @param {number} pathDiameter Diameter of the path element.
		 * @param {number=0} rotation The point at which the semicircle should start rendering.
		 * Used for doing the indeterminate animation.
		 *
		 * @returns {string} String representation of an SVG arc.
		 */
		function getSvgArc(current, diameter, pathDiameter, rotation) {
			// The angle can't be exactly 360, because the arc becomes hidden.
			var maximumAngle = 359.99 / 100;
			var startPoint = rotation || 0;
			var radius = diameter / 2;
			var pathRadius = pathDiameter / 2;

			var startAngle = startPoint * maximumAngle;
			var endAngle = current * maximumAngle;
			var start = polarToCartesian(radius, pathRadius, startAngle);
			var end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
			var arcSweep = endAngle < 0 ? 0 : 1;
			var largeArcFlag;

			if (endAngle < 0) {
				largeArcFlag = endAngle >= -180 ? 0 : 1;
			} else {
				largeArcFlag = endAngle <= 180 ? 0 : 1;
			}
			return "M" + start + "A" + pathRadius + "," + pathRadius +
				" 0 " + largeArcFlag + "," + arcSweep + " " + end;
		}

		/**
		 * Converts Polar coordinates to Cartesian.
		 *
		 * @param {number} radius Radius of the container.
		 * @param {number} pathRadius Radius of the path element
		 * @param {number} angleInDegress Angle at which to place the point.
		 *
		 * @returns {string} Cartesian coordinates in the format of `x,y`.
		 */
		function polarToCartesian(radius, pathRadius, angleInDegrees) {
			var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;

			return (radius + (pathRadius * window.Math.cos(angleInRadians))) +
				"," + (radius + (pathRadius * window.Math.sin(angleInRadians)));
		}

		/**
		 * Limits a value between 0 and 100.
		 */
		function clamp(value) {
			return window.Math.max(0, window.Math.min(value || 0, 100));
		}

		/**
		 * Determines the size of a progress circle, based on the provided
		 * value in the following formats: `X`, `Ypx`, `Z%`.
		 */
		function getSize(value) {
			var defaultValue = jtmgioProgressConfig.progressSize;

			if (value) {
				var parsed = parseFloat(value);

				if (value.lastIndexOf("%") === value.length - 1) {
					parsed = (parsed / 100) * defaultValue;
				}

				return parsed;
			}

			return defaultValue;
		}

		/**
		 * Determines the circle's stroke width, based on
		 * the provided diameter.
		 */
		function getStroke(diameter) {
			return jtmgioProgressConfig.strokeWidth / 100 * diameter;
		}

		//here are the actions
		this.actions = {
			//default create action
			start	: function( args, options )
			{
				$('.modal').addClass('whiteout-loading');
				$('.whiteout').addClass('whiteout-loading');
				if($el.find(".jqwhiteout").length === 0){
					$el.prepend( $whiteout );
					MdProgressCircularLink();
				}
				/*if( options ){
					options.onAfterRendered( options );
				}*/

			},
			//clear out the whiteout
			clear 	: function( args )
			{
				$('.modal').removeClass('whiteout-loading');
				$el.find( 'div.' + className ).remove();
			},
			clearAll : function()
			{
				console.log( $( 'body' ).find( '.jqwhiteout' ) );
			}
		};

		//decide what to call and error checking
		if ( options && typeof( options ) == 'string' )
		{
			try
			{
				this.actions[ options ]( args, options );
			}
			catch( e )
			{
				throw new Error( 'Plugin method does not exist, please learn to read/implement me.' );
			}

			return;
		}
		else
		{
			//default action
			this.actions[ 'start' ]( args, options );

			return;
		}
	};

	//defaults are recursively applied
	$.whiteout.defaults =
	{
		onBeforeStart 	: function(){},
		onAfterRendered	: function(){},
		onBeforeRemove	: function(){},
		onAfterRemove	: function(){},
		fadeIn		: false,
		fadeInSpeed	: 'fast',
		fadeOut		: false,
		fadeOutSpeed: 'fast',
		css :
		{
			height			: '100%',
			left			: 0,
			right 			: 0,
			bottom 			: 0,
			opacity			: 0.85,
			position		: 'absolute',
			top				: 0,
			width			: '100%',
			'z-index'		: 1500
		}
	};


})( jQuery, window );

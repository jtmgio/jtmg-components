var jtmgio = jtmgio || {};
jtmgio.app = jtmgio.app || {};
jtmgio.app.config = jtmgio.app.config || {};

jtmgio.app.config.modal = {
    modalConfig: {
        autoOpen: false,
        modal: true,
        buttons: {
            'Cancel': function()
            {
                jQuery(this).dialog('close');
            }
        }
    },
    informModalConfig: {
        autoOpen: false,
        modal: true,
        buttons: {
            'OK': function()
            {
                jQuery(this).dialog('close');
            }
        }
    }
};


document.createElement("article");
document.createElement("footer");
document.createElement("header");
document.createElement("hgroup");
document.createElement("nav");

//Make sure the DOM is ready
jQuery( document ).ready(function(){

	jQuery.browser = {};
	(function () {
	    jQuery.browser.msie = false;
	    jQuery.browser.version = 0;
	    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
	        jQuery.browser.msie = true;
	        jQuery.browser.version = RegExp.$1;
	    }
	})();

    //alias JQuery
    (function( $, app ){

         /* set up globals  */

        app.helpers = {

            quickSearch : function( term ){
                var url = SEARCH_URL + term;
		        window.location = url;
                return true;
            }
        };

        /*

            FN defaultValue Plugin
            sets the default value for an input/password/textarea
            This will reset the field on focus and set the default text if the field is blank on blur
        */

        $.fn.defaultValue = function(text){
            return this.each(function(){
                if(this.type != 'text' && this.type != 'password' && this.type != 'textarea') return;
                var self = this,
                obj = $( this );

                if( self.value=='' )	this.value = text;
                else return false;

                obj.focus(function() {
                    if( this.value == text || this.value == '' ) this.value='';
                });

                obj.blur(function() {
                    if(this.value==text || this.value=='') this.value=text;
                });

                obj.parents("form").each(function() {
                    $(this).submit(function() {
                        if( self.value==text) fld_current.value='';
                    });
                });
            });
        };


        /*

            FN Scroller Plugin
			This plugin will scroll the screen. You will need the following to use this:
			Container div
				*needs to have fixed width/fixed height
				*needs to have overflow of hidden
				*needs to have position relative
			Clip Div
				*needs to be nested within the above div
				*needs to be position:absolute
				*width needs to be large
        */


		$.fn.jtmgioScroller = function(options){

			//set your defaults
			var defaults = {
                parent      : '.jtmgio-scrolling',
				container 	: '.jtmgio-scrolling-container',
				iconGroup	: '.jtmgio-icon-group',
				prev		: '.prev',
				next		: '.next',
				btnControls	: '.jtmgio-controls',
				strip		: '#cpanel',
				speed		: 1000,
				offset		: 200
			};

			//combine the opts
			var options = $.extend(defaults, options);

			return this.each(function(){
				//declare vars
				var clipWidth 	= $( options.container ).innerWidth(),
				obj				= $( this ),
				stripWidth		= 0, pages = 0, page = 0, scrollWidth = 0, clicks = 0, prevPosition = 0, animateValue = 0;


				//check to see if we have any icons if not then don't show the strip
                if($(options.iconGroup).size() == 0) $(options.container).hide();


				//get the total width of the pages
				$( options.iconGroup ).each(function(){
					stripWidth += $(this).width();
				});


				if(stripWidth > clipWidth){
                  $(options.btnControls).show();


                }else{
                    $(options.container).width(stripWidth + 12 ).css('padding','0 0 0 10px');

                }



				//might need to know the total pages for paging
				pages = Math.ceil(stripWidth/clipWidth);

				//Create a custom easing effect
	 			$.easing.custom = function (x, t, b, c, d) {
					var s = 1.70158;
					if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
					return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
				}


				//click event
				$( options.btnControls ).click(function(event){
					$( this ).hasClass(options.next.replace('.','')) ? next() : prev();
                    event.preventDefault();
				});

                function next()
                {
					if(page < pages ) page += 1;

					if(page == pages) return false;

					var x = page * clipWidth;

					if( x <= stripWidth ) animateStrip( -( x - options.offset ) );
					return true;
                }

                function prev()
                {
					var x = ( parseInt($(options.strip).css('left')) - options.offset ) + clipWidth;

					if( page > 0) page -= 1;
					if( x == 0 ) page = 0;
					if( page == 0 ) x = 0;

					if( x <= 0 ) animateStrip( x );
					return true;
                }

				function animateStrip(x)
				{
					$(options.strip).animate({'left': x}, options.speed, 'custom');
				}

			});

		};



		$.fn.center = function(params) {

				var options = {

					vertical: true,
					horizontal: true

				}
				op = $.extend(options, params);

		   return this.each(function(){

				//initializing variables
				var $self = jQuery(this);
				//get the dimensions using dimensions plugin
				var width = $self.width();
				var height = $self.height();
				//get the paddings
				var paddingTop = parseInt($self.css("padding-top"));
				var paddingBottom = parseInt($self.css("padding-bottom"));
				//get the borders
				var borderTop = parseInt($self.css("border-top-width"));
				var borderBottom = parseInt($self.css("border-bottom-width"));
				//get the media of padding and borders
				var mediaBorder = (borderTop+borderBottom)/2;
				var mediaPadding = (paddingTop+paddingBottom)/2;
				//get the type of positioning
				var positionType = $self.parent().css("position");
				// get the half minus of width and height
				var halfWidth = (width/2)*(-1);
				var halfHeight = ((height/2)*(-1))-mediaPadding-mediaBorder;
				// initializing the css properties
				var cssProp = {
					position: 'absolute'
				};

				if(op.vertical) {
					cssProp.height = height;
					cssProp.top = '50%';
					cssProp.marginTop = halfHeight;
				}
				else{
					cssProp.top = '15%';

				}
				if(op.horizontal) {
					cssProp.width = width;
					cssProp.left = '50%';
					cssProp.marginLeft = halfWidth;
				}
				//check the current position
				if(positionType == 'static') {
					$self.parent().css("position","relative");
				}
				//aplying the css
				$self.css(cssProp);


		   });

		};


        $.fn.jtmgioConfigure = function(){

            return this.each(function(){
                var obj = $(this),
                list    = obj.next('ul'),
                parent  = obj.parent(),
                body    = obj.parents('body');

                obj.click(function(event){
                    event.preventDefault();
                    obj.addClass('hover');

                    if(list.is(':visible')){
                        obj.removeClass('hover');
                        list.hide();
                    }
                    else{
                        list.slideDown(100);
                    }
                });

                parent.hover(function(){
                    obj.show();

                },function(){
                    list.hide();
                    obj.hide().removeClass('hover');
                });

                body.click(function(event){
                    var target = $( event.target );
                    if( ! target.is('a')){
                        list.hide();
                        obj.removeClass('hover');
                    }

                });


            });
        };


        $('a.jtmgio-configure').jtmgioConfigure();



		/*
			Add Dynamic Tools Tips

		*/

		if( $().tooltip )
		{

			$.fn.createTooltip = function(){

				return this.each(function(){
					var obj = $( this );
					span	= obj.find('span'),
					text	= span.text(),
					div		= $( '<div />' , {
						'text' : text,
						'class': 'tooltip'

					}).wrapInner('<div />');

                    span.remove();

                    obj.after(div);

					obj.tooltip({effect:'slide',offset:[0,-10]});
					obj.append( $( '<span />', {'text':text}));

				});
			};

			//apply the tooltip event
			$('.jtmgio-tooltip-event').createTooltip();

		}


		/*
			Menu


		$(".jtmgio-nav").dropmenu({
			openSpeed	: 0,
			closeSpeed	: 0,
			closeDelay	: 0
		});

		*/

		$( 'div#main-toolbar, div#element-box' ).hover( function(){

			$('.jtmgio-dropdown').slideUp();
			$('a.parent').removeClass('selected');

		});



        /*
            Open all links with class of "external" in new tab
        */

        $( 'a.external' ).click(function( event ){

            $( this ).attr( 'target', '_blank' );

        });

        /*
            parent clicks
        */

		$('a[rel="parentClick"]').each( function( index, obj ){
			var obj = $( obj ),
			parent	= obj.parent();
			parent.click(function(event){
				window.location = obj.attr('href');
				event.preventDefault();
			});
		});


        /*
             setup how the search input works on all pages

		*/
        $( '#search_text' ).defaultValue( '' )
            .keypress(function( event ){
                var key = ( event.keyCode ? event.keyCode : event.which );
                if( key == 13 ) app.helpers.quickSearch( $( this ).val() );
            })
            .focus(function( event ){
                var obj = $( this );
                obj.animate({'width': '200px'},'fast');
            })
            .blur(function( event ){
                var obj = $( this );
                obj.animate({'width': '100px'},'fast');

            });

        /*
            quick search submit
        */

        $( 'input#quick-search-submit' ).click(function(event){
            var term = $( 'input#search' ).val();
            app.helpers.quickSearch( term );
            event.preventDefault();

        });

		/*
			scroller for the homepage.
		*/

		$('.jtmgio-scrolling-container').jtmgioScroller();



		/*
			alternate rows
		*/

		$('div.jtmgio-container > div.jtmgio-row').each(function(index, obj){
			if( $.browser.msie && $.browser.version < 9 && index % 2 == 0 ) $( obj ).css('background-color','#EBEBEB');
		});


		/*
			SWITCHES

		*/
    	$("ul.jtmgio-switch li").on( 'click', function(e){

			var parent = $( this ).parent('ul');

	    	parent.find('li').removeClass("on");
        	$(this).addClass("on");
			e.preventDefault();

		});


		$('.jtmgio-loading-gif').center();


		$('table.adminlist').wrap('<div id="adminListDiv"></div>')



        $('table.toolbar [id$="selected"]').addClass('active');

        if( typeof $("#jtmgio-tabs").tabs === 'function' )
        {
            $( "#jtmgio-tabs" ).tabs({

                fx: { opacity: 'toggle' },
                active: 0,
                beforeActivate: function(event, ui )
                {
                    if( ui.newTab.index() == 4 ) window.location = 'index.php?option=com_jtmgioadmin&linkId=71';
                }
            });
        }

		/*
			BUTTONS
		*/
		$( '.jtmgio-btn' ).button();
		$( ".jtmgio-add-btn" ).button({ icons: {primary:'ui-icon-plusthick'} });
		$( '.jtmgio-link-btn' ).button({icons: {primary:'ui-icon-extlink' }});
		$( '.jtmgio-delete-btn' ).button({icons: {primary:'ui-icon-trash' }});
		$( '.jtmgio-publish-btn' ).button({icons: {primary: 'ui-icon-document'}});
		$( '.jtmgio-logout-btn' ).button({icons: {primary: 'ui-icon-closethick'}});
		$( '.jtmgio-save-btn' ).button({icons: {primary: 'ui-icon-disk'}});
		$( '.jtmgio-login-btn' ).button({icons: {primary: 'ui-icon-key'}});
		$( '.jtmgio-down-btn' ).button({icons: {primary: 'ui-icon-arrowthick-1-s'}});
		$( '.jtmgio-up-btn' ).button({icons: {primary: 'ui-icon-arrowthick-1-n'}});
		$( '.jtmgio-browse-btn' ).button({icons: {primary: 'ui-icon-folder-open'}});
		$( '.jtmgio-key-btn' ).button({icons: {primary: 'ui-icon-unlocked'}});



		$( '.jtmgio-gear-btn' ).button({icons: {primary: 'ui-icon-gear'}})
			.hover( function(e){

				$( this ).next('.jtmgio-configure-menu').slideDown();

				e.preventDefault();
			}, function(){

				$( this ).next('.jtmgio-configure-menu').slideUp();
			});
		$('.pane-sliders').delay(100).slideDown('fast');

		$('div.admin-icon-container ul.jtmgio-icon-list').each(function(){
			var obj = $( this );

			if( obj.find('li').size() > 8 ) obj.parent('div').find( '.jtmgio-show-more' ).fadeIn();

			if( obj.find('li').size() < 7 ) obj.parent( 'div.admin-icon-container').height(175);


		});


		$( '.jtmgio-icon-modal' ).dialog({
				width: 650,
				height:600,
				autoOpen: false,
				modal: true,
				show: 'blind',
				hide: 'clip'

		});


		$( '.jtmgio-show-more').click(function(e){
			var obj = $( this ),
			id		= obj.attr('id');

			$('#' + id + '_icon_modal.jtmgio-icon-modal' )
			.dialog('option','buttons',{
				Close : function(){
					$(this).dialog('close');
				},
				'Configure' : function(){
					window.location = 'index.php?option=com_cpicons&controller=cpicons&task=edit&cid[]=' + id;
				}

			})
			.dialog('open');

			e.preventDefault();
		});


		if( $.browser.msie && $.browser.version <= 9 )
		{
			$( '.jtmgio-input' ).focus( function(){
				$( this ).addClass( 'jtmgio-input-focus');
			});

			$( '.jtmgio-input' ).blur( function(){
				$( this ).removeClass( 'jtmgio-input-focus');
			});


		}
		else
		{
			$( 'ul.jtmgio-dropdown li:last-child a' ).addClass( 'jtmgio-menu-radius');

		}

		
		if( $.browser.msie && $.browser.version < 8)
		{
			$( '#jtmgio-tabs').css({margin: '0 0 20px 0'});
			$( '.jpane-slider' ).hide();

			$( 'div.panel h3' ).click( function(){

				$( '.jpane-slider' ).hide();

				$( this ).next( '.jpane-slider').delay(800).slideDown('fast');

			});

			$( '.jpane-slider' ).eq(0).show();


		}

		

		$( '.jtmgio-tooltip' )
		.on( 'click',  function( event ){
			var
			obj 		= $( this ),
			helpText 	= obj.data( 'tip' ),
			div			= $( '<div />' , { 'class' : 'inner-tooltip',  html : '<p>' + helpText + '</p>' }),
			closeTip	= $( '<i />', { 'class' : 'icon-remove', text : '' }),
			isOpened	= obj.find( '.inner-tooltip' );


			$( '.inner-tooltip' ).fadeOut().remove();
				
			if( isOpened.length ) return false;
			div.append( closeTip )
			obj.find( '.inner-tooltip' ).remove();
			obj.append( div );
			div.fadeIn();

			
			event.preventDefault();
			event.stopPropagation();
		});




		$( '.jtmgio-tooltip .icon-remove' ).on( 'click' , function( event ){

			$( this ).parent( '.inner-tooltip' ).fadeOut().remove();


			event.preventDefault();
			event.stopPropagation();

		});



		$( 'body' ).on( 'click', function(){

			$( '.inner-tooltip' ).fadeOut();
			$( '.inner-tooltip' ).remove();
		});






    })( jQuery, jtmgio.app );
});

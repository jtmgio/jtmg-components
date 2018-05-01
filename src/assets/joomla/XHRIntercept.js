;(function(XHR) {
	"use strict";
	var open, send, message;
	open = XHR.prototype.open;
	send = XHR.prototype.send;
	//intercept open
	XHR.prototype.open = function(method, url, async, user, pass) {
		this._url = url;
		//keep moving
		open.call(this, method, url, async, user, pass);
	};
	//intercept send
	XHR.prototype.send = function(data) {
		var error_codes;
		error_codes = [401, 403, 503];
		//intercept if we have a bad error code
		function onReadyStateChange() {
			if (this.readyState === 4 && error_codes.indexOf(this.status) > -1) {
				message( this.status );
				console.warn( "Error Code: " + this.status );
				console.warn( "Response: " + this.response );	
				console.warn( "Response URL: " + this.responseURL );	
				console.warn( "Time: " + new Date().getTime() );	
			}			
		}
		onReadyStateChange.bind(this);
		if (this.addEventListener) {
			this.addEventListener("readystatechange", onReadyStateChange, false);
		}
		//keep moving
	
		send.call(this, data);
	};
	message = function( code ) {
		if (jQuery) {
			var messages, modal, whiteout;
			messages = {
				'403' : {
					'message' : "This account is not authorized to perform this action. To contact support, email us at <a href='mailto:help@jtmgio.com'>help@jtmgio.com</a>.",
					'button' : "Ok"
				},
				'401' : {
					'message' : "Something went wrong. Please log in again. To contact support, email us at <a href='mailto:help@jtmgio.com'>help@jtmgio.com</a>.",
					'button' : "Login"
				},
				'503' : {
					'message' : "Something went wrong. Please log in again. To contact support, email us at <a href='mailto:help@jtmgio.com'>help@jtmgio.com</a>.",
					'button' : "Ok"
				}
			};
			modal = '<div id="modal" class="modal xhr-modal"><div class="modal-interior">' + messages[ code ].message + '</div><div class="modal-footer"><div class="btn-container"><a id="xhr-ok" class="alt-button green">' + messages[ code ].button + '</a></div><div class="jtmgio-clearfix"></div></div></div>';
			whiteout = '<div class="whiteout" style="width: 100%; height: 100%; opacity: 0.85;"></div>';
			jQuery('.xhr-modal, .whiteout').remove();
			jQuery('body').append(modal).append(whiteout);
			jQuery('.xhr-modal').center().show();
			jQuery('#xhr-ok').on('click', function(vent) {
				location.href="/administrator/index.php?option=com_login&task=logout";				
				return;
				jQuery('.xhr-modal, .whiteout').remove();
				vent.preventDefault();
				return;
			});
			return;
		}
	};
})(XMLHttpRequest);
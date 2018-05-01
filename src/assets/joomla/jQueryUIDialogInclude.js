var reWhitespace = /^\s+$/
function isWhitespace( s )
{
    return (isEmpty(s) || reWhitespace.test(s));
}

function isEmpty( s )
{
    return ( ( s == null ) || ( s.length == 0 ) )
}

jQuery( function()
{

	if( jQuery.fn.dialog ){
	    // error dialog
	    jQuery('#errorDialog').dialog(
	    {
	        bgiframe: true,
	        autoOpen: false,
	        resizable: false,
	        modal: true,
	        overlay:
	        {
	            backgroundColor: '#000',
	            opacity: 0.5
	        },
	        buttons:
	        {
	            OK: function()
	            {
	                jQuery(this).dialog('close');
	            }
	        }
	    });
	
	    // alert dialog
	    jQuery('#alertDialog').dialog(
	    {
	        bgiframe: true,
	        autoOpen: false,
	        resizable: false,
	        modal: true,
	        overlay:
	        {
	            backgroundColor: '#000',
	            opacity: 0.5
	        },
	        buttons:
	        {
	            OK: function()
	            {
	                jQuery(this).dialog('close');
	            }
	        }
	    });
	}
});

function displayAlertDialog( title, alertText )
{
    var alertTextPrefix = '<span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span>';
    jQuery('#alertDialog').html( alertTextPrefix + alertText );
    jQuery('#alertDialog').dialog('option', 'title', title);
    jQuery('#alertDialog').dialog('open');
}

function displayErrorDialog( errorText )
{
    var errorTextPrefix = '<span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span>Error: ';
    jQuery('#errorDialog').html( errorTextPrefix + errorText );
    jQuery('#errorDialog').dialog('open');
}

(function(jQuery)
{
    this.checkBlank = function( id, textId, text )
    {
        if( isWhitespace( jQuery( id ).val() ) )
        {
            jQuery( id ).addClass( 'ui-state-error' );
            jQuery( textId ).text( text );
            return false;
        }
        else
        {
            jQuery( id ).removeClass('ui-state-error');
            return true;
        }
    };

    this.validEmail = function( str )
    {
        var at = "@"
        var dot = "."
        var lat = str.indexOf(at)
        var lstr = str.length
        var ldot = str.indexOf(dot)

        if( str.indexOf(at) == -1 )
        {
            return false
        }

        if( str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr )
        {
            return false
        }

        if( str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr )
        {
            return false
        }

        if( str.indexOf(at, (lat + 1)) != -1 )
        {
            return false
        }

        if( str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot )
        {
            return false
        }

        if( str.indexOf(dot, (lat + 2)) == -1 )
        {
            return false
        }

        if( str.indexOf(" ") != -1 )
        {
            return false
        }

        return true
    };

    this.checkValidEmail = function( id, textId, text )
    {
        if( !isWhitespace( jQuery(id).val() ) )
        {
            if( !validEmail( jQuery(id).val() ) )
            {
                jQuery( id ).addClass( 'ui-state-error' );
                jQuery( textId ).text( text );
                return false;
            }
            else
            {
                return true;
            }
        }
        else
        {
            return false;
        }
    };

    this.validCharacters = function( id, regEx, textId, text )
    {
        if( jQuery( id ).val().match( regEx ) )
        {
            jQuery( id ).removeClass('ui-state-error');
            return true;
        }
        else
        {
            jQuery( id ).addClass( 'ui-state-error' );
            jQuery( textId ).text( text );
            return false;
        }
    };
}
)(jQuery);

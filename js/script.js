$( function(){

	var classes = [ "one", "two", "three" ];
	var index   = 0;
	var parent  = $( ".image_container div" );

	var scrollButton = $( ".scroll" );
	var timer;

	var run = function run(){

		timer = setTimeout( function(){

			changeImage();
			run();

		}, 6000 );
	};

	var stop = function( id ){

		clearTimeout( id );
	};

	var changeImage = function changeImage(){

		var lastIndex = index;

		if ( index < 2 ) {
			index++;	
		}
		else{
			index = 0;
		}

		parent.fadeOut( 600, function(){

			parent.removeClass( classes[ lastIndex ] );
			parent.addClass( classes[ index ] );
			parent.fadeIn( 600 );
		} );
	};

	run();

	scrollButton.on( "click", function( e ){

		var t = $( this );
		var d = t.data( "position" );

		stop( timer );

		parent.fadeOut( 500, function(){

			parent.removeClass( classes[ index ] );
			parent.addClass( classes[ d ] );
			parent.fadeIn( 500 );

			index = d;

			run();
		} );

		e.preventDefault();
	} );
} );

var box = $( ".box" );

console.log( box );

box.textFit();
























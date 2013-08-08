// Put your custom code here

$(function () {
  

	function buildStart( urlObj, options )
	{
		var roundName = urlObj.hash.replace( /.*round=/, "" ),

		pageSelector = urlObj.hash.replace( /\?.*$/, "" );

		if ( roundName ) {
			// Get the page we are going to dump our content into.
			var $page = $( pageSelector ),

				// Get the header for the page.
				// $header = $page.children( ":jqmData(role=header)" ),

				// Get the content area element for the page.
				$content = $page.children( ":jqmData(role=content)" );

			// Inject the category items markup into the content element.
			// $content.html( markup );
			var image = "images/" + roundName + "_text.png";
			$content.find(".round").attr("src", image);
			
			isLocked = false;
			
			if (isLocked) {
				$content.find(".buttons").html("<img src='images/Locked.png'>");
			} else {
				var buttons = 
					"<a href='#"+roundName + "-1'</a><img src='images/easy.png'></a>" + 
					"<a href='#"+roundName + "-2'</a><img src='images/tough.png'></a>" +
					"<a href='#"+roundName + "-3'</a><img src='images/superfan.png'></a>";
					
				debugger;	
				$content.find(".buttons").html(buttons);
			}
			$page.page();
			$.mobile.changePage( $page, options );
		}
	}
	
	// Listen for any attempts to call changePage().
	$(document).bind( "pagebeforechange", function( e, data ) {
		// We only want to handle changePage() calls where the caller is
		// asking us to load a page by URL.
		if ( typeof data.toPage === "string" ) {

			// We are being asked to load a page by URL, but we only
			// want to handle URLs that request the data for a specific
			// category.
			var u = $.mobile.path.parseUrl( data.toPage ),
				startRe = /^#start/;

			if ( u.hash.search(startRe) !== -1 ) {
				// We're being asked to display the items for a specific category.
				// Call our internal method that builds the content for the category
				// on the fly based on our in-memory category data structure.
				buildStart( u, data.options );

				// Make sure to tell changePage() we've handled this call so it doesn't
				// have to do anything.
				e.preventDefault();
			} else 	if ( u.hash.search(startRe) !== -1 ) {
				// We're being asked to display the items for a specific category.
				// Call our internal method that builds the content for the category
				// on the fly based on our in-memory category data structure.
				buildStart( u, data.options );

				// Make sure to tell changePage() we've handled this call so it doesn't
				// have to do anything.
				e.preventDefault();
			}
		}
	});
});

// When ready...
window.addEventListener("load",function() {
  // Set a timeout...
  setTimeout(function(){
    // Hide the address bar!
    window.scrollTo(0, 1);
  }, 0);
});

jQuery(document).ready(function () {
    $('div.hidden').hide(0).delay(0).fadeIn(500);

    $('.link').click(function(event) {
		event.preventDefault();
		newLocation = this.href;

	$('div.hidden').fadeOut(500, newpage);

	});

function newpage() {

window.location = newLocation;

}

		});
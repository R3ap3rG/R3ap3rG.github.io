var main = function(){
    $('.dropdown-mods').hide();
    $('.dropdown-toggle').click(function(){
        $('.dropdown-mods').slideToggle(1000);
	});
}


$(document).ready(main);
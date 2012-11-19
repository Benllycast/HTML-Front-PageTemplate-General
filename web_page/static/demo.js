jQuery(document).ready(function() {
	// Stuff to do as soon as the DOM is ready;
	/*$('.item a').hover(function(evento){
		padre = $(evento.target).parent();
		pos = $(padre).position();
		pos.top -= 60;
		$(padre).css('top',pos+'px');
	},function(evento){
		reset_posicion();
	});*/
});

var reset_posicion = function(){
	$('.item').each(function(index,elemento){
		$(elemento).css('top',""+30*index+"px");
	});		
}
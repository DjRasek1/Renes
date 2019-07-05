$(document).ready(function(){
	var url = location;
	url = url.toString();
	var param = url.split('#');
	var mostrar = "#" + param[1];

	$(mostrar).siblings().removeClass("show");
	$(mostrar).addClass("show");
})
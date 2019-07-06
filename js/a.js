/* Script que se encarga de que todos los
colapsables sean correctos */

$(document).ready(function(){
	var url = location;
	url = url.toString();
	var param = url.split('#');
	var mostrar = "#" + param[1];

	$(mostrar).siblings().removeClass("show");
	$(mostrar).addClass("show");

	if(param[1][0] == "e"){
		$("#colapsable1").removeClass("show");
		$("#colapsable2").addClass("show");
	}
})
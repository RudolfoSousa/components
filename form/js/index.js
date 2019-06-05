$(document).ready(function(){
	$("button").on("click", function(e){
		e.preventDefault();
	})
	etapas();
});

function etapas(){
	$(".etapa1 button").click(function(){

		$(".etapa1").animate({
			left: "-105%"
		}, 500);

		$(".etapa2").animate({
			left: "15px"
		}, 500);

		$(".etapa3").animate({
			left: "100%"
		}, 500);

		$(".passos .passos-content .passo:nth-child(2) .passo-content").addClass("active");
	})

	$(".etapa2 button").click(function(){

		$(".etapa1").animate({
			left: "-200%"
		}, 500);

		$(".etapa2").animate({
			left: "-100%"
		}, 500);

		$(".etapa3").animate({
			left: "15px"
		}, 500);

		$(".passos .passos-content .passo:nth-child(3) .passo-content").addClass("active");
	})

}
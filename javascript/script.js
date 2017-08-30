var n = 16;

$(document).ready(function() {

	for (var x = 0; x < n; x++) {
		for (var y = 0; y < n; y++) {
			$("<div>").addClass("square").appendTo('#container');
		}
	}

	$(".square").mouseenter(function() {
		$(this).css("background-color", "black");
	});

	$("button").click(function() {
		$(".square").css("background-color", "white");

		var n2 = prompt("Ingrese el numero de cuadrados que quieras para el grid:")

		$(".square").remove();

		for (var x = 0; x < n2; x++) {
			for (var y = 0; y < n2; y++) {
				$("<div>").addClass("square").appendTo('#container');
			}
		}

		var s2 = ((600-2)-n2)/n2;
		$(".square").width(s2);
		$(".square").height(s2);

		$(".square").mouseenter(function() {
			var col1 = Math.floor(Math.random()*255);
			var col2 = Math.floor(Math.random()*255);
			var col3 = Math.floor(Math.random()*255);
			$(this).css("background-color", "rgb("+ col1 +", "+ col2 +", "+ col3 +")");
		});
	});

		

});



	

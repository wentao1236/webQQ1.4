$(function(){
		alert("dd");
	$(".down").click(function(){
		if ($("#downcaidan").css("display")==("block")){
			$("#downcaidan").hide();
		}
		else 
			$("#downcaidan").show();

	});
	$("#myfriend").click(function(){
		if ($("#hideplace1").css("display")==("block")){
			$("#hideplace1").hide();
		}
		else 
			$("#hideplace1").show();

	});
	$("#midschool").click(function(){
		if ($("#hideplace2").css("display")==("block")){
			$("#hideplace2").hide();
		}
		else 
			$("#hideplace2").show();

	});
	$("#family").click(function(){
		if ($("#hideplace3").css("display")==("block")){
			$("#hideplace3").hide();
		}
		else 
			$("#hideplace3").show();

	});
	$("#bigschool").click(function(){
		if ($("#hideplace4").css("display")==("block")){
			$("#hideplace4").hide();
		}
		else 
			$("#hideplace4").show();

	});
	$("#highschool").click(function(){
		if ($("#hideplace5").css("display")==("block")){
			$("#hideplace5").hide();
		}
		else 
			$("#hideplace5").show();

	});

	$("#close").click(function(){
		$("#mainright").hide();
	});
	$("#foot1").click(function(){
		$("#hide2").hide();
		$("#hide3").hide();
		$("#hide4").hide();
		$(".huihua").removeClass("huihuaPic");
		$(".huihua").addClass("huihuaPic2");
		$("#hide1").show();
	});
	$("#foot2").click(function(){
		$("#hide1").hide();
		$("#hide3").hide();
		$("#hide4").hide();
		$("#hide2").show();
	});
	$("#foot3").click(function(){
		$("#hide1").hide();
		$("#hide2").hide();
		$("#hide4").hide();
		$("#hide3").show();
	});
	$("#foot4").click(function(){
		$("#hide1").hide();
		$("#hide2").hide();
		$("#hide3").hide();
		$("#hide4").show();
	});
	$("#haoyouC").click(function(){
		$("#qun").hide();
		$("#taolunzu").hide();
		$("#haoyou").show();
	});
	$("#qunC").click(function(){
		$("#haoyou").hide();
		$("#taolunzu").hide();
		$("#qun").show();
	});
	$("#taolunzuC").click(function(){
		$("#qun").hide();
		$("#haoyou").hide();
		$("#taolunzu").show();
	});

});
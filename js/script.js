$( document ).ready(function() {
    

    //other pages to read

    $(".fruit").hover(function(){
	    $("div").css("opacity", "1");
	    }, function(){
	    $("div").css("opacity", "0");
	});

	$("#information").hover(function(){
	    $(this).css("opacity", "1");
	    }, function(){
	    $(this).css("opacity", "0");
	});

	//sets initial sizes because too lazy to do it in CSS
    $('#lollypop').height('350px');
    $('#cherry-pie').height('350px');
    $('#sausage').height('350px');
    $('#cupcake').height('350px');
    $('#watermelon').height('350px');

	//page 9
	$(function () {
    	$('#chocolate-cake').mouseover(function () {
    	//$(this).toggle(function () {
    	$('#chocolate-cake').width('380px');
            	});
    	$('#chocolate-cake').mouseleave(function () {
    	//$(this).toggle(function () {
    	$('#chocolate-cake').width('300px');
            	});
	});

	$(function () {
    	$('#ice-cream').mouseover(function () {
    	//$(this).toggle(function () {
    	$('#ice-cream').width('200px');
            	});
    	$('#ice-cream').mouseleave(function () {
    	//$(this).toggle(function () {
    	$('#ice-cream').width('150px');
            	});
	});


	$(function () {
    	$('#pickle').mouseover(function () {
    	//$(this).toggle(function () {
    	$('#pickle').height('450px');
            	});
    	$('#pickle').mouseleave(function () {
    	//$(this).toggle(function () {
    	$('#pickle').height('350px');
            	});
	});

	$(function () {
    	$('#swiss-cheese').mouseover(function () {
    	//$(this).toggle(function () {
    	$('#swiss-cheese').height('400px');
            	});
    	$('#swiss-cheese').mouseleave(function () {
    	//$(this).toggle(function () {
    	$('#swiss-cheese').height('350px');
            	});
	});


	$(function () {
    	$('#salami').mouseover(function () {
    	//$(this).toggle(function () {
    	$('#salami').height('400');
            	});
    	$('#salami').mouseleave(function () {
    	//$(this).toggle(function () {
    	$('#salami').height('350px');
            	});
	});

	//page 10

	$(function () {
    	$('#lollypop').mouseover(function () {
    	//$(this).toggle(function () {
    	$('#lollypop').height('400');
            	});
    	$('#lollypop').mouseleave(function () {
    	//$(this).toggle(function () {
    	$('#lollypop').height('350px');
            	});
	});

	$(function () {
    	$('#cherry-pie').mouseover(function () {
    	//$(this).toggle(function () {
    	$('#cherry-pie').height('400');
            	});
    	$('#cherry-pie').mouseleave(function () {
    	//$(this).toggle(function () {
    	$('#cherry-pie').height('350px');
            	});
	});

	$(function () {
    	$('#sausage').mouseover(function () {
    	//$(this).toggle(function () {
    	$('#sausage').height('400');
            	});
    	$('#sausage').mouseleave(function () {
    	//$(this).toggle(function () {
    	$('#sausage').height('350px');
            	});
	});

	$(function () {
    	$('#cupcake').mouseover(function () {
    	//$(this).toggle(function () {
    	$('#cupcake').height('400');
            	});
    	$('#cupcake').mouseleave(function () {
    	//$(this).toggle(function () {
    	$('#cupcake').height('350px');
            	});
	});


	$(function () {
    	$('#watermelon').mouseover(function () {
    	//$(this).toggle(function () {
    	$('#watermelon').height('400');
            	});
    	$('#watermelon').mouseleave(function () {
    	//$(this).toggle(function () {
    	$('#watermelon').height('350px');
            	});
	});


	replayFunction()
	sunAnimation()

/*
	window.onmousemove = logMouseMove;

	function logMouseMove(e) {
		e = event || window.event;	
		mousePos = { x: e.clientX, y: e.clientY };
		console.log(mousePos);
	}
*/

});	

function replayFunction()
{
	$('#target').removeClass('fruit-id');
	setTimeout(function(){
		$('#target').addClass('fruit-id');
	}, 1);
}


function sunAnimation()
{
	console.log("hi")
	$('#targets').removeClass('baby-sun');
	setTimeout(function(){
		$('#targets').addClass('baby-sun');
	}, 1);
}





$(document).ready(function(){

	$('#sorry2').hide()
	$('#sorry3').hide()

	

	$('#btn1').click(function(){
		$('#sorry1').show()
		$('#sorry2').hide()
	$('#sorry3').hide()
	})
	$('#btn2').click(function(){
		$('#sorry2').show()
		$('#sorry1').hide()
	$('#sorry3').hide()
	})
	$('#btn3').click(function(){
		$('#sorry3').show()
		$('#sorry2').hide()
	$('#sorry1').hide()
	})
});


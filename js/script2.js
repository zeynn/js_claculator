$(document).ready(
function (){
	var display = $('#display');
	$('.c').click(function (){
		display.val('');
		$('.hesap').removeClass('bg-dark');
	});
	$('.hesap').click(function (){
		display.val(display.val() + $(this).val());
		$(this).addClass('bg-dark');
	});
	$('.e').click(function () {
		try{
			display.val(eval(display.val()));			
		} catch{
			alert('Girilen işlem geçersiz!');
			display.val('');
		}
	});
	
	$('.y').click(function(){
		var x = $('.x').val();
		if(x==''){
			$('#lab').val('Lütfen şifrenizi giriniz.');
			$(this).val('');
			$('.x').focus();
		} else {
			$('#lab').val('');
		}
	});
	
	$('.y').focus(function(){
		var x = $('.x').val();
		if(x==''){
			$('#lab').val('Lütfen şifrenizi giriniz.');
			$(this).val('');
			$('.x').focus();
		} else {
			$('#lab').val('');
		}
	});
	
	$('.y').change(function(){
		var x = $('.x').val();
		if(x==''){
			$('#lab').val('Lütfen şifrenizi giriniz.');
			$(this).val('');
			$('.x').focus();
		} else {
			$('#lab').val('');
		}
	});
});






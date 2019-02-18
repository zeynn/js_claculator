function isimYaz(){
	var promptanDonenCevap = prompt('Lütfen Adınızı Giriniz.');
	if(promptanDonenCevap!==null && promptanDonenCevap!==''){
		var karsilama = $('#karsilama');
		var cinsiyet = "";
		var isim = promptanDonenCevap.toLowerCase();
		if(isim==='ahmet' || isim==='mehmet'){
			cinsiyet = " Bey";
		}
		
		console.log(isim.length);
		var duzenli = isim[0].toUpperCase();
		var i = 1;
		for(i=1;i<isim.length;i++){
			duzenli = duzenli + isim[i];
		}
		var mesaj2 = "Sayın " + duzenli + cinsiyet + ", hoşgeldiniz";
		console.log(mesaj2);
	}
}
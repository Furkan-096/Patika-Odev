let firstname = prompt("Adınız Nedir?")

let myName = document.querySelector("#myName")

myName.innerHTML = `${firstname}`
myName.style.color = "white"


 function tarihGoster() {
	 let tarih=new Date();
     let saat=tarih.getHours();
     let dakika=tarih.getMinutes();
     let saniye=tarih.getSeconds();	
     let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
      let gun = gunler[tarih.getDay()];
     let myClock = document.querySelector("#myClock");
    myClock.innerHTML=`${saat}:${dakika}:${saniye} - ${gun}`
    myClock.style.color = "white"
 
}

tarihGoster();

setInterval("tarihGoster()", 1000);


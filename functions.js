"use strict";
// fonksiyonlar tekrar tekar kulllanabilcegimiz kod parcalaridir
//degiskenler ginidirler ama tum kod parcalarini kapsar
// degiskenler sadece degeri kapsarken fonksiyonlar bir veya daha fazla kod satirini tutabilir

function logger() {
  console.log("My name is umit"); // programda birden fazla kes kullanmamiz gerekir o yuzden bunu bir functiona koyariz.
}
// function = function key word
// logger = function name

// kume parantezi olusturmanin amaci (funtion bady) denen fonksiyonun tamamlayan parantezler olustumaktir.
// console.log function u calistirinca yurutecek olan bu koddur.

// functionu olusturduk ve onu bir istedigimiz kadar kullanabiliriz onun icin function name'i kullanarak calistirabiliriz
logger();
logger();
logger();

// functionu kulanmak icin sadece adini yazmak ve parantez kullanmamiz yeterlidir
// functionu her calistirdigimizda function un icindeki kod parcasi calistirilacaktir

// calling/ running / invoking function
// sirasiyla aramaya / calistirmaya ve cagirmaya gibi terimleri birbirleri yerine kullanilirlar, temelde ayni anlami tasirlar

// yukaridaki kullanimdan baska kullanimlarida vardir.

// functionu yazarken functiona veri de aktaririz ve ayrica bir function veri de dondurebilir
// bize baska bir programda kullanabilecegimiz verileri geri verebilir
// yani bize sadece function icindeki kod parcasini geri cagirmak yerine veri alabilir ver verileri geri dondurebilir.

function fruitProcessor(apples, oranges) {
  //(1)
  console.log(apples, oranges); //(2)
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //(3)
  return juice; // (4)
}

// parameters; function name'i yazdiktan sonra parantezler icinde yazilan degerlerdir
// yanlizca bu functiona ozgu degiskenler gibidir ve functionu cagirdigimizda tanimlanirlar
// parametreler birden fazla ise virgul ile ayrilirlar
// verilen parametreler function a cagirildiginda tanimlacak ve bu functionu girdi verilerini (input data) temsil edecekler

// parametreleri atadiktan sonra onlari console.log la konsola kaydederiz

// const juice ile functiona aldigimiz input data lari kulllanarak tepmlate literals(soblon degismezleri) ile bir string(dize) olusturuyoruz

// return key word ile function dan herhangi bir degeri dondurebiliriz
// dondordurdugumuz bu deger daha sonra kodumuzun her hangi bir yerinde kullanabilriz

fruitProcessor(5, 0); // (5)  5, 0

//  functionu cagirdiktan sonra verdigimiz parameter lara gercek degerler belirleyebiliriz
// verdigimiz degeler function un inputs (girdileri) olacaktir.

/* ozetle
(1) deki parametreleri fonsiyona yazarken ve fonksiyonu cagirdigimizda doldurmamiz gereken gibi dusunulebilir.Daha sonra (5) teki kodda bu noktaya daha sonra parametreler atanacak olan spesifik degerleri ileterek bu bos alanlari doldururuz.
(5) te verdigimiz  gercek degerleri ARGUMANS olarak adladiririz 
argumanlar spesifiktir */

// satir 51 de cagirdimiz function satir 34 den geliyor

// const juice a ne oldu?
// Degisken bu functiona geri dondu. temel olarak bu functiona calistirdiktan sonra (5) teki functiona  degistirilir ve bu durumda bu degistirilen kod parcasi const juice stringidir

// Dondurulen bu degeri kullanmak istiyorsak bu bir degiskene saklamamiz gerekir

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); //Juice with 5 apples and 0 oranges.

/* ozetle;
burada fruitProcessor fonksiyonunu 5 ve 0 olmak uzere iki argumanla cagirdik ve bu argumanlar spesiktir
Dolayasiyla fonksiyon parametrelerinin gercek degerleri apples ve oranges dir ve fonksiyon su anda calisirken burdaki apples 5 ve oranges 0 olacaktir
Daha sonra template literals icindeki degerleri kullanrak burdaki const juice stringini olusturuyoruz 
ve Daha sonra bu degeri (return juice) ile  foksiyondan dondururuz ve bunun anlami temel olarak bu fonksiyonu cagirmanin sonucu az once dondurulen (satir 51 ) bu deger olacaktir.
 ve daha sonra bu degeri yakalamiz gereken bir yere kaydetmemiz gerekiyor bunda const appleJuice degiskenine kaydedetek yapiyoruz 
ve en sonunda console.log(appleJuice); ile konsola kiyleyebiliriz
*/

//  bunu direk konsola kaydederekte yapabilirdik.

console.log(fruitProcessor(5, 0)); //Juice with 5 apples and 0 oranges.
// ikisi aransindaki tek fark degeri herhangi bir degiskene kaydetmemis olamamizdir.
// Bu islevi calistirmanin sonucunu dogrudan konsola kaydediyoruz

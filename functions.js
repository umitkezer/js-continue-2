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
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// parameters; function name'i yazdiktan sonra parantezler icinde yazilan degerlerdir
// yanlizca bu functiona ozgu degiskenler gibidir ve functionu cagirdigimizda tanimlanirlar
// parametreler birden fazla ise virgul ile ayrilirlar
// verilen parametreler function a cagirildiginda tanimlacak ve bu functionu girdi verilerini (input data) temsil edecekler

// parametreleri atadiktan sonra onlari console.log la konsola kaydederiz

// const juice ile functiona aldigimiz input data lari kulllanarak tepmlate literals(soblon degismezleri) ile bir string(dize) olusturuyoruz

// return key word ile function dan herhangi bir degeri dondurebiliriz
// dondordurdugumuz bu deger daha sonra kodumuzun her hangi bir yerinde kullanabilriz

fruitProcessor(5, 0);

//  functionu cagirdiktan sonra verdigimiz parameter lara gercek degerler belirleyebiliriz
// verdigimiz degeler function un inputs (girdileri) olacaktir.

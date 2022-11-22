"use strict";
// fonksiyonlar tekrar tekar kulllanabilcegimiz kod parcalaridir
//degiskenler ginidirler ama tum kod parcalarini kapsar
// degiskenler sadece degeri kapsarken fonksiyonlar bir veya daha fazla kod satirini tutabilir

function logger() {
  console.log("My name is Jonas"); // programda birden fazla kes kullanmamiz gerekir o yuzzden bunu bir functiona koyariz.
}

// kume parantezi olusturmanin amaca (funtion bady) denen fonksiyonun tamamlayan parantezler olustumaktir.
// console.log function u calistirinca yurutecek olan bu koddur.

logger();
logger();
logger();

// functionu kulanmak icin sadece adini yazmak ver parantez kullanmamiz yeterlidir
// calling/ running / invoking function
// sirasiyla aramaya / calistirmaya ve cagirmaya gibi terimleri birbirleri yerine kullanilirlar, temelde ayni anlami tasirlar

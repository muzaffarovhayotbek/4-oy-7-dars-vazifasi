// Math functions
// 1-misol
// 1 dan 100 gacha bo‘lgan oraliqda tasodifiy butun sonni chiqaradigan dastur tuzing. Har safar dasturni ishlatganingizda yangi tasodifiy son chiqsin.
// let tasodifiy = Math.floor(Math.random()*100)+1;

// console.log("Tasodifiy son ", + tasodifiy);


// 2-misol

// let son = parseFloat(prompt("Sonni kiriting:"));

// if (son < 0) {
//     console.log("Musbat son kiriting");
// } else {
//     let kvadratIldiz = Math.floor(Math.sqrt(son));
//     console.log("Sonning kvadrat ildizi: " + kvadratIldiz);
// }

// 3-misol
// let sonlar = [];

// for (let i = 0; i < 5; i++) {
//     let son = parseFloat(prompt((i + 1) + "-sonni kiriting:"));
//     sonlar.push(son);
// }

// let engKatta = Math.max(...sonlar);
// let engKichik = Math.min(...sonlar);

// console.log("Eng katta son: " + engKatta);
// console.log("Eng kichik son: " + engKichik);

// 4-misol
// let son = parseFloat(prompt("Haqiqiy sonni kiriting:"));

// let pastgaYaxlit = Math.floor(son);
// let yuqorigaYaxlit = Math.ceil(son);

// console.log("Pastga yaxlitlangan son: " + pastgaYaxlit);
// console.log("Yuqoriga yaxlitlangan son: " + yuqorigaYaxlit);

// alert("Pastga yaxlitlangan son: " + pastgaYaxlit + "\nYuqoriga yaxlitlangan son: " + yuqorigaYaxlit);


// 5-misol
// let radius = +prompt("Aylananing radiusini kiriting:");
// let pi = 3.14;
// let aylanaUzunligi = 2 * pi * radius;

// console.log("Aylananing uzunligi: " + aylanaUzunligi);

// alert("Aylananing uzunligi: " + aylanaUzunligi);




// Ternary operator
// 1-misol
// Musbat yoki manfiy sonni aniqlash
// // Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini ternary operator yordamida aniqlang. Musbat bo'lsa "Musbat son", manfiy bo'lsa "Manfiy son" deb chiqarish
// let num = +prompt("son");
// num > 0 ? console.log("Musbat") : console.log("Manfiy");

// 2-misol
// Foydalanuvchi o'z yoshini kiritsin. Agar foydalanuvchi 18 yoshdan katta yoki teng bo'lsa, unga "Ruxsat etilgan" degan xabarni ko‘rsating, aks holda "Ruxsat etilmagan" deb chiqaring. Ternary operator yordamida bu shartni bajaring.
// let num_two = +prompt("son")
// num_two >= 18 ? console.log("Ruxsat berilgan") : console.log("Ruxsat etilmagan");

// 3-misol
// Foydalanuvchi kiritgan son juftmi yoki toq ekanligini ternary operator yordamida aniqlang va natijani "Juft son" yoki "Toq son" deb chiqaring.
// let three_num = +prompt("son")
// three_num % 2 == 0 ? console.log("Juft") : console.log("Toq");

// for sikl operator
// 1-misol
// // Juft va toq sonlarni aniqlash 1 dan 20 gacha bo‘lgan sonlar ichidan faqat juft sonlarni chop eting. Juftlikni aniqlash uchun mantiqiy `&&` operatoridan foydalaning.
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {

//         console.log(i);
//     }
// }

// 2-misol
//  Foydalanuvchi 10 ta son kiritsin. Sonlar ichidan faqat musbat bo‘lganlarini yig'indisini hisoblang (`for` va mantiqiy `>` operatorlaridan foydalaning).
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   let num = +prompt(`${i} -sonni kiriting`);
//   if (num > 0) {
//     sum += num;
//   }
//   console.log(sum);
// }

// 3-misol
// 1 dan 100 gacha bo‘lgan sonlar ichidan faqat 30 va 50 orasidagi sonlarni chop etish
// for(let i = 1; i<=100; i++){
//     if(i>=30 && i<=50){

//         console.log(i);
//     }
// }

// 4-misol
// let musbatSonlar = 0;
// let manfiySonlar = 0;

// for (let i = 0; i < 15; i++) {
//     let son = parseFloat(prompt((i + 1) + "-sonni kiriting:"));

//     if (son > 0) {
//         musbatSonlar++;
//     } else if (son < 0) {
//         manfiySonlar++;
//     }
// }

// console.log("Musbat sonlar soni: " + musbatSonlar);
// console.log("Manfiy sonlar soni: " + manfiySonlar);

// alert("Musbat sonlar soni: " + musbatSonlar + "\nManfiy sonlar soni: " + manfiySonlar);




// 6-misol
// 1 dan 50 gacha bo‘lgan sonlar ichidan faqat toq sonlarning yig‘indisini hisoblash
// let sum = 0;
// for (let i = 1; i <= 50; i += 2) {
//     sum += i;
// }
// console.log(sum);

// 7-misol
// : Foydalanuvchi 5 ta odamning yoshini kiritsin. `for` tsikli va mantiqiy `>=` operatoridan foydalanib, agar foydalanuvchi 18 yoshdan katta bo'lsa, "Voyaga yetgan" degan xabar chiqaring, aks holda "Voyaga yetmagan" degan xabar chiqarish
// for (let i = 1; i <= 5; i++) {
//     let age = +prompt("yoshingizni kiriting");

//     if (age >= 18) {
//         console.log("Voyaga yetgan");
//     } else {
//         console.log("Voyaga yetmagan");
//     }
// }

// 8-misol
// let juftsonlar = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         juftsonlar++;
//         juftsonlar++;

//     }
// }

// console.log("1 dan 100 gacha bo'lgan juft sonlar soni: " + juftsonlar);

// 9-misol
// let sonlarOrasida = 0;

// for (let i = 0; i < 10; i++) {
//     let son = parseFloat(prompt((i + 1) + "-sonni kiriting:"));

//     if (son > 5 && son < 10) {
//         sonlarOrasida++;
//     }
// }

// console.log("5 va 10 o'rtasida bo'lgan sonlar soni: " + sonlarOrasida, " ta");



// 10-misol
// Masala**: Foydalanuvchi 10 ta son kiritadi. `for` tsikli va `>` mantiqiy operatoridan foydalanib, faqat musbat sonlarni chop etish
// for (let i = 1; i <= 10; i++) {
//     let num = +prompt(`${i}-son`);
//     if (num > 0) {
//         console.log(num);

//     }
// }

// 11-misol
// Foydalanuvchi kiritgan 15 ta son orasida juft yoki manfiy bo‘lgan sonlar sonini hisoblash
// let hisob = 0;
// for (let i = 1; i <= 15; i++) {
//     let num = +prompt(`${i}-sonni kiriting`);
//     if (num % 2 == 0 || num < 0) {
//         hisob++;

//     }
// }
// console.log("Juft yoki manfiy sonlar soni: " + hisob);

// 12-misol
// 1 dan 50 gacha bo‘lgan sonlar orasida faqat 3 ga bo‘linadigan sonlarni chop etish
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }


// 14-misol
// Foydalanuvchi 10 ta raqam kiritsin. `for` tsikli va `>=` mantiqiy operatoridan foydalanib, faqat 50 dan katta sonlarni chop etish
// for (let i = 1; i <= 3; i++) {
//     let num = +prompt(`${i}-sonni kiriting`);
//     if (num >= 50) {
//         console.log(num);
//     }
// }


// 15-misol

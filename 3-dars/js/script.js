
//number data type
let number = 12.8 // bu data type ning number turi;
console.log(number) // number;

// string data type

const myname = "Farruh" // bu data type ning string turi bo'ladi bu harflar va " shuni ichiga solib yoziladi gan so'z va  sonlardir faqat shunday o'rab turuvchini ichiga";

console.log(typeof(myname)) // typeOf orqali sizning malumot turingiz qanday ekanligini bilib olasiz typeOf;

//boolean
const thisname  = true //bu true degani data type ning boolean true to'gri degan ma'noni anglatadi ;
const wename = false //bu false degani data type ning boolean false noto'g'ri degan ma''noni anglatadi;

console.log(typeof(thisname)) // shu typeof orqali boolean ekanligini console oynasida ko'rishimiz mumkin bollean 2 turga bo'linadi true va false;


//null
// console.log(farkiName) // data type ning null qismi agarda biz yoq o'zgaruvchini chaqirsak ishlatsak bu bizga null qaytaradi 

//undifaind

let doName;
// console.log(doName) // bu data type ning undifaind qismi agarda biz o'zgaruvchui ochib unga qiymat bermasak bu bizga undifaind qaytaradi ;

//object 
 const Me = { //object bu bizga biron bir narsani tasvilash uchun oddiy qilib ayganda ir karobka ichida o'zimni narsalarminin taxlab qoydm;
//  key:value      object bizga key va vakue qaytaradi;
    age:16,
    study:true,
    hair:"black"

 }
 console.log(Me) // biz bu  yerda objectni hamma malumotini consolega chaqirayabmiz lekin bizga obkect ichidagi qaysi malumot kerak bo'lsa shuni chaqirsak ham bo'ladi;
 console.log(Me.age) // shu yo'l orqali biz object ichidagi o'zimizga kerakli narsani olishimiz mumkin;

 // array
//               0         1       2   3  4
 const  arr = ["red" , "yellow" , 22, [], {}] // bu array hisoblanadi buni to'rtburchak qavs bilan ochamz bu object kabi key beriladi faqat avtomatik key har doim 0 dan boshlanadi;
 console.log(arr)
 console.log(arr[2]) // shunday yo'l bilan o'zimzga kerakli narsani olishimiz mumkin;



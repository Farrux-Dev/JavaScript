 // if  else shart operatori

//  const age = +prompt("Yoshingizni kiriting")
//  if(age > 12){ // if bu shar operatori bu yerda biz agarda age 12 dan katta bo'lsa welcome to uzbekista ni chiqar deyabmiz; // if bu agar degani;
//     console.log("welcome to uzbekistan")
//  }else{ // bu else agara buni yozmasak if ham  ishlamaydi bu yerda biz agarda 12 dan keichik bo'lsa no not ege no chiqar deyabmiz; // else bu yokida va agarada degani ;
//     console.log("no not age")
//  }


//  if(age>24){ // bu yerda biz age 24 dan katta bo'lsa horror films chiarsin deyabmiz;
//     console.log("horror films");
//  }else if(age>18 && age<24){ // bu yerda biz 18 dan jatta 24 dan kichik bo'lsa beautiful films chiqarsin deyabmiz;
//     console.log("beautiul films");
//  }else{ // bu yerda biz 18 dan kichik bolsa cartoon chiqarsin deyabmiz avtomatik ravishda boladi
//     console.log("Cartoon")           
//  }

const svetafor  = prompt("Svetafor rangini kiriting va qaysi rangda nima bo'lishini bilib oling")
switch(svetafor){
    case "red":
        console.log("car stopped")
        break;
        case "yellow":
            console.log("car slowly run");
            break;
            case "green":
                
                console.log("Car runnning");
                break;
                default:
                    console.log("car smashshed")
                    break;
}

// tapada biz switch case shar operatoridan foydalandik switch ase har doim qatiy rejimda ishlaydi unutmang;
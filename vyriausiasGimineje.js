import { gimine } from "./data.js"

function kasVyriausias (list) {
    let amzius = -Infinity;
    let vardas = '';
    for (let asmuo of list ) {
        if (asmuo.age > amzius){
            amzius = asmuo.age;
            vardas = asmuo.name;
        }
        if (asmuo.children) {
            const vyriausiasVaikas = kasVyriausias(asmuo.children);
            if (vyriausiasVaikas.age > amzius) {
                amzius = vyriausiasVaikas.age;
                vardas = vyriausiasVaikas.name
            }
        }
  }
        
    return {name: vardas, age: amzius};
}

const vyriausias = kasVyriausias(gimine);
console.log(vyriausias);

// function perteikti(duomenys) {
//     // console.log(duomenys);
//     let HTML = '';
//     for (let item of duomenys) {
        
//         if (item.children === "children") {
//            HTML +=`<div class="children">${item.children}</div>`
            
//         } else {
//             HTML += `<div class="gimine">
//             <div class="vardas"> ${item.children}
//                 <div class="children">${perteikti(item.children)}</div>
//             </div>
//         </div>`;
            
//         }
//     }

//     return HTML;
    
// }


// const fullHTML = perteikti(gimine);


const skaiciai = [
    8,
     [ 80, 90], 
    1,
    [ 100, 10000], 
    60, 
    55
];

function maxNumber(data) {
    let max = -Infinity;
   for (let num of data) {
      if( typeof num === "number") {
          if(num > max) {
              max = num; 
          }
   } else {
       const innerMax = maxNumber(num);
       if (innerMax > max) {
           max = innerMax
       }
   }
}
   return max;
}

console.log(maxNumber(skaiciai));



function countDown(numbers) {
    if (numbers <= 0 ) {
        console.log("Funkcija baigia darba");
        return;
    }
    console.log(numbers);
    numbers--;
    countDown(numbers);
}
countDown(5);
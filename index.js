// for(let i = 1;i<=5;i++){
//     console.log("i = ",i)
// }

// let i =1;
// while(i<=5){
//     console.log("i =",i)
//     i++;
// }

// let i = 1;
// do{
//     console.log("i =  ",i)
//     i++
// }while(i<=5);

// for of loop

// let str = "Aftab";
// let length = 0;
// for(let i of str){  
//     length++;
//     console.log("i = ",i)
// }

// console.log("length is = ",length)

// let student ={
//     name : "Aftab",
//     age  : 21,
//     cgpa : 7.8,
//     isPass: true,
// }

// for(let key in student){
//     console.log("key is ",key, "value is ",student[key])
// }

// let num = 0;
// for(num = 0;num<=100;num++){
//     if(num%2!==0){
//         console.log("num = ",num)
//     }
// }


let gameNum = 25;

let userNum = prompt("Guess the number ! ")
console.log(userNum)

while(userNum!=gameNum){
   userNum = prompt("wrong number , Guess again : ")
}

console.log("correct number ")
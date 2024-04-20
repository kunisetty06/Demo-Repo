console.log("hello world");
console.log(a);

//javascript variables there are three ways to define in javascript//
// var, let, constant//

var x = 5;

//1.write a program to greet people with there first and lastname//
var firstname = "Manideep";
var lastname = "Kunisetty";

console.log("Hello " + firstname +" "+ lastname);

//2. write a program that greets a person based on their gender//

var gender= false;
if(gender== true){
    console.log(" hello sir");
}else{
    console.log(" hello mam");
}

//3.wrie a program to that counts from 0-1000 and the prints.

var x=0;
for (var i=0; i<=1000;i++){
    x=x+i;
}
console.log(x);

//Arrays

const ages = [21,22,23,34,1,4,5,6,5345,4,56];
const numberofpeople = ages.length;
console.log(numberofpeople);
for (let i=0;i<numberofpeople;i++){
    if (ages[i] % 2==0){
        console.log(ages[i]);
    }
}
//Objects in javascript
// what is the differnce between let,var and const

// var :-
var a = 10 ;
var a = 20 ;
console.log(a)

//let :-
let b =30;
b=40
//in block you can use same variable name
function let(){
     let c=50
    console.log(c)

}

console.log(b)
let()

//const

const abc = 140;

function abcd(){
const abc = 150;
console.log(abc)
}
console.log(abc)
abcd();

//difference between == & ===;

let num1 = 10;
let num2 = "10";
console.log(num1 == num2);

let num3 = 10;
let num4 = 10;
console.log(num3 === num4);

// difference between function declarations & expressions
//func declarations

function declara(a,b){
    a=10;
    b=30;
    console.log(a+b);
}
declara()

const expression = function(a,b){
    a=40;
    b=50;
console.log(a+b);
}
expression()

// arrow function ? how they are different from regular func

const arrowfunc = (arrowfunc1 , arrowfunc2) =>{
    arrowfunc1 = 20;
    arrowfunc2 = 40;

    console.log(arrowfunc1+arrowfunc2)

}
arrowfunc()

//normal vs arrow
normalFunc()
function normalFunc() {
    console.log( "Normal Function")
}

//ans :-normal function

// arrowfunction()

// const arrowfunction = (num5 ,num6) =>{
// console.log("arrow")
// }

// ans :- cannot access arrowfunction()

// synchronous and asynchronous programming 

// asynchronous -> independed
// synchronous -> depended
//synchronous :-
console.log("Hi");
console.log("sani");
console.log("How are you?");


// async:-

console.log("hi")
setTimeout(() => {
    console.log("sani")
},2000);
console.log("how are you")

//q6. set time out and set interval

// set time out

console.log("first message");
setTimeout(()=>{
    console.log("second message");
}, 4000)
console.log("third message")

// set interval

let count = 0 
const id = setInterval(() =>{
    count ++
    console.log("count:" ,count);
    if(count >= 5){
        clearInterval(id)
    }
},1000)

// immediately invoked function (iife)

var result = (function(){
    var x= 40;
    var y= 50;

    return x+y;
})();
console.log(result)

// Q8 . how js handle hoisting 


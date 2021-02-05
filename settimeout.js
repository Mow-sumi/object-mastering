
function doSomething(){
    console.log(3333);
}

console.log(4444)
// setTimeout( doSomething,10000);
// console.log(44444);
// console.log(44444);
// console.log(44444);
// console.log(44444);
// console.log(44444);

//1.rules using arrow function.
// setTimeout(() =>{

//     console.log("I am unhappy");
// },10000)


//2. using function

// setTimeout (function(){
//     console.log("I am happy");
// }, 1000)

setInterval(() => {
    console.log("doing something")
}, 1000);
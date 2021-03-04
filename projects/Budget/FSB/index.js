// callback

// const  calc =   ( fn,a,b ) => fn(a,b) ;
// const somme = (a,b) => a + b ;
// const div = (a,b) => a / b ;
// console.log(calc(somme, 5, 2));
// console.log(calc(div, 5, 2));

// (function (a ,b ){
//     console.log("i'm iskander" , a , b ) ;
// })(1,2);

// let v = (function (){
//     console.log("hello");
//     return 1 ;
// })()
// console.log(v);
// console.log(v);
//console.log("hello".length)
//div
// console.log(Math.floor(2/ 3)  )
// // for (let i=0 ; i< 10 ; i++){
// //     console.log(i)
// // }
// let ch1 = "hello".split('').reverse() ;
// console.log("hello".split('').reverse());
// //array to string
// console.log(['a','b','c'].join(''));


// const testPal = (str) => str === str.split('').reverse().join('') ;
// console.log(testPal("hhah"))

// console.log('hhha'.replace('a',"w"));

// const elemnts = document.querySelectorAll('.hello');
// Array.prototype.map.call(elemnts,(e => console.log(e)));


// const tab = [1,2,5,6,9];
// // console.log(tab.findIndex(c => c> 2));
// console.log(...tab);
// var tetsVar ; 

//   1>0?tetsVar=1: tetsVar; 
// function testParams(limit ,limit2 ,...params){ 
//    console.log(tetsVar);
// };
// const obj = {
//     isk : 2 , 
//     isk1 : 5 
// };
// testParams(1,2,3,4,5)

// const tetsMap = new Map(); 
// tetsMap.set('iskandder', 100).set('khaled',101).set('abdallah',102);

// //tetsMap.delete('iskander'); 
//    console.log(tetsMap.has('iskander')); 
// tetsMap.forEach((v , k )=>  {
//     console.log(k ,':', v)
// });


// const t = new Map() ; 
// t.set('iskandder', 100).set('khaled',101).set('abdallah',102);
// for (let [key , value] of t.entries()){ 
//     console.log(key ,' : ', value)
// }

// These are both globals 
// var foo = 1; 
// bar = 2; 
 
// (function() 
// { 
//     var foo = 1; // Local 
//     bar = 3;     // Global 
 
//     // Execute an anonymous function 
//     (function() 
//     { 
//         var wibble = 1; // Local 
//         foo = 2; // Inherits from scope above (creating a closure) 
//         moo = 3; // Global 
//     }()) 
// })() 

// console.log(bar)

//classes 




// class person {
//     constructor(name , lastname , age ){
//         [this.name,
//         this.lastname,
//         this.age] = arguments;
//     }

//     getNam() { 
//         console.log('hello'); 
//     }
// }

// const p =new person('iskander','abbassi',22);
// p.getNam();
// class person {
//     constructor(name , lastname , birthday){
//         [this.name,
//         this.lastname,
//         this.birthday] = arguments;
//     }

//     calculateAge(){
//         console.log ( "birthday => " + this.birthday)
//     }
// }

// class women extends person {
//     constructor(id,name , lastname , birthday){ 
//         super(name,lastname,birthday);
//         this.id = id ; 
//     }
// }


// const w = new women(1,"kasandra","abbes",'12/02/2000');
// window.history.go(20)
// console.log(window.history)
// w.calculateAge();

async function getData(id){ 
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/"+id) ; 
    const data =  await result.json();
    console.log(`my lovely data ${id} ♥ => ` , data);
    console.log("            "); 
}

getData(1); 
getData(2); 
getData(3); 
getData(4); 
console.log("hello there ! "); 

// let qcm = [
//     {
//         q : 'chismi?',
//         r : 1,
//         rs : [{repanse : 'ali' , number : 0},{repanse: 'iskander' , number :1 },{repanse : 'mohammed' , number : 3 }]
//     },
//     {
//         q : 'chesm book ',
//         r : 2,
//         rs : [{repanse : 'MohammedAli' , number : 0},{repanse: 'khalil' , number :1 },{repanse : 'naji' , number : 3 }]
//     },
//     {
//         q : 'chesm khouk ',
//         r : [0,1],
//         rs : [{repanse : 'ali' , number : 0},{repanse: 'mohamed' , number :1 },{repanse : 'iskander' , number : 3 }]
//     }
// ];


/*
 q : question
 r : reponse
 */
// function quiz() {
//     const numQ = Math.floor(Math.random() * 3);
//     const  q = qcm[numQ];
//     q.rs.map((v,i)=> console.log(i ,'-', v.repanse));
//     let r = prompt(q.q);
//     //console.log("Repanse " , q.r);
//     return q.r == r || ( q.r instanceof Array && q.r.includes(+r)) ? "great" : "ghalet";
// }

// console.log(quiz());
// function object () {

// }
// console.log( object instanceof Object);


// IIFE
// let a = 0; 
// let k = (function(word){
//     console.log("i'm a real function " + word);
//     a++ ; 
//     return 2+word ; 
// })("iskander")

// console.log(k) ; 
// console.log(k) ; 
// console.log(k) ; 
// console.log(a)



//bind 
/*
class person {
    name = "iskander" ; 

    helloPerson(job ,study) {
        console.log("the person is " , this.name , ' job : ' , job , ' study : ' , study);
    } 
}



let abd = {
    name:"abd"
}

let isknder = new person();
isknder.helloPerson("BI developer","ISET Rades");
isknder.helloPerson.call(abd,"Ai developer " , "paris-sacalay")
isknder.helloPerson.apply(abd,["Ai developer " , "paris-sacalay"])
*/

//call method
// const animals = [
//     { species: 'Livon', name: 'King' },
//     { species: 'Whale', name: 'Fail' }
//   ];
//   for (let i = 0; i < animals.length; i++) {
//     (function(i) {
//       this.print = function() {
//         console.log('#' + i + ' ' + this.species
//                     + ': ' + this.name);
//       }
//       this.print();
//       console.log("current object " , this  , '\n')
//     }).call(animals[i], i); // call  etabba9 el IIFE 3al objet elli 3aytetlo elli makhdhetto mel array animales
// }

function greet() {
    const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
  }
  
  const obj = {
    animal: 'cats', sleepDuration: '12 and 16 hours'
  };
  
   

  greet.bind(obj)( ); 

import updateArrayOfObjects from './services/updateArrayOfObjects';
const arrayObj = [{id : 1 , name : "iskander" , age : 23},{id : 2 , name : "khaled" , age : 23},{id : 3 , name : "monta" , age : 23}] ; 
updateArrayOfObjects();
console.log(arrayObj);


// const person = {
//   name :'person',
//   methodName : function iskander (){
//     var  test = ()=> { 
//       console.log('test',this)
//     }
//     test()
//     console.log(this)
//   }
// }

// console.log(person.methodName())























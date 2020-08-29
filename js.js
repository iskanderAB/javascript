{// var myPhone = {
//     make : "Apple",
//     model : 'Iphone 7',
//     warrenty : 12 , 
//     coulour : 12 , 
//     ring : function(){
//         console.log("deep deep deep !")
//     }
// };

// console.log(myPhone["make"]);

// function randomOption() {
//     const options = Object.keys(myPhone);
//     let x = Math.floor(Math.random()*options.length);
//     return myPhone[options[x]];
// }
// console.log(randomOption());
}
{// var recipie = {
//     flour: {
//         quantity : 200 , 
//         unit : "g"
//     },
//     milk: {
//         quantity : 125 , 
//         unit : "ml"
//     },
//     eggs: {
//         quantity : 2 , 
//         unit : "unit"
//     },
//     vanillaEssence: {
//         quantity : 1 , 
//         unit : "teaspoon"
//     },
//     salt: {
//         quantity : 0.5 , 
//         unit : "teaspoon"
//     },
//     bakingPowder: {
//         quantity : 2 , 
//         unit : "teaspoon"
//     },
//     floor: {
//         quantity : 200 , 
//         unit : "g"
//     }
// }
// function hackRecipie(option , quantity){
//    if (option === undefined || quantity === undefined) 
//      return ; 
//     console.log(quantity , 'added  to ' ,  option  );
//     recipie[option]["quantity"] += quantity;
//     console.log(recipie);
// }
// hackRecipie('flour' , 500 );
}
// var person = new Object() ;
// console.log(person); 
// this is called constractor 
{
//     function phone(make ,model,warranty,color){
//     this.make = make ,
//     this.model = model , 
//     this.warranty = warranty , 
//     this.color = color ;
//     //this.extendWarranty = function (x) { this.warranty += x }
// }
// phone.prototype.new = 'new '
// let myphone = new phone('appel','s7 edg ' ,4,'black');

// console.log(myphone);
// console.log(myphone.new);
}
const room = function (capacity , price ,number ){
    this.capacity = capacity,
    this.price = price , 
    this.number = number , 
    this.booked = false 
}
room.prototype.info= function() {
    console.log("Room number " ,this.number , "is" , this.booked ? 'booked' : 'vacant' , "this room costs $" ,this.price," per night and host up ",this.capacity,"guests" );
}
room.prototype.book = function (){
    this.booked = true ; 
    console.log( "room number" ,this.number," is  " , this.booked ? "booked " : "vacant" );
}

let room1 = new room(2,500,0);
let room2 = new room(1,400,1);
let room3 = new room(3,300,2)

// room1.info();
// room2.info();
// room1.book();
// room1.info();

var hotel = {
    name : 'iskander hotel', 
    stars : 5 ,
    rooms  : [room1 , room2 ,room3]
}
hotel.info = function () {
    for( let i = 0 ; i<this.rooms.length ; i++ ){
         this.rooms[i].info();
    }
};
hotel.book = function(geustsNumber) {
    for( let i = 0 ; i<this.rooms.length ; i++ ){
        if (!this.rooms[i].booked && this.rooms[i].capacity === geustsNumber)
            {
                this.rooms[i].book();
                hotelBooked = true ; 
                break ; 
            }
            if (i === this.rooms.length-1){
                console.log("sorry  we cant't find any room for you  ");
            }
    }

};
hotel.checkout = function(roomNumber) {
    try{
        if (this.rooms[roomNumber].booked) {       
            this.rooms[roomNumber].booked = false ;
            console.log("room number ", roomNumber , "has been checked out ");
            return ; 
        }
        console.log( "this room is already checked out  ") ;
   }
   catch(error){
        console.log(error.message);
   }
}  
hotel.info();
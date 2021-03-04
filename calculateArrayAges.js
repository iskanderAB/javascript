var years =[1900,1965,1937,2005,2001];
function arrayCalc(array , fn){ 
    var arrayRes=[]; 
    for (var i =0 ; i< array.length ; i++){
        arrayRes.push(fn(array[i]))
    }
    return arrayRes;
}
function isFullAge(limit, element ){
    console.log('[isFullAge this]' , this);
    return element >= limit ;
}
function calculateAge(year) { 
    return (new Date()).getFullYear()-year ; 
}
var ages = arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages,isFullAge.bind(this,20));
isFullAge(20 , 91)
console.log("ages",ages);
console.log("ages",fullJapan);

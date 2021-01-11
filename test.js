let str ="kjjjhjjj";

const plandrom = (str) => {
    var test ='';
    let lowRegStr = str.toLowerCase().replace(test, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr ; 
}
let newStr = str ;
let catched = false  ; 
for(let i = 0 ; i<str.length ;i++){
    let fkw =  newStr.charAt(i) ;
    newStr = newStr.replace(newStr.charAt(i),'') ; 
    if (plandrom(newStr)) { 
        console.log( 'the fucking characters  is ' , fkw  );
        break ; 
    }else{
        let newStr1 = newStr ;
        for(let j =0 ; j < newStr.length ; j++) {
            newstr1 = newStr1.replace(newStr1.charAt(j),'');
            let fkw1 = newStr1.charAt(j);
            if(plandrom(newstr1)){
                console.log( 'the fucking characters is ' , fkw , ' , ' , fkw1 );
                catched = !catched ; 
                break;
            }
            newstr1 = newStr;
        }        
    }
    if (catched){
        break ; 
    } 
    newStr=str;
}

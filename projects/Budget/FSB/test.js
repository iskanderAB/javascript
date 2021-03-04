let str ="jjjhjj7j";

const palindrome = (str) => {
    var test ='';
    let lowRegStr = str.toLowerCase().replace(test, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr ;
}
let newStr = str ;
let catched = false  ;
if (!palindrome(str))
    for(let i = 0 ; i<str.length ;i++){
    let fkw =  newStr[i];
    newStr = newStr.replace(newStr[1],'') ;
    if (palindrome(newStr)) {
        console.log( 'the **** character is ' , fkw  );
        break ;
    }else{
        let newStr1 = newStr ;
        for(let j =0 ; j < newStr.length ; j++) {
            newstr1 = newStr1.replace(newStr1.charAt(j),'');
            let fkw1 = newStr1.charAt(j);
            if(palindrome(newstr1)){
                console.log( 'the **** characters is ' , fkw , ' , ' , fkw1 );
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
else {
    console.log(str ,' is palindrome ♥ ')
}

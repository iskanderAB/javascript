const arrayObj = [{id : 1 , name : "iskander" , age : 23},{id : 2 , name : "khaled" , age : 23},{id : 3 , name : "monta" , age : 23}] ; 
function updateArrayOfObjects(id,arrayObj, newObject) {
    let properties ; 
    arrayObj.forEach(v => {
        if (v.id === id ){
            properties = Object.keys(v);
            properties.forEach(key => {
                v.id = id 
                v[key] = newObject[key];
            });
        };  
    }  )
}
console.log(arrayObj);
updateArrayOfObjects(2,arrayObj,{name:'updateted' , age : 10 });
console.log(arrayObj);
export default updateArrayOfObjects ; 

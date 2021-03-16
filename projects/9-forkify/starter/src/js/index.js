import axios from "axios";


let getResults = async (query) => {
    try{
        await axios.get('https://recipe-puppy.p.rapidapi.com/',{
            params: {
                p: '1',
                i: 'onions,garlic',
                q: query
            },
            headers : {
                'x-rapidapi-key': '4b17ca5fd8msh6d0480450ca5b38p12d4bajsnf42018dbe4ec',
                'x-rapidapi-host': 'recipe-puppy.p.rapidapi.com'
            }
        }).then(response => {
            console.log(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    }catch (error){
        console.log(error);
    }
}

getResults("pizza");

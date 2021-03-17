import search from './Models/Search.js';
const state = {};



const controllerSearch = async () => {
    const query = 'pizza' ;
    state.search= new search();
    await state.search.getResults();
    console.log(state.search.results);
}
document.querySelector('.search').addEventListener('submit',(e)=>{
    e.preventDefault();

    controllerSearch();
});

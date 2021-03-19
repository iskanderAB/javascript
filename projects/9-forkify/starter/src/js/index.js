import search from './Models/Search.js';
import {renderResult,renderLoader} from './Views/SearchView';
const state = {};
const controllerSearch = async () => {
    renderLoader();
    state.search= new search();
    await state.search.getResults();
    console.log(state.search.results);
    renderResult(state.search.results);
};
document.querySelector('.search').addEventListener('submit',(e)=>{
    e.preventDefault();
    controllerSearch();
});

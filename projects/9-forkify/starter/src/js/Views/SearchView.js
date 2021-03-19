import elements from './base';

export const getQuerySearched = () => elements.searchInput.value;

/*href: "http://www.recipezaar.com/White-Pizza-or-Pizza-Blanca-123588"
ingredients: "garlic, mozzarella cheese, onions, parmesan cheese, red pepper flakes"
thumbnail: "http://img.recipepuppy.com/42839.jpg"
title: "White Pizza or Pizza Blanca"*/
const clearList = () => {
    elements.resultList.innerHTML= "" ;
};
/**
 * function return a good form limited length
 * @param title
 * @param limit
 * @returns {string|*}
 */
const limitTitle = (title , limit = 17) => {
    const  newTitle= [];
    if (title.length > limit){
        title.split(' ').reduce((acc , cur, index) => {
                if ((acc+cur.length)<= limit ){
                    newTitle.push(cur);
                }
                return acc + cur.length;
            },0);
        return `${newTitle.join(' ')} ...` ;
    }
    return title ;
}

/**
 * function rendering one result
 * @param recipe
 */
const renderRecipe = recipe => {
    const markup = `<li>
                    <a class="results__link" href=${recipe.href}>
                        <figure class="results__fig">
                            <img src=${recipe.thumbnail === '' ? 'img/global.jpg': recipe.thumbnail} alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitTitle(recipe.title)}</h4>
                        </div>
                    </a>
                </li>`;
    elements.resultList.insertAdjacentHTML('beforeend',markup);
};

/**
 * rendering all results
 * @param recipes
 */
export const renderResult = recipes => {
    clearList();
    recipes.forEach(renderRecipe);
};
/**
 * rendering spinner
 * @param parent
 */
export const renderLoader = () => {
    const spinner = `
        <div class="loader">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
       `;
    elements.results.insertAdjacentHTML('afterbegin',spinner);
}
export const clearLoader = () => {
    if (elements.loader)
    elements.results.removeChild(elements.loader);
}

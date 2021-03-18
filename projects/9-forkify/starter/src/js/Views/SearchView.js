import elements from './base';

export const getQuerySearched = () => elements.searchInput.value;

/*href: "http://www.recipezaar.com/White-Pizza-or-Pizza-Blanca-123588"
ingredients: "garlic, mozzarella cheese, onions, parmesan cheese, red pepper flakes"
thumbnail: "http://img.recipepuppy.com/42839.jpg"
title: "White Pizza or Pizza Blanca"*/
const clearList = () => {
    elements.resultList.innerHTML= "" ;
};

const renderRecipe = recipe => {
    const markup = `<li>
                    <a class="results__link" href=${recipe.href}>
                        <figure class="results__fig">
                            <img src=${recipe.thumbnail === '' ? 'img/global.jpg': recipe.thumbnail} alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                        </div>
                    </a>
                </li>`;
    elements.resultList.insertAdjacentHTML('beforeend',markup);
};
export const renderResult = recipes => {
    clearList();
    recipes.forEach(renderRecipe);
};

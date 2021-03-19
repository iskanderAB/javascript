import getView from "../services/getView";
const elements = {
    searchForm: getView('search'),
    searchInput: getView('search__field'),
    resultList : getView('results__list'),
    results : getView('results'),
    loader : getView('loader'),
};
export default elements;


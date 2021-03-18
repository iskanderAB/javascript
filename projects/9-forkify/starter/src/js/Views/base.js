import getView from "../services/getView";
const elements = {
    searchForm: getView('search'),
    searchInput: getView('search__field'),
    resultList : getView('results__list'),
};
export default elements;

const getView = (name,multiple = false) => {
    return multiple ? [...document.querySelectorAll(`.${name}`)] : document.querySelector(`.${name}`);
};
export default getView ;

const categoriesList = document.querySelector('#categories');
const categoriesItems = [...categoriesList.children];

console.log(`Number of categories: ${categoriesList.children.length}`);
console.log('\n');

categoriesItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
    console.log('\n');
});
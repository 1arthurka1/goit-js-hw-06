const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientItems = document.querySelector('#ingredients');

const itemsToAdd = ingredients.map(item => {
  const readyItem = document.createElement('li');
  readyItem.classList.add('item');
  readyItem.textContent = item;
  return readyItem;
})

ingredientItems.append(...itemsToAdd);

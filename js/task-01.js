const itemCategories = document.querySelectorAll('.item');
const quantityItemCategoriess = itemCategories.length;
console.log(`Number of categories:, ${quantityItemCategoriess}`);

itemCategories.forEach(items => {
  console.log(`Category:, ${items.firstElementChild.textContent}`);
  const itemInCategories = items.querySelectorAll('li');
  const quantityItemInCategories = itemInCategories.length;
  console.log(`Elements:, ${quantityItemInCategories}`);
});

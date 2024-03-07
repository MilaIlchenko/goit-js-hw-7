const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Total categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Items count: ${categoryItemsCount}`);
});
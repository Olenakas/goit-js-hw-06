const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const listIngredients = ingredients.map((item) => {
  const listIngredient = document.createElement("li");
  listIngredient.textContent = item;
  listIngredient.classList.add("item");
  return listIngredient;
});
list.append(...listIngredients);

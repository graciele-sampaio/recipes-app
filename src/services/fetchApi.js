export const mealApi = async (inputValue, order) => {
  let endpoint = '';
  if (order === 'ingredient') {
    endpoint = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`);
  }
  if (order === 'name') {
    endpoint = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
  }
  if (order === 'first-letter') {
    endpoint = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue[0]}`);
  }
  const data = await endpoint.json();
  return data;
};

export const drinkApi = async (inputValue, order) => {
  let response = '';
  if (order === 'ingredient') {
    response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputValue}`);
  }
  if (order === 'name') {
    response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`);
  }
  if (order === 'first-letter') {
    response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue[0]}`);
  }
  const drinkObj = await response.json();
  return drinkObj;
};

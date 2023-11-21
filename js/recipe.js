document.getElementById('add').addEventListener('click', async function () {
    const ingredient = document.getElementById('ingredientInput').value;
    const url = `https://food-recipes-with-images.p.rapidapi.com/?q=${encodeURIComponent(ingredient)}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6327a53544mshbec5f64fd893bfcp1dc327jsn92a7a240369e',
            'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayRecipe(result);
    } catch (error) {
        console.error(error);
    }
});

function displayRecipe(recipeData) {
    const recipeContainer = document.getElementById('recipe');
    recipeContainer.innerHTML = ''

    if (recipeData) {
        const firstRecipe = recipeData.d[0];;

        const titleElement = document.createElement('h1');
        titleElement.textContent = firstRecipe.Title;

        const ingredientsElement = document.createElement('ul');
        for (const key in firstRecipe.Ingredients) {
            if (Object.hasOwnProperty.call(firstRecipe.Ingredients, key)) {
                const ingredient = firstRecipe.Ingredients[key];
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsElement.appendChild(li);
            }
        }

        const instructionsElement = document.createElement('p');
        instructionsElement.textContent = firstRecipe.Instructions;

        const ingredientsTitleElement = document.createElement('h2');
        ingredientsTitleElement.textContent = 'Ingredients:';
        const instructionsTitleElement = document.createElement('h2');
        instructionsTitleElement.textContent = 'Instructions:';

        recipeContainer.appendChild(titleElement);
        recipeContainer.appendChild(ingredientsTitleElement);
        recipeContainer.appendChild(ingredientsElement);
        recipeContainer.appendChild(instructionsTitleElement);
        recipeContainer.appendChild(instructionsElement);

    } else {
        recipeContainer.textContent = 'No recipe found!';
    }
}

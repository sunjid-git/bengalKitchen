const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const mealDetailsContent = document.querySelector('.meal-details-content');


searchBtn.addEventListener('click', getMealList);

function getMealList() {
    let searchInputText = document.getElementById('search-input').value.trim();

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
    .then(response => response.json())
    .then(data => {
        let html = "";

        if(data.meals){
            data.meals.forEach(meal=> {
                html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="food">
                    </div>

                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">Get Recipe</a>
                    </div>
                </div>
                `;
            });

        }else{
            html ="Sorry, we didn't find any meal";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    })
}
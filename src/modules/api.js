import { newHumburger, newNavMenu, newMealDetailsContent, 
  newMealDetailsContentHome, newRecipeCloseBtnHome, newmealDetailsContentHomeComment,
newMealLlist, newRecipeCloseBtn, newSearchBtn, newApiUrl, newNavLink,   
 newLikeBtnHome, newScetOnCont, newLoad, newContact,
 newSectOneWrapper, newNavLinkHome, newSectOneItem2, 
 newNavLinkSearch } from './variables.js';

/* || Meals Page */
export const newWindo = window.addEventListener('load', async() => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  .then(response => response.json())
  .then(data => {
      let html ="";
      if(data.meals) {
          data.meals.forEach(meal => {
              html +=`
              <div class="meal__item" data-id="${meal.idMeal}">
                      <div class="meal__img">
                          <img src="${meal.strMealThumb}" alt="IndianFood" class="piza__pic" />
                      </div>
                        <div class="meal__name__home">
                          <h2>${meal.strMeal}</h2>
                          <a href="" class="recipe__btn__home">Get Recipe</a>
                        </div>
                    <div class="like__comment__home show" id="like__comment__home">
                        <div class="liky__home" id="liky__home">
                          <a href="" class="like__btn__home" id="like__btn__home">Like</a>
                          <h4 id="counter__home" class="counter__home">0</h4>
                          <img
                          src="assets/img/heart-line.png"
                          alt="heart_line"
                          class="hear__line__pic"
                           />
                        </div>
                           <div class="comment"> 
                            <a href="" class="comment__btn" id="comment__btn">Comment</a>
                           </div>
                    </div> 
                
               </div>`
              
          });
         
      }
      newSectOneItem2.innerHTML = html;
  }) 
});


 newSectOneItem2.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains('recipe__btn__home')) {
      let mealItem = e.target.parentElement.parentElement;
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
      .then(response => response.json())
      .then(data => mealRecipeModalHome(data.meals));
  }
});  


/* || Create a modal */

 function mealRecipeModalHome(meal) {
  meal = meal[0];
  let html = `
  <h2 class="recipe__title">${meal.strMeal}</h2>
              <p class="recipe__catagory">${meal.strCategory}</p>
              <div class="recipe__instruct">
                <h3>Instraction</h3>
                <p>
                 ${meal.strInstructions}
                </p>
              </div>
              <div class="recipe__meal__img">
                <img src="${meal.strMealThumb}" alt="Piza" />
              </div>
              <div class="recipe__link">
                <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
              </div>`;
              newMealDetailsContentHome.innerHTML = html;
              newMealDetailsContentHome.parentElement.classList.add('showRecipe');
} 

/* || Remove Recipe */
newRecipeCloseBtnHome.addEventListener('click', () => {
  newMealDetailsContentHome.parentElement.classList.remove('showRecipe');
}) 

/* || Search Meals Page */
export const newSearchMeal = newSearchBtn.addEventListener('click', () => {
  let searchInputTxt = document.getElementById('serarch__content').value.trim();
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
  .then(response => response.json())
  .then(data => {
      let html ="";
      if(data.meals) {
          data.meals.forEach(meal => {
              html +=`
              <div class="meal__item" data-id="${meal.idMeal}">
                <div class="meal__img">
                  <img
                    src="${meal.strMealThumb}"
                    alt="IndianFood"
                    class="piza__pic"
                  />
                </div>
                <div class="meal__name">
                  <h2>${meal.strMeal}</h2>
                  <a href="" class="recipe__btn">Get Recipe</a>
                </div>
                <div class="like__comment">
                  <div class="liky" id="liky">
                    <button type="submit" class="like__btn" id="like__btn">
                      <p>Likes</p><h4 id="counter">0</h4>
                      <img
                        src="assets/img/heart-line.png"
                        alt="heart_line"
                        class="hear__line__pic"
                      />
                    </button>
                  </div>
                  <div class="comment">
                    <button class="comment__btn">
                      Comment
                    </button>
                  </div>
                </div>
              </div>`
              
          });
          newMealLlist.classList.remove('notFound');
      }else{
          html = "Sorry, we didn't find any meal!";
          newMealLlist.classList.add('notFound');
      }
      newMealLlist.innerHTML = html;
  }) 
});

/* || Get the Recipe of the Meal */
newMealLlist.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains('recipe__btn')) {
      let mealItem = e.target.parentElement.parentElement;
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
      .then(response => response.json())
      .then(data => mealRecipeModal(data.meals));
  }
});

/* || Create a modal */

function mealRecipeModal(meal) {
  meal = meal[0];
  let html = `
  <h2 class="recipe__title">${meal.strMeal}</h2>
              <p class="recipe__catagory">${meal.strCategory}</p>
              <div class="recipe__instruct">
                <h3>Instraction</h3>
                <p>
                 ${meal.strInstructions}
                </p>
              </div>
              <div class="recipe__meal__img">
                <img src="${meal.strMealThumb}" alt="Piza" />
              </div>
              <div class="recipe__link">
                <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
              </div>`;
              newMealDetailsContent.innerHTML = html;
              newMealDetailsContent.parentElement.classList.add('showRecipe');
}

/* || Remove Recipe */

newRecipeCloseBtn.addEventListener('click', () => {
  newMealDetailsContent.parentElement.classList.remove('showRecipe');
})

/* || Contact */
export const newContactEl = document.getElementById('sect__one__items__item3');
newContactEl.innerHTML = `
<h1>Contact Information</h1>
      <p>Do you have any Information or do you just want to say "Hello"? <br> You can reach out to us!</p>
      <ul>
        <li>Our e-mail: mrkamin2@gmail.com</li>
        <li>Our phone number: 009259904851</li>
        <li>Our address: Awesome Park, 22803 London, U.K</li>
      </ul>
`;


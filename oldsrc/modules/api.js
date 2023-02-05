import { newHumburger, newNavMenu, newMealDetailsContent, 
  newMealDetailsContentHome, newRecipeCloseBtnHome, 
newMealLlist, newRecipeCloseBtn, newSearchBtn,  newSectOneItem2, 
  } from './variables.js';
  import Meal from './meals.js';
  

 /*  import { ApiLikes } from './getLikes.js'; */

  const totalMeals = document.querySelector('.total__meals');
  const totalMealsSearch =  document.querySelector('.total__meals__search');
  

/* || Meals Page */
export const newWindo = window.addEventListener('load', async () => {
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
                          <h2>${meal.strMeal} <span class="meal__counter"></span></h2>
                          <a href="" class="recipe__btn__home">Get Recipe</a>
                        </div>
                    <div class="like__comment__home show" id="like__comment__home">
                        <div class="liky__home" id="liky__home">
                          <img
                          src="assets/img/heart-line.png"
                          alt="heart_line"
                          class="hear__line__pic"
                          img-id="${meal.idMeal}"
                           />
                           <div class="new__like">
                           <h4 id="counter__home" class="counter__home">0</h4>
                          <p class"like__p">Like</p>
                          </div>
                        </div>
                           <div class="comment"> 
                            <a href="" class="comment__btn" id="comment__btn" comment-id="${meal.idMeal}">Comment</a>
                           </div>
                    </div> 
                
               </div>`
              
          });
         
      }
      newSectOneItem2.innerHTML = html;
      
  }) 
  const mealCounter = document.querySelectorAll('.meal__counter');
  
 
  const mealsCounter = () => {
        if (mealCounter.length < 1) {
      totalMeals.innerHTML = ` (${0})`;
      return 0;
    }
    totalMeals.innerHTML = ` (${mealCounter.length})`;
    return (mealCounter.length);
  };
  
  mealsCounter();


                
  

   /* class Api {
    static URL = 'https://themealdb.com/api';
  
    static async getMeals() {
      const RESPONSE = await fetch(`${Api.URL}/json/v1/1/search.php?s=`);
      const { meals } = await RESPONSE.json();
      return meals;
    }
  
    static async getAllMeals() {
      const arrObj = await this.getMeals();
      // eslint-disable-next-line max-len
      const arrMeals = arrObj.map((meal) => new Meal(meal.idMeal, meal.strMeal, meal.strMealThumb, meal.strInstructions));
      return arrMeals;
    }
  }
                */
                
                const newLikeCounter = document.getElementById('counter__home');
                const  newScoreList = document.getElementById('sect__one__cont__item1__item2');
                const apiEndpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/re1HkEZMNg4HkLPPFhkd/scores/';
                const apiGameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
                
                /* const MEALS = await Api.getAllMeals();
                const LIKES = await likesApi.likesGet();
                const newMeals = MEALS.map((meal) => {
                  const likesArr = LIKES.filter((like) => like.item_id === meal.id);
                  meal.changeLikes = likesArr.length && likesArr[0].likes;
                  return meal;
                }); */
               /*  document.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                      if (e.target.classList.contains('hear__line__pic')) {
                        if(e.target.src.includes('heart-line')) {
                          e.target.src = 'assets/img/heart-fill.png';
                          
                          newMeals.forEach((meal) => {
                            if (meal.id === e.target.id) {
                              const counterLikes = e.target.nextElementSibling; 
                              newLikeCounter.innerHTML = `${meal.likes + 1} likes`;
                            }
                          }); 

                            } else {
                              e.target.src = 'assets/img/heart-line.png';
                            }
                      }
                     }) */
                   
});

/* class likesApi {
  static likeApUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IXJFUIasaU3NTiCbJHbl/likes/';

  static async likesGet() {
    const response = await fetch(likesApi.likeApUrl);
    const data = await response.json();
    return data;
    
  };
 
  static async likesPost(id) {
    const response = await fetch(likesApi.likeApUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  }
} */

/* || Show Rcipe PopUp */
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
                  <h2>${meal.strMeal}</h2><span class="meal__counter__search"></span>
                  <a href="" class="recipe__btn">Get Recipe</a>
                </div>
                <div class="like__comment__home show" id="like__comment__home">
                        <div class="liky__home" id="liky__home">
                          <img
                          src="assets/img/heart-line.png"
                          alt="heart_line"
                          class="hear__line__pic"
                          img-id="${meal.idMeal}"
                           />
                           <div class="new__like">
                           <h4 id="counter__home" class="counter__home">0</h4>
                          <p class"like__p">Like</p>
                          </div>
                        </div>
                           <div class="comment"> 
                            <a href="" class="comment__btn" id="comment__btn" comment-id="${meal.idMeal}">Comment</a>
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

      const mealCounterSearch = document.querySelectorAll('.meal__counter__search');
      
      const mealsCounterSearch = () => {
            if (mealCounterSearch.length < 1) {
          totalMealsSearch.innerHTML = ` (${0})`;
          return 0;
        }
        totalMealsSearch.innerHTML = ` (${mealCounterSearch.length})`;
        return (mealCounterSearch.length);
      };
      
      mealsCounterSearch();
  }) ;
 
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


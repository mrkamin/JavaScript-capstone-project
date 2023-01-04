import { newmealDetailsContentHomeComment, newRecipeCloseBtnHomeComment, newSectOneItem2, } from './variables.js';
import { newWindo } from './api.js';


import { displayFeeback } from './feedback.js';

export const newComment = newSectOneItem2.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('like__btn__home')) {
        let mealItem = e.target.parentElement.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealCommentModalHome(data.meals));
    }
    
  });  
  
  
  /* || Create a modal */
 
  export function mealCommentModalHome(meal) {
    meal = meal[0];
    let html = `
    <div class="liky__home" id="liky__home">
    <a href="" class="like__btn__home" id="like__btn__home">Like</a>
    <h4 id="counter__home" class="counter__home">1</h4>
    <img
    src="assets/img/heart-line.png"
    alt="heart_line"
    class="hear__line__pic"
     />
  </div>
   `;
    
                newmealDetailsContentHomeComment.innerHTML = html;
                newmealDetailsContentHomeComment.parentElement.classList.add('showRecipe');
                   
  } 

  
  
  /* || Remove Recipe */
  newRecipeCloseBtnHomeComment.addEventListener('click', () => {
    newmealDetailsContentHomeComment.parentElement.classList.remove('showRecipe');
  })
  
  
  
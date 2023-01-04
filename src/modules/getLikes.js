import { newmealDetailsContentHomeComment, newRecipeCloseBtnHomeComment, newSectOneItem2, newMealCommentHome } from './variables.js';
import { newWindo } from './api.js';


import { displayFeeback } from './feedback.js';

export const newComment = newSectOneItem2.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('like__btn__home')) {
        let mealItem = e.target.parentElement;
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
   let mealItem = e.target.parentElement;
   console.log(mealItem)
                mealItem.innerHTML = html;
                mealItem.parentElement.classList.add('showRecipe');
                const newCommentBtn = document.getElementById('comment__btn');
                
                
               
                const newCommetBtnHom = document.getElementById('comment__btn');
                const newScoreForm = document.getElementById('sect__one__cont__item2__form');
                const  newScoreList = document.getElementById('sect__one__cont__item1__item2');
                const apiEndpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ccAPKkrvgeQ6AUdU11Jx/scores/';
                const apiGameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
                

                newScoreForm.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const myUserInput = newScoreForm.elements.user;
                    const myScoreInput = newScoreForm.elements.score;
                  
                    const newScore = {
                      user: myUserInput.value,
                      score: myScoreInput.value,
                    };
                    console.log("test")
                    addMyNewScore(newScore);
                    getAllMyGameScores() 
                  
                    myUserInput.value = '';
                    myScoreInput.value = '';
                  });

                  const addMyNewScore = async (myNewScore) => {
                    try {
                      const rest = await fetch(apiEndpoint, {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(myNewScore),
                      });
                      
                      
                      const myData = await rest.json();
                      
                      if (!rest.ok) {
                       
                        return myData;
                      }
                      getAllGameScores();
                      displayFeeback(myData.result);
                      return myData;
                    } catch (error) {
                      return error;
                    }
                  };
                  

                  const showScores = ({ user, score }) => {
                    const myelement = document.createElement('div');
                    myelement.className = 'score__item__par';
                    myelement.innerHTML = `
                    <div class="score__item"><i class="fa-solid fa-user-tie"></i><p class="name">${user}</p><p class="score">${score}</p></div>
                      `;
                  
                    return myelement;
                   
                  };
                  
                   const getAllMyGameScores = async () => {
                    try {
                      const rest = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ccAPKkrvgeQ6AUdU11Jx/scores/`);
                      const myData = await rest.json();
                      console.log(rest)
                      
                  
                      if (!rest.ok) {
                        return myData;
                        
                      }
                    
                  
                      const myScores = myData.result;
                  
                      newScoreList.innerHTML = '';
                      myScores.forEach((element) => {
                        newScoreList.appendChild(showScores(element));
                      });
                      
                      return myScores;
                    } catch (error) {
                      return error;
                    }
                  };
                 
                   
  } 

  
  
  
  
  
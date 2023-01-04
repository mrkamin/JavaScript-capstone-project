import postComments from './comments.js';
import getComments from './getcomments.js';

const ALL_MEALS = document.querySelector('#all-meals');
const RENDER = (meals) => {
  meals.forEach((meal) => {
    const MEAL = document.createElement('div');
    MEAL.className = 'meal';
    ALL_MEALS.appendChild(MEAL);

    const MEAL_IMAGE = document.createElement('img');
    MEAL_IMAGE.className = 'meal-image';
    MEAL_IMAGE.src = meal.image;
    MEAL_IMAGE.alt = meal.name;
    MEAL.appendChild(MEAL_IMAGE);

    const CONTAINER_NAME_LIKES = document.createElement('div');
    CONTAINER_NAME_LIKES.className = 'container-name-likes';
    MEAL.appendChild(CONTAINER_NAME_LIKES);

    const MEAL_NAME = document.createElement('h2');
    MEAL_NAME.className = 'meal-name';
    MEAL_NAME.innerHTML = `${meal.name} <span class="meal-counter"></span>`;
    CONTAINER_NAME_LIKES.appendChild(MEAL_NAME);

    const CONTAINER_LIKES = document.createElement('div');
    CONTAINER_LIKES.className = 'container-likes';
    CONTAINER_NAME_LIKES.appendChild(CONTAINER_LIKES);

    const LIKE_IMG = document.createElement('img');
    LIKE_IMG.className = 'like-icon';
    LIKE_IMG.setAttribute('id', meal.id);
    LIKE_IMG.src = './assets/img/heart-line.png';
    LIKE_IMG.alt = 'like icon';
    CONTAINER_LIKES.appendChild(LIKE_IMG);

    const LIKES = document.createElement('p');
    LIKES.className = 'likes';
    LIKES.innerHTML = `${meal.likes} likes`;
    CONTAINER_LIKES.appendChild(LIKES);

    const COMMENTS = document.createElement('button');
    COMMENTS.className = 'comments';
    COMMENTS.innerHTML = 'Comments';
    COMMENTS.addEventListener('click', () => {
      const parmodal = document.querySelector('.parmodal');
      parmodal.style.display = 'grid';
      parmodal.innerHTML = `
      <div class="parmodal__modal">
        <div class="front"><button id="close" class="close">&times;</button></div>
        <div class="parmodal__modal__details">
          <div class="parmodal__modal__details__detail">
          <div class="parmodal__modal__details__detail__responsive">
            <img src="${meal.image}" alt="" class="responsive parmodal__modal__details__detail__responsive__respo">
            </div>
            <h3>Add comment</h3>
            <form action="">
              <div class="formcontrol">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div class="formcontrol">
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div class="formcontrol">
                <input type="submit" value="comment" />
              </div>
            </form>
          </div>
          <div class="parmodal__modal__details__detail">
            <span>${meal.name}</span>
            <p>
              ${meal.description}
            strInstructions
            </p>
            <h3>comments <span id="numofcom"></span></h3>
            <ul id="ulc">
            </ul>
          </div>
        </div>
      </div>
    `;




       getComments(meal.id).then((d) => {
        const numofcom = document.getElementById('numofcom');
        if (d.length > 0) {
          numofcom.innerHTML = `(${d.length})`;
        } else {
          numofcom.innerHTML = '(0)';
        }
        // console.log(d.length);
        const ulc = document.getElementById('ulc');
        d.forEach((item) => {
          ulc.innerHTML += `
      <li>${
  `${item.username} : ${item.comment} : ${item.creation_date}`
}</li>
      `;
        });
      }); 





       const close = document.querySelector('#close');
      close.addEventListener('click', () => {
        parmodal.style.display = 'none';
      }); 
      const form = document.querySelector('form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (form.name.value === '' || form.textarea.value === '') {
          // eslint-disable-next-line no-alert
          alert('Please enter the data');
        } else {
          const newData = {
            item_id: meal.id,
            username: form.name.value,
            comment: form.textarea.value,
          };
          postComments(newData);
          form.name.value = ' ';
          form.textarea.value = ' ';
        }
      }); 
    });
    MEAL.appendChild(COMMENTS);

    const RESERVATIONS = document.createElement('button');
    RESERVATIONS.className = 'reservations';
    RESERVATIONS.innerHTML = 'Reservations';
    MEAL.appendChild(RESERVATIONS);
  });
};

export default RENDER;
import './index.css';
import { newHumburger, newNavMenu, newMealDetailsContent, 
  newMealDetailsContentHome, newRecipeCloseBtnHome, newmealDetailsContentHomeComment,
newMealLlist, newRecipeCloseBtn, newSearchBtn, newApiUrl, newNavLink, newCommentForm, 
 newLikeBtnHome, newScetOnCont, newLoad, newContact,
 newSectOneWrapper, newNavLinkHome, newSectOneItem2, 
 newNavLinkSearch } from './modules/variables.js';
 import { newWindo, newContactEl, newSearchMeal } from './modules/api.js';
 import { newLikes } from './modules/getLikes.js';
 import { newComment } from './modules/comment.js';
 import { addMyNewScore, getAllMyGameScores } from './modules/addcomments.js';
 import Render from './modules/render.js';

/* ======================================================================== */

 const loader = () => {
  newScetOnCont.classList.add('hide');
  newLoad.classList.remove('hide');
  setTimeout(() => {
    newLoad.classList.add('hide');
    newScetOnCont.classList.remove('hide');
  }, 1000);
};

newNavLinkSearch.addEventListener('click', (e) => {
  e.preventDefault();
  loader();

  if (newSectOneItem2.classList.contains('show')) {
    newSectOneItem2.classList.replace('show', 'hide');
    newNavLinkHome.classList.remove('active');
    newSectOneWrapper.classList.replace('hide', 'show');
    newScetOnCont.style.height = '85vh';
    newScetOnCont.classList.replace('sect__one__cont', 'add__back');
    newNavLinkSearch.classList.add('active');
  } else {
    newContactEl.classList.replace('show', 'hide');
    newContact.classList.remove('active');
    newSectOneWrapper.classList.replace('hide', 'show');
    newScetOnCont.style.height = '85vh';
    newScetOnCont.classList.replace('contact__back', 'add__back');
    newNavLinkSearch.classList.add('active');
  }
});
/* ======================================================================== */

/* || Add Evnt Listener to Contact Button to Show contact-Info */
newContact.addEventListener('click', (e) => {
  e.preventDefault();
  loader();
  if (newSectOneWrapper.classList.contains('show')) {
    newSectOneWrapper.classList.replace('show', 'hide');
    newNavLinkSearch.classList.remove('active');
    newContactEl.classList.replace('hide', 'show');
    newScetOnCont.style.height = '85vh';
    newScetOnCont.classList.replace('sect__one__cont', 'contact__back');
    newContact.classList.add('active');
  } else {
    newSectOneItem2.classList.replace('show', 'hide');
    newNavLinkHome.classList.remove('active');
    newContactEl.classList.replace('hide', 'show');
    newScetOnCont.style.height = '85vh';
    newScetOnCont.classList.replace('add__back', 'contact__back');
    newContact.classList.add('active');
  }
});
/* ======================================================================== */

/* || Add Event Listener to List Button to Show Library */
newNavLinkHome.addEventListener('click', (e) => {
  e.preventDefault();
  loader();
  if (newSectOneWrapper.classList.contains('show')) {
    newSectOneWrapper.classList.replace('show', 'hide');
    newNavLinkSearch.classList.remove('active');
    newSectOneItem2.classList.replace('hide', 'show');
    newScetOnCont.style.height = '';
    newScetOnCont.classList.replace('add__back', 'sect__one__cont');
    newNavLinkHome.classList.add('active');
  } else {
    newContactEl.classList.replace('show', 'hide');
    newContact.classList.remove('active');
    newSectOneItem2.classList.replace('hide', 'show');
    newScetOnCont.classList.replace('contact__back', 'sect__one__cont');
    newNavLinkHome.classList.add('active');
  }
});


newHumburger.addEventListener('click', () => {
    newHumburger.classList.toggle('active');
    newNavMenu.classList.toggle('active');
   
});









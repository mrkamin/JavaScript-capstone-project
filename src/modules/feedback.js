/* import { newCommentForm } from './variables.js'; */

export const displayFeeback = (massege) => {
  const massegeContent = document.createElement('p');

  if (massege.includes('provide')) {
    massegeContent.className = 'error__massege';
    massegeContent.textContent = 'You have to add both a user name and a scoror';
    newCommentForm.append(massegeContent);
  } else {
    massegeContent.className = 'success__massege';
    massegeContent.textContent = 'a leaderboard added successfully';
    newCommentForm.append(massegeContent);
  }

  setTimeout(() => {
    newCommentForm.removeChild(massegeContent);
  }, 3000);
};

export default displayFeeback;
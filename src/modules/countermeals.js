import { newTotalMeals } from "./variables";
export const mealCounter = () => {
  const newMealCounter = document.querySelectorAll(".meal-counter");

  if (newMealCounter.length < 1) {
    newTotalMeals.innerHTML = ` (${0})`;
    return 0;
  }
  newTotalMeals.innerHTML = ` (${newMealCounter.length})`;
  return newMealCounter.length;
};

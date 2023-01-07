import { mealCounter } from "./meals_counter.js";

describe("mealCounter", () => {
  test("must dosplay  0 if there are no meals", () => {
    document.body.innerHTML = '<div class="total-meals"></div>';
    expect(mealCounter()).toBe(0);
  });

  test("should return the number of meals", () => {
    document.body.innerHTML =
      '<div class="total-meals"></div><div class="meal-counter"></div><div class="meal-counter"></div>';
    expect(mealCounter()).toBe(2);
  });
});

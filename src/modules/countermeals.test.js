import mealsCounter from "./countermeals.js";

describe('mealsCounter', () => {
  test('should return 0 if there are no meals', () => {
    document.body.innerHTML = '<div class=".total__meals"></div>';
    expect(mealsCounter()).toBe(0);
  });

  test('should return the number of meals', () => {
    document.body.innerHTML = '<div class=".total__meals"></div><div class=".meal__conter"></div><div class=".meal__conter"></div>';
    expect(mealsCounter()).toBe(2);
  });
});
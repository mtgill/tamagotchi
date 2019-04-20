import util from '../helpers/util';

const eatObj = {
  name: 'Eat',
  btnOne: 'Add Food',
  btnTwo: 'Subtract Food',
  btnOneVal: 10,
  btnTwoVal: -3,
  btnOneId: 'addButton',
  btnTwoId: 'subtractButton',
  mainDiv: 'eat',
  valDiv: 'food-level',
};

let full = 100;

const getFull = () => full;

const getEatObj = () => eatObj;

const addFood = () => {
  full += 10;
  if (full > 100) {
    full = 100;
  }
  util.printToDom('food-level', full);
  console.error(full);
  return full;
};

const subtractFood = () => {
  full -= 3;
  if (full < 0) {
    full = 0;
  }
  util.printToDom('food-level', full);
  console.error(full);
  return full;
};

const eatButtonEvents = () => {
  document.getElementById('addButton').addEventListener('click', addFood);
  document.getElementById('subtractButton').addEventListener('click', subtractFood);
};

export default {
  getFull, eatButtonEvents, getEatObj, addFood, subtractFood,
};

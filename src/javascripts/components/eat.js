import util from '../helpers/util';

const eatObj = {
  name: 'Eat',
  btnOne: 'Add Food',
  btnTwo: 'Subtract Food',
  full: 100,
  btnOneVal: 10,
  btnTwoVal: -3,
};

const getFull = () => eatObj.full;

const addFood = () => {
  eatObj.full += 10;
  if (eatObj.full > 100) {
    eatObj.full = 100;
  }
  util.printToDom('food-level', eatObj.full);
};

const subtractFood = () => {
  eatObj.full -= 3;
  if (eatObj.full < 0) {
    eatObj.full = 0;
  }
  util.printToDom('food-level', eatObj.full);
};

const eatButtonEvents = () => {
  document.getElementById('addButton').addEventListener('click', addFood);
  document.getElementById('subtractButton').addEventListener('click', subtractFood);
};

export default { getFull, eatButtonEvents };

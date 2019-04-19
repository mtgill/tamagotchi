import util from '../helpers/util';

let full = 100;

const getFull = () => full;

const addFood = () => {
  full += 10;
  if (full > 100) {
    full = 100;
  }
  util.printToDom('food-level', full);
};

const subtractFood = () => {
  full -= 3;
  if (full < 0) {
    full = 0;
  }
  util.printToDom('food-level', full);
};

const eatButtonEvents = () => {
  document.getElementById('addButton').addEventListener('click', addFood);
  document.getElementById('subtractButton').addEventListener('click', subtractFood);
};

export default { getFull, eatButtonEvents };

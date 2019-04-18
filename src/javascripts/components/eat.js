import util from '../helpers/util';


let full = 100;

const addFood = () => {
  full += 10;
  util.printToDom('food-level', full);
};

const subtractFood = () => {
  full -= 3;
  util.printToDom('food-level', full);
};

const eatButtonEvents = () => {
  document.getElementById('addButton').addEventListener('click', addFood);
  document.getElementById('subtractButton').addEventListener('click', subtractFood);
};

const getEatModule = () => {
  let domString = '';
  domString += '<div id="eatSection">';
  domString += '<button id="addButton">Add Food</button>';
  domString += '<button id="subtractButton">Subtract Food</button>';
  domString += `<div id="food-level">Food Level: ${full}</div>`;
  domString += '</div>';
  util.printToDom('eat', domString);
  eatButtonEvents();
};

export default { getEatModule };

import util from '../helpers/util';


let full = 100;

// const eatMath = (e) => {
//   e.preventDefault();
//   const buttonId = e.target.id;
//   if (buttonId === 'addButton') {
//     full += 10;
//     // if (full > 100) {
//     //   full = 100;
//     // }
//   } else if (buttonId === 'subtractButton') {
//     full -= 3;
//     // if (full < 0) {
//     //   full = 0;
//     // }
//   }
// };

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

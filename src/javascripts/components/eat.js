const eatObj = {
  name: 'Eat',
  btnOne: 'Add Food',
  btnTwo: 'Subtract Food',
  value: 100,
  btnOneVal: 10,
  btnTwoVal: -3,
  btnOneId: 'addButton',
  btnTwoId: 'subtractButton',
  mainDiv: 'eat',
  valDiv: 'food-level',
};

let full = 100;

const getFull = () => full;

const setFull = (value) => {
  full = value;
};

const getEatObj = () => eatObj;

export default { getFull, getEatObj, setFull };

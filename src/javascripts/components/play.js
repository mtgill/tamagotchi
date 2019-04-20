const playObj = {
  name: 'Play',
  btnOne: 'Super Fun!',
  btnTwo: 'Sorta Fun?',
  value: 50,
  btnOneVal: 50,
  btnTwoVal: 2,
  btnOneId: 'superFunButton',
  btnTwoId: 'sortaFunButton',
  mainDiv: 'play',
  valDiv: 'fun-level',
};

let fun = 50;

const getFun = () => fun;

const getPlayObj = () => playObj;

const setFun = (value) => {
  fun = value;
};

export default { getFun, getPlayObj, setFun };

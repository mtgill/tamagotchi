import util from '../helpers/util';

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

const getFun = () => playObj.value;

const getPlayObj = () => playObj;


const superFun = () => {
  playObj.value += 50;
  if (playObj.value > 100) {
    playObj.value = 100;
  }
  util.printToDom('fun-level', playObj.value);
};

const sortaFun = () => {
  playObj.value += 2;
  if (playObj.value > 100) {
    playObj.value = 100;
  }
  util.printToDom('fun-level', playObj.value);
};

const playButtonEvents = () => {
  document.getElementById('superFunButton').addEventListener('click', superFun);
  document.getElementById('sortaFunButton').addEventListener('click', sortaFun);
};

export default { playButtonEvents, getFun, getPlayObj };

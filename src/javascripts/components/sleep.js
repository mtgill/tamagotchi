import util from '../helpers/util';

const sleepObj = {
  name: 'Sleep',
  btnOne: 'Nap',
  btnTwo: 'Deep Sleep',
  value: 50,
  btnOneVal: 50,
  btnTwoVal: 60,
  btnOneId: 'napButton',
  btnTwoId: 'deepSleepButton',
  mainDiv: 'sleep',
  valDiv: 'energy-level',
};

const getEnergy = () => sleepObj.value;

const getSleepObj = () => sleepObj;

const nap = () => {
  sleepObj.value += 50;
  if (sleepObj.value > 100) {
    sleepObj.value = 100;
  }
  util.printToDom('energy-level', sleepObj.value);
};

const deepSleep = () => {
  sleepObj.value += 60;
  if (sleepObj.value > 100) {
    sleepObj.value = 100;
  }
  util.printToDom('energy-level', sleepObj.value);
};

const sleepButtonEvents = () => {
  document.getElementById('napButton').addEventListener('click', nap);
  document.getElementById('deepSleepButton').addEventListener('click', deepSleep);
};

export default { sleepButtonEvents, getEnergy, getSleepObj };

import util from '../helpers/util';

let energy = 50;

const getEnergy = () => energy;

const nap = () => {
  energy += 50;
  if (energy > 100) {
    energy = 100;
  }
  util.printToDom('energy-level', energy);
};

const deepSleep = () => {
  energy += 60;
  if (energy > 100) {
    energy = 100;
  }
  util.printToDom('energy-level', energy);
};

const sleepButtonEvents = () => {
  document.getElementById('napButton').addEventListener('click', nap);
  document.getElementById('deepSleepButton').addEventListener('click', deepSleep);
};

export default { sleepButtonEvents, getEnergy };

import util from '../helpers/util';

let energy = 50;

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

const getSleepModule = () => {
  let domString = '';
  domString += '<div id="sleepSection">';
  domString += '<h3>Sleep</h3>';
  domString += '<button id="napButton">Nap</button>';
  domString += '<button id="deepSleepButton">Deep Sleep</button>';
  domString += `<div id="energy-level">Energy Level: ${energy}</div>`;
  domString += '</div>';
  util.printToDom('sleep', domString);
  sleepButtonEvents();
};

export default { getSleepModule };

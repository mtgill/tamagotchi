import sleep from './sleep';
import play from './play';
import fight from './fight';
import eat from './eat';
import util from '../helpers/util';

const progressCalc = () => {
  const progressValue = (sleep.getEnergy() + play.getFun()
  + eat.getFull() + fight.getStrength()) / 4;
  let domString = '';
  domString += '<div id="progressBar"><h2>Progress</h2>';
  domString += `<div id="progress-bar">Progress: ${progressValue}</div>`;
  domString += '</div>';
  util.printToDom('progress', domString);
};

// eat functions
const addFood = () => {
  let full = eat.getFull();
  full += 10;
  if (full > 100) {
    full = 100;
  }
  util.printToDom('food-level', full);
  eat.setFull(full);
  progressCalc();
};

const subtractFood = () => {
  let full = eat.getFull();
  full -= 3;
  if (full < 0) {
    full = 0;
  }
  util.printToDom('food-level', full);
  eat.setFull(full);
  progressCalc();
};

// fight functions
const runAway = () => {
  let strength = fight.getStrength();
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }
  util.printToDom('strength-level', strength);
  fight.setStrength(strength);
  progressCalc();
};

const doTheViolence = () => {
  let strength = fight.getStrength();
  strength -= 10;
  if (strength < 0) {
    strength = 0;
  }
  util.printToDom('strength-level', strength);
  fight.setStrength(strength);
  progressCalc();
};

// sleep functions
const nap = () => {
  let energy = sleep.getEnergy();
  energy += 50;
  if (energy > 100) {
    energy = 100;
  }
  util.printToDom('energy-level', energy);
  sleep.setEnergy(energy);
  progressCalc();
};

const deepSleep = () => {
  let energy = sleep.getEnergy();
  energy += 60;
  if (energy > 100) {
    energy = 100;
  }
  util.printToDom('energy-level', energy);
  sleep.setEnergy(energy);
  progressCalc();
};

// play functions
const superFun = () => {
  let fun = play.getFun();
  fun += 50;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('fun-level', fun);
  play.setFun(fun);
  progressCalc();
};

const sortaFun = () => {
  let fun = play.getFun();
  fun += 2;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('fun-level', fun);
  play.setFun(fun);
  progressCalc();
};

// event listeners
// eat listeners
const eatButtonEvents = () => {
  document.getElementById('addButton').addEventListener('click', addFood);
  document.getElementById('subtractButton').addEventListener('click', subtractFood);
};
// fight listeners
const fightButtonEvents = () => {
  document.getElementById('runButton').addEventListener('click', runAway);
  document.getElementById('violenceButton').addEventListener('click', doTheViolence);
};
// sleep listeners
const sleepButtonEvents = () => {
  document.getElementById('napButton').addEventListener('click', nap);
  document.getElementById('deepSleepButton').addEventListener('click', deepSleep);
};
// play listeners
const playButtonEvents = () => {
  document.getElementById('superFunButton').addEventListener('click', superFun);
  document.getElementById('sortaFunButton').addEventListener('click', sortaFun);
};


export default {
  progressCalc,
  addFood,
  subtractFood,
  eatButtonEvents,
  fightButtonEvents,
  sleepButtonEvents,
  playButtonEvents,
};

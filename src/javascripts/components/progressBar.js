import sleep from './sleep';
import play from './play';
import fight from './fight';
import eat from './eat';
import util from '../helpers/util';
import interaction from './interaction';

const progressCalc = () => {
  let full = eat.getFull();
  if (full > 100) {
    full = 100;
  }
  const progressValue = (sleep.getEnergy() + play.getFun()
  + full + fight.getStrength()) / 4;
  let domString = '';
  domString += `<div id="progressBar"><h2>Progress: ${progressValue.toFixed(0)}</h2></div>`;
  util.printToDom('progress', domString);
};

const randomNumber = () => {
  const num = (Math.random() * 15) + 1;
  return num;
};

// eat functions
const addFood = () => {
  let full = eat.getFull();
  let domString = '';
  if (full >= 100) {
    full = 100;
    domString += `<h3>food-level: ${full.toFixed(0)}</h3>`;
    util.printToDom('food-level', domString);
    eat.setFull(full);
    progressCalc();
  } else {
    full += randomNumber();
    if (full >= 100) {
      full = 100;
    }
    domString += `<h3>food-level: ${full.toFixed(0)}</h3>`;
    util.printToDom('food-level', domString);
    interaction.foodComa();
    eat.setFull(full);
    progressCalc();
  }
};

const subtractFood = () => {
  let full = eat.getFull();
  let domString = '';
  full -= randomNumber();
  if (full < 0) {
    alert('Oh no, you killed it!');
    full = 0;
  }
  domString += `<h3>food-level: ${full.toFixed(0)}</h3>`;
  util.printToDom('food-level', domString);
  eat.setFull(full);
  progressCalc();
  interaction.weakness();
  progressCalc();
};

// fight functions
const runAway = () => {
  let strength = fight.getStrength();
  let domString = '';
  strength += randomNumber();
  if (strength > 100) {
    strength = 100;
  }
  domString += `<h3>strength-level: ${strength.toFixed(0)}</h3>`;
  util.printToDom('strength-level', domString);
  fight.setStrength(strength);
  progressCalc();
};

const doTheViolence = () => {
  let strength = fight.getStrength();
  let domString = '';
  strength -= randomNumber();
  if (strength < 0) {
    alert('Oh no, you killed it!');
    strength = 0;
  }
  domString += `<h3>strength-level: ${strength.toFixed(0)}</h3>`;
  util.printToDom('strength-level', domString);
  fight.setStrength(strength);
  progressCalc();
};

// sleep functions
const nap = () => {
  let energy = sleep.getEnergy();
  let domString = '';
  energy += randomNumber();
  if (energy > 100) {
    energy = 100;
  }
  domString += `<h3>strength-level: ${energy.toFixed(0)}</h3>`;
  util.printToDom('energy-level', domString);
  sleep.setEnergy(energy);
  progressCalc();
};

const deepSleep = () => {
  let energy = sleep.getEnergy();
  let domString = '';
  energy += randomNumber();
  if (energy > 100) {
    energy = 100;
  }
  domString += `<h3>strength-level: ${energy.toFixed(0)}</h3>`;
  util.printToDom('energy-level', domString);
  sleep.setEnergy(energy);
  progressCalc();
};

// play functions
const superFun = () => {
  let fun = play.getFun();
  let domString = '';
  fun += randomNumber();
  if (fun > 100) {
    fun = 100;
  }
  domString += `<h3>strength-level: ${fun.toFixed(0)}</h3>`;
  util.printToDom('fun-level', domString);
  play.setFun(fun);
  progressCalc();
};

const sortaFun = () => {
  let fun = play.getFun();
  let domString = '';
  fun += randomNumber();
  if (fun > 100) {
    fun = 100;
  }
  domString += `<h3>strength-level: ${fun.toFixed(0)}</h3>`;
  util.printToDom('fun-level', domString);
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

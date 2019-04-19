import sleep from './sleep';
import play from './play';
import fight from './fight';
import eat from './eat';
import progress from './progressBar';
import util from '../helpers/util';

const getEatModule = () => {
  const full = eat.getFull();
  let domString = '';
  domString += '<div id="eatSection">';
  domString += '<h3>Eat!</h3>';
  domString += '<button id="addButton">Add Food</button>';
  domString += '<button id="subtractButton">Subtract Food</button>';
  domString += `<div id="food-level">Food Level: ${full}</div>`;
  domString += '</div>';
  util.printToDom('eat', domString);
  eat.eatButtonEvents();
  util.printToDom('progress', progress.getProgressBar());
};

const getPlayModule = () => {
  const fun = play.getFun();
  let domString = '';
  domString += '<div id="playSection">';
  domString += '<h3>Play!</h3>';
  domString += '<button id="superFunButton">Super Fun!</button>';
  domString += '<button id="sortaFunButton">Sorta Fun..?</button>';
  domString += `<div id="fun-level">Fun Level: ${fun}</div>`;
  domString += '</div>';
  util.printToDom('play', domString);
  play.playButtonEvents();
  util.printToDom('progress', progress.getProgressBar());
};

const getSleepModule = () => {
  const energy = sleep.getEnergy();
  let domString = '';
  domString += '<div id="sleepSection">';
  domString += '<h3>Sleep</h3>';
  domString += '<button id="napButton">Nap</button>';
  domString += '<button id="deepSleepButton">Deep Sleep</button>';
  domString += `<div id="energy-level">Energy Level: ${energy}</div>`;
  domString += '</div>';
  util.printToDom('sleep', domString);
  sleep.sleepButtonEvents();
  util.printToDom('progress', progress.getProgressBar());
};

const getFightModule = () => {
  const strength = fight.getStrength();
  let domString = '';
  domString += '<div id="fightSection">';
  domString += '<h3>FIGHT!!</h3>';
  domString += '<button id="runButton">Run Away!</button>';
  domString += '<button id="violenceButton">Do the Violence!</button>';
  domString += `<div id="strength-level">Strength Level: ${strength}</div>`;
  domString += '</div>';
  util.printToDom('fight', domString);
  fight.fightButtonEvents();
  util.printToDom('progress', progress.progressCalc());
};
export default {
  getEatModule, getPlayModule, getSleepModule, getFightModule,
};

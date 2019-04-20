import sleep from './sleep';
import play from './play';
import fight from './fight';
import eat from './eat';
import progress from './progressBar';
import util from '../helpers/util';

const quadArray = [];

const getQuadArray = () => quadArray;

const quadArrayBuilder = () => {
  quadArray.push(eat.getEatObj());
  quadArray.push(play.getPlayObj());
  quadArray.push(sleep.getSleepObj());
  quadArray.push(fight.getFightObj());
};

const quadBuilder = () => {
  quadArrayBuilder();
  quadArray.forEach((quad) => {
    let domString = '';
    domString += `<div id="${quad.name}Section">`;
    domString += `<h3>${quad.name}!</h3>`;
    domString += `<button id=${quad.btnOneId}>${quad.btnOne}</button>`;
    domString += `<button id=${quad.btnTwoId}>${quad.btnTwo}</button>`;
    domString += `<div id=${quad.valDiv}>${quad.valDiv}: ${quad.value}</div>`;
    domString += '</div>';
    const divId = `${quad.mainDiv}`;
    util.printToDom(divId, domString);
    document.getElementById(quad.btnOneId).addEventListener('click', progress.progressCalc);
    document.getElementById(quad.btnTwoId).addEventListener('click', progress.progressCalc);
  });
  progress.progressCalc();
  progress.eatButtonEvents();
  progress.playButtonEvents();
  progress.sleepButtonEvents();
  progress.fightButtonEvents();
};

export default { quadBuilder, getQuadArray };

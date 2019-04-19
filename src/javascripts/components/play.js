import util from '../helpers/util';

let fun = 50;

const superFun = () => {
  fun += 50;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('fun-level', fun);
};

const sortaFun = () => {
  fun += 2;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('fun-level', fun);
};

const playButtonEvents = () => {
  document.getElementById('superFunButton').addEventListener('click', superFun);
  document.getElementById('sortaFunButton').addEventListener('click', sortaFun);
};

const getPlayModule = () => {
  let domString = '';
  domString += '<div id="playSection">';
  domString += '<h3>Play!</h3>';
  domString += '<button id="superFunButton">Super Fun!</button>';
  domString += '<button id="sortaFunButton">Sorta Fun..?</button>';
  domString += `<div id="fun-level">Fun Level: ${fun}</div>`;
  domString += '</div>';
  util.printToDom('play', domString);
  playButtonEvents();
};

export default { getPlayModule };

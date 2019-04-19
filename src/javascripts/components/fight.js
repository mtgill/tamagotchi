import util from '../helpers/util';

let strength = 100;

const runAway = () => {
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }
  util.printToDom('strength-level', strength);
};

const doTheViolence = () => {
  strength -= 10;
  if (strength < 0) {
    strength = 0;
  }
  util.printToDom('strength-level', strength);
};

const fightButtonEvents = () => {
  document.getElementById('runButton').addEventListener('click', runAway);
  document.getElementById('violenceButton').addEventListener('click', doTheViolence);
};

const getFightModule = () => {
  let domString = '';
  domString += '<div id="fightSection">';
  domString += '<h3>FIGHT!!</h3>';
  domString += '<button id="runButton">Run Away!</button>';
  domString += '<button id="violenceButton">Do the Violence!</button>';
  domString += `<div id="strength-level">Strength Level: ${strength}</div>`;
  domString += '</div>';
  util.printToDom('fight', domString);
  fightButtonEvents();
};

export default { getFightModule };

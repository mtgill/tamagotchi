import util from '../helpers/util';

let strength = 100;

const getStrength = () => strength;

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

export default { fightButtonEvents, getStrength };

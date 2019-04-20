import util from '../helpers/util';


const fightObj = {
  name: 'Fight',
  btnOne: 'Run Away',
  btnTwo: 'Do the Violence!',
  value: 100,
  btnOneVal: 1,
  btnTwoVal: -10,
  btnOneId: 'runButton',
  btnTwoId: 'violenceButton',
  mainDiv: 'fight',
  valDiv: 'strength-level',
};

const getStrength = () => fightObj.value;
const getFightObj = () => fightObj;


const runAway = () => {
  let fightVal = fightObj.value;
  fightVal += 1;
  if (fightVal > 100) {
    fightVal = 100;
  }
  util.printToDom('strength-level', fightVal);
  fightObj.value = fightVal;
  console.error(fightObj.value);
};

const doTheViolence = () => {
  fightObj.value -= 10;
  if (fightObj.value < 0) {
    fightObj.value = 0;
  }
  util.printToDom('strength-level', fightObj.value);
  getStrength();
};

const fightButtonEvents = () => {
  document.getElementById('runButton').addEventListener('click', runAway);
  document.getElementById('violenceButton').addEventListener('click', doTheViolence);
};

export default { fightButtonEvents, getStrength, getFightObj };

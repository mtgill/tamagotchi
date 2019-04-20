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

let strength = 100;

const getStrength = () => strength;
const getFightObj = () => fightObj;

const setStrength = (value) => {
  strength = value;
};

export default { getStrength, getFightObj, setStrength };

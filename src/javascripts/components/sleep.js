const sleepObj = {
  name: 'Sleep',
  btnOne: 'Nap',
  btnTwo: 'Deep Sleep',
  value: 50,
  btnOneVal: 50,
  btnTwoVal: 60,
  btnOneId: 'napButton',
  btnTwoId: 'deepSleepButton',
  mainDiv: 'sleep',
  valDiv: 'energy-level',
};

let energy = 50;

const getEnergy = () => energy;

const getSleepObj = () => sleepObj;

const setEnergy = (value) => {
  energy = value;
};

export default { getEnergy, getSleepObj, setEnergy };

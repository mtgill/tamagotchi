import energy from './sleep';
import fun from './play';
import fight from './fight';
import eat from './eat';
// import util from '../helpers/util';

const progressCalc = () => {
  // let energyValue = energy.getEnergy();
  // let funValue = fun.getFun();
  // const fullValue = eat.getFull();
  // const strengthValue = fight.getStrength();

  const progressValue = ((energy.getEnergy() + fun.getFun()
  + eat.getFull() + fight.getStrength()) / 4);
  return progressValue;
};

const getProgressBar = () => {
  const progress = progressCalc();
  let domString = '';
  domString += '<div id="progressBar"><h2>Progress</h2>';
  domString += `<div id="progress-bar">Progress: ${progress}</div>`;
  domString += '</div>';
  // util.printToDom('progress', domString);
  return domString;
};

export default { getProgressBar, progressCalc };

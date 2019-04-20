import sleep from './sleep';
import play from './play';
import fight from './fight';
import eat from './eat';
import util from '../helpers/util';


const progressCalc = () => {
  const sleepVar = sleep.getEnergy();
  const playVar = play.getFun();
  const eatVar = eat.getFull();
  const fightVar = fight.getStrength();
  const progressValue = (sleepVar + playVar
  + eatVar + fightVar) / 4;
  let domString = '';
  domString += '<div id="progressBar"><h2>Progress</h2>';
  domString += `<div id="progress-bar">Progress: ${progressValue}</div>`;
  domString += '</div>';
  util.printToDom('progress', domString);
};

export default { progressCalc };

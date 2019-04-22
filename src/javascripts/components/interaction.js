import sleep from './sleep';
import fight from './fight';
import eat from './eat';
import util from '../helpers/util';


let i = 0;

const foodComa = () => {
  let domString = '';
  const full = eat.getFull();
  let energy = sleep.getEnergy();
  if (full >= 100 && i < 1) {
    energy -= 5;
    domString += `<h3>energy-level: ${energy.toFixed(0)}</h3>`;
    util.printToDom('energy-level', domString);
    sleep.setEnergy(energy);
    i += 1;
    console.error(i);
  } else if (full === 100) {
    energy -= 5;
    domString += `<h3>energy-level: ${energy.toFixed(0)}</h3>`;
    util.printToDom('energy-level', domString);
    sleep.setEnergy(energy);
  } else if (full <= 100) {
    energy -= 5;
    domString += `<h3>energy-level: ${energy.toFixed(0)}</h3>`;
    util.printToDom('energy-level', domString);
    sleep.setEnergy(energy);
  }
};

const weakness = () => {
  let domString = '';
  let strength = fight.getStrength();
  if (strength === 0) {
    return strength;
    alert('Oh no, you killed it!');
  }
  strength -= 10;
  domString += `<h3>strength-level: ${strength.toFixed(0)}</h3>`;
  util.printToDom('strength-level', domString);
  fight.setStrength(strength);

};

export default { foodComa, weakness };

import sleep from './sleep';
import fight from './fight';
import eat from './eat';
import util from '../helpers/util';


let i = 0;

const foodComa = () => {
  let domString = '';
  const full = eat.getFull();
  let energy = sleep.getEnergy();
  if (full === 100) {
    if (i < 1) {
      if (energy <= 0) {
        energy = 0;
        domString += `<h3>energy-level: ${energy.toFixed(0)}</h3>`;
        util.printToDom('energy-level', domString);
        sleep.setEnergy(energy);
        i = 1;
      } else {
        energy -= 5;
        domString += `<h3>energy-level: ${energy.toFixed(0)}</h3>`;
        util.printToDom('energy-level', domString);
        sleep.setEnergy(energy);
        i = 1;
      }
    } else if (i >= 1) {
      domString += `<h3>energy-level: ${energy.toFixed(0)}</h3>`;
      util.printToDom('energy-level', domString);
    }
  } else if (energy <= 0) {
    energy = 0;
    domString += `<h3>energy-level: ${energy.toFixed(0)}</h3>`;
    util.printToDom('energy-level', domString);
    sleep.setEnergy(energy);
    i = 0;
  } else {
    energy -= 5;
    if (energy < 0) {
      energy = 0;
    }
    domString += `<h3>energy-level: ${energy.toFixed(0)}</h3>`;
    util.printToDom('energy-level', domString);
    sleep.setEnergy(energy);
    i = 0;
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

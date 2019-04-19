import '../styles/main.scss';
import eatModule from './components/eat';
import playModule from './components/play';
import fightModule from './components/fight';
import sleepModule from './components/sleep';

const init = () => {
  eatModule.getEatModule();
  playModule.getPlayModule();
  fightModule.getFightModule();
  sleepModule.getSleepModule();
};

init();

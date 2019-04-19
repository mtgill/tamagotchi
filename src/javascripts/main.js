import '../styles/main.scss';
import eatModule from './components/eat';
import playModule from './components/play';
import fightModule from './components/fight';

const init = () => {
  eatModule.getEatModule();
  playModule.getPlayModule();
  fightModule.getFightModule();
};

init();

import '../styles/main.scss';
import eatModule from './components/eat';
import playModule from './components/play';

const init = () => {
  eatModule.getEatModule();
  playModule.getPlayModule();
};

init();

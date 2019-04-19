import '../styles/main.scss';
import builder from './components/tamagotchiBuilder';
import progress from './components/progressBar';

const init = () => {
  builder.getEatModule();
  builder.getPlayModule();
  builder.getFightModule();
  builder.getSleepModule();
  progress.getProgressBar();
};

init();

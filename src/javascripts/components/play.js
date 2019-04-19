import util from '../helpers/util';

let fun = 50;

const getFun = () => fun;


const superFun = () => {
  fun += 50;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('fun-level', fun);
};

const sortaFun = () => {
  fun += 2;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('fun-level', fun);
};

const playButtonEvents = () => {
  document.getElementById('superFunButton').addEventListener('click', superFun);
  document.getElementById('sortaFunButton').addEventListener('click', sortaFun);
};

export default { playButtonEvents, getFun };

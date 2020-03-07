import '../styles/main.scss';
import eat from './components/eat/eat';
import eatData from './helper/data/eatData';

const addToFullScore = () => {
  eatData.setFullScore(10);
  eat.eatBuilder();
};

const subFromFullScore = () => {
  eatData.setFullScore(-3);
  eat.eatBuilder();
};

const init = () => {
  eat.eatBuilder();
  $('#eat').on('click', '#healthy-food', addToFullScore);
  $('#eat').on('click', '#unhealthy-food', subFromFullScore);
};

init();

import '../styles/main.scss';
import eat from './components/eat/eat';
import fight from './components/fight/fight';
import play from './components/play/play';
import eatData from './helper/data/eatData';
import playData from './helper/data/playData';
import fightData from './helper/data/fightData';


const addToFullScore = () => {
  eatData.setFullScore(10);
  eat.eatBuilder();
};

const subFromFullScore = () => {
  eatData.setFullScore(-3);
  eat.eatBuilder();
};

const addFiftyFunScore = () => {
  playData.setFunScore(50);
  play.playBuilder();
};

const addTwoFunScore = () => {
  playData.setFunScore(2);
  play.playBuilder();
};
const addToStrengthScore = () => {
  fightData.setStrengthScore(1);
  fight.fightBuilder();
};

const subFromStrengthScore = () => {
  fightData.setStrengthScore(-10);
  fight.fightBuilder();
};

const init = () => {
  eat.eatBuilder();
  $('#eat').on('click', '#healthy-food', addToFullScore);
  $('#eat').on('click', '#unhealthy-food', subFromFullScore);
  play.playBuilder();
  $('#play').on('click', '#super-fun', addFiftyFunScore);
  $('#play').on('click', '#slightly-fun', addTwoFunScore);
  fight.fightBuilder();
  $('#fight').on('click', '#run-away', addToStrengthScore);
  $('#fight').on('click', '#commit-violence', subFromStrengthScore);
};

init();

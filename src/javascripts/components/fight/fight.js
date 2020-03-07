import strengthData from '../../helper/data/fightData';
import utils from '../../helper/utils';

const fightBuilder = () => {
  const strengthScore = strengthData.getStrengthScore();
  let domString = '';
  domString += '<h3> Fight </h3>';
  domString += `<h5> Fight Score: ${strengthScore} </h5>`;
  domString += '<button id="run-away"> Brave Run Away </button><button id="commit-violence"> Fight </button>';
  utils.printToDom('fight', domString);
};

export default { fightBuilder };

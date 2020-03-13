import eatData from '../../helper/data/eatData';
import utils from '../../helper/utils';

const eatBuilder = () => {
  const fullScore = eatData.getFullScore();
  let domString = '';
  domString += '<h3> Eat <i class="fas fa-utensils"></i> </h3>';
  domString += `<h5> Full Score: ${fullScore} </h5>`;
  domString += '<button id="healthy-food"> Healthy Food </button>     <button id="unhealthy-food"> Unhealthy Food </button>';
  utils.printToDom('eat', domString);
};

export default { eatBuilder };

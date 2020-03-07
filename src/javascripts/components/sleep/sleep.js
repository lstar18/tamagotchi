import energyData from '../../helper/data/sleepData';
import utils from '../../helper/utils';

const sleepBuilder = () => {
  const energyScore = energyData.getEnergyScore();
  let domString = '';
  domString += '<h3> Sleep </h3>';
  domString += `<h5> Energy Score: ${energyScore} </h5>`;
  domString += '<button id="nap-time"> Nap Time </button><button id="deep-slumber"> Deep Sleep </button>';
  utils.printToDom('sleep', domString);
};

export default { sleepBuilder };

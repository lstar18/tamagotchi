import playData from '../../helper/data/playData';
import utils from '../../helper/utils';

const playBuilder = () => {
  const funScore = playData.getFunScore();
  let domString = '';
  domString += '<h3> Play <i class="fas fa-table-tennis"></i> </h3>';
  domString += `<h5> Fun Score: ${funScore} </h5>`;
  domString += '<button id="super-fun"> Super Fun Activity </button>     <button id="slightly-fun"> Slightly-Fun Activity </button>';
  utils.printToDom('play', domString);
};

export default { playBuilder };

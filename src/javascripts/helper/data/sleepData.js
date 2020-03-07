let energy = 50;

const getEnergyScore = () => energy;

const setEnergyScore = (energyScore) => {
  if (energyScore + energy > 100) {
    energy = 100;
  } else if (energyScore + energy < 0) {
    energy = 0;
  } else {
    energy += energyScore;
  }
};

export default { getEnergyScore, setEnergyScore };

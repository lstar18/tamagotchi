let strength = 50;

const getStrengthScore = () => strength;

const setStrengthScore = (strengthScore) => {
  if (strengthScore + strength > 100) {
    strength = 100;
  } else if (strengthScore + strength < 0) {
    strength = 0;
  } else {
    strength += strengthScore;
  }
};

export default { getStrengthScore, setStrengthScore };

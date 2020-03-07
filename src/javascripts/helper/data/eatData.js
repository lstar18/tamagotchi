let full = 100;

const getFullScore = () => full;

const setFullScore = (eatScore) => {
  if (eatScore + full > 100) {
    full = 100;
  } else if (eatScore + full < 0) {
    full = 0;
  } else {
    full += eatScore;
  }
};

export default { getFullScore, setFullScore };

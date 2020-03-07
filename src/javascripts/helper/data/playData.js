let fun = 50;

const getFunScore = () => fun;

const setFunScore = (funScore) => {
  if (funScore + fun > 100) {
    fun = 100;
  } else if (funScore + fun < 0) {
    fun = 0;
  } else {
    fun += funScore;
  }
};

export default { getFunScore, setFunScore };

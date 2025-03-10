import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useLiveExchangeRate(fixedRate) {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() * 0.1 - 0.05).toFixed(4);
      dispatch({
        type: "SET_RATE",
        payload: parseFloat((fixedRate + parseFloat(change)).toFixed(4))
      });
    }, 3000);

    return () => clearInterval(interval); 
  }, [fixedRate]);
}

export default useLiveExchangeRate;

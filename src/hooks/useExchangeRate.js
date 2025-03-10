import { useCallback } from "react";
import { useDispatch } from "react-redux";
import useExchangeCalculator from "./useExchangeCalculator";

function useExchangeRate(rate, fixedRate, amount, customRate, fromCurrency, toCurrency, usedRealRate) {
  const dispatch = useDispatch();
  const { result, calculateChange } = useExchangeCalculator(fromCurrency, toCurrency, rate, customRate, amount, usedRealRate);

  const getExchangeRate = useCallback(() => {
    const rateDifference = Math.abs(rate - fixedRate) / fixedRate * 100;

    if (rateDifference > 2) {
      dispatch({ type: "DISABLE_FIXED_RATE" });
      dispatch({type: "SET_USED_REAL_RATE" , payload : true});
      const res = (rate * amount).toFixed(2);
      calculateChange(res);
    } else {
      dispatch({ type: "ENABLE_FIXED_RATE" });
      if (parseFloat(customRate) !== 0) {
        dispatch({type: "SET_USED_REAL_RATE" , payload : false});
        const res = (customRate * amount).toFixed(2);
        calculateChange(res);
      } else {
        const res = (rate * amount).toFixed(2);
        dispatch({type: "SET_USED_REAL_RATE" , payload : true});
        calculateChange(res);
      }
    }
  }, [rate, fixedRate, amount, customRate, usedRealRate]);

  return { result, getExchangeRate };
}

export default useExchangeRate;

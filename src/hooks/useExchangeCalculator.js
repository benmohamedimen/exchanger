import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

function useExchangeCalculator(fromCurrency, toCurrency, rate, customRate, amount, usedRealRate) {
  const [result, setResult] = useState("");
  const dispatch = useDispatch();

  const calculateChange = useCallback((res) => {
    setResult(`${amount} ${fromCurrency} = ${res} ${toCurrency}`);
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        rateReal: rate,
        rateEntered: customRate || rate,
        initialAmount: amount,
        initialCurrency: fromCurrency,
        convertedAmount: res,
        convertedCurrency: toCurrency,
        isUsedRealRate : usedRealRate
      }
    });
  }, [amount, fromCurrency, toCurrency, rate, customRate]);

  return { result, calculateChange };
}

export default useExchangeCalculator;

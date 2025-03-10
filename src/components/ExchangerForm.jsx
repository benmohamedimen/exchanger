import { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";
import { useDispatch, useSelector } from 'react-redux';
import useExchangeRate from "../hooks/useExchangeRate";
import useLiveExchangeRate from "../hooks/useLiveExchangeRate";
import SwapButton from "./SwapButton";
const ExchangerForm = () => {
    const dispatch = useDispatch();
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [toCurrency, setToCurrency] = useState("USD");
    const { amount, rate , customRate, fixedRate, isFixedRateDisabled, usedRealRate} = useSelector(state => state.exchange);
    const { result, getExchangeRate } = useExchangeRate(rate, fixedRate, amount, customRate, fromCurrency, toCurrency, usedRealRate); 
    useLiveExchangeRate(fixedRate); 
    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        getExchangeRate();
    }
    const handleAmountChange = (e) => {
        const newAmount = e.target.value;
        dispatch({ type: 'SET_AMOUNT', payload: newAmount });
      };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        getExchangeRate();
    }
    const handleForceRate = (e) => {
        dispatch({type: 'SET_CUSTOM_RATE', payload : e.target.value})
    }
    useEffect(() => getExchangeRate, [rate]);
    return (
        <form className="converter-form" onSubmit={handleFormSubmit}>
                        <div className="form-group">
                <label className="form-rate-label">Real  rate : {rate}</label>
                <label className="form-label">Custom rate : </label>
                <input
                    type="number"
                    className={`form-input ${isFixedRateDisabled ? 'disabled-input' : 'enabled-input'}`}
                    value={customRate}
                    onChange={handleForceRate}
                    required
                    disabled={isFixedRateDisabled}
                />
            </div>
            <div className="form-group">
                <label className="form-label">Enter Amount</label>
                <input
                    type="number"
                    className="form-input"
                    value={amount}
                    onChange={handleAmountChange}
                    required
                />
            </div>
            <p className="exchange-rate-result">
                {result}
            </p>
            <div className="form-group form-currency-group">
                <div className="form-section">
                    <label className="form-label">From</label>
                    <CurrencySelect
                        selectedCurrency={fromCurrency}
                        handleCurrency={e => setFromCurrency(e.target.value)}
                    />
                </div>
                <SwapButton onSwap={handleSwapCurrencies}/>
                <div className="form-section">
                    <label className="form-label">To</label>
                    <CurrencySelect
                        selectedCurrency={toCurrency}
                        handleCurrency={e => setToCurrency(e.target.value)}
                    />
                </div>
            </div>
           
            <button type="submit" className={`submit-button`}>Get Exchange Rate</button>
          
        </form>
    )
}
export default ExchangerForm;
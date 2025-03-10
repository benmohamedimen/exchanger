import flagEU from '../assets/images/flag-eu.svg';
import flagUS from '../assets/images/flag-us.svg'
// Array of currency codes
const currencyCodes = [
    "EUR", "USD"
];
const CurrencySelect = ({ selectedCurrency, handleCurrency }) => {
    const currencyImg = selectedCurrency === 'EUR' ? flagEU : flagUS;
    return (
        <div className="currency-select">
            <img src={currencyImg} alt="Flag" />
            <select
                onChange={handleCurrency}
                className="currency-dropdown"
                value={selectedCurrency}
            >
                {currencyCodes.map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    )
}
export default CurrencySelect
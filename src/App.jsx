import ExchangerForm from "./components/ExchangerForm";
import HistoryTable from './components/HistoryTable';
function App() {
  return (
<>
    <div className="currency-converter">
      <h2 className="converter-title">Currency Converter</h2>
      <ExchangerForm />
    </div>
   <HistoryTable />
  </>
  );
}

export default App;

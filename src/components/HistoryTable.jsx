import { useSelector } from 'react-redux';

const HistoryTable = () => {
  const { history } = useSelector(state => state.exchange);
  return (
    <div className="history-table">
      <div className="table-title">Exchange History</div>
      <table>
        <thead>
          <tr>
            <th>Real rate</th>
            <th>Input Rate</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
  {history?.map((entry, index) => (
    <tr key={index} className="bg-white">
      <td className={`border p-2 ${entry.isUsedRealRate ? 'highlight' : ''}`}>
        {entry.rateReal}
      </td>
      <td className={`border p-2 ${!entry.isUsedRealRate ? 'highlight' : ''}`}>
        {entry.rateEntered}
      </td>
      <td className="border p-2">
        {entry.initialAmount} {entry.initialCurrency}
      </td>
      <td className="border p-2">
        {entry.convertedAmount} {entry.convertedCurrency}
      </td>
    </tr>
  ))}
</tbody>


      </table>
      <span className="highlight-message">Used rate for currency conversion is highlighted with green color</span>
    </div>
  );
};

export default HistoryTable;

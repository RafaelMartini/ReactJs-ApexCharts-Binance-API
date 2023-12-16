import { useState, useEffect } from "react";
import { getCandles } from "./DataService";
import Candle from "./Candle";
import Chart from "./Chart";

function App() {
  const [symbol, setSymbol] = useState("BTCUSDT");

  const [interval, setInterval] = useState("1m");

  const [data, setData] = useState([]);

  useEffect(() => {
    getCandles(symbol, interval)
      .then((data) => setData(data))
      .catch((err) => alert(err.response ? err.response.data : err.message));
  }, [symbol, interval]);

  function onSymbolChange(event) {
    setSymbol(event.target.value);
  }

  function onIntervalChange(event) {
    setInterval(event.target.value);
  }

  return (
    <>
      <select onChange={onSymbolChange} value={symbol}>
        <option>BTCUSDT</option>
        <option>ETHUSDT</option>
        <option>ADAUSDT</option>
      </select>
      <select onChange={onIntervalChange} value={interval}>
        <option>1m</option>
        <option>15m</option>
        <option>1h</option>
        <option>1d</option>
      </select>
      <Chart data={data} />
    </>
  );
}

export default App;

import axios from "axios";
import Candle from "./Candle";

export async function getCandles(symbol = "BTCUSDT", interval = "1m") {
  const response = await axios.get(
    `http://localhost:3001/klines?symbol=${symbol.toUpperCase()}&interval=${interval}`
  );
  const candles = response.data.map((k) => {
    return {
      x: new Date(k[0]), // Timestamp da vela
      y: [
        parseFloat(k[1]),
        parseFloat(k[2]),
        parseFloat(k[3]),
        parseFloat(k[4]),
      ], // [Open, High, Low, Close]
    };
  });

  return candles;
}

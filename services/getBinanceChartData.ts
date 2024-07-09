import axios from "axios";

export function getBinanceChartData(symbol: string) {
  return axios.get<GetBinanceChartData>(`https://api.binance.com/api/v3/klines?symbol=${symbol}USDT&interval=1h&limit=24`);

}
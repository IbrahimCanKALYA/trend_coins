import axios from "axios";

export function getCoinGeckoChartData(id: string) {
  return axios.get<GetCoinGeckoChartData>(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
    params: {
      vs_currency: 'usd',
      days: '1', // Fetching data for the last 24 hours
    },
  });

}
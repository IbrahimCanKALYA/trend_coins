import axios from "axios";

export function getTrendingCoins(page: number) {
  return axios.get<GetCoinGeckoTrendingCoins>('https://api.coingecko.com/api/v3/coins/markets', {
    params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        sparkline: false,
        page,
    },
});
}

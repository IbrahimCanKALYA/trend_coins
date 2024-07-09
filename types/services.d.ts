interface GetCoinGeckoTrendingCoins extends Array<CoinData> { }

type Candle = [
    number, // Timestamp (milliseconds)
    string, // Open price
    string, // High price
    string, // Low price
    string, // Close price
    string, // Volume
    number, // End timestamp (milliseconds)
    string, // Quote asset volume
    number, // Number of trades
    string, // Taker buy base asset volume
    string, // Taker buy quote asset volume
    string  // Ignore (possibly a flag or status)
  ];
interface GetBinanceChartData extends Array<Candle> { }

interface GetCoinGeckoChartData {
    prices: [number, number][]; // An array of tuples, each containing a timestamp and a price
}
interface CoinData {
    ath: number;
    ath_change_percentage: number;
    ath_date: string; // ISO 8601 formatted date string
    atl: number;
    atl_change_percentage: number;
    atl_date: string; // ISO 8601 formatted date string
    circulating_supply: number;
    current_price: number;
    fully_diluted_valuation: number;
    high_24h: number;
    id: string;
    image: string;
    last_updated: string; // ISO 8601 formatted date string
    low_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    market_cap_rank: number;
    max_supply: number;
    name: string;
    price_change_24h: number;
    price_change_percentage_24h: number;
    roi: null | number; // Using union type since ROI can be null
    symbol: string;
    total_supply: number;
    total_volume: number;
}
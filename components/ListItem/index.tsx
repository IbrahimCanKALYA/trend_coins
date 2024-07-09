import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {LineChart} from 'react-native-svg-charts';
import { TCText } from '@/components/TCText';
import {getBinanceChartData} from "@/services/getBinanceChartData"
import { getCoinGeckoChartData } from '@/services/getCoinGeckoChartData';

import {styles} from "./styles"
import { Colors } from '@/constants/Colors';


import {PriceHighlighter} from "../PriceHighlighter"


type ListItemProps = {
  coin: CoinData;
  isVisible: boolean;
  index: number;
}

export function ListItem({coin, isVisible, index}: ListItemProps) {
  const [chartData, setChartData] = useState<number[]>([]);

  const [priceInfo, setPriceInfo] = useState<{
    previous_price: number;
    current_price: number;
    price_change_percentage_24h: number;
  }>({ previous_price: 0, current_price: 0, price_change_percentage_24h: 0 })

  let ws: WebSocket;


  const fetchChartDataBinance = async () => {
    try {
      const response = await getBinanceChartData(coin.symbol.toUpperCase())
      const prices = response.data.map(candle => parseFloat(candle[4])); // Extracting closing prices
      setChartData(prices);
    } catch (error) {
      console.log(error)
      // fetchChartDataCoinGecko()
    }
  }

  const fetchChartDataCoinGecko = async () => {
    try {
      const response = await getCoinGeckoChartData(coin.id)
      const prices = response.data.prices.map(price => (price[1])); // Extracting closing prices
      setChartData(prices);
    } catch (error) {
      console.log(error)
    }
  }

  const fetchChartData = async () => {
    fetchChartDataBinance()
  };

  const setWebSocket = () => {
    try {
      ws = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${coin.symbol}usdt@ticker`);
  
      ws.onopen = () => {
        console.log('Connected to WebSocket');
      };
  
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        // Extracting specific fields for demonstration
        const lastPrice = parseFloat(data.data.c); // Last price
        const priceChangePercent = parseFloat(data.data.P); // 24-hour percentage change
  
        setPriceInfo(prevState => ({previous_price: prevState.current_price ,current_price: lastPrice, price_change_percentage_24h: priceChangePercent}))
      };
  
      ws.onerror = (error) => {
        console.log("WebSocket Error:", error);
      };
    } catch (error) {
      console.log(error)
    }
  }

  const closeWebSocket = () => {
    if (ws) ws.close();
    console.log('Disconnected from WebSocket');
  }

  useEffect(() => {
    setPriceInfo({ previous_price: coin.current_price, current_price: coin.current_price, price_change_percentage_24h: coin.price_change_percentage_24h })
    fetchChartData();
  }, []);


  useEffect(() => {
    if (isVisible) {
      setWebSocket()
    } else {
      closeWebSocket()
    }

    return () => {
      closeWebSocket()
    };
  }, [isVisible]);
  if (coin.name === "Bitcoin") console.log(coin)
  return (
    <View style={[styles.container, { borderRadius: index === 0 ? 1 : 8 }]}>
      <View style={styles.metaContainer}>
        <Image
          style={styles.icon}
          source={{ uri: coin.image}}
        />
        <View style={styles.nameContainer}>
          <TCText numberOfLines={1} style={styles.name} color="black100" type="title1">{coin.name}</TCText>
          <TCText color="gray100" type="subHead">{coin.symbol.toUpperCase()}</TCText>
        </View>
      </View>
      <View style={styles.priceInfoContainer}>
        <LineChart
          style={styles.chart}
          data={chartData}
          svg={{stroke:priceInfo.price_change_percentage_24h >= 0 ? Colors.green100 : Colors.red100 }}
          contentInset={{top: 20, bottom: 20}}
        />
        <View style={styles.priceContainer}>
          <PriceHighlighter style={styles.price} previousPrice={priceInfo.previous_price} price={priceInfo.current_price} />
          <TCText
            type="footNote"
            color={priceInfo.price_change_percentage_24h >= 0.0 ? "green100": "red100"}
            style={styles.priceChange}
          >
            {coin.price_change_percentage_24h?.toFixed(2)}%
          </TCText>
        </View>
      </View>
    </View>
  );
};


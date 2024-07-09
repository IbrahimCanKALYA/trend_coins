import { Colors } from '@/constants/Colors';
import React, { useEffect, useRef } from 'react';
import { Animated, TextStyle } from 'react-native';

import {styles} from "./styles";

type PriceHighlighterProps = {
    previousPrice: number;
    price: number;
    style: TextStyle
}

export function PriceHighlighter ({ price, previousPrice, style }: PriceHighlighterProps) {
  const colorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const priceChange = price - previousPrice;
    const toValue = priceChange > 0 ? 1 : -1; 

    Animated.timing(colorAnimation, {
      toValue,
      duration: 1000,
      useNativeDriver: false,
    }).start();

  
    const timeoutId = setTimeout(() => {
      colorAnimation.setValue(0);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [price, previousPrice]);


  const textColor = colorAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [Colors.red100, Colors.black200, Colors.green100],
  });

  return (
    <Animated.Text style={[styles.text, { color: textColor }, style]}>${price.toFixed(2)}</Animated.Text>
  );
};


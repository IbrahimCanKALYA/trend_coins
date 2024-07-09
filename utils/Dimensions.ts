import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export function getAdjustedWidth(percentage: number): number {
    return screenWidth * (percentage / 100);
  }
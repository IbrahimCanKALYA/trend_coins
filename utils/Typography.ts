import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export function getAdjustedFontSize(size: number) {
  return ((size * windowWidth *  Math.abs(1.8 - 0.002 * windowWidth)) / 400);
}

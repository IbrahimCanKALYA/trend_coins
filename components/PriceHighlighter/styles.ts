import {StyleSheet } from 'react-native';

import {getAdjustedFontSize} from "@/utils/Typography"


export const styles = StyleSheet.create({
  text: {
    fontSize: getAdjustedFontSize(14),
    lineHeight: getAdjustedFontSize(16.94),
    fontWeight: "600"
  },
});
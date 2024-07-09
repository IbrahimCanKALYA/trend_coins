import {StyleSheet } from 'react-native';

import {getAdjustedFontSize} from "@/utils/Typography"


export const styles = StyleSheet.create({
  default: {
    fontSize: getAdjustedFontSize(20),
    lineHeight: getAdjustedFontSize(20),
  },
  largeTitle: {
    fontSize: getAdjustedFontSize(20),
    lineHeight: getAdjustedFontSize(20),
    fontWeight: "700"
  },
  title1: {
    fontSize: getAdjustedFontSize(14),
    lineHeight: getAdjustedFontSize(16.94),
    fontWeight: "600"
  },
  subHead: {
    fontSize: getAdjustedFontSize(12),
    lineHeight: getAdjustedFontSize(14.52),
    fontWeight: "600"
  },
  footNote: {
    fontSize: getAdjustedFontSize(10),
    lineHeight: getAdjustedFontSize(12.1),
    fontWeight: "500"
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  });
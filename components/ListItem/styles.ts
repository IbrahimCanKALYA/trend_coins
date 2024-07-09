import {StyleSheet} from 'react-native';
import {Colors} from "@/constants/Colors";
import {getAdjustedWidth} from "@/utils/Dimensions";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-between",
      padding: 16,
      paddingRight: 14,
      backgroundColor: Colors.white,
      marginBottom: 8,
      marginHorizontal: 16,
      // shadow styles..
      shadowColor: "rgba(0, 0, 0, 0.08)",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 4 // Only for Android, to add depth
    },
    metaContainer: {
      flexDirection: "row",
      alignItems: "center"
    },
    icon: {
      width: 40,
      height: 40,
      marginRight: 12
    },
    nameContainer: {
      height: 38,
      marginTop: 2,
      justifyContent: "space-between"
    },
    name: {
      maxWidth: getAdjustedWidth(28),
    },
    priceInfoContainer: {
      flexDirection: "row",
      alignItems: "center"
    },
    chart: {
      width: 50, 
      height: 25,
    },
    priceContainer: {
      width: getAdjustedWidth(22)
    },
    price: {
      textAlign: "right"
    },
    priceChange: {
      marginTop: 6,
      textAlign: "right"
    },
    positive: {
      color: 'green',
    },
    negative: {
      color: 'red',
    },
    chartContainer: {
      width: 100,
      height: 50,
    },
  });
  
# Project Overview
This project uses the CoinGecko API to fetch trending coins. For real-time coin price updates and 24-hour chart data, it utilizes the Binance API WebSocket.

## Notes:
- The CoinGecko API provides limited access for free usage, which may occasionally cause the application to hit rate limits.
- Since real-time price change and chart data are retrieved using the Binance API, not all coins listed on CoinGecko may have corresponding data available from the Binance API.

## Setup Development

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

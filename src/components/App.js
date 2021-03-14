import React, { useEffect, useState } from 'react'
import { CurrencyContext } from '../contexts/currencyContext';
import Header from '../layouts/Header';
import axios from './../axios-instance';
import Body from './../layouts/Body';
import Footer from './../layouts/Footer';

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCryptocurrencies();
  }, []);


  // methods
  const getCryptocurrencies = async () => {
    const filterCoins = "BTC,ETH,ADA";
    const intervalTime = "1d,30d";
    const convertValue = "USDT";
    const perpageCount = 15;
    const coinUrl = `/currencies/ticker?key=${process.env.REACT_APP_API_KEY}&interval=${intervalTime}&convert=${convertValue}&per-page=${perpageCount}&page=1`;
    const result = await axios.get(coinUrl);

    console.log([...result.data]);

    setCoins([...result.data])
  }

  return (
    <>
      <CurrencyContext.Provider value={{
        coins
      }}>
        <Header />
        <Body />
        {/* <Footer /> */}
      </CurrencyContext.Provider >

    </>
  )
}

export default App

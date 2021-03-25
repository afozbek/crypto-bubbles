import React, { useContext, useEffect } from 'react'
import { Table, ProgressBar } from 'react-bootstrap'
import { CurrencyContext } from '../../contexts/currencyContext'
import Coin from '../Coin/Coin';
import { currencyFormat } from "../../utils"

const CurrencyTable = () => {

  const { coins } = useContext(CurrencyContext);


  console.log("COINS: ", coins)

  const coinList = coins.map(coin => {
    return (
      <tr className="coin-row" key={coin.id}>
        <td>{coin.rank}</td>
        <td className="name">
          <Coin coin={coin} />
        </td>
        <td>{currencyFormat(Number(coin.price))}</td>
        {/* <td>
          {currencyFormat(parseInt(coin['1d'].price_change) / coin.price) + "%"}
        </td> */}
        <td>{currencyFormat(parseInt(coin.market_cap), 0)}</td>
        <td>{currencyFormat(parseInt(coin['1d'].volume), 0)}</td>
        <td>
          <div className="circulating-supply">
            {currencyFormat(parseInt(coin.circulating_supply), 0) + ' ' + coin.symbol}
          </div>
          <ProgressBar now={(coin.circulating_supply / coin.max_supply) * 100} />
        </td>
      </tr>
    )
  })

  return (
    <Table id="CoinTable" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          {/* <th>24h %</th> */}
          <th>Market Cap</th>
          <th>Volume (24h)</th>
          <th>Circulating Supply</th>
        </tr>
      </thead>
      <tbody>
        {coinList}
      </tbody>
    </Table>
  )
}

export default CurrencyTable

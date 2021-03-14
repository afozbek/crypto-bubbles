import React, { useContext, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { CurrencyContext } from '../../contexts/currencyContext'
import Coin from '../Coin/Coin';

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
        <td>{coin.price}</td>
        <td>{coin['1d'].volume}</td>
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
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {coinList}
      </tbody>
    </Table>
  )
}

export default CurrencyTable

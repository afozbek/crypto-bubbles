import React from 'react'

const Coin = ({ coin }) => {
  return (
    <div className="coin">
      <img className="logo" src={coin.logo_url} alt={coin.name + " LOGO"} />
      <div className="desc">
        <div className="name">
          {coin.name}
        </div>
        <div className="symbol">
          {coin.symbol}
        </div>
      </div>
    </div>
  )
}

export default Coin

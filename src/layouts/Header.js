import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import Web3 from 'web3'

const Header = () => {

  const payEthereum = async () => {
    const web3 = new Web3(window.ethereum);
    // With web3
    const result = await web3.eth.getAccounts()
    // Metamask Way
    // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log(result)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Crypto Info</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Button variant="secondary" onClick={payEthereum}>
        Pay Ethereum <img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg" alt="Ethereum" width={20} height={20} />
      </Button>
    </Navbar>
  )
}

export default Header

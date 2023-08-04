'use client'
import React from 'react'

export default function page() {

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect()
      console.log(response.publicKey.toString())
    }
  } 
  return (
    <div style={{fontSize: '2rem',color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '20%'}}>
      Connect Wallet
      <button  style={{marginTop: '2rem', padding: '0.2rem'}} onClick={connectWallet}>connect</button>
    </div>
  )
}

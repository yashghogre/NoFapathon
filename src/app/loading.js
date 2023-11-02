import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black', gap: '2vh'}}>
        <Image src={'/loader.gif'} width={500} height={500} alt='loader' />
        <h1 style={{color: 'red'}}>Loading...</h1>
    </div>
  )
}

export default loading
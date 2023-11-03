import Image from 'next/image'
import React from 'react'

const Dbloader = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2vh'}}>
        <Image src={'/loader.gif'} height={500} width={500} alt='loader' />
        <h1 style={{color: 'red'}}>Loading...</h1>
    </div>
  )
}

export default Dbloader
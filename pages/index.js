import React from 'react'
import Header from './Header'
import Head from 'next/head'


const index = () => {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <h1>Hello Aureatelabs</h1>
    </div>
  )
}

export default index
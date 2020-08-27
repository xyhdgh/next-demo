import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

const MyHead: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" key="title"></meta>
        <title>NextDemo</title>
      </Head>
    </>
  )
}

export default MyHead

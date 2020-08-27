import React from 'react'
import Document, { Html, NextScript } from 'next/document'
import MyHead from '../components/MyHead'
// import type { DocumentContext } from "next/document"
// import { NextPage } from 'next'

const MyDocument/*: NextPage*/ = () => {
  return (
    <Html lang="en">
      <MyHead />
      <body>
        <NextScript></NextScript>
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (context/*: DocumentContext*/) => {
  const initialProps = await Document.getInitialProps(context)
  return {...initialProps}
}

export default MyDocument

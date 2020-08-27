import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths } from 'next'

export default () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      id是{id}
    </div>
  )
}
export const getStaticPath: GetStaticPaths = async () => {
  try {
    const res = await fetch('https://www.fastmock.site/mock/52ec42715bd5654dcaa19c846d428b0f/mock_data/api/getData')
    const data = await res.json()
    const paths = data.data.list.map(item => `/post/${item.id}`)
    return {
      paths,
      fallback: false
    }
  } catch (err) {
    console.log(err)
  }
}
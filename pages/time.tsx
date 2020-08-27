import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'

const Loading = dynamic(import('../components/Loading'))

const Time: NextPage = () => {
  const [time, setTime] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const getNowTime = async () => {
    try {
      setIsLoading(true)
      await new Promise((resolve) => {
        setTimeout(() => {
          setIsLoading(false)
          resolve()
        }, 1000)
      })
      const moment = await import('moment')
      setTime(moment.default().format())
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <span>显示现在的时间：
        {isLoading ? <Loading /> : null}
        {time}
      </span>
      <button onClick={getNowTime}>点击获取最新的时间</button>
    </>
  )
}

export default Time
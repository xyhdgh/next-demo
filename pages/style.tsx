import React, { useState } from 'react'
import { NextPage } from 'next'

const Style: NextPage = () => {
  const [blueColor, setBlueColor] = useState("blue")
  const [redColor, setRedColor] = useState("red")
  const handleToggle = () => {
    let currentBlueColor = blueColor === "blue" ? "red" : "blue"
    let currentRedColor = redColor === "red" ? "blue" : "red"
    setBlueColor(currentBlueColor)
    setRedColor(currentRedColor)
  }
  return (
    <div>
      <span className={'blue'}>这个内容蓝色</span>
      <span className={'red'}>这个内容红色</span>
      <button onClick={handleToggle}>toggle</button>
      <style jsx>
        {
          `
            .blue {color: ${blueColor};}
            .red {color: ${redColor};}
          `
        }
      </style>
    </div>
  )
}

export default Style

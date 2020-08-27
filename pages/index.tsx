import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import MyHead from '../components/MyHead'
import style from '../style/index.module.css'


export default () => {
  // nextjs 路由钩子函数
  // 1. routeChangeStart
  Router.events.on('routeChangeStart', (...args) => console.log('routeChangeStart::', ...args)) //跳转路由执行 1

  // 2. routeChangeComplete
  Router.events.on('routeChangeComplete', (...args) => console.log('routeChangeComplete::', ...args)) // 跳转路由执行 3

  // 3. beforeHistoryChange
  Router.events.on('beforeHistoryChange', (...args) => console.log('beforeHistoryChange::', ...args)) // 跳转路由执行 2

  // 4. routerChangeError
  Router.events.on('routerChangeError', (...args) => console.log('routerChangeError::', ...args))

  // 5. hashChangeStart
  Router.events.on('hashChangeStart', (...args) => console.log('hashChangeStart::', ...args))

  //6. hashChangeEnd
  Router.events.on('hashChangeComplete', (...args) => console.log('hashChangeComplete::', ...args))

  return (
    <>
      <MyHead />
      <div className={style.abc}>Welcome to next.js!</div>
      <Link href={"/mine"}>
        <a>
          <span>点我go mine!</span>
          <span>icon</span>
        </a>
      </Link>
      <div onClick={() => Router.push('/mine?fruit=apple')}>传递苹果</div>
      <div onClick={() => Router.push({pathname: '/mine', query: { fruit: 'orange' }})}>传递橙子</div>
    </>
  )
}

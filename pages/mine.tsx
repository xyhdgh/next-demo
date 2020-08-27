import React from 'react'
import MineButton from '../components/MineButton'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticProps, NextPage } from 'next'

interface Props {
  list: Array<{
    username: string,
    password: string,
    age: number,
    sex: string,
    hobbies: Array<string>,
    id: number
  }>
}

const Mine: NextPage<Props> = ({ list }) => {
  const router = useRouter()
  return (
    <div>
      <MineButton />
      <Link href={"/"}>
        <a>
          <span>icon</span>
          <span>点我去首页!</span>
        </a>
      </Link>
      <div>{router.query.fruit}</div>
      {list.map(item => (
        <div key={item.id}>
          <div>{item.username}-{item.password}-{item.age}-{item.sex}</div>
          <ul>
            {item.hobbies.map((val, idx) => (
              <li key={idx}>{val}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () =>  {
  try {
    const data = await fetch('https://www.fastmock.site/mock/52ec42715bd5654dcaa19c846d428b0f/mock_data/api/getData').then(res => res.json())
    return {
      props: {
        list: data.data.list
      }
    }
  } catch (err) {
    console.log(err)
  }
}

export default Mine

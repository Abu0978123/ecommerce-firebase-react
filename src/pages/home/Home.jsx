import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import MyContext from '../../context/data/myContext'

const Home = () => {
  const context = useContext(MyContext)
  const {name, profession} = context;
  console.log(name ,profession)
  return (
    <Layout>
      my name is {name}
      and 
      my profession is {profession}
    </Layout>
  )
}

export default Home
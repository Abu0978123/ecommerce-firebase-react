import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import MyContext from '../../context/data/myContext'

const Home = () => {
  const context = useContext(MyContext)
  return (
    <Layout>
    Home page
    </Layout>
  )
}

export default Home
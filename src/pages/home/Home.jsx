import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import MyContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'

const Home = () => {
  const context = useContext(MyContext)
  return (
    <Layout>
    <HeroSection/>
    </Layout>
  )
}

export default Home
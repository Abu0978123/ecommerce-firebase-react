import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import MyContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'

const Home = () => {
  const context = useContext(MyContext)
  return (
    <Layout>
    <HeroSection/>
    <Filter/>
    </Layout>
  )
}

export default Home
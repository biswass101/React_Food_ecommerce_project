import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import { useLocation } from 'react-router-dom'
import { HamburgerContext } from '../../context/HamburgerDisplay'
const Home = () => {
    const[category, setCategory] = useState("All")
    const {hamDis, setHamDis} = useContext(HamburgerContext)
    const location = useLocation()
    useEffect(() => {
      if(location.pathname !== '/') setHamDis('none')
      else setHamDis('inline')
    }, [])
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home
import React, { useContext, useEffect } from 'react'
import './OrderConfirmed.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { HamburgerContext } from '../../context/HamburgerDisplay'
const OrderConfirmed = () => {
    const goTo = useNavigate()
    const {hamDis, setHamDis} = useContext(HamburgerContext)
    const location = useLocation()
    useEffect(() => {
      if(location.pathname !== '/') setHamDis('none')
      else setHamDis('inline')
    }, [])
  return (
    <div className="order-confirmed-container">
        <h1>Your order has been placed!</h1>
        <button onClick={() => {
            goTo('/')
        }}>Return home</button>
    </div>
  )
}

export default OrderConfirmed
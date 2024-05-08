import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout(){
    return(
        <>
        <Header />
        <Outlet /> 
        <Footer />
        </>
    )
}
// outlet - helps in dynamical changing, here it means home and footer will remain same, elements 
// in between them will get changed
export default Layout
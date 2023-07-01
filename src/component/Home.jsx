import React from 'react'
import Header from './partials/header'
import "./partials/style.css"
import Crazydeals from './partials/Crazydeals'
import Trendspicks from './partials/Trendspicks'
import Shopbycategory from './partials/Shopbycategory'

const Home = () => {
    return (
        <div>
            <Header />
         {/* banner */}
            <div className='mt-3'>
                <img src="https://img.freepik.com/premium-vector/fashion-sale-banner-template_46307-189.jpg?w=1380" className="img-fluid" alt="..." />
            </div>
        {/* crazy deals */}


        <Crazydeals title = "CRAZY DEALS" sub="Splash into Savings"/>
        <Crazydeals title = "MOST LOVED BRANDS"/>
        <Crazydeals title = "TOP BRAND AT BEST PRICE"/>

        <Trendspicks/>

        <Shopbycategory/>
        </div>
    )
}

export default Home

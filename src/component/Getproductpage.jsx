import React from 'react'
import Header from './partials/header'
import "./partials/style.css"
import Oneproductrow from './partials/Oneproductrow'
const Getproductpage = () => {
    return (
        <div>
            <Header />

            <section>
                <div class="container">
                    <Oneproductrow/>
                    <Oneproductrow/>
                    <Oneproductrow/>
                    <Oneproductrow/>
                </div>
            </section>
        </div>
    )
}

export default Getproductpage

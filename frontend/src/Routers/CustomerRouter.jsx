import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customers/Pages/HomePage/HomePage'
import Navbar from '../customers/components/Navigation/Navbar'
import Footer from '../customers/components/Footer/Footer'
import Product from '../customers/components/Products/Product'
import Cart from '../customers/components/Cart/Cart'
import ProductDetails from '../customers/components/ProductDetails/ProductDetails'
import Checkout from '../customers/components/Checkout/Checkout'
import Order from '../customers/components/order/order'
import OrderDetails from '../customers/components/order/OrderDetails'

const CustomerRouter = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/cart' element={<Cart />} />
                <Route path='/:adfas/:adsfa/:asd' element={<Product />} />
                <Route path='/product/:productId' element={<ProductDetails />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/account/order' element={<Order/>}/>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}/>
                
            </Routes>

            <div>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default CustomerRouter
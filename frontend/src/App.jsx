import './App.css'
import Cart from './customers/components/Cart/Cart'
import Checkout from './customers/components/Checkout/Checkout'
import Footer from './customers/components/Footer/Footer'
import Navbar from './customers/components/Navigation/Navbar'
import Order from './customers/components/order/order'
import OrderDetails from './customers/components/order/OrderDetails'
import ProductDetails from './customers/components/ProductDetails/ProductDetails'
import Product from './customers/components/Products/Product'
import HomePage from './customers/Pages/HomePage/HomePage'
import CustomerRouter from './Routers/CustomerRouter'

function App() {

  return (
    <div>
      <CustomerRouter/>
      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </div>
    </div>
  )
}

export default App

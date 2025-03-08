import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Shop from './components/Shop'
import ShoppingCardProvider from './store/shopping-cart-store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ShoppingCardProvider>
      <Header />
      <main>
        <Shop />
      </main>
    </ShoppingCardProvider>
  )
}

export default App

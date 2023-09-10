import { Fragment, useState } from "react";
import Header from './components/Layout/Header.js'
import Meal from './components/Meals/Meals.js'
import Cart from './components/Cart/Cart.js'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClick={hideCartHandler} />}
      <Header onClick={showCartHandler}/>
      <main>
        <Meal />
      </main>
    </Fragment>
  );
}

export default App;

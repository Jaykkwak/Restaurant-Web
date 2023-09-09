import { Fragment } from "react";
import Header from './components/Layout/Header.js'
import Meal from './components/Meals/Meals.js'

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meal />
      </main>
    </Fragment>
  );
}

export default App;

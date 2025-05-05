import './App.css'
import Person from './components/Person'
import Products from './components/Products'

function App() {

  return (
    <>
      <Person name={"rati"} age={20}/>
      <Products product={"Spidey Toy"} price={49.99}/>
    </>
  )
}

export default App
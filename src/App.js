import React, { useEffect, useRef, useState } from "react";
// import PetShop from "./PetShop";
// import Counter from './Counter';

/* Render Props
const Buttons = ({ increment, decrement, count }) => (
  <div>
    <h1>Valor atual: {count}</h1>
    <div>
      <button onClick={increment}>Adicionar 1</button>
    </div>
    <div>
      <button onClick={decrement}>Remover 1</button>
    </div>
  </div>
)

class App extends Component {

  render () {
    return (
      <div>
        <Counter render={
          ({ increment, decrement, count }) => (
            <Buttons 
              increment={increment}
              decrement={decrement}
              count={count}
            />
          )
        }>
        </Counter>
      </div>
    )
  }
}
*/

/* Typechecking with proptypes
function App () {
  const handleClick = () => {
    console.log('Iniciando o banho...')
  }

  return (
    <div>
      <PetShop 
        dogs={2}
        customerName={'Vitor Reis'}
        onClick={handleClick}
        status="Completed"
      />
    </div>
  )
}
*/

// Refs and DOM
function App() {
  const inputRef = useRef();
  const count = useRef(1);
  const [value, setValue] = useState(false)

  const handleClick = () => {
    inputRef.current.focus();
    console.log('inputRef.current', inputRef.current);
  }

  useEffect(() => {
    setTimeout(() => {
      console.log('passou aqui')
      count.current = 300
      setValue(true)
    }, 3000)
  })

  return (
    <>
    <h1>Valor de count: {count.current}</h1>
     Foco: <input ref={inputRef} />
     <br />
     <br />
     <button onClick={handleClick}>Focar</button>
    </>
  )
}

export default App;

import './App.css';
import Blog from './components/Blog';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("")
  const [counter, setCounter] = useState(0)

  function handleClick() {
    setMessage('Soy un mensaje actualizado')
  }

  function handleChange(e) {
    const { value, name } = e.target
    setMessage(value)
  }

  function handleCounter() {
    setCounter((prevCounter) => prevCounter + 1)
  }

  return (
    <div className="App">
      <span>El valor del estado message es: {message}</span>
      <span>El valor del contador es: {counter}</span>
      <button onClick={handleCounter}>+1</button>
      <Blog />
      <button onClick={handleClick}>Click me!</button>
      <label>Mensaje</label>
      <input type="text" name="name" onChange={handleChange} />
    </div>
  );
}

export default App;

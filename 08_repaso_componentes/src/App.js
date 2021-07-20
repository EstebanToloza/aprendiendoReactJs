import './App.css';
import Blog from './components/Blog';

function App() {
  function handleClick() {
    console.log('clickeaste!')
  }

  function handleChange(e) {
    const { value, name } = e.target
    console.log(value, name)
  }

  return (
    <div className="App">
      <Blog />
      <button onClick={handleClick}>Click me!</button>
      <label>nombre</label>
      <input type="text" name="name" onChange={handleChange} />
      <label>apellido</label>
      <input type="text" name="surname" onChange={handleChange} />

    </div>
  );
}

export default App;

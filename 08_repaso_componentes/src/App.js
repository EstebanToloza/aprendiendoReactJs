import './App.css';
import Blog from './components/Blog';

function App() {
  function clickMe(){
    console.log('clickeaste!')
  }
  
  return (
    <div className="App">
      <Blog />
      <button onClick={clickMe}>Click me!</button>
    </div>
  );
}

export default App;

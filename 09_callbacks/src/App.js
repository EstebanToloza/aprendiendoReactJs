import './App.css';
import Child from './components/Child';

function App() {
  function handleCallback(data) {
    console.log(data)
  }

  return (
    <div className="App">
      <Child callback={handleCallback}/>
    </div>
  );
}

export default App;

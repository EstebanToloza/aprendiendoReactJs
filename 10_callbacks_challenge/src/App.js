//App.js
import { useEffect, useState } from "react";
import Card from "./components/Card";
import './App.css';

function App() {
  const [numbers, setNumbers] = useState({num1: false, num2: false})
  const [bigger, setBigger] = useState(false)


  //este useEffect mira si cambia numbers y trata de ejecutar la función que está en el primer parámetro
  useEffect(()=>{
    if(!numbers.num1 || !numbers.num2){
      //si no existe alguno de los dos numeros no cambia bigger
      return
    }
    if(numbers.num1 > numbers.num2){
      setBigger("Número 1 es mayor")
    }else if(numbers.num1 < numbers.num2){
      setBigger("Número 2 es mayor")
    }else{
      setBigger("Son iguales")
    }
  }, [numbers])

  function handleCallback(number, component){
    //spread operator, operador de propagación
    setNumbers({...numbers, [component]: number})
  }

  return (
    <>
      <Card title="num1" sendInfo={handleCallback}/> 
      <Card title="num2" sendInfo={handleCallback}/> 
      {bigger && <p>{bigger}</p>}
    </>
  );
}

export default App;
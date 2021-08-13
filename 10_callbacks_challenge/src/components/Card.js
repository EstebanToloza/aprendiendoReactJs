import { useState } from "react";

function Card({sendInfo, title}){
    const [num, setNum] = useState(false)

   function handleCallback(){   
    const randomNumber = Math.floor(Math.random() * 10) + 1;     
    
     setNum(randomNumber)
     sendInfo(randomNumber, title)
    }

    return(
        <>
          <h3>{title}</h3>
          {num && <p>{num}</p>}
          <button onClick={handleCallback}>Generar numero aleatorio</button>
        </>
    )
}


export default Card;
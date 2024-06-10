

import {useEffect, useState} from 'react'

const Efectos = () => {

    const  [time, setTime] = useState(new Date().toLocaleTimeString());


useEffect(() => {
    const intervalo = setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    },1000);
    console.log('Ejecutando efecto')

    return () => clearInterval(intervalo)


},[]) // ---> estará escuchando ese cambio para ejecutarse



  return (
    <>
    <h1>Hora actual</h1>
    {time}
    </>
  )
}

export default Efectos
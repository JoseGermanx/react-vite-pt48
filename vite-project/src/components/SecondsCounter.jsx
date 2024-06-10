/* eslint-disable react/prop-types */

import './SecondsCounter.css'

const SecondsCounter = ({ seconds }) => {

    return (
      
       <div className="container my-5">
       <div className="row justify-content-center">
           <div className="col-12 col-md-8">
               <div className="counter-container">
                   <div className="counter-digit">
                       <span className="icon">&#128338;</span>
                   </div>
                   <div className="counter-digit">{seconds}</div>
                   {/* <div className="counter-digit">{Math.floor(seconds / 1000) % 10}</div>
                   <div className="counter-digit">{Math.floor(seconds / 100) % 10}</div>
                   <div className="counter-digit">{Math.floor(seconds / 10) % 10}</div>
                   <div className="counter-digit">{Math.floor(seconds / 1) % 10}</div> */}
               </div>
           </div>
       </div>
   </div>
    )
  };

export default SecondsCounter;  


  // ejemplo de contador de segundos
  // cuando segundos vale 1
  // Math.floor(1 / 10000) % 10 = 0
  // Math.floor(1 / 1000) % 10 = 0
  // Math.floor(1 / 100) % 10 = 0
  // Math.floor(1 / 10) % 10 = 0
  // Math.floor(1 / 1) % 10 = 1
  // 0 0 0 0 1

  // cuando segundo vale 10
  // Math.floor(10 / 10000) % 10 = 0
  // Math.floor(10 / 1000) % 10 = 0
  // Math.floor(10 / 100) % 10 = 0
  // Math.floor(10 / 10) % 10 = 1
  // Math.floor(10 / 1) % 10 = 0
  // 0 0 0 1 0
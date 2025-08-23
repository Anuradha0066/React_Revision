import React, { useState } from 'react'

const BMI = () => {
    let [height,SetHeight]=useState("")
    let [weight,SetWeight]=useState("")
    let [category,SetCategory]=useState('')
    let[bmi,setBmi]=useState(null)

    const handleCalculate= () =>{
       
    const calculateBMI= weight*100/(height*height)

    setBmi(calculateBMI)

    if(calculateBMI<18.5){
    SetCategory('Underweight')
    }
    else if(calculateBMI>= 18.5 && calculateBMI<24.9){
        SetCategory('Normal weight')
    }
    else if(calculateBMI >=25 && calculateBMI<29.9){
        SetCategory('over weight')
    }
    else{
        SetCategory('obesity')
    }
    }
  return (
    <div>
        <h2>BMI CALCULATOR</h2>
      <input onChange={(e)=> SetHeight(e.target.value)} placeholder='Enter Height'></input>
       <input onChange={(e)=> SetWeight(e.target.value)} placeholder='Enter weight'></input>
       <button onClick={handleCalculate}>Calculate BMI</button>

      {bmi ? (<div>
        <h3>Your BMI: {bmi}</h3>
        <h3>Category: {category}</h3>
       </div>
      ) :
      <p></p>} 
    </div>
  )
}

export default BMI

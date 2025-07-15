import React, { useState } from 'react'

const Day3 = () => {
    let[input,SetInput]= useState({
        name:"",
        password:""
    })

    const [submitted, setSubmitted] = useState("");
    function fun1(e){
        let {name,value}= e.target
       SetInput({...input,[name]:e.target.value})
      // console.log(input);
        
    }
    function fun2(e){
       setSubmitted(true);
        console.log(input)
        e.preventDefault();
        
    }
    
  return (
    <div>
       <fieldset>
            <form>
                
        <input   name='name' value={input.name} onChange={fun1} type='text'  placeholder='Enter your name'/>
    <br/>
    <br/>
     <input   name='password' value={input.password} onChange={fun1} type='password'  placeholder='Enter your pssword'/>
    <br/>
    <br/>
    <button onClick={fun2} >submit</button>
    </form>
    </fieldset>

  {submitted && (
        <>
        <h2 >Name:{input.name}</h2>
        <h2>Password:{input.password}</h2>
        </>
   )}
    </div>
  )
}

export default Day3

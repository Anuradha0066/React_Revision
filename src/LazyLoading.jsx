import React, { Suspense, useState } from 'react'
const HeavyComponent= React.lazy(()=>import("./HeavyComponent"));

const LazyLoading = () => {
   
    const[show,setShow]=useState(false)
    
  return (
    <div>
      <h1 >Helloo React</h1>
      <button onClick={()=>setShow(true)}>Load Component</button>

      <Suspense fallback={<p>Loading...</p>}>
      {show && <HeavyComponent/>}
      </Suspense>
    </div>
  )
}

export default LazyLoading

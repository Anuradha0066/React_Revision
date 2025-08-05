import React,{useContext} from 'react'
import Context from './Context'

const Child = () => {
    let data = useContext(Context)
    console.log(data);
    
  return (
    <div>
      props: {data}
    </div>
  )
}

export default Child

import React, { createContext, useEffect, useReducer } from 'react'

export const Context=createContext()
const initialData={
    data :[],
    cartData:[]
}
function reducer(state,action){
if(action.type=="FETCH_DATA"){
 return{
    ...state,data:action.payload
 }
}
else if(action.type=="addToCart"){
    console.log(action,"kekeke");
    
    return{
        ...state,
       cartData: [...state.cartData, action.payload]
    }
}
else if(action.type=="del"){
    return{
        ...state,
        cartData:state.cartData.filter((data,key)=>{
            return key!==action.payload
        })
    }
}
else{
    return state
}
}
const ContextP = ({children}) => {
    const[state,dispatch]=useReducer(reducer,initialData)

    useEffect(()=>{
        console.log("hji");
        
        fetch('https://dummyjson.com/recipes').
        then((res)=>{
            return res.json()
        }).then((data)=>{
            dispatch({type:"FETCH_DATA", payload :data.recipes})
        })

       
        
    },[])
//      useEffect(() => {
//     console.log("Cart Data:", state.cartData);
//   }, [state.cartData]);
  return (
    <div>
     

<Context.Provider value={{state,dispatch}}>
    {children}
    </Context.Provider>   
     </div>
  )
}

export default ContextP

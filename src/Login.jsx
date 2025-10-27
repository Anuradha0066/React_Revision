import React from 'react'
import axios from 'axios'
import { useNavigate } from  'react-router-dom'
const Login = () => {
 const [formData, setFormData] = React.useState({
    email: '',
    passWord: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate();
 async function handleSubmit (e) {
    e.preventDefault()
   
    let res= await axios.post("http://localhost:4000/login",formData)
    let loginData=res.data
    let SignUpData=localStorage.getItem("user")
    let realData = JSON.parse(SignUpData)
    console.log(realData);
    
    if(loginData.email==realData.email && loginData.password==realData.password){
      navigate("/home")
    }
    else{
      navigate("/")
    }
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="passWord" value={formData.passWord} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>

<p>
  forget password {" "}
   <span style={{color:"blue" ,cursor:"pointer" }} onClick={() => navigate("/forget")}>
          click here
        </span>
</p>
   </div>
  )
}


export default Login

  
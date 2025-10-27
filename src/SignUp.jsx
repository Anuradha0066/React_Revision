// import React, { useState } from 'react'
// import axios from 'axios'
// const SignUp = () => {
//   let [formData,SetFormData]=useState({
//     name:"",
//     email:"",
//     passWord:""
//   })

//   function handleform(e) {
//     let {name,value}=e.target
//     SetFormData({
//       ...formData,[name]:value
//     })
//   }
   
//   async function handleSubmit(e){
//    e.preventDefault()

//    try {
//       const res = await axios.post("http://localhost:4000/signUp", formData);
//       console.log(res.data);

//       localStorage.setItem("user", JSON.stringify(res.data));

//       alert(res.data.msg || "Registration successful!");
//     } catch (err) {
//       console.error("Error:", err);
//       alert("Something went wrong!");
//     }
   
//   }
//   return (
//     <div>
//     <form onSubmit={handleSubmit}>
//      <input placeholder='name' value={formData.name} onChange={handleform} name='name' type='text'></input>
//      <br/>
//      <input placeholder='email' value={formData.email} onChange={handleform} name='email' type='email'></input>
//      <br/>
//      <input placeholder='password' name='passWord' value={formData.passWord} onChange={handleform}></input>
//      <button type='submit'>submit</button>
//    </form>
//     </div>
//   )
// }

// export default SignUp


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passWord: ""
  });

  const navigate = useNavigate();
  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ FIX: Was written as e.preventdefault()

    try {
      const res = await axios.post("http://localhost:4000/signUp", formData);
      console.log(res.data);

      localStorage.setItem("user", JSON.stringify(res.data));

      alert(res.data.msg || "Registration successful!");
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={formData.name}
          onChange={handleForm}
          name="name"
          type="text"
          required
        /><br /><br />
        <input
          placeholder="Email"
          value={formData.email}
          onChange={handleForm}
          name="email"
          type="email"
          required
        /><br /><br />
        <input
          placeholder="Password"
          name="passWord"
          value={formData.passWord}
          onChange={handleForm}
          type="password"
          required
        /><br /><br />
        <button type="submit">Submit</button>
      </form>

      <p >
        Already have an account?{" "}
        <span  style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/login")}>
          Login here
        </span>
      </p>
    </div>
  );
};

export default SignUp;

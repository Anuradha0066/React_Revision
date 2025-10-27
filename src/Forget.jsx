import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4000/api/forgot-password', { email });
      console.log(res.data);

      alert(res.data.msg || "Reset link sent successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  // const handleResetLinkClick = (token) => {
  //   navigate(`/reset/${token}`);
  // }; 
  
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          name="email"
          type="email"
          required
        /><br /><br />
        <button type="submit">Send Reset Link</button>
      </form>
    {/* <Link to="/reset">
        <button type="button" onClick={() => handleResetLinkClick('example-token')}>
          Reset Now 
        </button>
      </Link> */}
    </div>
  );
};

export default ForgotPassword;

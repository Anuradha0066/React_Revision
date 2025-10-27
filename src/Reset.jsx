import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reset = ({ token }) => {
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4000/api/reset-password', { token, newPassword });
      console.log(res.data);

      alert(res.data.msg || "Password reset successful!");
      navigate('/login');
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="New Password"
          value={newPassword}
          onChange={handlePasswordChange}
          name="newPassword"
          type="password"
          required
        /><br /><br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default Reset;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import styles from './SignupForm.module.css';
import SignupIcon from '../../assets/images/signup.svg';

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConf: '',
    email: '',
    gender: 'Female',
    dateOfBirth: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserResponse = await authService.signup(formData);
      props.setUser(newUserResponse.user);
      navigate('/'); 
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <main className={styles.container}>
      <section>
        <img src={SignupIcon} alt="Ask" />
      </section>
      <section>
      <form onSubmit={handleSubmit}>
      <p>{message}</p>
      <h1>Sign Up</h1>
        <label htmlFor="username-input">Username</label>
        <input
          type="text"
          required
          name="username"
          id="username-input"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          required
          name="email"
          id="email-input"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password-input">Password</label>
        <input
          type="password"
          required
          name="password"
          id="password-input"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="passwordConf-input">Confirm Password</label>
        <input
          type="password"
          required
          name="passwordConf"
          id="passwordConf-input"
          value={formData.passwordConf}
          onChange={handleChange}
        />
        <label htmlFor="gender-input">Gender</label>
        <select
          required
          name="gender"
          id="gender-input"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label htmlFor="dateOfBirth-input">Date of Birth</label>
        <input
          type="date"
          required
          name="dateOfBirth"
          id="dateOfBirth-input"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        <button type="submit">SIGN UP</button>
      </form>
   </section>
      
    </main>
  );
};

export default SignupForm;
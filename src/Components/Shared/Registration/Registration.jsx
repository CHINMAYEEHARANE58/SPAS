/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import styles from "./registration.module.css";
import { Button } from "@mui/material";
const Login = ({action, opposite }) => {

    let navigate = useNavigate()

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img className={styles.logo} src="logo2.svg" alt="" />
        <h2>SPAS</h2>
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <h1>Create your account</h1>
          <p>
            Already have an account ? <span>{opposite}</span>
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <h3>Username</h3>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Your username"
            />
          </div>
          <div className={styles.inputContainer}>
            <h3>Password</h3>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your password"
            />
          </div>
          <div className={styles.buttonDiv}>
          <Button onClick={()=> navigate(`/profquestion`)} className={styles.signupButton} variant="contained" >{action}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

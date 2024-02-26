import styles from "./login.module.css";
import Registration from "../../Components/Shared/Registration/Registration"
const Login = () => {
  return (
    <div className={styles.main}>
        <Registration action={"Login"} opposite={"Signup"}/>
    </div>
  );
};

export default Login;

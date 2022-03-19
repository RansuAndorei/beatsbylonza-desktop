import styles from './Login.module.css';
import {
  Link
} from 'react-router-dom';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSideContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.titleText}>Welcome to</p>
          <p className={styles.titleText}>Beatsby Lonza</p>
        </div>
        <div className={styles.emailContainer}>
          <p className={styles.inpuText}>Email</p>
          <input className={styles.input}/>
        </div>
        <div className={styles.passwordContainer}>
          <p className={styles.inputText}>Password</p>
          <input type="password" className={styles.input}/>
        </div>
        <Link to="/orders" className={styles.btnCont}>
          <div className={styles.buttonContainer}>
              <button className={styles.button}>Login</button>
          </div>
        </Link>
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.iamgeContainer}>
          <img alt="logo" src={require('./images/logo.png')}/>
        </div>
        <div>
          <p className={styles.rights}>2021 - All rights reserved </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

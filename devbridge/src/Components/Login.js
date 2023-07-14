import React, {useState} from 'react';
import styles from './Login.module.css';
import InputControl from './InputControl';
import { Link } from 'react-router-dom';


import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase.js';
import background from "./hello1.png" ;


function Login() {
    const [values, setValues] = useState({
        
        email: "",
        pass: "",
      });
      const [errorMsg, setErrorMsg] = useState(" ");
      const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false); 
      const handleSubmission = () => {
        if ( !values.email || !values.pass) {
          setErrorMsg(" Warning: Fill all fields");
          return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth,values.email,values.pass)
        .then(async (res)=>{
          setSubmitButtonDisabled(false);
          
      
          
          })
          
        .catch((err)=>{
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        
        });
      };
  
      
      
  
  
    return (
      <div className={styles.container} style={{ backgroundImage: `url(${background})` }} >
              <div className={styles.innerBox}>
                  <h1 className={styles.heading}>Login</h1>

                  <InputControl label="Email" 
                  onChange={(event) =>
                      setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                  
                  placeholder="Enter your email address"/>
                  <InputControl label= "Password" 
                  onChange={(event) =>
                      setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                  
                  placeholder="Enter your Password" />
                  <b className={styles.error}>{errorMsg}</b>
                  <div className= {styles.footer}>
                  <button onClick={handleSubmission} disabled={submitButtonDisabled}>LOGIN</button>
                  <p>
                      Don't Have an Account?{" "}
                      <span>
                        <Link to="/signup">Sign Up</Link> 
                      </span>
                  </p>
                  </div>
              </div>
        
      </div>
    );
  
}




export default Login

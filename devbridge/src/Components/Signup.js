
import styles from './Signup.module.css';
import InputControl from './InputControl';
import { Link , useNavigate } from 'react-router-dom';
import React , { useState } from 'react';
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth } from './firebase.js';
import background from "./hello1.png";

function SignUp() {
  
    const navigate= useNavigate();
    const [values, setValues] = useState({
      name: "",
      email: "",
      pass: "",
    });
    const [errorMsg, setErrorMsg] = useState(" ");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false); 
    const handleSubmission = () => {
      if (!values.name || !values.email || !values.pass) {
        setErrorMsg(" Warning: Fill all fields");
        return;
      }
      setErrorMsg("");
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth,values.email,values.pass)
      .then(async(res)=>{
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/")
      })
      .catch((err)=>{
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      
      });
    };

    
    

    return (
      <div className={styles.container} style={{ backgroundImage: `url(${background})` }} >
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Create An Account</h1>
            <InputControl label= "Name" placeholder="Enter your Name" onChange={(event)=>setValues((prev) => ({ ...prev, name: event.target.value }))
          }/>


            <InputControl label="Email" placeholder="Enter your email address" onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }/>
            <InputControl label= "Password" placeholder="Enter your Password" onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }/>
            <div className= {styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
             <button onClick={handleSubmission} disabled={submitButtonDisabled}>SIGN UP</button>
             <p>
                Already Have an Account?{" "}
                <span>
                   <Link to="/login">Login</Link> 
                </span>
             </p>
            </div>
        </div>
        
      </div>
    );

}


export default SignUp;

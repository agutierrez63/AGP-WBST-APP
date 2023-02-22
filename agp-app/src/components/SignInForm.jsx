import React from 'react'
import { useState, useRef, useEffect, useContext } from 'react'
import { loginFields } from "../constants/formFields"

import FormAction from "./FormAction"
import FormFooter from "./FormFooter"
import Input from "./Input"
import AuthContext from '../context/AuthProvider'
import axios from '../api/axios'

const LOGIn_URL = '/auth';

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

const Login = () => {

  const { setAuth } = useContext(AuthContext);
  const useRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])
    
  const [loginState,setLoginState]=useState(fieldsState);
  const handleChange = (e) => { setLoginState({...loginState,[e.target.id]:e.target.value}) }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patchForm(LOGIN_URL, 
        JSON.stringify({user, pwd}),
        {
          headers: { 'Content-Type' : 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status == 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status == 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }

  }

  return (
    <>
      { success ? (
        <h1> You are logged! in!</h1>
      ) : (
        <div className='flex justify-center items-center h-full'>
          <p redf={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <form className="mt-2 space-y-4">
            <div className="space-y-2">
              {
                fields.map(field=>
                  <Input
                    key={field.id}
                    handleChange={handleChange}
                    value={loginState[field.id]}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                    required
                  />
                )
              }
            </div>
            <FormFooter />
            <FormAction handleSubmit={handleSubmit} text="Login"/>
          </form>
        </div>
      )}
      </>
  )
}

export default Login
import React from 'react';
import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import axios from 'axios';

import FormFooter from './FormFooter';
import FormAction from './FormAction';
import Input from "./Input";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

const Login = () => {

  const [loginState,setLoginState]=useState(fieldsState);
  const handleChange = (e) => { setLoginState({...loginState,[e.target.id]:e.target.value}) }
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    loginAccount();
  }

  // Handles Login API request GET
  const loginAccount = (data) => {
    axios.get('http://localhost:3001/user', data).then((response) => {
      console.log("User Logged in! Welcome!");
    });
  }
  
  return (
        <div className='flex justify-center items-center h-full'>
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
  )
}

export default Login
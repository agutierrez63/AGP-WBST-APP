import React from 'react';
import { useState } from 'react';
import { signupFields } from "../constants/formFields";
import axios from 'axios';

import FormAction from "./FormAction";
import Input from "./Input";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

const SignUp = () => {
    
  const [signupState, setSignupState]=useState(fieldsState);

  const handleChange = (e) => setSignupState({...signupState, [e.target.id]:e.target.value});

  const handleSubmit = (e) =>{
    e.preventDefault();
    createAccount()
  }

  // Handle sign up API POST
  const createAccount = (data) =>{
    axios.post('http://localhost:3001/auth', data).then((response) => {
      console.log("User Created!");
    });
  };

  return (
    <div className='flex justify-center items-center h-full'>
      <form className="mt-8 space-y-6">
        <div className="space-y-2">
          {
            fields.map(field =>
              <Input
                key={field.id}
                handleChange={handleChange}
                value={signupState[field.id]}
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
        <FormAction handleSubmit={handleSubmit} text="SignUp"/>
      </form>
    </div>
  )
}

export default SignUp
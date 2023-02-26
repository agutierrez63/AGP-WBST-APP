import React from 'react'
import Header from '../../components/Header'
import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {
  return (
    <>
    <Header 
      heading='Sign up for an account'
      paragraph="Already have an account?"
      linkName='Sign In'
      linkUrl='/signin'/>
      <SignUpForm />
    </>
  )
}

export default SignUp
import React from 'react'
import Header from '../../components/Header'
import SignInForm from '../../components/SignInForm'

const SignIn = () => {
  return (
    <>
    <Header 
      heading='Login to your account'
      paragraph="Don't have an account?"
      linkName='Sign Up'
      linkUrl='/signup'/>
      <SignInForm />
    </>
  )
}

export default SignIn
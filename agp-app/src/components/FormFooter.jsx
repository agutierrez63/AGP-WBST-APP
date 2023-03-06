import React from 'react';

const FormFooter = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-[#d2a993] focus:text-[#e6bdad] border-gray-300 rounded"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
      </div>

      <div className="text-sm">
        <a href="/" className="font-medium text-[#d2a993] hover:text-[#e6bdad]">&nbsp;Forgot your password?</a>
      </div>
    </div>
  )
}

export default FormFooter
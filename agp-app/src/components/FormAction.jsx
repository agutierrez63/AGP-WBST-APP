import React from 'react';

const FormAction = ({
    handleSubmit,
    type='Button',
    action='submit',
    text 
}) => {

  return (
    <>
    {
      type==='Button' ?
      <button
        type={action}
        className="group relative w-full flex justify-center py-2 px-4 border 
        border-transparent text-sm font-medium rounded-md text-black bg-[#d2a993]
        hover:bg-[#e6bdad] focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-[#e6bdad] mt-10"
        onSubmit={handleSubmit}>{text}</button>
      :
      <></>
    }
    </>
  )
}

export default FormAction
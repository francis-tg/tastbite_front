import React from 'react'
import {FiMail} from 'react-icons/fi'
function NewLetters() {
  return (
      <div className='bg-[#FFD7C9] py-14 px-7 rounded'>
          <h1 className='text-4xl font-bold text-center mb-5'>
              Deliciousness to your inbox
          </h1>
          <p className='text-center mb-6'>
              Enjoy weekly hand picked recipes and recommendations
          </p>
          <form method='post' className='mb-3'>
              <div className='relative mb-3'>
                  <span className='absolute left-2 top-3  text-2xl text-gray-400'>
                      <FiMail/>
                  </span>
                  <input type="email" placeholder='Email Address' className='w-full border-none indent-7 rounded bg-white p-3 outline-none' />
              </div>
              <button className='w-full rounded text-white text-xl uppercase font-bold bg-orange-500 p-3'>Join</button>
          </form>
          <p className='text-center text-sm text-gray-700'>
              By joining our newsletter you agree to our <span className='border-b border-orange-500'>
                  Terms and Conditions
              </span>
          </p>
    </div>
  )
}

export default NewLetters
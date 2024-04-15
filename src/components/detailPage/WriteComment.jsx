import React from 'react'
import { Link } from 'react-router-dom'

function WriteComment({showLogin}) {
  return (
      <div>
          <div className='flex justify-between items-center mb-3'>
              <h1 className='text-2xl font-bold'>
               Write a comment
              </h1>
              <div className='flex gap-2 items-center'>
                  <Link to={"#"} onClick={showLogin} className='text-orange-500'>Login</Link>
                   to post a comment
              </div>
              
          </div>
          <form method='post' >
              <div className='relative'>
                  <textarea minLength={50} className='rounded w-full border-none h-96 bg-gray-100 outline-none p-5' placeholder='Write a comment' >
                      @Jelanee Uwaezuoke Synth polaroid bitters chillwave pickled. Vegan disrupt tousled, Portland keffiyeh aesthetic food truck sriracha cornhole single-origin coffee church-key roof party. 🔥|
                  </textarea>
                  <button className='px-8 text-white rounded absolute bottom-8 right-8 py-2 bg-orange-500'>Post comment</button>
              </div>
              
        </form>
    </div>
  )
}

export default WriteComment
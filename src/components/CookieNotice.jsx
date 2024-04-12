import React from 'react'

function CookieNotice() {
  return (
      <div className='fixed bottom-2 left-1 p-8 w-2/3 bg-white rounded border'>
          <h1 className='text-3xl font-bold mb-3'>
              Cookie Notice
          </h1>
          <div className='flex items-center gap-10'>
              <p> 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              </p>
              <button className='p-2 bg-orange-500 w-96 rounded text-white'>Get It</button>
          </div>
    </div>
  )
}

export default CookieNotice
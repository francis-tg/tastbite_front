import React from 'react'

function InboxForm() {
  return (
    <div className='flex items-center justify-center bg-[#FFD7C9] p-12'>
      
       <div className='w-1/3 '>
       <div className="flex flex-col items-center justify-center">
            <h1 className='text-7xl font-bold py-5'>
              Deliciousness to your inbox
            </h1>
            <p className='text-xl text-center'>
            Enjoy weekly hand picked recipes and recommendations
            </p>
            <form action="" method="post" className='mt-5 mb-3'>
                <div className='relative'>
                    <input type="text" className='p-5 w-[600px]  outline-1 outline-white border  border-white rounded-md' />
                    <button className='bg-[#FF642F] absolute right-0 w-28 h-full text-white rounded-r-md'>JOIN</button>
                </div>
            </form>
            <p>
                By joining a newletter you agree to our <span className='border-b text-center border-[#FF642F]'>Terms and Conditions</span>
            </p>
        </div>
       </div>
    </div>
  )
}

export default InboxForm
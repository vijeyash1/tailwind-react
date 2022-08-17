import React from 'react'

function Address() {
  return (
    <div className='flex flex-col p-10 space-y-5 bg-lime-400 text-black rounded-md w-full'>
        <h1 className='text-2xl'>Get In Touch</h1>
        <p className='text-xl'>
            We'd love to hear from you!
        </p>
        <p className='text-l font-light flex flex-row items-center'><i class="ri-mail-send-line mr-4 text-white text-xl w-10 h-10 items-center justify-center flex bg-blue-500"></i>
            Email: vijeyash@gmail.com
        </p>
        <p className='text-l font-light flex flex-row items-center'><i class="ri-map-pin-fill mr-4 text-white text-xl w-10 h-10 items-center justify-center flex bg-blue-500"></i>
            Location: Thanjavur
        </p>
        <p className='text-l font-light flex flex-row items-center'><i class="ri-smartphone-line mr-4 text-white text-xl w-10 h-10 items-center justify-center flex bg-blue-500"></i>
            Mobile: +918489635967
        </p>
        

    </div>
  )
}

export default Address
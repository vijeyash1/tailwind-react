import React from 'react'
import {Link} from 'react-router-dom'

function Layout({children}) {
  const MenuItems=[
    {
      title: 'Home',
      path:"/",
      icon:"ri-home-smile-2-line"
    },
    {
      title: 'About',
      path:"/about",
      icon:"ri-file-info-fill"
    },
    {
      title: 'Contact',
      path:"/contact",
      icon:"ri-contacts-book-2-fill"
    },
    
  ]
  return (
    <div>
        {/* content */}
        <div>{children}</div>
        {/* footer */}
        <div className='fixed z-10 bottom-10 right-0 left-0'>
        <div className='flex flex-row justify-around max-w-md mx-auto bg-lime-500 p-3 px-4 text-black bg-opacity-70 rounded-md font-bold '>
          {MenuItems.map((item,key)=>{
            return(
              <div className='hover:border-b-2 hover:border-black hover:text-blue-700 text-xl mx-2'>
                <i className={`${item.icon} text-black`}></i>
<Link key={key} to={`${item.path}`}>{item.title}</Link>
</div>
          )})}
        </div>

        </div>
    </div>
  )
}

export default Layout
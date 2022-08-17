import React from 'react'
import Layout from '../../components/Layout'
import Address from './Address'
import Contacts from './ContactsForm'
function Contact() {
  return (
    <Layout>
      <div className="flex flex-col mt-15 md:flex-row items-center space-y-5 md:space-y-0 md:space-x-4 justify-around h-3/4 px-12">
      <Address />
        <Contacts />
        
      </div>
      </Layout>
  )
}

export default Contact
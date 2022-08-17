import React from "react";

function ContactsForm() {
  return (
    <div>
      <form className="flex flex-col space-y-2">
        <h1 className="mb-5 text-4xl font-semibold text-blue-700">
          Send a message
        </h1>
        <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0">
          <input
            type="text"
            placeholder="First Name*"
            className="bg-blue-50 px-5 py-3 border border-blue-400 text-gray-500 rounded-md focus:outline-none text-center md:text-left"
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="bg-blue-50 px-5 py-3 border border-blue-400 text-gray-500 rounded-md focus:outline-none text-center md:text-left"
          />
        </div>
        <div className="flex mt-4 flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0">
          <input
            type="text"
            placeholder="Email*"
            className="bg-blue-50 px-5 py-3 border border-blue-400 text-gray-500 rounded-md focus:outline-none text-center md:text-left"
          />
          <input
            type="text"
            placeholder="Phone*"
            className="bg-blue-50 px-5 py-3 border border-blue-400 text-gray-500 rounded-md focus:outline-none text-center md:text-left"
          />

        </div>
        <div className="flex">
        <textarea rows="4" cols="50" placeholder="Message*" className="bg-blue-50 px-5 py-3 border border-blue-400 text-gray-500 rounded-md focus:outline-none text-center md:text-left"></textarea>

        </div>
      </form>
    </div>
  );
}

export default ContactsForm;

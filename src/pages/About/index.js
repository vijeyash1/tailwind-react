import React from 'react'
import Layout from '../../components/Layout'
function About() {
  return (
    <Layout>
<div class="flex border-8 border-blue-400 flex-col items-center bg-lime-100 justify-center rounded-lg max-w-full min-h-screen">  
    
    <div class="flex rounded-full overflow-hidden shadow-lg ">
      <img class="min-w-xs flex items-center justify-center" src="https://portfolio-two-omega-23.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.b8091f36.jpeg&w=640&q=75" alt="Mountain" />
    </div>
    <div>
      <div class="px-6 py-4">
        <div class="font-semibold text-3xl mb-10 text-blue-700">About Me</div>
        <p class="text-gray-700 max-w-xs text-xl leading-8 prose-xl font-semibold">
          
          Am Vijesh a Full Stack Web Developer.
          I am a self-taught developer and I am passionate about web development.
          I have a strong background in web development and have been working on web development for the last 2 years.

        </p>
      </div>
      <div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#technology</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#music</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">@vijeyash@gmail.com</span>

      </div>
      </div>

    </div>
  </div>
      </Layout>
  )
}

export default About
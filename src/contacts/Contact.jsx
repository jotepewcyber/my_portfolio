import React from 'react'

function Contact() {
  return (
   <section id='contact'>
    <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Me</h2>
        {/* # means baackend is not ready,So it represents current page, no action done, current page will reload */}
        <form action="#" className='space-y-8'>
            <div>
                <label htmlFor="email" className='block mb-2 text-xl font-medium text-gray-900'>Your email</label>
                <input type="email" id="email" className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5' placeholder='name@email.com'/>
                </div>

  <div className='sm:col-span-2'>
                <label for="message" className='block mb-2 text-xl font-medium text-gray-900'>Your message</label>
                <textarea id="message" rows="4" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500' placeholder='Your message here...' required></textarea>
                </div>
<button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300" type="submit">Send message</button>
        </form>
        <p className='text-white text-2xl'>email: arunodayvmtiwari1102@gmail.com</p>
           <p className='text-white text-2xl'>medium: https://medium.com/@arunodayvmtiwari1102</p>
            <p className='text-white text-2xl'>Instagram: @arunoday369 </p>
    </div>
   </section>
  )
}

export default Contact

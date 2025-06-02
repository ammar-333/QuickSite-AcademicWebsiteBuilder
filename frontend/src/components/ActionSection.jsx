import React from 'react'
import { useNavigate } from 'react-router-dom'

const ActionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className='text-center'>
            <h2 className="text-3xl font-bold">start your <span className='text-blue-700'>Academic website</span> today</h2>
            <p className='mt-10 text-2xl'>See why thousands of academics, scholars, and scientists use Owlstown to <br /> create their website and their research online.</p>
            <button onClick={() => {navigate('/login')}} className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95 mt-5">
            Build your website
          </button>
        </div>
      </div>
    </section>
  )
}

export default ActionSection

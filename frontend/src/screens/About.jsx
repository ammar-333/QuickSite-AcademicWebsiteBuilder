import React from 'react'

const About = () => {
  return (
      <section className="min-h-screen bg-white py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mt-15">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We're on a mission to help professors build elegant, professional academic websites—without needing to write a single line of code.
        </p>
        <div className="grid gap-10 md:grid-cols-2 text-left">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">Who We Are</h2>
            <p className="text-gray-600">
              We are a team of developers and designers passionate about simplifying academic presence online. We understand that professors need focused, distraction-free websites that showcase their research, publications, courses, and academic achievements.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">What We Offer</h2>
            <p className="text-gray-600">
              Our platform allows professors to quickly create customized academic websites with built-in templates for CVs, publications, project pages, and more. It’s intuitive, fast, and tailored specifically to the needs of academia.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Why It Matters</h2>
          <p className="text-gray-600">
            Academic professionals deserve tools that respect their time and focus. We eliminate technical barriers so that faculty can showcase their work to the world—clearly, beautifully, and efficiently.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Join Us</h2>
          <p className="text-gray-600">
            Whether you're a professor looking to build your site or a university aiming to streamline faculty web presence, we’re here to help. Let’s build something scholarly together.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

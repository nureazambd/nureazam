import React from 'react'

function Achievements() {
  return (
    <div className="container px-5 py-12 mx-auto max-w-7xl">
      <div className="flex flex-col text-left w-full mb-2">
    <h1 className="lg:w-2/3 uppercase leading-relaxed text-[18px] font-semibold text-[#aaa6c3]">achievements</h1>
      <h1 className="sm:text-6xl text-3xl font-black title-font mb-2 text-gray-50">Achievements.</h1>
    </div>

    <div>
        <div>
        <h3 className='text-white text-[24px] font-bold'>Licenses and Certifications</h3>
        
        <ul className='mt-5 list-disc ml-10 space-y-2'>
          <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
          Python (Basic) Certificate, Md. Nur E Azam's HackerRank Certificates <a href="https://www.hackerrank.com/certificates/30ea0a3a764b" target="_blank" rel="noreferrer">[see credential]</a>
          </li>

          <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
          JavaScript Basics University of California, Davis Certificates<a href="https://www.coursera.org/account/accomplishments/verify/WRWLLXAYFJWY" target="_blank" rel="noreferrer">[see credential]</a>
          </li>
      </ul>
        </div>
        </div>

    </div>
  )
}

export default Achievements
import React from 'react'

function Education() {
  return (
    <div className='container px-5 py-12 mx-auto max-w-7xl'>
        {/* <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Education</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div> */}

        <div className="flex flex-col text-left w-full mb-2">
    <h1 className="lg:w-2/3 uppercase leading-relaxed text-[18px] font-semibold text-[#aaa6c3]">Education</h1>
      <h1 className="sm:text-6xl text-6xl font-black title-font mb-2 text-gray-50">Education.</h1>
    </div>

        <div >
        <h3 className='text-white text-[24px] font-bold'>North South University</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          Bashundhara R/A, Dhaka-1229, Bangladesh
        </p>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          Bachelor of Science in Computer Science and Engineering (CSE)
        </p>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          Graduated: December 2020
        </p>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
        
          <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
            North South University (NSU) is the first private university of Bangladesh, established in 1992, from which I had completed my Bachelor's degree in Computer Science and Engineering (CSE).
          </li>
          <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
          The CSE curriculum in NSU consisted of substantial coursework and labs. Several significant undergraduate courses completed by me during the bachelor are as follows,
          </li>

          <ul className='mt-5 list-disc ml-10 space-y-2'>
            <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
            <span className='font-bold'>Elective Courses:</span> CSE445 Machine Learning, CSE440 Artificial Intelligence, CSE413 Verilog HDL: Modeling, Simulation and Synthesis
            </li>

            <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
            <span className='font-bold'>CS Core Courses:</span> CSE225 Data Structures and Algorithms, CSE373 Design and Analysis of Algorithms, CSE311 Database Systems, CSE323 Operating Systems Design, CSE327 Software Engineering
            </li>
            <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
            <span className='font-bold'>Hardware Core Courses:</span> CSE231 Digital Logic Design, CSE332 Computer Organization and Architecture, CSE331 Microprocessor Interfacing and Embedded System
            </li>
            <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
            <span className='font-bold'>Mathematical Courses:</span> MAT125 Introduction to Linear Algebra, MAT361 Probability and Statistics
            </li>

            <li className='text-white-100 text-[18px] pl-1 tracking-wider'>
            <span className='font-extrabold'> Dissertation Topic:</span> <span className='font-semibold'>eal Estate Company Beater Price Prediction Using Machine Learning</span>
            </li>
        </ul>
    
      </ul>
      <br/>

      <h3 className='text-white text-[24px] font-bold'>Rajshahi Govt. City College</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        Rajarahata, Ward No-11, Post Code-6000, Rajshahi, Bangladesh
        </p>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        Higher Secondary Certificate (HSC)
        </p>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        Passing Year:  2014
        </p>

      </div>

        
    </div>
  )
}

export default Education
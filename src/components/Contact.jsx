// import React from 'react'

// function Contact() {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact


import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function Contact() {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        'service_w5ysngw',
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        'template_smjfmds',
        {
          from_name: form.name,
          to_name: "Nur-E-Azam",
          from_email: form.email,
          to_email: "nur.azam.bd@gmail.com",
          message: form.message,
        },
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        '_f8b9DEcSFhjE1Bjz'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="container px-5 py-12 mx-auto max-w-7xl">
      <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        className='flex-[0.75] bg-[#100d25] p-8 rounded-2xl'
      >
        <div className="flex flex-col text-left w-full mb-2">
    <h1 className="lg:w-2/3 uppercase leading-relaxed text-[18px] font-semibold text-[#aaa6c3]">Get in touch</h1>
      <h1 className="sm:text-6xl text-6xl font-black title-font mb-2 text-gray-50">Contact.</h1>
    </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      </div>
    </div>
    </div>
  )
}

export default Contact
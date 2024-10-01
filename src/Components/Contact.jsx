import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  
  const [state, handleSubmit] = useForm("xgvwbgzn");

  if (state.succeeded) {
    return <p className="text-green-500 text-center text-[30px]">Thanks for your message!</p>;
  }

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 font-mono">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-2 rounded text-black outline-none"
            name="name"
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-2 rounded text-black outline-none"
            name="email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-2 rounded outline-none text-black"
            rows="4"
            name="message"
            required
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

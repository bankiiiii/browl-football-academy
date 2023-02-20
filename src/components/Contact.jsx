import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_h0fk3ul",
      "template_bx3mons",
      form.current,
      "lscnFK8mU80o3O1jI"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700 ">Send us a Message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by!</p>

      <div className="grid md:grid-cols-2 ">
        <img
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <form action="" ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 ">
            <input
              className="border m-2 p-2"
              type="text"
              name="name"
              placeholder="First"
            />
            <input
              className="border m-2 p-2"
              type="text"
              name="name"
              placeholder="Last"
            />
            <input
              className="border m-2 p-2"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input className="border m-2 p-2" type="tel" placeholder="Phone" />
            <input
              className="border col-span-2 m-2 p-2"
              name="address"
              type="text"
              placeholder="Address"
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              name="message"
              placeholder="Message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 hover:to-blue-900">Submit</button>
          </div>
        </form>

        {/* <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message{" "}
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Contact;

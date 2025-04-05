'use client';
import React, { useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import ContactUs from "../assets/ContactUs.png"; 
const ContactForm: React.FC = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      const [submitted, setSubmitted] = useState(false);
 const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
     setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
   

    //    await fetch("https://script.google.com/macros/s/AKfycbxCsi5_ZR8H3JyCpE0rT9pfKzU0AdeptxBJowwwL2SAnxu1rDTvjWKfjetkbrjrc0U/exec", {
    //      method: "POST",
    //      body: JSON.stringify(form),
    //      headers: {
    //        "Content-Type": "application/json",
    //      },
    //    });
   
       setSubmitted(true);
       setForm({
         name: "",
         email: "",
         phone: "",
         message: "",
       });
     };
//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();

//     // const templateParams = {
//     //   from_name: formData.name,
//     //   from_email: formData.email,
//     //   message: formData.message,
//     // };

//     // emailjs
//     //   .send(
//     //     "your_service_id", // replace with your EmailJS service ID
//     //     "your_template_id", // replace with your EmailJS template ID
//     //     templateParams,
//     //     "your_user_id" // replace with your EmailJS public user ID
//     //   )
//     //   .then(() => {
//     //     alert("Message sent successfully!");
//     //     setFormData({ name: "", email: "", message: "" });
//     //   })
//     //   .catch((error) => {
//     //     console.error("Failed to send email:", error);
//     //     alert("Something went wrong. Please try again.");
//     //   });
//   };

  return (
    <section className="bg-[#f3f7fa] rounded-3xl p-6 md:p-12" id="contact">
    <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide mt-10">Contact Us</h2>
    
    <div className="grid md:grid-cols-2 gap-12 items-center mt-[-40]">
      <div>
        <img
          src={ContactUs.src}
          alt="Contact Us"
          className="rounded-2xl w-full"
        />
      </div>
  
      <div>
        <form
          action="https://script.google.com/macros/s/AKfycbxnmH9HK6lbzSF5_orBwWumz1sX5dER8VAKXlVswEsHy7c7_sIU6IvqDBMSW0bssLbE/exec"
          method="POST"
          target="_blank"
        //   onSubmit={handleSubmit}
          className="w-full space-y-4 bg-white p-8 rounded-xl shadow-md"
        >
          {submitted && (
            <p className="text-green-600 text-center">
              Thanks! We'll get back to you soon.
            </p>
          )}
  
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 border rounded"
            required
          />
  
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded"
            required
          />
  
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 border rounded"
            required
          />
  
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-3 border rounded"
            rows={4}
            required
          ></textarea>
  
          <button
            type="submit"
            className="w-full bg-[#003865] text-white py-3 rounded hover:bg-[#002349] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
  
  );
};

export default ContactForm;

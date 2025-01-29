import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { toast } from 'react-toastify';
const Contact = () => {

  const contact_info = [
    { logo: MdOutgoingMail, text: "shanawajsaju@gmail.com" },
    { logo: FaWhatsappSquare, text: "01773734512" },
    {
      logo: CiLocationOn,
      text: "Lalbag Kdc road,Rangpur",
    },
  ];
  
  const form = useRef();
  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs
    .sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, form.current, {
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        toast.success("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
        toast.error("Failed to send message!");
      },
    );
  }



  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" ref={form}
          onSubmit={handleSubmit}
          >
            <input type="text" placeholder="Your Name"
             name="name"

            />
            <input type="Email" placeholder="Your Email Address"  name="email"
             />
            <textarea placeholder="Your Message" rows={10}  name="message"
            ></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <contact.logo />
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

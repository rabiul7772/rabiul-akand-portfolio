import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // const socialLinks = [
  //   { name: 'Twitter', icon: '/twitter.svg' },
  //   { name: 'GitHub', icon: '/github.svg' },
  //   { name: 'LinkedIn', icon: '/linkedin.svg' },
  //   { name: 'Medium', icon: '/medium.svg' },
  //   { name: 'Facebook', icon: '/facebook.svg' }
  // ];

  const form = useRef();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_ufvkvl7',
        'template_s1vbh28',
        form.current,
        'J-uJvSpcVWaKKe7HB'
      );
      alert('Message sent successfully!');
      e.target.reset(); // Reset the form
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#15202B]">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-8 max-w-md"
            >
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
                <label htmlFor="name" className="form-label">
                  Name
                </label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="John@doe.com"
                  required
                />
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  className="form-input h-32 resize-none"
                  placeholder="Type your message...."
                  required
                ></textarea>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
              </div>
              <button type="submit" className="send-button">
                Send
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L11 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Contact Information
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:rabiulakand777@gmail.com"
                  className="flex items-center gap-4 hover:text-[#0ea5e9] transition-colors group"
                >
                  <span className="w-12 h-12 bg-[#2a2f35] rounded-full flex items-center justify-center  transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  rabiulakand777@gmail.com
                </a>
                <a
                  href="tel:+8801234567890"
                  className="flex items-center gap-4 hover:text-[#0ea5e9] transition-colors group"
                >
                  <span className="w-12 h-12 bg-[#2a2f35] rounded-full flex items-center justify-center  transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  +8801682087772
                </a>
                <div className="flex items-center gap-4 hover:text-[#0ea5e9] transition-colors group">
                  <span className="w-12 h-12 bg-[#2a2f35] rounded-full flex items-center justify-center  ">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Links</h3>
              <div className="flex gap-4">
                {/* {socialLinks.map(platform => (
                  <a
                    key={platform.name}
                    href="#"
                    className="social-icon"
                    aria-label={platform.name}
                  >
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      className="w-6 h-6"
                    />
                  </a>
                ))} */}

                <a
                  href="https://www.linkedin.com/in/rabiul-akand"
                  target="_blank"
                  className="social-icon"
                >
                  <img
                    src="/linkedin.png"
                    alt="LinkedIn"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://github.com/rabiul7772"
                  target="_blank"
                  className="social-icon"
                >
                  <img src="/github.png" alt="GitHub" className="w-10 h-10" />
                </a>
                <a
                  href="https://wa.me/8801682087772"
                  target="_blank"
                  className="social-icon"
                >
                  <img src="/whatsapp.png" alt="Whatsapp" className="w-8 h-8" />
                </a>
                <a
                  href="mailto:rabiulakand777@gmail.com"
                  target="_blank"
                  className="social-icon"
                >
                  <img src="/email.png" alt="Mail" className="w-11 h-11" />
                </a>
                <a
                  href="https://x.com/rabiul_akand"
                  target="_blank"
                  className="social-icon"
                >
                  <img src="/twitter.png" alt="Twitter" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

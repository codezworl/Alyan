import { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const socialLinks = [
  { label: "GitHub", url: "https://github.com/codezworl", icon: <FaGithub size={20} /> },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/alyan-shahid-a1a81a262", icon: <FaLinkedin size={20} /> },
  { label: "Instagram", url: "https://www.instagram.com/hafizalyan66/", icon: <FaInstagram size={20} /> },
  { label: "Facebook", url: "https://www.facebook.com/alyan.alyan.98096721", icon: <FaFacebook size={20} /> },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const templateParams = {
      // Send both standard variations of naming conventions to prevent 412 errors
      from_name: formData.from_name,
      name: formData.from_name,
      from_email: formData.from_email,
      email: formData.from_email,
      user_email: formData.from_email,
      reply_to: formData.from_email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Alyan Shahid",
      to_email: "hafizalyan66@gmail.com"
    };

    // Sending email using the provided EmailJS configuration
    emailjs.send(
      'service_fmyj52q', // Service ID
      'template_o17bqhr', // Template ID
      templateParams,
      'KJ6ON_0LvfIlpn6IF' // Public Key / User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      formRef.current?.reset();
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      if (error.text) {
        alert("EmailJS Error: " + error.text); // Helps user debug exactly which field is missing
      }
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    });
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 overflow-hidden bg-bg">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] opacity-10" />
      </div>

      <div className="relative w-full max-w-[95%] 2xl:max-w-[1400px] mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info (Slides in from Left) */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 flex flex-col gap-6"
          >
            {/* Info Cards */}
            <div className="flex flex-col gap-4">
              {[
                { icon: <Mail size={24} />, title: "Email", content: "hafizalyan66@gmail.com", link: "mailto:hafizalyan66@gmail.com" },
                { icon: <MapPin size={24} />, title: "Location", content: "Lahore, Pakistan", link: null },
                { icon: <Phone size={24} />, title: "Phone", content: "+92 300 0000000", link: "tel:+923000000000" }
              ].map((item, idx) => (
                <div key={idx} className="group flex items-start gap-5 bg-surface/60 backdrop-blur-md border border-border p-6 rounded-2xl hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                  <div className="w-14 h-14 bg-surface-2 rounded-xl flex items-center justify-center text-text-secondary group-hover:scale-110 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col justify-center min-h-[56px]">
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-text-secondary hover:text-accent transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-text-secondary">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links Row */}
            <div className="mt-4 pt-6 border-t border-border">
              <h4 className="font-bold text-lg mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-surface/60 backdrop-blur-md border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent hover:scale-110 hover:shadow-lg hover:shadow-accent/10 hover:bg-accent/5 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Slides up from Bottom) */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-surface/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-border shadow-xl">
              <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="relative">
                    <input 
                      type="text" 
                      id="from_name" 
                      name="from_name" 
                      required
                      placeholder=" "
                      value={formData.from_name}
                      onChange={handleChange}
                      className={`peer w-full bg-surface-2 border ${formData.from_name.length > 0 ? 'border-border' : 'border-border'} rounded-xl px-4 pb-2 pt-6 text-gray-900 dark:text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all shadow-inner`}
                    />
                    <label htmlFor="from_name" className="absolute left-4 top-2 text-xs font-semibold text-text-secondary transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-accent cursor-text">
                      Your Name *
                    </label>
                    {formData.from_name.length > 0 && (
                      <div className="absolute right-4 top-4">
                        <CheckCircle className="text-green-500 w-5 h-5" />
                      </div>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input 
                      type="email" 
                      id="from_email" 
                      name="from_email" 
                      required
                      placeholder=" "
                      value={formData.from_email}
                      onChange={handleChange}
                      className={`peer w-full bg-surface-2 border ${formData.from_email.length > 0 && !isEmailValid(formData.from_email) ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-border focus:border-accent focus:ring-accent/20'} rounded-xl px-4 pb-2 pt-6 text-gray-900 dark:text-white outline-none focus:ring-2 transition-all shadow-inner`}
                    />
                    <label htmlFor="from_email" className="absolute left-4 top-2 text-xs font-semibold text-text-secondary transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-accent cursor-text">
                      Your Email *
                    </label>
                    {formData.from_email.length > 0 && (
                      <div className="absolute right-4 top-4">
                        {isEmailValid(formData.from_email) ? (
                          <CheckCircle className="text-green-500 w-5 h-5" />
                        ) : (
                          <XCircle className="text-red-500 w-5 h-5" />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    placeholder=" "
                    value={formData.subject}
                    onChange={handleChange}
                    className="peer w-full bg-surface-2 border border-border rounded-xl px-4 pb-2 pt-6 text-gray-900 dark:text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all shadow-inner"
                  />
                  <label htmlFor="subject" className="absolute left-4 top-2 text-xs font-semibold text-text-secondary transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-accent cursor-text">
                    Subject *
                  </label>
                  {formData.subject.length > 0 && (
                    <div className="absolute right-4 top-4">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={5}
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    className="peer w-full bg-surface-2 border border-border rounded-xl px-4 pb-4 pt-7 text-gray-900 dark:text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none shadow-inner"
                  />
                  <label htmlFor="message" className="absolute left-4 top-3 text-xs font-semibold text-text-secondary transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-accent cursor-text">
                    Your Message *
                  </label>
                </div>

                <input type="hidden" name="to_email" value="hafizalyan66@gmail.com" />

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group relative w-full flex items-center justify-center gap-3 bg-accent-gradient text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 rounded-xl text-center font-medium mt-2">
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 rounded-xl text-center font-medium mt-2">
                    Failed to send message. Please check your EmailJS configuration.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

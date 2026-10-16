import { useState, useRef } from 'react';
import { ArrowUpRight, Loader2, Copy, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const EMAIL = 'hafizalyan66@gmail.com';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

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

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

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
      to_email: EMAIL
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
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    });
  };

  const field = 'peer w-full bg-transparent border-0 border-b-2 border-border-strong/30 focus:border-accent px-0 pt-6 pb-3 text-lg md:text-xl outline-none transition-colors placeholder-transparent';
  const label = 'absolute left-0 top-0 mono text-[11px] uppercase tracking-widest text-text-secondary peer-focus:text-accent transition-colors';

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        <SectionLabel index="09" label="Contact" aside="Open to opportunities" title={<>Let's work <span className="hl">together.</span></>} />

        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <p className="text-xl text-text-secondary leading-relaxed">
              Have a project in mind, a role to fill, or just want to say hi? I usually reply within 24 hours.
            </p>
            <div>
              <div className="mono text-[11px] uppercase tracking-widest text-text-secondary mb-2">Email</div>
              <div className="flex items-center gap-3 flex-wrap">
                <a href={`mailto:${EMAIL}`} className="font-display font-semibold text-2xl md:text-3xl hover:text-accent transition-colors break-all">{EMAIL}</a>
                <button onClick={copyEmail} aria-label="Copy email" className="h-9 w-9 grid place-items-center border border-border-strong hover:bg-accent hover:text-accent-ink hover:border-accent transition-colors">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
            <div>
              <div className="mono text-[11px] uppercase tracking-widest text-text-secondary mb-2">Location</div>
              <div className="font-display font-semibold text-2xl">Lahore, Pakistan</div>
            </div>
            <div>
              <div className="mono text-[11px] uppercase tracking-widest text-text-secondary mb-2">Local time</div>
              <div className="font-display font-semibold text-2xl">GMT+5 (PKT)</div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-10"
          >
            <div className="grid md:grid-cols-2 gap-10">
              <div className="relative">
                <input id="from_name" name="from_name" required placeholder="Name" value={formData.from_name} onChange={handleChange} className={field} />
                <label htmlFor="from_name" className={label}>Your name *</label>
              </div>
              <div className="relative">
                <input id="from_email" name="from_email" type="email" required placeholder="Email" value={formData.from_email} onChange={handleChange}
                  className={`${field} ${formData.from_email && !isEmailValid(formData.from_email) ? '!border-red-500' : ''}`} />
                <label htmlFor="from_email" className={label}>Your email *</label>
              </div>
            </div>
            <div className="relative">
              <input id="subject" name="subject" required placeholder="Subject" value={formData.subject} onChange={handleChange} className={field} />
              <label htmlFor="subject" className={label}>Subject *</label>
            </div>
            <div className="relative">
              <textarea id="message" name="message" required rows={4} placeholder="Message" value={formData.message} onChange={handleChange} className={`${field} resize-none`} />
              <label htmlFor="message" className={label}>Tell me about your project *</label>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button type="submit" disabled={isSubmitting} className="btn-accent text-lg px-8 py-4 disabled:opacity-60">
                {isSubmitting ? <><Loader2 className="animate-spin" size={20} /> Sending…</> : <>Send Message <ArrowUpRight size={20} /></>}
              </button>
              {submitStatus === 'success' && <span className="mono text-sm text-green-600 dark:text-green-400">✓ Sent! I'll get back to you soon.</span>}
              {submitStatus === 'error' && <span className="mono text-sm text-red-500">✕ Failed to send. Please email me directly.</span>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

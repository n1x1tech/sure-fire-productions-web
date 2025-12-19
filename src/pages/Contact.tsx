import React, { useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "13ed2f61-5c05-49f9-aaba-6b7f79dc26e9",
          subject: "Surefire Productions Contact Form",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventType: formData.eventType,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          message: ""
        });
      } else {
        setSubmitError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black relative overflow-hidden">
        <div className="laser-beam h-0.5 w-screen -rotate-45 top-1/4 -left-1/4"></div>
        <div className="laser-beam h-0.5 w-screen rotate-45 bottom-1/3 -right-1/4"></div>
        <div className="light-glow w-64 h-64 bg-surefire-red/10 top-1/4 right-1/4"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4 tracking-wider"
            >
              <span className="text-white">CONTACT</span>
              <span className="text-surefire-red"> US</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Ready to create an unforgettable event? Get in touch with our team to start the conversation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-surefire-dark-gray relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 tracking-wider">
                <span className="text-white">GET IN</span>
                <span className="text-surefire-red"> TOUCH</span>
              </h2>
              
              <div className="space-y-8 mb-12">
                <ContactItem 
                  icon={<Mail />}
                  title="Email Us" 
                  content="surefireproductionstn@gmail.com"
                  link="mailto:surefireproductionstn@gmail.com"
                />
                <ContactItem 
                  icon={<Phone />}
                  title="Call Us" 
                  content="+1 (865) 766-7331"
                  link="tel:+18657667331"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">Office Hours</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white font-medium">Monday - Friday</p>
                  <p className="text-white/70">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="text-white font-medium">Saturday</p>
                  <p className="text-white/70">10:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <p className="text-white font-medium">Sunday</p>
                  <p className="text-white/70">Closed</p>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div>
              <div className="bg-black p-8 rounded-lg border border-surefire-light-gray relative">
                <div className="light-glow w-32 h-32 bg-surefire-red/5 absolute top-0 right-0"></div>
                
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-surefire-red mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/70">
                      Thank you for reaching out. Our team will get back to you soon.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 px-6 py-3 bg-surefire-red text-white font-medium tracking-wider rounded hover:bg-surefire-red/90 transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-white mb-2">Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-surefire-dark-gray border rounded-md focus:outline-none focus:ring-2 focus:ring-surefire-red/50 ${
                              errors.name ? "border-red-500" : "border-surefire-light-gray"
                            }`}
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-white mb-2">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-surefire-dark-gray border rounded-md focus:outline-none focus:ring-2 focus:ring-surefire-red/50 ${
                              errors.email ? "border-red-500" : "border-surefire-light-gray"
                            }`}
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-surefire-dark-gray border border-surefire-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-surefire-red/50"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="eventType" className="block text-white mb-2">Event Type</label>
                          <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-surefire-dark-gray border border-surefire-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-surefire-red/50"
                          >
                            <option value="">Select Event Type</option>
                            <option value="Concert">Concert</option>
                            <option value="Corporate">Corporate Event</option>
                            <option value="Festival">Festival</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-white mb-2">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 bg-surefire-dark-gray border rounded-md focus:outline-none focus:ring-2 focus:ring-surefire-red/50 ${
                            errors.message ? "border-red-500" : "border-surefire-light-gray"
                          }`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                      </div>
                      
                      {submitError && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-md">
                          <p className="text-red-500">{submitError}</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-4 bg-surefire-red text-white font-bold tracking-wider rounded hover:bg-surefire-red/90 transition-all duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                        <Send className="ml-2 h-5 w-5" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black relative">
        <div className="laser-beam h-0.5 w-1/2 -rotate-[30deg] top-1/2 left-0"></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-wider">
              <span className="text-white">OUR</span>
              <span className="text-surefire-red"> LOCATION</span>
            </h2>
          </div>
          
          <div className="aspect-[16/9] overflow-hidden rounded-lg border border-surefire-light-gray">
            {/* Placeholder for a map */}
            <div className="w-full h-full bg-surefire-dark-gray flex items-center justify-center">
              <p className="text-white/50">Interactive Map Would Go Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surefire-dark-gray relative overflow-hidden">
        <div className="laser-beam h-0.5 w-full rotate-[5deg] top-10 -left-10 opacity-30"></div>
        <div className="laser-beam h-0.5 w-full -rotate-[5deg] bottom-10 -right-10 opacity-30"></div>
        <div className="light-glow w-64 h-64 bg-surefire-red/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
              <span className="text-white">NEED A QUOTE FOR</span>
              <span className="text-surefire-red"> YOUR EVENT?</span>
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Fill out our quick quote form to get a customized estimate for your upcoming event.
            </p>
            <button
              className="px-10 py-4 bg-surefire-red text-white font-bold tracking-wider rounded text-lg hover:bg-surefire-red/90 transition-all duration-300 neon-border inline-block"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ContactItem = ({ icon, title, content, link }: { icon: React.ReactNode; title: string; content: string; link: string }) => (
  <div className="flex items-start">
    <div className="text-surefire-red mr-4 mt-1">
      {icon}
    </div>
    <div>
      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
      <a href={link} className="text-white/70 hover:text-surefire-red transition-colors">{content}</a>
    </div>
  </div>
);

export default Contact;

import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ChevronRight, Zap, Music, Video, Users, Calendar, Award, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setTimeout(() => {
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          message: ""
        });
      }, 1000);
    }
  };

  return (
    <Layout>
      <section className="relative h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-black z-0">
          <div className="absolute inset-0 retro-grid opacity-20"></div>
          
          <div className="laser-beam h-0.5 w-screen -rotate-45 top-1/4 -left-1/4"></div>
          <div className="laser-beam h-0.5 w-screen rotate-45 bottom-1/3 -right-1/4"></div>
          <div className="laser-beam h-0.5 w-1/2 -rotate-[30deg] top-1/2 left-0"></div>
          
          <div 
            className="light-glow w-32 h-32 bg-surefire-green/20" 
            style={{ 
              left: `${mousePosition.x - 64}px`, 
              top: `${mousePosition.y - 64}px`,
              transition: "transform 0.2s ease-out"
            }}
          ></div>
          <div className="light-glow w-64 h-64 bg-surefire-blue/10 top-1/4 right-1/4"></div>
          <div className="light-glow w-96 h-96 bg-surefire-blue/5 bottom-0 left-1/3"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">
              <span className="glitch-text text-white">SURE FIRE</span>
              <br />
              <span className="text-surefire-blue">PRODUCTIONS</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
              Igniting live events with cutting-edge technology and creative excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-surefire-green text-white font-bold tracking-wider rounded hover:bg-surefire-green/90 transition-all duration-300 neon-border"
              >
                GET A QUOTE
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-transparent border border-surefire-green text-white font-bold tracking-wider rounded hover:bg-surefire-green/10 transition-all duration-300 group"
              >
                VIEW OUR WORK
                <ChevronRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 bg-surefire-dark-gray relative">
        <div className="laser-beam h-0.5 w-1/2 rotate-45 top-0 left-1/4 opacity-50"></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">
              <span className="text-white">OUR</span>
              <span className="text-surefire-blue"> SERVICES</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              From intimate gatherings to massive festivals, we deliver exceptional production services tailored to your unique vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Music />}
              title="Sound Engineering" 
              description="Crystal clear audio systems perfectly tuned to your venue and performance needs."
            />
            <ServiceCard 
              icon={<Zap />}
              title="Lighting Design" 
              description="State-of-the-art lighting solutions to make your event an experience to remember."
            />
            <ServiceCard 
              icon={<Calendar />}
              title="Event Planning" 
              description="Comprehensive event planning and production management from concept to execution."
            />
            <ServiceCard 
              icon={<Video />}
              title="Video Production" 
              description="Live streaming, documentation, and content creation to make your event your own."
            />
            
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-black relative">
        <div className="light-glow w-64 h-64 bg-surefire-blue/10 top-1/4 left-1/4"></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">
              <span className="text-white">FEATURED</span>
              <span className="text-surefire-blue"> PROJECTS</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              image="public/images/IMG_4873"
              title="Larry Keel" 
              category="Private Events"
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
              title="Tech Summit 2023" 
              category="Corporate Event"
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec"
              title="Laser Symphony" 
              category="Concert Production"
            />
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-surefire-green text-white font-bold tracking-wider rounded hover:bg-surefire-green/10 transition-all duration-300 group"
            >
              GET IN TOUCH
              <ChevronRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-surefire-dark-gray relative">
        <div className="laser-beam h-0.5 w-full rotate-[5deg] top-10 -left-10 opacity-30"></div>
        <div className="laser-beam h-0.5 w-full -rotate-[5deg] bottom-10 -right-10 opacity-30"></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">
              <span className="text-white">CLIENT</span>
              <span className="text-surefire-blue"> TESTIMONIALS</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Sure Fire transformed our corporate gala with their incredible lighting design. The attention to detail was impeccable." 
              author="Sarah Johnson"
              company="Vector Industries"
            />
            <TestimonialCard 
              quote="Working with the Sure Fire team was a game-changer for our festival. Their technical expertise and creativity exceeded our expectations." 
              author="Mark Reynolds"
              company="Pulse Music Group"
            />
            <TestimonialCard 
              quote="From concept to execution, Sure Fire Productions delivered an unforgettable experience for our product launch event." 
              author="Lisa Chen"
              company="Horizon Tech"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="light-glow w-96 h-96 bg-surefire-blue/5 -top-10 -right-10"></div>
        <div className="light-glow w-96 h-96 bg-surefire-blue/5 -bottom-10 -left-10"></div>
        
        <div className="laser-beam h-0.5 w-screen -rotate-45 top-1/4 -left-1/4 opacity-50"></div>
        <div className="laser-beam h-0.5 w-screen rotate-45 bottom-1/3 -right-1/4 opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
                <span className="text-white">READY TO</span>
                <span className="text-surefire-blue"> IGNITE YOUR EVENT?</span>
              </h2>
              <p className="text-white/70 mb-8 text-lg">
                We're a cutting-edge live event production company bringing fresh, innovative solutions to your event needs.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-surefire-light-gray relative">
              <div className="light-glow w-32 h-32 bg-surefire-green/5 absolute top-0 right-0"></div>
              
              {formSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-surefire-green mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/70">
                    Thank you for reaching out. Our team will get back to you soon.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-6 py-3 bg-surefire-green text-white font-medium tracking-wider rounded hover:bg-surefire-green/90 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
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
                        className={`w-full px-4 py-3 bg-surefire-dark-gray border rounded-md focus:outline-none focus:ring-2 focus:ring-surefire-green/50 text-white ${
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
                        className={`w-full px-4 py-3 bg-surefire-dark-gray border rounded-md focus:outline-none focus:ring-2 focus:ring-surefire-green/50 text-white ${
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
                        className="w-full px-4 py-3 bg-surefire-dark-gray border border-surefire-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-surefire-green/50 text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="eventType" className="block text-white mb-2">Event Type</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-surefire-dark-gray border border-surefire-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-surefire-green/50 text-white"
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
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-surefire-dark-gray border rounded-md focus:outline-none focus:ring-2 focus:ring-surefire-green/50 text-white resize-none ${
                        errors.message ? "border-red-500" : "border-surefire-light-gray"
                      }`}
                      placeholder="Tell us about your event..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-surefire-green text-white font-bold tracking-wider rounded hover:bg-surefire-green/90 transition-all duration-300 neon-border flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-surefire-dark-gray relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">
              <span className="text-white">GET IN</span>
              <span className="text-surefire-blue"> TOUCH</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Ready to discuss your project? Here's how to reach us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ContactItem 
              icon={<Mail />}
              title="Email Us" 
              content="info@surefireproductions.com"
              link="mailto:info@surefireproductions.com"
            />
            <ContactItem 
              icon={<Phone />}
              title="Call Us" 
              content="+1 (555) 123-4567"
              link="tel:+15551234567"
            />
            <ContactItem 
              icon={<MapPin />}
              title="Visit Us" 
              content="Knoxville, TN"
              link="#"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-black p-6 rounded-lg border border-surefire-light-gray hover:border-surefire-green transition-colors duration-300 group">
    <div className="text-surefire-green mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-surefire-green/10 group-hover:bg-surefire-green/20 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-white/70 text-sm">{description}</p>
  </div>
);

const ProjectCard = ({ image, title, category }: { image: string, title: string, category: string }) => (
  <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <p className="text-surefire-green text-sm mb-2">{category}</p>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-surefire-green transition-colors duration-300 pointer-events-none"></div>
  </div>
);

const TestimonialCard = ({ quote, author, company }: { quote: string, author: string, company: string }) => (
  <div className="bg-black p-6 rounded-lg border border-surefire-light-gray">
    <div className="text-surefire-blue text-4xl mb-4">"</div>
    <p className="text-white/80 mb-6 italic">{quote}</p>
    <div>
      <p className="text-white font-medium">{author}</p>
      <p className="text-surefire-green text-sm">{company}</p>
    </div>
  </div>
);

const ContactItem = ({ icon, title, content, link }: { icon: React.ReactNode; title: string; content: string; link: string }) => (
  <div className="flex items-start">
    <div className="text-surefire-green mr-4 mt-1">
      {icon}
    </div>
    <div>
      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
      <a href={link} className="text-white/70 hover:text-surefire-green transition-colors">{content}</a>
    </div>
  </div>
);

export default Index;

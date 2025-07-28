
import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Calendar, Award, Users, MapPin, Zap } from "lucide-react";

const About = () => {
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
              <span className="text-white">ABOUT</span>
              <span className="text-surefire-red"> US</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Passionate creators of unforgettable live event experiences since 1979.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-surefire-dark-gray relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1559519529-0936e4058364" 
                  alt="Sure Fire Productions Early Days" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-lg border border-surefire-red">
                <p className="text-white font-bold">EST. 1979</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-wider">
                <span className="text-white">OUR</span>
                <span className="text-surefire-red"> STORY</span>
              </h2>
              <p className="text-white/80 mb-6">
                Sure Fire Productions was founded in 1979 by industry pioneers Jack Nolan and Maria Reyes with a vision to revolutionize live event production. What began as a small operation providing lighting for local music venues quickly evolved into one of the most respected production companies in the industry.
              </p>
              <p className="text-white/80 mb-6">
                Through the decades, we've embraced technological advancements while maintaining our commitment to creative excellence. From the neon-drenched aesthetics of the 80s to today's cutting-edge digital innovations, we've consistently pushed boundaries to create unforgettable experiences.
              </p>
              <p className="text-white/80">
                Today, Sure Fire Productions is a full-service event production company with a diverse team of designers, technicians, and creative professionals dedicated to bringing our clients' visions to life with precision and flair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black relative">
        <div className="laser-beam h-0.5 w-1/2 rotate-45 bottom-0 right-0 opacity-70"></div>
        <div className="light-glow w-64 h-64 bg-surefire-red/5 top-0 left-1/4"></div>
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="45+" label="Years of Experience" />
            <StatCard number="1,200+" label="Events Produced" />
            <StatCard number="50+" label="Industry Awards" />
            <StatCard number="30+" label="Team Members" />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-surefire-dark-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-wider">
              <span className="text-white">OUR</span>
              <span className="text-surefire-red"> TEAM</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Meet the passionate professionals behind Sure Fire Productions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <TeamMember 
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" 
              name="Jack Nolan" 
              title="Founder & Creative Director"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956" 
              name="Maria Reyes" 
              title="Co-Founder & CEO"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
              name="David Chen" 
              title="Technical Director"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" 
              name="Sophia Williams" 
              title="Lead Designer"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1531384441138-2736e62e0919" 
              name="Robert Jackson" 
              title="Production Manager"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1544005313-94ddf0286df2" 
              name="Emily Rodriguez" 
              title="Event Coordinator"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50" 
              name="Michael Thompson" 
              title="Lighting Designer"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
              name="Lisa Chen" 
              title="Sound Engineer"
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-black relative">
        <div className="light-glow w-96 h-96 bg-surefire-red/5 -bottom-10 -left-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-wider">
                <span className="text-white">OUR</span>
                <span className="text-surefire-red"> APPROACH</span>
              </h2>
              <p className="text-white/80 mb-8">
                At Sure Fire Productions, we believe that successful events begin with a deep understanding of our clients' vision and goals. Our approach combines meticulous planning, creative innovation, and technical excellence to deliver experiences that exceed expectations.
              </p>
              
              <div className="space-y-6">
                <ApproachItem 
                  icon={<Users />}
                  title="Collaborative Design" 
                  description="We work closely with clients to understand their vision and bring it to life."
                />
                <ApproachItem 
                  icon={<Calendar />}
                  title="Comprehensive Planning" 
                  description="Meticulous attention to detail ensures seamless execution from start to finish."
                />
                <ApproachItem 
                  icon={<Zap />}
                  title="Technical Excellence" 
                  description="Our team leverages cutting-edge technology to create immersive experiences."
                />
                <ApproachItem 
                  icon={<Award />}
                  title="Creative Innovation" 
                  description="We push boundaries to create unique and memorable event experiences."
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg neon-border">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87" 
                  alt="Our Approach" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="laser-beam h-0.5 w-full rotate-45 absolute top-1/3 -left-1/4"></div>
              <div className="laser-beam h-0.5 w-full -rotate-45 absolute bottom-1/3 -right-1/4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Partners */}
      <section className="py-20 bg-surefire-dark-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-wider">
              <span className="text-white">CLIENTS &</span>
              <span className="text-surefire-red"> PARTNERS</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We're proud to have worked with leading brands and organizations across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index} 
                className="bg-black aspect-square rounded-lg flex items-center justify-center p-6 border border-surefire-light-gray"
              >
                <div className="w-full h-full bg-white/10 rounded flex items-center justify-center text-white/30 text-lg font-bold">
                  LOGO
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-black relative">
        <div className="laser-beam h-0.5 w-1/2 -rotate-[30deg] top-1/2 left-0"></div>
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-wider">
                <span className="text-white">OUR</span>
                <span className="text-surefire-red"> LOCATION</span>
              </h2>
              <p className="text-white/80 mb-8">
                Based in the heart of Los Angeles, our state-of-the-art facility houses our design studio, equipment warehouse, and offices. We serve clients nationwide and internationally, bringing our unique production style to events around the world.
              </p>
              
              <div className="flex items-start mb-6">
                <MapPin className="text-surefire-red mt-1 mr-3" />
                <div>
                  <p className="text-white font-medium">Sure Fire Productions Headquarters</p>
                  <p className="text-white/70">123 Neon Street, Downtown</p>
                  <p className="text-white/70">Los Angeles, CA 90012</p>
                </div>
              </div>
              
              <button className="px-6 py-3 bg-surefire-red text-white font-medium tracking-wider rounded hover:bg-surefire-red/90 transition-all duration-300">
                GET DIRECTIONS
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-surefire-light-gray">
                {/* Placeholder for a map */}
                <div className="w-full h-full bg-surefire-dark-gray flex items-center justify-center">
                  <p className="text-white/50">Interactive Map Would Go Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center p-6 bg-surefire-dark-gray rounded-lg border border-surefire-light-gray">
    <p className="text-4xl md:text-5xl font-bold text-surefire-red mb-2">{number}</p>
    <p className="text-white/70 text-sm md:text-base tracking-wider">{label}</p>
  </div>
);

const TeamMember = ({ image, name, title }: { image: string; name: string; title: string }) => (
  <div className="group">
    <div className="aspect-[3/4] overflow-hidden rounded-lg relative mb-4">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-surefire-red transition-colors duration-300"></div>
    </div>
    <h3 className="text-white font-bold text-lg">{name}</h3>
    <p className="text-surefire-red text-sm">{title}</p>
  </div>
);

const ApproachItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start">
    <div className="text-surefire-red mr-4 mt-1">
      {icon}
    </div>
    <div>
      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  </div>
);

export default About;

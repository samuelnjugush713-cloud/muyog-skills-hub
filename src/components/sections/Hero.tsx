import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, School } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#800000]/5 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#006400]/5 -z-10 rounded-tr-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#006400]/10 text-[#006400] rounded-full mb-6 font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-[#006400] mr-2" />
              Enrollment for 2024 is Open
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Empowering <span className="text-[#800000]">Skills</span>, <br />
              Building <span className="text-[#006400]">Futures</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Unlock your potential with professional training in Computer Science and Hairdressing. Join Muyog Vocational College today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#006400] hover:bg-[#004d00] text-white px-8 rounded-full text-lg h-14 group"
                onClick={() => scrollToSection('services')}
              >
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white px-8 rounded-full text-lg h-14 transition-all" 
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="text-[#006400] w-5 h-5" />
                <span>Certified Instructors</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="text-[#006400] w-5 h-5" />
                <span>Practical Training</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/42f22863-0206-4333-b70e-20ba087f8f3e/hero-college-e241b5a5-1774969519651.webp" 
                alt="Muyog Students" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
            >
              <div className="bg-[#800000] p-3 rounded-full">
                <School className="text-white w-8 h-8" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-gray-500 text-sm">Graduates Annually</p>
              </div>
            </motion.div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" />
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs font-semibold text-gray-600">Joined by 100+ new students</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
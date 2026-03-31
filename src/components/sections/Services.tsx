import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Scissors, BookOpen, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Computer Training",
      subtitle: "Master the Digital World",
      description: "From basic computer packages to advanced graphic design, we equip you with the technical skills needed in today's digital economy.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/42f22863-0206-4333-b70e-20ba087f8f3e/computer-lab-a4b86ff4-1774969519915.webp",
      icon: <Monitor className="w-8 h-8 text-[#006400]" />,
      courses: [
        { name: "Full Computer Packages", duration: "3 Months" },
        { name: "Graphic Design", duration: "2 Months" },
        { name: "Web Design Basic", duration: "2 Months" }
      ],
      color: "border-[#006400]",
      accent: "bg-[#006400]/5"
    },
    {
      title: "Hair Dressing",
      subtitle: "Excellence in Beauty",
      description: "Transform your passion for beauty into a professional career. Our expert-led training covers modern styling and treatment techniques.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/42f22863-0206-4333-b70e-20ba087f8f3e/hairdressing-salon-retry-35caf839-1774969530919.webp",
      icon: <Scissors className="w-8 h-8 text-[#800000]" />,
      courses: [
        { name: "Professional Hair Styling", duration: "4 Months" },
        { name: "Beauty Therapy", duration: "3 Months" },
        { name: "Advanced Braiding", duration: "2 Months" }
      ],
      color: "border-[#800000]",
      accent: "bg-[#800000]/5"
    }
  ];

  const handleApply = (serviceName: string) => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Dispatch custom event to update the contact form selection
    const event = new CustomEvent('selectService', { detail: { service: serviceName } });
    window.dispatchEvent(event);
  };

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Core <span className="text-[#800000]">Specializations</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#006400] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer high-quality vocational training tailored to meet industrial demands and empower our students for the job market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`rounded-[2.5rem] border-2 ${service.color} ${service.accent} p-8 lg:p-12 transition-transform hover:-translate-y-2`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-[#800000] font-medium">{service.subtitle}</p>
                </div>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-md">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-4 mb-8">
                <p className="font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Popular Courses:
                </p>
                {service.courses.map((course, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">{course.name}</span>
                    <span className="flex items-center text-sm font-semibold text-gray-500">
                      <Clock className="w-4 h-4 mr-1" /> {course.duration}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant={index === 0 ? "green" : "maroon"} 
                className="w-full rounded-xl py-6 text-lg"
                onClick={() => handleApply(service.title)}
              >
                Apply for {service.title}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
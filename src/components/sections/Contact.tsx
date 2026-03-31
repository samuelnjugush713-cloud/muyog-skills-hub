import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Computer Training',
    message: ''
  });

  useEffect(() => {
    const handleServiceSelect = (event: any) => {
      if (event.detail && event.detail.service) {
        setFormData(prev => ({
          ...prev,
          service: event.detail.service
        }));
      }
    };

    window.addEventListener('selectService', handleServiceSelect);
    return () => window.removeEventListener('selectService', handleServiceSelect);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    
    // Simulate backend call
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you for your message! We will get back to you shortly.");
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Computer Training',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Have questions? We are here to help. Reach out to us via phone, email, or visit our campus.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-[#800000] p-4 rounded-2xl">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <a href="tel:0726000770" className="text-xl text-[#800000] hover:underline">0726 000 770</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#006400] p-4 rounded-2xl">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-lg text-gray-600">info@muyogcollege.ac.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#800000] p-4 rounded-2xl">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Location</h4>
                  <p className="text-lg text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100">
              <p className="text-[#006400] font-bold mb-2 italic">"Your Success starts with the right choice of training."</p>
              <p className="text-sm text-gray-500">\u2014 Muyog Vocational College Team</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <Input 
                  required
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="bg-gray-50 border-gray-200 h-12"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <Input 
                    required
                    placeholder="07XX XXX XXX" 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="bg-gray-50 border-gray-200 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Service Interested In</label>
                  <select 
                    className="flex h-12 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#800000]"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="Computer Training">Computer Training</option>
                    <option value="Hair Dressing">Hair Dressing</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Your Message</label>
                <Textarea 
                  placeholder="Tell us about your training needs..." 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="bg-gray-50 border-gray-200 min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full h-14 bg-[#800000] hover:bg-[#600000] text-white text-lg rounded-xl"
              >
                {loading ? (
                  <Loader2 className="animate-spin w-5 h-5" />
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
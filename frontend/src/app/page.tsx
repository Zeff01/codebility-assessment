"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronUp, Send, Mail, Phone, MessageCircle, ArrowRight, Sparkles, Star, Zap } from 'lucide-react';

// Desktop Navigation Link Component
interface NavLinkProps {
  href: string;
  text: string;
  highlight?: boolean;
  className?: string;
}

// Desktop Navigation Link Component
function NavLink({ href, text, highlight }: NavLinkProps) {
  const isHighlight = highlight || false;
  return (
    <a
      href={href}
      className={`px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
        isHighlight
          ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-800 hover:from-yellow-300 hover:to-orange-300 shadow-lg'
          : 'bg-white text-gray-800 hover:text-purple-700 '
      }`}
    >
      {text}
    </a>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ href, text, highlight }: NavLinkProps) {
  const isHighlight = highlight || false;
  return (
    <a
      href={href}
      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
        isHighlight
          ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-800 hover:from-yellow-300 hover:to-orange-300'
          : 'bg-white text-gray-800 hover:bg-gray-100 hover:text-black shadow'
      }`}
    >
      {text}
    </a>
  );
}

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <nav className="relative bg-white shadow-xl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <div className="text-black font-bold text-2xl flex items-center">
            <Image 
              src="/Moola-logo.png" 
              alt="Moola Logo" 
              width={100} 
              height={100} 
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-6">
            <NavLink href="#" text="Shop" className="text-gray-800 hover:text-black" />
            <NavLink href="#" text="Winter Holiday Sale" className="text-gray-800 hover:text-black" />
            <NavLink href="#" text="How it Works" className="text-gray-800 hover:text-black" />
            <NavLink href="#" text="Refer & Earn" className="text-gray-800 hover:text-black" />
            <NavLink href="#" text="Merchant Solutions" className="text-gray-800 hover:text-black" />
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transform hover:scale-105 transition-all duration-300 shadow-lg">
            DOWNLOAD NOW
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-black transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100 visible'
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <div className="bg-white px-4 pt-2 pb-3 space-y-3">
          <MobileNavLink href="#" text="Shop" className="text-gray-800 hover:text-black" />
          <MobileNavLink href="#" text="Winter Holiday Sale" className="text-gray-800 hover:text-black" />
          <MobileNavLink href="#" text="How it Works" className="text-gray-800 hover:text-black" />
          <MobileNavLink href="#" text="Refer & Earn" className="text-gray-800 hover:text-black" />
          <MobileNavLink href="#" text="Merchant Solutions" className="text-gray-800 hover:text-black" />
          
          <div className="pt-4 space-y-4">
            <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition-all duration-300">
              DOWNLOAD NOW
            </button>
            <br />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400"></div>
    </div>
  </nav>
);
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16 pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-80 animate-bounce"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-32 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-80 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 backdrop-blur-sm">
            
            <span className="text-yellow-300 font-medium text-sm">
              🎉 Winter Holiday Sale - Up to 70% Off!
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                Shop Smart,
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Save More
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent inline-flex items-center">
                with Moola
                <Zap className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 ml-4 animate-bounce" />
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover amazing deals, earn cashback rewards, and enjoy seamless shopping 
            with Canada's most colorful shopping experience! 
            <span className="text-yellow-300 font-semibold">💰✨</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">50K+</div>
              <div className="text-sm text-gray-300">Happy Shoppers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">$2M+</div>
              <div className="text-sm text-gray-300">Cashback Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-pink-400">1000+</div>
              <div className="text-sm text-gray-300">Partner Stores</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full font-bold text-white text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-pink-500/25 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                Start Shopping Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
              Watch Demo
            </button>
          </div>

          <div className="pt-12">
            <p className="text-gray-400 text-sm mb-4">Trusted by leading brands</p>
            <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
              <div className="flex items-center space-x-1 text-white">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="ml-2 text-sm">4.9/5 App Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-1/4 hidden lg:block">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      </div>
      <div className="absolute bottom-32 right-1/4 hidden lg:block">
        <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
      </div>
      
      </div>
  );
};

// FAQ Support Section Component
const FAQSupportSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: 'medium',
    message: ''
  });

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log('Support ticket submitted:', formData);
    alert('Support ticket submitted successfully! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      priority: 'medium',
      message: ''
    });
  };

  const faqData = [
    {
      question: "How do I earn cashback with Moola?",
      answer: "You earn cashback by shopping through our app at partner stores. Simply browse our featured retailers, click through to their websites, and make your purchase. Cashback is automatically tracked and added to your account within 2-3 business days."
    },
    {
      question: "When will I receive my cashback?",
      answer: "Cashback typically appears as 'pending' within 24-48 hours and is confirmed within 30-90 days, depending on the retailer's policy. Once confirmed, you can withdraw your earnings to your bank account or PayPal."
    },
    {
      question: "What's the minimum amount I can withdraw?",
      answer: "The minimum withdrawal amount is $20 CAD. You can withdraw your earnings via bank transfer, PayPal, or gift cards from our rewards catalog."
    },
    {
      question: "Is Moola free to use?",
      answer: "Yes! Moola is completely free to download and use. There are no membership fees, hidden charges, or costs to earn cashback. We earn a small commission from retailers when you shop, which allows us to share cashback with you."
    },
    {
      question: "How do I refer friends and earn bonuses?",
      answer: "Use your unique referral code found in the 'Refer & Earn' section of the app. When friends sign up with your code and make their first purchase, you both earn a $10 bonus. There's no limit to how many friends you can refer!"
    },
    {
      question: "Which stores offer the highest cashback rates?",
      answer: "Cashback rates vary by retailer and can range from 1% to 15%. Check our 'Featured Deals' section for current promotions. Popular categories like fashion, electronics, and home goods often have competitive rates."
    },
    {
      question: "Can I use Moola with coupon codes and other discounts?",
      answer: "Yes! You can stack Moola cashback with most coupon codes, store sales, and other promotions. This means you can maximize your savings by combining multiple offers."
    },
    {
      question: "What happens if my cashback doesn't track?",
      answer: "If your cashback doesn't appear within 48 hours, contact our support team with your order details. We'll investigate and manually add any missing cashback to your account."
    }
  ];

  return (
    <div className="bg-white py-16 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions & Support
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions or submit a support ticket for technical assistance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 text-purple-600 mr-3" />
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left flex justify-between items-center py-3 hover:text-purple-600 transition-colors duration-200"
                    >
                      <span className="font-medium text-black pr-4">
                        {faq.question}
                      </span>
                      {activeIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {activeIndex === index && (
                      <div className="mt-3 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Send className="w-6 h-6 text-purple-600 mr-3" />
              Submit Support Ticket
            </h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors placeholder-gray-400 text-black"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors placeholder-gray-400 text-black"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors placeholder-gray-400 text-black"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                  Priority Level
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-black"
                >
                  <option value="low">Low - General inquiry</option>
                  <option value="medium">Medium - Account issue</option>
                  <option value="high">High - Payment problem</option>
                  <option value="urgent">Urgent - Account locked/security</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-vertical placeholder-gray-400 text-black"
                  placeholder="Please describe your issue in detail. Include any error messages, steps you've tried, and relevant account information."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Support Ticket
              </button>

              <p className="text-sm text-gray-600 text-center">
                We typically respond within 24 hours. Check your email for updates on your ticket.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Need immediate help?
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 text-purple-600 mr-3" />
                  <span>support@moola.ca</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 text-purple-600 mr-3" />
                  <span>1-800-MOOLA-CA (1-800-666-5222)</span>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Average response time: 2-4 hours during business days
                </p>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

// Main Page Component
export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FAQSupportSection />
    </div>
  );
}
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-primary py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">Get In Touch</span>
        <h2 className="font-sans text-2xl font-bold leading-tight">
          LET'S MAKE YOUR PROPERTY JOURNEY EFFORTLESS
        </h2>
        <div className="bg-white p-2 rounded-full max-w-lg mx-auto flex flex-col sm:flex-row gap-2 shadow-2xl">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 border-none focus:ring-0 rounded-full px-6 py-3 text-gray-900 placeholder-gray-400 bg-transparent"
          />
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </div>
        <p className="text-white/70 text-sm pt-4">
          Join our newsletter for exclusive property updates and market insights.
        </p>
      </div>
    </div>
  );
};

export default Contact;
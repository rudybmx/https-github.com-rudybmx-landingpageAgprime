import React from 'react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  { id: '1', question: 'What is the process for buying a property?', answer: 'Our process begins with a consultation to understand your needs. We then curate a list of properties, arrange viewings, assist with negotiations, and guide you through the closing paperwork to ensure a smooth transaction.' },
  { id: '2', question: 'How do I determine how much I can afford?', answer: 'We recommend getting pre-approved for a mortgage to understand your budget. Our financial partners can assist you in evaluating your finances and exploring financing options tailored to your situation.' },
  { id: '3', question: 'What documents are required for renting a property?', answer: 'Typically, you will need proof of identification, proof of income (pay stubs or tax returns), bank statements, and references from previous landlords. Specific requirements may vary by property.' },
  { id: '4', question: 'Can I terminate a lease agreement early?', answer: 'Early termination depends on the terms of your lease agreement. Some leases allow it with a penalty fee, while others may require you to pay rent until a new tenant is found. We can help you review your lease terms.' },
  { id: '5', question: 'What are the risks of investing in real estate?', answer: 'Real estate investment carries risks such as market fluctuations, property vacancies, and unexpected maintenance costs. Our investment consultants help mitigate these risks through thorough market analysis and strategic planning.' },
];

const FAQ: React.FC = () => {
  return (
    <section className="grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Help Center</span>
        <h2 className="font-sans text-2xl font-bold mt-4 mb-4 dark:text-white">
          FREQUENTLY ASKED <br /> QUESTIONS
        </h2>
        <p className="text-text-muted-light dark:text-text-muted-dark mb-6">
          Can't find the answer you are looking for? Contact our support team.
        </p>
        <div className="flex items-center gap-2 font-bold dark:text-white mb-2">
          <img 
            src="https://docs.qozt.com.br/landing_pages/agprime/logo_agprime3.png" 
            alt="AG Prime" 
            className="h-8 w-auto" 
          />
        </div>
      </div>
      
      <div className="lg:col-span-8 space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200 dark:border-gray-700">
            <details className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900 dark:text-white">
                <span>{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <span className="material-icons-outlined text-gray-400">expand_more</span>
                </span>
              </summary>
              <div className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
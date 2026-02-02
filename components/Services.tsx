import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Luxury Residences',
    description: 'Experience unparalleled elegance in our luxury residences, featuring exquisite design, premium amenities, and prime locations for the most discerning tastes.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPFHBqoSb8fN7g5AN-4ZxMSh_-1NDrzYOjbZTu07ubV9dGNpMcBx90zOEcOjGWaFbvxfDJUfkIDg1N8QQjdkfOD_wkB0Qq54SAurkTvBcN7YrqbzCwCMW2_bD3TCJdRl2KFcO6KIOpH2F-jq0Ij-kRapZcu8bEZNfRuBMBxoaErWd_vyO4aQw_mWVWj1IMrA9jwxLBianLSg5GxURRQ18ztppj4JJhkdSnyZJeEZNMOstPn-dFWibjRx4SrJMk1uEq7gWBohL8qw4',
    icon: 'home',
    number: '01'
  },
  {
    id: '2',
    title: 'Eco Green Buildings',
    description: 'Discover sustainable living in our eco-friendly properties, designed to minimize environmental impact while offering modern comforts and energy efficiency.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxngYDkZOD5pjg_x82jmgewA5eXZky945cB4ERKb19tbbiX7tdZ_qJ4cZRFqa2KJP2NvI8Axwbp6cjSrlDtLkG4PKL4YQYMSHrND0zj_2kK9xWOs6LG0zsLTS4HrADnrN4WFuucRS52-0opPIWoiNydyMXFbGF6MFMZk4KVZjFLyRWSVtqPrx-lIAxFBgGUe6YnF4-qisHilH6TONlLqzE6OcbVXlcJzOt4IIhHTWOz0wq03YULLp3AqMelI5cm7i-kpGjxtTkbKk',
    icon: 'eco',
    number: '02'
  },
  {
    id: '3',
    title: 'Unique Vacation Homes',
    description: 'Explore our curated collection of unique vacation homes, offering distinctive architecture and exceptional locations for unforgettable stays.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9GVzkFyzT0znSLB933wfPRM7LBmfIKP30dltX1bCpurHiBt0RZ_cc4qpToBeoUxbtc5r9-2HJ_Fv2l07MhTUP7FozJMcmvQcWL1qXs6n4OzLBknWNQe9Nv7ajod3Cb-2_y0_sg7PeYCoNxtXrcavakx74ahEdj6BIKQO6JvygieZBe6JDhe-jIPWoC1rMxcbyWWuP3s0ukquzBzUCWUB084s3mFShDfjgFuvYk8abGsvSy6gpfqCbnH0OVFKq9uNDZ8gJH1DnjAk',
    icon: 'deck',
    number: '03'
  }
];

const Services: React.FC = () => {
  return (
    <section>
      <div className="mb-12">
        <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">What We Offer</span>
        <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-2 dark:text-white">COMPREHENSIVE REAL ESTATE SOLUTIONS</h2>
        <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl">
          Our comprehensive services encompass luxury property sales, sustainable green building investments, and premium vacation rentals.
        </p>
      </div>
      
      <div className="space-y-16">
        {services.map((service) => (
          <div key={service.id} className="group relative">
            <div className="w-full aspect-[21/9] overflow-hidden rounded-2xl">
              <img 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={service.imageUrl}
              />
              <div className="absolute bottom-0 right-0 p-8 md:p-12 text-white/20 font-serif text-8xl md:text-9xl font-bold leading-none select-none pointer-events-none">
                {service.number}
              </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row md:items-start gap-4 justify-between">
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-xl text-primary">{service.icon}</span>
                <h3 className="text-2xl font-serif font-bold dark:text-white">{service.title}</h3>
              </div>
              <p className="md:max-w-xl text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
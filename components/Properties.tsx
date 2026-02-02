import React from 'react';
import { Property } from '../types';

const properties: Property[] = [
  {
    id: '1',
    title: 'The Highland Villa',
    price: '$2,450,000',
    location: 'Beverly Hills, CA',
    beds: 4,
    baths: 3,
    sqft: 3200,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkV4LMhNIrK7zpxKiExASp9Ay8J1foPoNYgNlr69S8XojBBuEdsL6ndEUTBNnRMqxvV7KIEygU8iXqDtdIucXPaj12t0fz0iryMfPnI6p44oQZ_AVI639H3vGuQoEtO8fiGya9oTFsO-4dxkCup8HDq9xzxvBEKJSs6q5xTgFDRyu9LeRsyNvqWr5lBbyKt37Pb_2JNMI-gVFFnvTf_E9B_6pxQ4XAYa5TR0wewU8L7LFw_UpwnAzlPNGLANENZ73xbKuqHKGxsbw',
    type: 'Sale'
  },
  {
    id: '2',
    title: 'Oceanview Estate',
    price: '$5,900,000',
    location: 'Malibu, CA',
    beds: 6,
    baths: 5.5,
    sqft: 5500,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1__R-OoUwp7b_p0bbIHUWWFPZrEkEvSJkX-1JSg7SJrHpaNffKDpjRqZcfK4DEWTFAzsFOaMzJoWLrEAbbkXtGGa6dJi8zTSNrKNUWMpGHDRe_pw_RFSnc_OmKUCulrz8NCPfbt7YIeFo21UIjV1yd3UZbyriEcLyZOrII4a8I15ss2ZbNdjwQP55bQWf5ZgB52N-cquuV2sPXBVoAwVp6Ys7Vb_HDs-L44tmI2lzJXEbpYvrdJF9fPsnd4wsw_E5_2Lkc9lSRJc',
    type: 'Sale'
  },
  {
    id: '3',
    title: 'Urban Loft',
    price: '$8,500/mo',
    location: 'New York, NY',
    beds: 2,
    baths: 2,
    sqft: 1800,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgL6HkyjqkDdkn0hS89YCr-lCTnq3bYXzQ_2IQHivZK8UZdp8gwrkQxyjwMLnks0dUqEAgip1AZul8vMZkKl11bh_udB2JSLX41oSzG6HK_ZJOLxAy1AYY4KRkblI2J9-5tehw_mCJOLKkkIbtIf4CKT4hzc4MRc2y4ZuunhutBjHETC8DpqXoAzTCHkLl9U6tst2YrIxFcO_3i5TxSPM4BAGLa2dHKVDftzTAL2MAlXSB-wltBIO_PbouTJ58e4BDxShKqds7aVA',
    type: 'Rent'
  },
];

const Properties: React.FC = () => {
  return (
    <section>
      <div className="mb-12 flex justify-between items-end">
        <div>
          <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Featured Properties</span>
          <h2 className="font-sans text-2xl font-bold mt-4 dark:text-white">
            DISCOVER HOMES TAILORED TO YOUR <br /> LIFESTYLE AND NEEDS
          </h2>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline">
          View All Properties <span className="material-icons-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
              <img 
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={property.imageUrl}
              />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm dark:text-white">
                For {property.type}
              </div>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-sans text-2xl font-bold dark:text-white group-hover:text-primary transition-colors">{property.title}</h3>
              <p className="text-primary font-bold">{property.price}</p>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4">{property.location}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
              <span className="flex items-center gap-1"><span className="material-icons-outlined text-sm">bed</span> {property.beds} Beds</span>
              <span className="flex items-center gap-1"><span className="material-icons-outlined text-sm">bathtub</span> {property.baths} Baths</span>
              <span className="flex items-center gap-1"><span className="material-icons-outlined text-sm">square_foot</span> {property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
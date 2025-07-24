import React from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '@/data/services';
import { getImagePath } from '@/utils/imageUtils';

export const ServicesGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
          onClick={() => navigate(`/services/${service.slug}`)}
        >
          <div className="relative h-48">
            <img
              src={getImagePath(service.image)}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
              {service.title}
            </h3>
          </div>
          <div className="p-4">
            <p className="text-gray-600 line-clamp-2">{service.description}</p>
            {/* Removed price/amount display as requested */}
            <div className="mt-4 flex justify-end items-center">
              <span className="text-gray-500 text-sm">{service.duration}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

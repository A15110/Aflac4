import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00a1e1]">Client Success Stories</h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say About Aflac Insurance
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Read testimonials from satisfied clients who have experienced the benefits of Aflac supplemental insurance firsthand.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8"
            >
              <div>
                <div className="flex items-center gap-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Protect Your Future with Aflac Insurance
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get personalized supplemental insurance solutions with Mark Mikko, your dedicated Aflac agent in Redding, California. Protecting what matters most, when it matters most.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-[#00a1e1] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0077a7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a1e1]"
              >
                Get a Free Quote
              </a>
              <a href="/plans" className="group text-sm font-semibold leading-6 text-gray-900">
                View Insurance Plans <ArrowRight className="inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Insurance professional at desk"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
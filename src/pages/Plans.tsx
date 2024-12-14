import React from 'react';
import { Shield, Umbrella, Heart, Building2, DollarSign } from 'lucide-react';
import { insurancePlans } from '../data/insurancePlans';

const Plans = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00a1e1]">Comprehensive Coverage</h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Best Aflac Insurance Plans in Redding, CA
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover our range of supplemental insurance plans designed to provide additional financial protection when you need it most.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {insurancePlans.map((plan) => (
            <div key={plan.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="bg-[#00a1e1] px-6 py-8">
                <div className="flex items-center justify-center">
                  {plan.icon === 'Shield' && <Shield className="h-12 w-12 text-white" />}
                  {plan.icon === 'Umbrella' && <Umbrella className="h-12 w-12 text-white" />}
                  {plan.icon === 'Heart' && <Heart className="h-12 w-12 text-white" />}
                </div>
                <h3 className="mt-4 text-xl font-bold text-white text-center">{plan.title}</h3>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm text-gray-600">{plan.description}</p>
                  <ul className="mt-4 space-y-3">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <DollarSign className="h-5 w-5 flex-shrink-0 text-[#00a1e1]" />
                        <span className="ml-2">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="block w-full rounded-md bg-[#00a1e1] px-3 py-2 text-center text-sm font-semibold text-white shadow hover:bg-[#0077a7]"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gray-50 p-8 lg:p-12">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Aflac Insurance for Small Businesses
          </h3>
          <div className="mt-6 flex items-start">
            <Building2 className="h-6 w-6 flex-shrink-0 text-[#00a1e1]" />
            <div className="ml-4">
              <p className="text-base text-gray-600">
                Enhance your employee benefits package with Aflac supplemental insurance. Our plans can help you attract and retain top talent while providing valuable protection for your team.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#00a1e1] hover:text-[#0077a7]"
              >
                Learn more about group benefits
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
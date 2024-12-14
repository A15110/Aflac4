import React from 'react';
import { Award, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00a1e1]">Your Trusted Aflac Agent</h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Mark Mikko - Dedicated Aflac Insurance Agent in Redding
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With over a decade of experience in supplemental insurance, I'm committed to helping individuals and businesses in Redding find the perfect Aflac coverage for their needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Shield className="h-5 w-5 flex-none text-[#00a1e1]" />
                Expertise
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Specialized in crafting personalized supplemental insurance solutions that perfectly complement your existing coverage.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Users className="h-5 w-5 flex-none text-[#00a1e1]" />
                Local Service
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Proudly serving the Redding community with personalized attention and dedicated support for all your insurance needs.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Award className="h-5 w-5 flex-none text-[#00a1e1]" />
                Recognition
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Multiple-time recipient of Aflac's President's Club Award for exceptional service and client satisfaction.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
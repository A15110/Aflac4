import React from 'react';
import { faqs } from '../data/faqs';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00a1e1]">FAQ</h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions About Aflac Insurance
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to common questions about Aflac supplemental insurance and how it can benefit you and your family.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-gray-50 p-8">
                <dt className="flex items-center text-lg font-semibold leading-7 text-gray-900">
                  <HelpCircle className="h-6 w-6 text-[#00a1e1] mr-3" />
                  {faq.question}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600 ml-9">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="rounded-md bg-[#00a1e1] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#0077a7]"
            >
              Have more questions? Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00a1e1]">Get in Touch</h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Your Local Aflac Agent in Redding
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ready to learn more about Aflac supplemental insurance? I&apos;m here to help you find the perfect coverage for your needs.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2">
          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
            <dl className="mt-6 space-y-4">
              <div className="flex items-center">
                <dt className="sr-only">Phone</dt>
                <Phone className="h-6 w-6 text-[#00a1e1]" />
                <dd className="ml-3 text-base text-gray-600">Phone: 530.945.7035</dd>
              </div>
              <div className="flex items-center">
                <dt className="sr-only">Email</dt>
                <Mail className="h-6 w-6 text-[#00a1e1]" />
                <dd className="ml-3 text-base text-gray-600">Email: mark_mikko@us.aflac.com</dd>
              </div>
              <div className="flex items-center">
                <dt className="sr-only">Office</dt>
                <MapPin className="h-6 w-6 text-[#00a1e1]" />
                <dd className="ml-3 text-base text-gray-600">1415 Victor Av.<br />Suite B<br />Redding, CA 96003</dd>
              </div>
              <div className="flex items-center">
                <dt className="sr-only">Fax</dt>
                <Phone className="h-6 w-6 text-[#00a1e1]" />
                <dd className="ml-3 text-base text-gray-600">Fax: 530.215.3141</dd>
              </div>
              <div className="flex items-center">
                <dt className="sr-only">License</dt>
                <div className="h-6 w-6 flex items-center justify-center text-[#00a1e1]">CA</div>
                <dd className="ml-3 text-base text-gray-600">Insurance License #0809825</dd>
              </div>
            </dl>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00a1e1] focus:ring-[#00a1e1] sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00a1e1] focus:ring-[#00a1e1] sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00a1e1] focus:ring-[#00a1e1] sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00a1e1] focus:ring-[#00a1e1] sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#00a1e1] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0077a7]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
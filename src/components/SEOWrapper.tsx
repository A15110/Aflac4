import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const SEOWrapper = ({ title, description, children }: SEOWrapperProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      {children}
    </>
  );
};

export default SEOWrapper;
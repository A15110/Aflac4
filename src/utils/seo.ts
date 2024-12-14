import { MetaTag } from '../types';

export const generateMetaTags = (
  title: string,
  description: string,
  path: string = ''
): MetaTag[] => {
  const baseUrl = 'https://markmikko-aflac.com';
  const url = `${baseUrl}${path}`;
  
  return [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: `${baseUrl}/logoAF.png` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: `${baseUrl}/logoAF.png` }
  ];
};
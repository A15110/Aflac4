import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
    }
  ];

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-500 flex items-center">
        <Share2 className="h-4 w-4 mr-2" />
        Share
      </span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#00a1e1] transition-colors"
          aria-label={`Share on ${link.name}`}
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default ShareButtons;
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import { Calendar } from 'lucide-react';
import SearchBar from '../../components/SearchBar';
import { useSearch } from '../../hooks/useSearch';
import { formatDate } from '../../utils/date';

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = useSearch(blogPosts, searchTerm);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00a1e1]">Insurance Insights</h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Insurance Tips & Updates
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay informed about supplemental insurance and get valuable insights to protect what matters most.
          </p>
        </div>

        <div className="mt-8 mb-12">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search blog posts..."
          />
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="flex flex-col items-start">
              <div className="rounded-lg overflow-hidden w-full mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="flex items-center gap-x-2 text-xs text-gray-500">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                <Link to={`/blog/${post.slug}`} className="hover:text-[#00a1e1]">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-4 text-sm font-semibold leading-6 text-[#00a1e1] hover:text-[#0077a7]"
              >
                Read more <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
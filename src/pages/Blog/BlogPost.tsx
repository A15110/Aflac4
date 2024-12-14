import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import { Calendar, ArrowLeft } from 'lucide-react';
import SEOWrapper from '../../components/SEOWrapper';
import ShareButtons from '../../components/ShareButtons';
import { formatDate } from '../../utils/date';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        <Link to="/blog" className="mt-4 text-[#00a1e1] hover:text-[#0077a7]">
          Return to blog
        </Link>
      </div>
    );
  }

  return (
    <SEOWrapper
      title={`${post.title} | Mark Mikko - Aflac Agent Redding`}
      description={post.excerpt}
    >
      <article className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-gray-500 hover:text-[#00a1e1] mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to blog
          </Link>

          <div className="rounded-lg overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[2/1] w-full object-cover"
            />
          </div>

          <div className="flex items-center gap-x-2 text-sm text-gray-500 mb-4">
            <Calendar className="h-5 w-5" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
            {post.title}
          </h1>

          <div className="mb-8">
            <ShareButtons
              url={window.location.href}
              title={post.title}
            />
          </div>

          <div className="prose prose-lg prose-blue max-w-none">
            {post.content}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.slug !== post.slug)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="relative">
                      <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover group-hover:opacity-75 transition-opacity"
                        />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-[#00a1e1]">
                        {relatedPost.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {formatDate(relatedPost.date)}
                      </p>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </SEOWrapper>
  );
};

export default BlogPost;
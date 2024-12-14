import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import SEOWrapper from '../../components/SEOWrapper';

const Blog = () => {
  return (
    <SEOWrapper
      title="Insurance Blog | Mark Mikko - Aflac Agent Redding"
      description="Stay informed about supplemental insurance, coverage options, and industry insights from Mark Mikko, your local Aflac agent in Redding, CA."
    >
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/:slug" element={<BlogPost />} />
      </Routes>
    </SEOWrapper>
  );
};

export default Blog;
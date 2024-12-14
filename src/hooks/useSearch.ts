import { useState, useMemo } from 'react';
import { BlogPostType } from '../types';

export const useSearch = (items: BlogPostType[], searchTerm: string) => {
  return useMemo(() => {
    const lowercaseSearch = searchTerm.toLowerCase();
    return items.filter(
      item =>
        item.title.toLowerCase().includes(lowercaseSearch) ||
        item.excerpt.toLowerCase().includes(lowercaseSearch) ||
        item.content.toLowerCase().includes(lowercaseSearch)
    );
  }, [items, searchTerm]);
};
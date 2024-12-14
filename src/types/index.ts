export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface InsurancePlanType {
  id: number;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface FAQItemType {
  question: string;
  answer: string;
}

export interface BlogPostType {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export interface SearchResult<T> {
  item: T;
  matches: string[];
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface StorageItem<T> {
  value: T;
  timestamp: number;
  expiry?: number;
}
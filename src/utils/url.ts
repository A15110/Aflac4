export const generateCanonicalUrl = (path: string = ''): string => {
  const baseUrl = 'https://markmikko-aflac.com';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const isExternalUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.origin !== window.location.origin;
  } catch {
    return false;
  }
};

export const getQueryParam = (param: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

export const buildQueryString = (params: Record<string, string>): string => {
  const urlParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) urlParams.append(key, value);
  });
  return urlParams.toString();
};
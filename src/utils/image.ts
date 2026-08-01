/**
 * Helper utility to construct responsive srcSets for Unsplash CDN images.
 * Extracts the base URL and appends customized width and quality queries.
 */
export const getUnsplashSrcSet = (url: string, widths: number[] = [480, 768, 1024, 1440]) => {
  if (!url || typeof url !== 'string' || !url.includes('unsplash.com')) {
    return undefined;
  }
  
  // Extract clean base URL without query parameters
  const baseUrl = url.split('?')[0];
  
  return widths
    .map(w => `${baseUrl}?auto=format&fit=crop&w=${w}&q=80 ${w}w`)
    .join(', ');
};

/**
 * Returns a highly optimized default Unsplash URL with custom width/quality.
 */
export const getOptimizedUnsplashUrl = (url: string, width: number = 800, quality: number = 80) => {
  if (!url || typeof url !== 'string' || !url.includes('unsplash.com')) {
    return url;
  }
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?auto=format&fit=crop&w=${width}&q=${quality}`;
};

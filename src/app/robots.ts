import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isIndexingAllowed = process.env.ALLOW_INDEXING === 'true';

  return {
    rules: {
      userAgent: '*',
      allow: isIndexingAllowed ? '/' : undefined,
      disallow: isIndexingAllowed ? undefined : '/',
    },
  };
}

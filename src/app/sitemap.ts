import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rkairsystems.ca'
  
  // Blog posts data
  const blogPosts = [
    'summer-hvac-tips',
    'wifi-thermostat-upgrade',
    'air-conditioner-repair-barrie',
    'furnace-repair-barrie',
    'heat-pump-benefits',
    'hvac-maintenance-tips',
    'indoor-air-quality'
  ]

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Blog post pages
  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
} 
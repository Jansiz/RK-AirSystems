import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rkairsystems.ca'
  
  // Blog posts data - updated with all optimized slugs
  const blogPosts = [
    'heavy-snow-hvac-preparedness-barrie',
    'holiday-hvac-tips-barrie',
    'energy-saving-winter-tips-barrie',
    'winter-furnace-efficiency-barrie',
    'fall-hvac-preparation-barrie',
    'air-conditioner-repair-barrie',
    'summer-hvac-tips-barrie',
    'wifi-thermostat-upgrade-barrie',
    'furnace-repair-barrie',
    'heat-pump-benefits-barrie',
    'hvac-maintenance-tips-barrie',
    'indoor-air-quality-barrie'
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
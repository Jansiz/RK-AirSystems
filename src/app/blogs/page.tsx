import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 'summer-hvac-tips',
    title: 'Summer HVAC Tips: Keep Your Cool and Cut Your Costs',
    excerpt: 'Essential tips to keep your Barrie home cool and efficient during the summer months while reducing energy costs.',
    date: '2025-06-15',
    readTime: '4 min read',
    image: '/summer-hvac-tips.jpg',
    category: 'Maintenance'
  },
  {
    id: 'wifi-thermostat-upgrade',
    title: 'Why Wi‑Fi Thermostats Are a Smart HVAC Upgrade',
    excerpt: 'Discover how smart thermostats can save energy, provide remote control, and integrate with your smart home system.',
    date: '2025-06-09',
    readTime: '5 min read',
    image: '/smart-thermostat.jpg',
    category: 'Energy Efficiency'
  },
  {
    id: 'air-conditioner-repair-barrie',
    title: 'Air Conditioner Repair in Barrie: Tips Before You Call the Pros',
    excerpt: 'Learn essential AC troubleshooting tips and when to call professional help for your air conditioning system.',
    date: '2025-06-27',
    readTime: '3 min read',
    image: '/ac-repair-barrie.jpg',
    category: 'Maintenance'
  },
  {
    id: 'furnace-repair-barrie',
    title: 'Furnace Repair in Barrie: What You Need to Know & How RK Airsystems Can Help',
    excerpt: 'Learn about common furnace issues, troubleshooting tips, and when to call professionals for your furnace repair needs in Barrie.',
    date: '2024-03-25',
    readTime: '4 min read',
    image: '/furnace-issue-image.webp',
    category: 'Maintenance'
  },
  {
    id: 'heat-pump-benefits',
    title: 'The Benefits of Heat Pumps for Year-Round Comfort',
    excerpt: 'Discover how heat pumps can provide efficient heating and cooling while reducing your energy bills.',
    date: '2024-03-20',
    readTime: '5 min read',
    image: '/heat-pump-blog.webp',
    category: 'Energy Efficiency'
  },
  {
    id: 'hvac-maintenance-tips',
    title: 'Essential HVAC Maintenance Tips for Homeowners',
    excerpt: 'Learn the key maintenance tasks that will keep your HVAC system running efficiently all year long.',
    date: '2024-03-15',
    readTime: '4 min read',
    image: '/hvac-maintenance.webp',
    category: 'Maintenance'
  },
  {
    id: 'indoor-air-quality',
    title: 'Improving Your Home\'s Indoor Air Quality',
    excerpt: 'Simple steps to enhance the air quality in your home and protect your family\'s health.',
    date: '2024-03-10',
    readTime: '6 min read',
    image: '/air-quality-blog.webp',
    category: 'Air Quality'
  },
  {
    id: 'fall-hvac-preparation',
    title: 'Fall HVAC Preparation: Get Your Home Ready for Winter',
    excerpt: 'Essential fall maintenance tasks to ensure your heating system is ready for Barrie\'s cold winter months.',
    date: '2025-09-15',
    readTime: '5 min read',
    image: '/blog-sep.jpeg',
    category: 'Maintenance'
  },
  {
    id: 'winter-furnace-efficiency',
    title: 'Maximizing Furnace Efficiency Before Winter Hits',
    excerpt: 'Learn how to optimize your furnace performance and reduce heating costs during the coldest months of the year.',
    date: '2025-10-18',
    readTime: '4 min read',
    image: '/blog-oct.jpeg',
    category: 'Energy Efficiency'
  },
  {
    id: 'energy-saving-winter-tips',
    title: 'Energy-Saving HVAC Tips for Cold Weather',
    excerpt: 'Practical strategies to keep your home warm and comfortable while minimizing energy consumption this winter.',
    date: '2025-11-12',
    readTime: '5 min read',
    image: '/blog-nov.jpeg',
    category: 'Energy Efficiency'
  },
  {
    id: 'holiday-hvac-tips',
    title: 'Holiday Season HVAC Tips: Keep Your Home Comfortable',
    excerpt: 'Essential HVAC maintenance and efficiency tips to ensure a warm, comfortable home during the holiday season.',
    date: '2025-12-08',
    readTime: '4 min read',
    image: '/blog-dec.jpeg',
    category: 'Maintenance'
  }
];

export const metadata: Metadata = {
  title: 'HVAC Blogs & Tips | RK AirSystems - Expert HVAC Insights',
  description: 'Expert HVAC insights, maintenance tips, and energy-saving strategies. Learn about furnace repair, air conditioning, heat pumps, and indoor air quality from Barrie\'s trusted HVAC professionals.',
  keywords: 'HVAC blogs, furnace repair tips, air conditioning maintenance, heat pump benefits, indoor air quality, HVAC energy efficiency, Barrie HVAC tips, HVAC maintenance guide',
  openGraph: {
    title: 'HVAC Blogs & Tips | RK AirSystems - Expert HVAC Insights',
    description: 'Expert HVAC insights, maintenance tips, and energy-saving strategies from Barrie\'s trusted HVAC professionals.',
    url: 'https://www.rkairsystems.ca/blogs',
    siteName: 'RK AirSystems',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RK AirSystems HVAC Blogs and Tips',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC Blogs & Tips | RK AirSystems - Expert HVAC Insights',
    description: 'Expert HVAC insights, maintenance tips, and energy-saving strategies from Barrie\'s trusted HVAC professionals.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.rkairsystems.ca/blogs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Blogs Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          HVAC Insights & Tips
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay informed about the latest HVAC technologies, maintenance tips, and energy-saving strategies.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link 
            href={`/blogs/${post.id}`} 
            key={post.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                     transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              {/* Note: Add actual images to public/blog/ directory */}
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-secondary">{post.category}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary 
                           transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 
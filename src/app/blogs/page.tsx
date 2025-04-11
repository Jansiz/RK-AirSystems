import Link from 'next/link';
import Image from 'next/image';

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 'air-conditioner-repair-barrie',
    title: 'Air Conditioner Repair in Barrie: Tips Before You Call the Pros',
    excerpt: 'Learn essential AC troubleshooting tips and when to call professional help for your air conditioning system.',
    date: '2025-03-27',
    readTime: '3 min read',
    image: '/air-conditioner-repair.webp',
    category: 'Maintenance'
  },
  {
    id: 'furnace-repair-barrie',
    title: 'Furnace Repair in Barrie: What You Need to Know & How RK Airsystems Can Help',
    excerpt: 'Learn about common furnace issues, troubleshooting tips, and when to call professionals for your furnace repair needs in Barrie.',
    date: '2025-03-25',
    readTime: '4 min read',
    image: '/furnace-issue-image.webp',
    category: 'Maintenance'
  },
  {
    id: 'heat-pump-benefits',
    title: 'The Benefits of Heat Pumps for Year-Round Comfort',
    excerpt: 'Discover how heat pumps can provide efficient heating and cooling while reducing your energy bills.',
    date: '2025-03-20',
    readTime: '5 min read',
    image: '/heat-pump-blog.webp',
    category: 'Energy Efficiency'
  },
  {
    id: 'hvac-maintenance-tips',
    title: 'Essential HVAC Maintenance Tips for Homeowners',
    excerpt: 'Learn the key maintenance tasks that will keep your HVAC system running efficiently all year long.',
    date: '2025-03-15',
    readTime: '4 min read',
    image: '/hvac-maintenance.webp',
    category: 'Maintenance'
  },
  {
    id: 'indoor-air-quality',
    title: 'Improving Your Home\'s Indoor Air Quality',
    excerpt: 'Simple steps to enhance the air quality in your home and protect your family\'s health.',
    date: '2025-03-10',
    readTime: '6 min read',
    image: '/air-quality-blog.webp',
    category: 'Air Quality'
  }
];

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
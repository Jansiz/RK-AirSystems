import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Blog Post Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/blogs"
          className="inline-block px-8 py-3 bg-secondary text-white rounded-full 
                   hover:bg-blue-light transition-colors duration-300"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
} 
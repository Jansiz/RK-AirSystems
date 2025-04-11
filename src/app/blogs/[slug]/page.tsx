'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

// Blog post data
const blogPosts = {
  'air-conditioner-repair-barrie': {
    title: 'Air Conditioner Repair in Barrie: Tips Before You Call the Pros',
    date: '2025-03-27',
    author: 'Rob Kloepfer',
    readTime: '3 min read',
    image: '/air-conditioner-repair.webp',
    category: 'Maintenance',
    content: `
    <div class="text-gray-900 leading-relaxed font-sans">
      <p class="text-lg mb-8">Before the heat of summer hits, make sure your AC is ready. Knowing how to identify common issues can prevent major breakdowns.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">DIY Troubleshooting Checklist</h2>
      
      <ul class="list-none space-y-4 mb-8">
        <li class="flex items-start">
          <span class="text-primary mr-3">✓</span>
          <div>
            <strong class="text-primary font-semibold">Check the thermostat</strong>
            <p class="text-lg">Is it set to "cool" and on the right temperature?</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">✓</span>
          <div>
            <strong class="text-primary font-semibold">Replace the air filter</strong>
            <p class="text-lg">Dirty filters block airflow.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">✓</span>
          <div>
            <strong class="text-primary font-semibold">Inspect outdoor unit</strong>
            <p class="text-lg">Clear any debris or plant overgrowth.</p>
          </div>
        </li>
      </ul>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">When to Call a Professional</h2>
      
      <div class="space-y-4 mb-8">
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <p class="text-lg">Warm air coming from vents</p>
        </div>
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <p class="text-lg">AC doesn't turn on at all</p>
        </div>
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <p class="text-lg">Loud or strange noises</p>
        </div>
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <p class="text-lg">Poor airflow despite a clean filter</p>
        </div>
      </div>
      
      <p class="text-lg mb-8 italic">Ignoring early signs often leads to bigger (and more expensive) problems later.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">RK Airsystems: Barrie's Reliable AC Repair Experts</h2>
      
      <p class="text-lg mb-8">RK Airsystems is your local go-to for fast and honest air conditioner repair in Barrie. We repair all brands and models and offer same-day service whenever possible.</p>
      
      <h3 class="text-primary font-semibold text-xl mb-4">Why homeowners choose RK Airsystems:</h3>
      
      <ul class="list-none space-y-4 mb-8">
        <li class="flex items-start">
          <span class="text-primary mr-3">✅</span>
          <div>
            <strong class="text-primary font-semibold">Expert diagnostics</strong>
            <p class="text-lg">Professional assessment of your AC system</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">✅</span>
          <div>
            <strong class="text-primary font-semibold">No unnecessary upsells</strong>
            <p class="text-lg">Honest recommendations for what you truly need</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">✅</span>
          <div>
            <strong class="text-primary font-semibold">Affordable rates</strong>
            <p class="text-lg">Competitive pricing with satisfaction guarantee</p>
          </div>
        </li>
      </ul>
      
      <div class="text-lg font-medium mt-12">
        <span class="text-primary text-2xl mr-2">❄️</span>
        <strong class="text-primary">Stay cool and worry-free</strong> — call RK Airsystems to fix your AC today.
      </div>
    </div>
    `
  },
  'furnace-repair-barrie': {
    title: 'Furnace Repair in Barrie: What You Need to Know & How RK Airsystems Can Help',
    date: '2025-03-25',
    author: 'Rob Kloepfer',
    readTime: '4 min read',
    image: '/furnace-issue-image.webp',
    category: 'Maintenance',
    content: `
    <div class="text-gray-900 leading-relaxed font-sans">
      <p class="text-lg mb-8">During the harsh winters in Barrie, a reliable furnace isn't just a luxury—it's essential. If your furnace is acting up, recognizing the early warning signs can help you avoid costly breakdowns and ensure your family stays warm and safe. Here's everything you need to know about furnace repair and how RK Airsystems can help.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Common Signs Your Furnace Needs Repair</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">1. Uneven Heating Across Your Home</h3>
          <p class="text-lg">Are some rooms much colder than others? This could be due to ductwork problems, a failing heating element, or an improperly balanced system.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">2. Strange Noises Coming From the Furnace</h3>
          <p class="text-lg mb-4">Furnaces should run quietly. If you hear rattling, banging, whistling, or persistent clicking, it might mean:</p>
          <ul class="list-disc pl-8 space-y-2 text-lg">
            <li>Loose components</li>
            <li>Airflow blockages</li>
            <li>Electrical issues</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">3. Unexpectedly High Energy Bills</h3>
          <p class="text-lg">If your energy bills suddenly spike, your furnace might be working harder than it should.</p>
        </div>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Why Choose RK Airsystems</h2>
      
      <ul class="list-none space-y-4 mb-8">
        <li class="flex items-start">
          <span class="text-primary mr-3">✅</span>
          <div>
            <strong class="text-primary font-semibold">24/7 Emergency Repairs</strong>
            <p class="text-lg">Available anytime you need us</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">✅</span>
          <div>
            <strong class="text-primary font-semibold">Transparent Pricing</strong>
            <p class="text-lg">No surprises, just honest quotes</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">✅</span>
          <div>
            <strong class="text-primary font-semibold">Certified Technicians</strong>
            <p class="text-lg">Licensed and insured team</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">✅</span>
          <div>
            <strong class="text-primary font-semibold">All Furnace Brands</strong>
            <p class="text-lg">We service all makes and models</p>
          </div>
        </li>
      </ul>
      
      <div class="text-lg font-medium mt-12">
        <span class="text-primary text-2xl mr-2">📞</span>
        <strong class="text-primary">Need help?</strong> Contact RK Airsystems today for professional furnace service in Barrie.
      </div>
    </div>
    `
  },
  'heat-pump-benefits': {
    title: 'The Benefits of Heat Pumps for Year-Round Comfort',
    date: '2025-03-20',
    author: 'Rob Kloepfer',
    readTime: '5 min read',
    image: '/heat-pump-blog.webp',
    category: 'Energy Efficiency',
    content: `
    <div class="text-gray-900 leading-relaxed font-sans">
      <p class="text-lg mb-8">Heat pumps are becoming increasingly popular in Barrie homes, and for good reason. These versatile systems provide both heating and cooling while offering significant energy savings. Let's explore why a heat pump might be the perfect solution for your home comfort needs.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Key Benefits of Heat Pumps</h2>
      
      <ul class="list-none space-y-4 mb-8">
        <li class="flex items-start">
          <span class="text-primary mr-3">🌡️</span>
          <div>
            <strong class="text-primary font-semibold">Year-Round Comfort</strong>
            <p class="text-lg">One system for both heating and cooling, simplifying your home comfort solution.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">💰</span>
          <div>
            <strong class="text-primary font-semibold">Energy Efficiency</strong>
            <p class="text-lg">Can reduce heating costs by up to 50% compared to traditional systems.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">🌱</span>
          <div>
            <strong class="text-primary font-semibold">Environmentally Friendly</strong>
            <p class="text-lg">Lower carbon footprint due to reduced energy consumption and no direct fossil fuel use.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">⚙️</span>
          <div>
            <strong class="text-primary font-semibold">Smart Temperature Control</strong>
            <p class="text-lg">Precise temperature management and zoning capabilities for optimal comfort.</p>
          </div>
        </li>
      </ul>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">How Heat Pumps Work</h2>
      
      <p class="text-lg mb-8">Heat pumps work by transferring heat rather than generating it. In winter, they extract heat from the outdoor air (even in cold temperatures) and move it inside. In summer, they reverse the process, removing heat from your home and expelling it outside.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Is a Heat Pump Right for Your Home?</h2>
      
      <div class="space-y-4 mb-8">
        <p class="text-lg">A heat pump might be perfect for your home if you:</p>
        <ul class="list-disc pl-8 space-y-2 text-lg">
          <li>Want to reduce your energy bills</li>
          <li>Are looking to replace both heating and cooling systems</li>
          <li>Value environmental sustainability</li>
          <li>Prefer consistent, even heating and cooling</li>
        </ul>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 class="text-primary font-semibold text-xl mb-4">Expert Tip</h3>
        <p class="text-lg">Modern heat pumps can operate efficiently even in Barrie's cold winters, but proper sizing and installation are crucial for optimal performance.</p>
      </div>
      
      <div class="text-lg font-medium mt-12">
        <span class="text-primary text-2xl mr-2">💡</span>
        <strong class="text-primary">Ready to explore heat pump options?</strong> Contact RK Airsystems for a professional consultation.
      </div>
    </div>
    `
  },
  'hvac-maintenance-tips': {
    title: 'Essential HVAC Maintenance Tips for Homeowners',
    date: '2025-03-15',
    author: 'Rob Kloepfer',
    readTime: '4 min read',
    image: '/hvac-maintenance.webp',
    category: 'Maintenance',
    content: `
    <div class="text-gray-900 leading-relaxed font-sans">
      <p class="text-lg mb-8">Regular HVAC maintenance is key to ensuring your system runs efficiently and reliably year-round. Follow these essential tips to keep your heating and cooling system in top condition and prevent costly repairs.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Monthly Maintenance Tasks</h2>
      
      <ul class="list-none space-y-4 mb-8">
        <li class="flex items-start">
          <span class="text-primary mr-3">📅</span>
          <div>
            <strong class="text-primary font-semibold">Check and Replace Air Filters</strong>
            <p class="text-lg">Clean or replace filters monthly, or as recommended by the manufacturer.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">🧹</span>
          <div>
            <strong class="text-primary font-semibold">Clean Vents and Registers</strong>
            <p class="text-lg">Keep vents free from dust and ensure they're not blocked by furniture.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">👂</span>
          <div>
            <strong class="text-primary font-semibold">Listen for Unusual Sounds</strong>
            <p class="text-lg">Pay attention to any new or strange noises from your system.</p>
          </div>
        </li>
      </ul>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Seasonal Maintenance Checklist</h2>
      
      <div class="space-y-8 mb-8">
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Spring Maintenance</h3>
          <ul class="list-disc pl-8 space-y-2 text-lg">
            <li>Clean outdoor AC unit and surrounding area</li>
            <li>Check and clean condensate drain lines</li>
            <li>Inspect refrigerant lines</li>
            <li>Test AC operation before hot weather</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Fall Maintenance</h3>
          <ul class="list-disc pl-8 space-y-2 text-lg">
            <li>Schedule professional furnace inspection</li>
            <li>Check heat exchanger for cracks</li>
            <li>Test carbon monoxide detectors</li>
            <li>Inspect and clean burners</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 class="text-primary font-semibold text-xl mb-4">Professional Maintenance Benefits</h3>
        <ul class="list-none space-y-4">
          <li class="flex items-start">
            <span class="text-primary mr-3">✅</span>
            <p class="text-lg">Extended system lifespan</p>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-3">✅</span>
            <p class="text-lg">Improved energy efficiency</p>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-3">✅</span>
            <p class="text-lg">Prevention of major repairs</p>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-3">✅</span>
            <p class="text-lg">Maintained warranty coverage</p>
          </li>
        </ul>
      </div>
      
      <div class="text-lg font-medium mt-12">
        <span class="text-primary text-2xl mr-2">🔧</span>
        <strong class="text-primary">Need professional maintenance?</strong> Schedule your HVAC tune-up with RK Airsystems today.
      </div>
    </div>
    `
  },
  'indoor-air-quality': {
    title: 'Improving Your Home\'s Indoor Air Quality',
    date: '2025-03-10',
    author: 'Rob Kloepfer',
    readTime: '6 min read',
    image: '/air-quality-blog.webp',
    category: 'Air Quality',
    content: `
    <div class="text-gray-900 leading-relaxed font-sans">
      <p class="text-lg mb-8">Indoor air quality has a significant impact on your health and comfort. With Canadians spending up to 90% of their time indoors, ensuring clean air in your home is more important than ever. Learn how to identify and address common air quality issues.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Common Indoor Air Pollutants</h2>
      
      <div class="space-y-4 mb-8">
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <div>
            <strong class="text-primary font-semibold">Dust and Allergens</strong>
            <p class="text-lg">Including pollen, pet dander, and dust mites</p>
          </div>
        </div>
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <div>
            <strong class="text-primary font-semibold">Volatile Organic Compounds (VOCs)</strong>
            <p class="text-lg">From cleaning products, paints, and new furniture</p>
          </div>
        </div>
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <div>
            <strong class="text-primary font-semibold">Mold and Mildew</strong>
            <p class="text-lg">Often found in damp areas and poor ventilation</p>
          </div>
        </div>
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <div>
            <strong class="text-primary font-semibold">Carbon Monoxide</strong>
            <p class="text-lg">From fuel-burning appliances and fireplaces</p>
          </div>
        </div>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Solutions for Better Air Quality</h2>
      
      <div class="space-y-8 mb-8">
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">1. Air Filtration Systems</h3>
          <p class="text-lg">High-efficiency air filters can remove up to 99.97% of airborne particles, including:</p>
          <ul class="list-disc pl-8 space-y-2 text-lg mt-4">
            <li>Dust and pollen</li>
            <li>Pet dander</li>
            <li>Mold spores</li>
            <li>Bacteria and viruses</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">2. Proper Ventilation</h3>
          <p class="text-lg">Ensure adequate air exchange through:</p>
          <ul class="list-disc pl-8 space-y-2 text-lg mt-4">
            <li>Regular window opening</li>
            <li>Kitchen and bathroom exhaust fans</li>
            <li>Heat Recovery Ventilators (HRV)</li>
            <li>Energy Recovery Ventilators (ERV)</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">3. Humidity Control</h3>
          <p class="text-lg">Maintain optimal humidity levels (30-50%) using:</p>
          <ul class="list-disc pl-8 space-y-2 text-lg mt-4">
            <li>Dehumidifiers for summer</li>
            <li>Humidifiers for winter</li>
            <li>Moisture meters for monitoring</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 class="text-primary font-semibold text-xl mb-4">Signs of Poor Air Quality</h3>
        <ul class="list-none space-y-4">
          <li class="flex items-start">
            <span class="text-primary mr-3">🔍</span>
            <p class="text-lg">Frequent sneezing or coughing</p>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-3">🔍</span>
            <p class="text-lg">Musty or stale odors</p>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-3">🔍</span>
            <p class="text-lg">Excessive dust accumulation</p>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-3">🔍</span>
            <p class="text-lg">Condensation on windows</p>
          </li>
        </ul>
      </div>
      
      <div class="text-lg font-medium mt-12">
        <span class="text-primary text-2xl mr-2">🌬️</span>
        <strong class="text-primary">Breathe easier at home.</strong> Contact RK Airsystems to explore our air quality solutions.
      </div>
    </div>
    `
  }
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 font-sans">
      {/* Navigation */}
      <Link 
        href="/blogs" 
        className="inline-flex items-center text-primary hover:text-secondary mb-12 text-lg font-medium transition-colors"
      >
        ← Back to Blogs
      </Link>

      {/* Header */}
      <header className="mb-12">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="rounded-xl mb-8 shadow-lg"
          priority
        />

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-base">
            <span className="text-primary font-medium">{post.category}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{post.readTime}</span>
            <span className="text-gray-400">•</span>
            <time dateTime={post.date} className="text-gray-600">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">{post.title}</h1>
          
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
              <span className="text-primary font-medium text-lg">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="font-semibold text-primary text-lg">{post.author}</div>
              <div className="text-gray-600">RK Airsystems CEO</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div 
        className="mt-12"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

      {/* CTA */}
      <div className="mt-16 p-8 bg-primary rounded-xl text-white text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Need Professional HVAC Services?</h2>
        <Link
          href="/#contact"
          className="inline-block px-8 py-4 bg-secondary text-white rounded-full text-lg font-medium
                   hover:bg-blue-light transition-all duration-300 shadow-md hover:shadow-xl"
        >
          Contact Us Today
        </Link>
      </div>
    </article>
  );
}

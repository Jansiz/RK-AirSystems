import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Blog post data
const blogPosts = {
  'summer-hvac-tips': {
    title: 'Summer HVAC Tips: Keep Your Cool and Cut Your Costs',
    date: '2025-06-15',
    author: 'Rob Kloepfer',
    readTime: '4 min read',
    image: '/summer-hvac-tips.jpg',
    category: 'Maintenance',
    excerpt: 'Essential tips to keep your Barrie home cool and efficient during the summer months while reducing energy costs.',
    content: `
    <div class="text-gray-900 leading-relaxed font-sans">
      <p class="text-lg mb-8">With temperatures rising, your air conditioning system is about to be put to the test. Don't let the heat catch you off guard—these smart HVAC tips will keep your Barrie home cool and efficient all summer long.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">1. Schedule a Pre-Summer A/C Tune-Up</h2>
      
      <p class="text-lg mb-4">Before the heatwave hits, get a professional inspection. We check for:</p>
      <ul class="list-disc pl-8 space-y-2 text-lg mb-8">
        <li>Refrigerant levels</li>
        <li>Thermostat calibration</li>
        <li>Electrical connections</li>
        <li>Airflow and ductwork efficiency</li>
      </ul>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">2. Change or Clean Your Filters</h2>
      
      <p class="text-lg mb-8">Dirty filters make your system work harder and waste energy. Replace filters every 30–60 days for peak performance.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">3. Use a Smart Thermostat</h2>
      
      <p class="text-lg mb-8">Set your cooling schedule and avoid running the A/C while you're out. Small adjustments (like raising the temp a few degrees when you're away) can result in noticeable savings.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">4. Keep Curtains and Blinds Closed Midday</h2>
      
      <p class="text-lg mb-8">Block direct sunlight during the hottest hours. This simple habit helps reduce indoor temperature naturally.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">5. Clear Debris Around Outdoor Units</h2>
      
      <p class="text-lg mb-8">Leaves, grass, and dirt around your condenser unit restrict airflow. Clear at least 2 feet around the unit and rinse the coils gently.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">6. Seal Leaky Ducts</h2>
      
      <p class="text-lg mb-8">Up to 30% of cooled air can be lost through leaky ductwork. Ask us about a duct inspection if your system runs constantly.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">7. Don't Ignore Strange Noises or Weak Airflow</h2>
      
      <p class="text-lg mb-8">These can be early signs of bigger issues. Catching them early could save you hundreds in repair costs.</p>
      
      <div class="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 class="text-primary font-semibold text-xl mb-4">💡 Pro Tip</h3>
        <p class="text-lg">Regular maintenance not only keeps your system running efficiently but also extends its lifespan and prevents costly breakdowns during peak summer months.</p>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Stay Cool with RK Airsystems</h2>
      
      <p class="text-lg mb-8">We offer affordable tune-ups, emergency repair, and energy-saving upgrades designed for Ontario summers. Whether you need A/C maintenance or a full system upgrade, we're here to help.</p>
      
      <div class="text-lg font-medium mt-12">
        <span class="text-primary text-2xl mr-2">❄️</span>
        <strong class="text-primary">Ready to beat the heat?</strong> Call RK Airsystems today to prepare your home for a cooler, more efficient summer.
      </div>
    </div>
    `
  },
  'wifi-thermostat-upgrade': {
    title: 'Why Wi‑Fi Thermostats Are a Smart HVAC Upgrade',
    date: '2025-06-10',
    author: 'Rob Kloepfer',
    readTime: '5 min read',
    image: '/smart-thermostat.jpg',
    category: 'Energy Efficiency',
    excerpt: 'Discover how smart thermostats can save energy, provide remote control, and integrate with your smart home system.',
    content: `
    <div class="text-gray-900 leading-relaxed font-sans">
      <p class="text-lg mb-8">Modern problems require smart solutions—and when it comes to controlling your home's comfort, Wi-Fi thermostats are leading the way. These devices do more than just adjust the temperature—they learn your habits, maximize energy efficiency, and give you full control from anywhere in the world.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Benefits of Smart Thermostats</h2>
      
      <ul class="list-none space-y-4 mb-8">
        <li class="flex items-start">
          <span class="text-primary mr-3">📱</span>
          <div>
            <strong class="text-primary font-semibold">Remote Access</strong>
            <p class="text-lg">Use your smartphone to adjust settings from anywhere—whether you're at work, on vacation, or just in bed.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">🧠</span>
          <div>
            <strong class="text-primary font-semibold">Learning Algorithms</strong>
            <p class="text-lg">Many models learn your routines and automatically create efficient heating and cooling schedules.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">💰</span>
          <div>
            <strong class="text-primary font-semibold">Energy Savings</strong>
            <p class="text-lg">By reducing unnecessary heating or cooling, you can cut your energy bills by up to 15% annually.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">📊</span>
          <div>
            <strong class="text-primary font-semibold">Detailed Energy Reports</strong>
            <p class="text-lg">Get insights into your energy use and recommendations for optimization.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">🏠</span>
          <div>
            <strong class="text-primary font-semibold">Smart Integrations</strong>
            <p class="text-lg">Seamlessly integrates with Alexa, Google Home, or Apple HomeKit for full smart-home automation.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">👆</span>
          <div>
            <strong class="text-primary font-semibold">User-Friendly Interfaces</strong>
            <p class="text-lg">Modern designs with touchscreens, intuitive apps, and voice control capabilities.</p>
          </div>
        </li>
      </ul>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Are They Right for Your Home?</h2>
      
      <p class="text-lg mb-4">Wi-Fi thermostats are ideal if:</p>
      <ul class="list-disc pl-8 space-y-2 text-lg mb-8">
        <li>You travel frequently or are away during the day</li>
        <li>You want full control over your home's climate while on the go</li>
        <li>You're interested in tracking and reducing energy consumption</li>
        <li>You plan to upgrade other home systems to smart devices</li>
      </ul>
      
      <div class="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 class="text-primary font-semibold text-xl mb-4">Pro Tip</h3>
        <p class="text-lg">Homes with zoned heating/cooling benefit even more, as these thermostats can independently manage different areas.</p>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Popular Models We Recommend</h2>
      
      <div class="space-y-6 mb-8">
        <div class="border-l-4 border-primary pl-6">
          <h3 class="text-primary font-semibold text-xl mb-2">Ecobee Smart Thermostat Premium</h3>
          <p class="text-lg">Features built-in voice control, room sensors, and air quality monitoring.</p>
        </div>
        <div class="border-l-4 border-primary pl-6">
          <h3 class="text-primary font-semibold text-xl mb-2">Nest Learning Thermostat</h3>
          <p class="text-lg">Learns your habits in a week and optimizes without manual input.</p>
        </div>
        <div class="border-l-4 border-primary pl-6">
          <h3 class="text-primary font-semibold text-xl mb-2">Honeywell T9 Smart Thermostat</h3>
          <p class="text-lg">Great for large homes with multiple sensors.</p>
        </div>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">RK Airsystems: Your Installation Experts</h2>
      
      <p class="text-lg mb-8">Installing a Wi-Fi thermostat isn't always plug-and-play—compatibility with your furnace, AC, or heat pump matters. Our team at RK Airsystems ensures your new thermostat is correctly wired, configured, and integrated with your HVAC system. We'll also show you how to make the most of its features, including scheduling, app usage, and energy monitoring.</p>
      
      <p class="text-lg mb-8">Whether you're upgrading for convenience, efficiency, or environmental impact, we make it simple.</p>
      
      <div class="text-lg font-medium mt-12">
        <span class="text-primary text-2xl mr-2">🚀</span>
        <strong class="text-primary">Ready to upgrade?</strong> Call RK Airsystems today to book your smart thermostat consultation and bring your home comfort into the future.
      </div>
    </div>
    `
  },
  'air-conditioner-repair-barrie': {
    title: 'Air Conditioner Repair in Barrie: Tips Before You Call the Pros',
    date: '2025-06-27',
    author: 'Rob Kloepfer',
    readTime: '3 min read',
    image: '/ac-repair-barrie.jpg',
    category: 'Maintenance',
    excerpt: 'Learn essential AC troubleshooting tips and when to call professional help for your air conditioning system.',
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
    date: '2024-03-25',
    author: 'Rob Kloepfer',
    readTime: '4 min read',
    image: '/furnace-issue-image.webp',
    category: 'Maintenance',
    excerpt: 'Learn about common furnace issues, troubleshooting tips, and when to call professionals for your furnace repair needs in Barrie.',
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
    date: '2024-03-20',
    author: 'Rob Kloepfer',
    readTime: '5 min read',
    image: '/heat-pump-blog.webp',
    category: 'Energy Efficiency',
    excerpt: 'Discover how heat pumps can provide efficient heating and cooling while reducing your energy bills.',
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
    date: '2024-03-15',
    author: 'Rob Kloepfer',
    readTime: '4 min read',
    image: '/hvac-maintenance.webp',
    category: 'Maintenance',
    excerpt: 'Learn the key maintenance tasks that will keep your HVAC system running efficiently all year long.',
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
    date: '2024-03-10',
    author: 'Rob Kloepfer',
    readTime: '6 min read',
    image: '/air-quality-blog.webp',
    category: 'Air Quality',
    excerpt: 'Simple steps to enhance the air quality in your home and protect your family\'s health.',
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
  },
  'fall-hvac-preparation': {
    title: 'Fall HVAC Preparation: Get Your Home Ready for Winter',
    date: '2025-09-15',
    author: 'Rob Kloepfer',
    readTime: '5 min read',
    image: '/blog-sep.jpeg',
    category: 'Maintenance',
    excerpt: 'Essential fall maintenance tasks to ensure your heating system is ready for Barrie\'s cold winter months.',
    content: `
    <div class="text-gray-900 leading-relaxed font-sans">
      <p class="text-lg mb-8">As the leaves change color and temperatures begin to drop, it's time to shift your attention from cooling to heating. Fall is the perfect season to prepare your HVAC system for the harsh Barrie winters ahead. Taking proactive steps now can prevent costly emergency repairs when you need heat the most.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Why Fall Maintenance Matters</h2>
      
      <p class="text-lg mb-8">Your furnace has been idle for months, and dust, debris, and potential issues may have accumulated. A professional fall tune-up ensures your heating system will start reliably when the first cold snap arrives, keeping your family warm and your energy bills manageable.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Essential Fall HVAC Checklist</h2>
      
      <div class="space-y-8 mb-8">
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">1. Schedule Professional Furnace Inspection</h3>
          <p class="text-lg mb-4">A certified technician will check:</p>
          <ul class="list-disc pl-8 space-y-2 text-lg">
            <li>Heat exchanger for cracks or damage</li>
            <li>Burner assembly and ignition system</li>
            <li>Gas connections and pressure</li>
            <li>Blower motor and fan operation</li>
            <li>Thermostat calibration and functionality</li>
            <li>Air filter condition and replacement</li>
            <li>Ductwork for leaks or blockages</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">2. Replace or Clean Air Filters</h3>
          <p class="text-lg mb-4">Dirty filters restrict airflow, forcing your furnace to work harder and increasing energy costs. Replace filters before the heating season begins, and check them monthly throughout winter.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">3. Test Carbon Monoxide Detectors</h3>
          <p class="text-lg mb-4">Carbon monoxide is a silent, deadly threat. Test all detectors, replace batteries, and ensure they're installed near bedrooms and on each floor of your home.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">4. Clean Vents and Registers</h3>
          <p class="text-lg mb-4">Remove dust, pet hair, and debris from all supply and return vents. Ensure furniture, rugs, or curtains aren't blocking airflow.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">5. Inspect and Clean Outdoor Units</h3>
          <p class="text-lg mb-4">Clear leaves, branches, and debris from around your heat pump or AC condenser. Trim any vegetation that could obstruct airflow.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">6. Check Thermostat Settings</h3>
          <p class="text-lg mb-4">Test your thermostat to ensure it's responding correctly. Consider upgrading to a programmable or smart thermostat for better energy efficiency and comfort control.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">7. Seal Air Leaks</h3>
          <p class="text-lg mb-4">Inspect windows and doors for drafts. Seal gaps with weatherstripping or caulk to prevent heat loss and reduce heating costs.</p>
        </div>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 class="text-primary font-semibold text-xl mb-4">💡 Pro Tip</h3>
        <p class="text-lg">Schedule your fall maintenance in early September to avoid the rush. Many homeowners wait until the first cold day, which can lead to longer wait times and potential emergency service fees.</p>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Signs Your Furnace Needs Immediate Attention</h2>
      
      <div class="space-y-4 mb-8">
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <p class="text-lg">Unusual noises (banging, rattling, or squealing)</p>
        </div>
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <p class="text-lg">Frequent cycling on and off</p>
        </div>
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <p class="text-lg">Yellow or flickering flame (should be steady blue)</p>
        </div>
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <p class="text-lg">Uneven heating throughout your home</p>
        </div>
        <div class="flex items-start">
          <span class="text-primary mr-3">⚠️</span>
          <p class="text-lg">Increased energy bills without explanation</p>
        </div>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">RK Airsystems: Your Fall Preparation Partner</h2>
      
      <p class="text-lg mb-8">At RK Airsystems, we understand the importance of reliable heating during Barrie's cold winters. Our comprehensive fall maintenance service includes a complete system inspection, cleaning, and tune-up to ensure your furnace operates safely and efficiently all season long.</p>
      
      <p class="text-lg mb-8">We'll identify potential issues before they become costly problems, optimize your system's performance, and provide peace of mind knowing your home will stay warm when temperatures drop.</p>
      
      <div class="text-lg font-medium mt-12">
        <span class="text-primary text-2xl mr-2">🍂</span>
        <strong class="text-primary">Don't wait for the first cold snap.</strong> Schedule your fall HVAC maintenance with RK Airsystems today and ensure a warm, comfortable winter ahead.
      </div>
    </div>
    `
  },
  'winter-furnace-efficiency': {
    title: 'Maximizing Furnace Efficiency Before Winter Hits',
    date: '2025-10-18',
    author: 'Rob Kloepfer',
    readTime: '4 min read',
    image: '/blog-oct.jpeg',
    category: 'Energy Efficiency',
    excerpt: 'Learn how to optimize your furnace performance and reduce heating costs during the coldest months of the year.',
    content: `
    <div class="text-gray-900 leading-relaxed font-sans">
      <p class="text-lg mb-8">With winter approaching, your furnace is about to become your home's most important appliance. Maximizing its efficiency now can significantly reduce your heating costs and ensure reliable performance throughout the cold season. Here's how to get the most from your heating system.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Understanding Furnace Efficiency</h2>
      
      <p class="text-lg mb-8">Furnace efficiency is measured by AFUE (Annual Fuel Utilization Efficiency). Modern high-efficiency furnaces can achieve 90-98% AFUE, meaning they convert 90-98% of fuel into heat. Older systems may only reach 60-70% efficiency, wasting significant energy and money.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Key Strategies to Boost Efficiency</h2>
      
      <div class="space-y-8 mb-8">
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">1. Regular Professional Maintenance</h3>
          <p class="text-lg mb-4">Annual tune-ups are essential for maintaining peak efficiency. A professional technician will:</p>
          <ul class="list-disc pl-8 space-y-2 text-lg">
            <li>Clean burners and heat exchangers</li>
            <li>Check and adjust gas pressure</li>
            <li>Lubricate moving parts</li>
            <li>Inspect and clean the blower motor</li>
            <li>Test safety controls</li>
            <li>Optimize airflow</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">2. Upgrade to High-Efficiency Filters</h3>
          <p class="text-lg mb-4">While basic filters protect your system, high-efficiency filters (MERV 11-13) improve air quality and can help your furnace run more efficiently by keeping components cleaner. Change filters every 1-3 months during heating season.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">3. Install a Programmable or Smart Thermostat</h3>
          <p class="text-lg mb-4">Smart thermostats can reduce heating costs by 10-15% by automatically adjusting temperatures based on your schedule. Set your thermostat to lower temperatures when you're away or sleeping, and raise it only when needed.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">4. Seal and Insulate Ductwork</h3>
          <p class="text-lg mb-4">Leaky ducts can waste 20-30% of your heated air. Have your ductwork inspected and sealed by professionals. Insulating ducts in unconditioned spaces (like attics or crawl spaces) prevents heat loss.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">5. Improve Home Insulation</h3>
          <p class="text-lg mb-4">A well-insulated home reduces the workload on your furnace. Check insulation in attics, walls, and basements. Seal gaps around windows, doors, and electrical outlets to prevent drafts.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">6. Ensure Proper Airflow</h3>
          <p class="text-lg mb-4">Keep all supply and return vents unobstructed. Don't close vents in unused rooms—this can create pressure imbalances and reduce efficiency. Ensure furniture, curtains, and rugs aren't blocking airflow.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">7. Consider Zone Heating</h3>
          <p class="text-lg mb-4">If you have rooms that are rarely used, consider installing zone controls to heat only occupied areas. This can significantly reduce energy consumption in larger homes.</p>
        </div>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 class="text-primary font-semibold text-xl mb-4">💰 Cost-Saving Tip</h3>
        <p class="text-lg">Lowering your thermostat by just 2-3 degrees can save up to 5% on heating costs. Layer up with sweaters and blankets, and use your furnace only when necessary.</p>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">When to Consider a Furnace Upgrade</h2>
      
      <p class="text-lg mb-4">If your furnace is more than 15 years old or requires frequent repairs, upgrading to a high-efficiency model could save you hundreds of dollars annually. Modern furnaces offer:</p>
      
      <ul class="list-none space-y-4 mb-8">
        <li class="flex items-start">
          <span class="text-primary mr-3">✅</span>
          <div>
            <strong class="text-primary font-semibold">Higher AFUE ratings</strong>
            <p class="text-lg">Up to 98% efficiency compared to 60-70% for older models</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">✅</span>
          <div>
            <strong class="text-primary font-semibold">Variable-speed blowers</strong>
            <p class="text-lg">More consistent temperatures and quieter operation</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">✅</span>
          <div>
            <strong class="text-primary font-semibold">Better air filtration</strong>
            <p class="text-lg">Improved indoor air quality</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">✅</span>
          <div>
            <strong class="text-primary font-semibold">Smart technology integration</strong>
            <p class="text-lg">Compatible with modern smart home systems</p>
          </div>
        </li>
      </ul>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">RK Airsystems: Efficiency Experts</h2>
      
      <p class="text-lg mb-8">At RK Airsystems, we specialize in optimizing furnace performance and reducing energy costs. Whether you need maintenance, repairs, or a complete system upgrade, our certified technicians will ensure your heating system operates at peak efficiency.</p>
      
      <p class="text-lg mb-8">We offer comprehensive efficiency assessments, professional maintenance services, and expert guidance on upgrades that will save you money while keeping your home comfortable all winter long.</p>
      
      <div class="text-lg font-medium mt-12">
        <span class="text-primary text-2xl mr-2">🔥</span>
        <strong class="text-primary">Maximize your furnace efficiency today.</strong> Contact RK Airsystems for a professional assessment and start saving on your heating costs this winter.
      </div>
    </div>
    `
  },
  'energy-saving-winter-tips': {
    title: 'Energy-Saving HVAC Tips for Cold Weather',
    date: '2025-11-12',
    author: 'Rob Kloepfer',
    readTime: '5 min read',
    image: '/blog-nov.jpeg',
    category: 'Energy Efficiency',
    excerpt: 'Practical strategies to keep your home warm and comfortable while minimizing energy consumption this winter.',
    content: `
    <div class="text-gray-900 leading-relaxed font-sans">
      <p class="text-lg mb-8">As temperatures drop in Barrie, heating costs can quickly become a significant expense. However, with the right strategies, you can maintain a comfortable home while keeping your energy bills manageable. These practical tips will help you save money without sacrificing comfort during the coldest months.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Smart Thermostat Management</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Optimal Temperature Settings</h3>
          <p class="text-lg mb-4">The ideal winter thermostat settings balance comfort and efficiency:</p>
          <ul class="list-disc pl-8 space-y-2 text-lg">
            <li><strong>68-70°F (20-21°C)</strong> when you're home and awake</li>
            <li><strong>62-65°F (16-18°C)</strong> when you're sleeping or away</li>
            <li>Lower temperatures at night can improve sleep quality and save energy</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Use Programmable Schedules</h3>
          <p class="text-lg">Set your thermostat to automatically lower temperatures during work hours and overnight. A programmable or smart thermostat can reduce heating costs by 10-15% without any noticeable impact on comfort.</p>
        </div>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Home Sealing and Insulation</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Seal Air Leaks</h3>
          <p class="text-lg mb-4">Common areas where heat escapes:</p>
          <ul class="list-disc pl-8 space-y-2 text-lg">
            <li>Windows and doors (use weatherstripping and caulk)</li>
            <li>Electrical outlets and switch plates (install foam gaskets)</li>
            <li>Baseboards and crown molding</li>
            <li>Attic hatches and access doors</li>
            <li>Plumbing penetrations</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Improve Insulation</h3>
          <p class="text-lg mb-4">Check and upgrade insulation in:</p>
          <ul class="list-disc pl-8 space-y-2 text-lg">
            <li>Attic (should have at least R-38 to R-60)</li>
            <li>Exterior walls (R-13 to R-21)</li>
            <li>Basement or crawl space</li>
            <li>Around ductwork in unconditioned spaces</li>
          </ul>
        </div>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">HVAC System Optimization</h2>
      
      <ul class="list-none space-y-4 mb-8">
        <li class="flex items-start">
          <span class="text-primary mr-3">🔧</span>
          <div>
            <strong class="text-primary font-semibold">Regular Filter Changes</strong>
            <p class="text-lg">Replace air filters every 1-3 months. Dirty filters restrict airflow, forcing your furnace to work harder and consume more energy.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">🔧</span>
          <div>
            <strong class="text-primary font-semibold">Keep Vents Clear</strong>
            <p class="text-lg">Ensure all supply and return vents are unobstructed. Don't close vents in unused rooms—this can reduce system efficiency.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">🔧</span>
          <div>
            <strong class="text-primary font-semibold">Professional Maintenance</strong>
            <p class="text-lg">Annual tune-ups keep your system running efficiently. A well-maintained furnace uses 15-20% less energy than a neglected one.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">🔧</span>
          <div>
            <strong class="text-primary font-semibold">Seal Ductwork</strong>
            <p class="text-lg">Leaky ducts can waste 20-30% of heated air. Have your ducts professionally sealed and insulated, especially in unconditioned spaces.</p>
          </div>
        </li>
      </ul>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Lifestyle Adjustments for Energy Savings</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Use Natural Heat Sources</h3>
          <p class="text-lg">Open curtains on south-facing windows during sunny days to let solar heat in. Close them at night to retain heat and block cold drafts.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Layer Up</h3>
          <p class="text-lg">Wearing sweaters and using blankets allows you to keep your thermostat lower while staying comfortable. Every degree you lower can save 3-5% on heating costs.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Use Ceiling Fans</h3>
          <p class="text-lg">Reverse your ceiling fan direction to clockwise (winter mode) at low speed. This pushes warm air down from the ceiling, improving comfort and allowing lower thermostat settings.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Close Unused Rooms</h3>
          <p class="text-lg">If you have rooms you rarely use, close the doors and vents to focus heat on occupied areas. However, don't close too many vents as this can strain your system.</p>
        </div>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 class="text-primary font-semibold text-xl mb-4">💡 Quick Wins</h3>
        <ul class="list-none space-y-3">
          <li class="flex items-start">
            <span class="text-primary mr-3">✓</span>
            <p class="text-lg">Lower thermostat by 2-3 degrees: Save 5-10% on heating costs</p>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-3">✓</span>
            <p class="text-lg">Seal air leaks: Save 10-20% on energy bills</p>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-3">✓</span>
            <p class="text-lg">Use programmable thermostat: Save 10-15% automatically</p>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-3">✓</span>
            <p class="text-lg">Maintain your system: Save 15-20% through efficiency</p>
          </li>
        </ul>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Monitor Your Energy Usage</h2>
      
      <p class="text-lg mb-8">Track your energy consumption to identify patterns and opportunities for savings. Many utility companies offer online tools to monitor daily usage. Compare this year's bills to last year's to see the impact of your efficiency improvements.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">RK Airsystems: Your Energy Efficiency Partner</h2>
      
      <p class="text-lg mb-8">At RK Airsystems, we help Barrie homeowners reduce energy costs while maintaining comfort. Our services include energy audits, system optimization, professional maintenance, and expert advice on upgrades that deliver the best return on investment.</p>
      
      <p class="text-lg mb-8">Whether you need a simple tune-up or a complete efficiency upgrade, we'll help you create a more energy-efficient home that saves money all winter long.</p>
      
      <div class="text-lg font-medium mt-12">
        <span class="text-primary text-2xl mr-2">❄️</span>
        <strong class="text-primary">Start saving on heating costs today.</strong> Contact RK Airsystems for a professional energy assessment and discover how much you can save this winter.
      </div>
    </div>
    `
  },
  'holiday-hvac-tips': {
    title: 'Holiday Season HVAC Tips: Keep Your Home Comfortable',
    date: '2025-12-08',
    author: 'Rob Kloepfer',
    readTime: '4 min read',
    image: '/blog-dec.jpeg',
    category: 'Maintenance',
    excerpt: 'Essential HVAC maintenance and efficiency tips to ensure a warm, comfortable home during the holiday season.',
    content: `
    <div class="text-gray-900 leading-relaxed font-sans">
      <p class="text-lg mb-8">The holiday season brings family gatherings, festive celebrations, and increased activity in your home. With more people, more cooking, and more time spent indoors, your HVAC system faces unique challenges. These tips will help ensure your home stays comfortable and your system runs efficiently throughout the holidays.</p>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Pre-Holiday HVAC Preparation</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">1. Schedule Pre-Holiday Maintenance</h3>
          <p class="text-lg mb-4">Before guests arrive, ensure your system is in top condition:</p>
          <ul class="list-disc pl-8 space-y-2 text-lg">
            <li>Replace air filters (especially important with increased indoor activity)</li>
            <li>Test your heating system to ensure reliable operation</li>
            <li>Check thermostat functionality</li>
            <li>Inspect and clean vents and registers</li>
            <li>Verify carbon monoxide detectors are working</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">2. Test Your System Early</h3>
          <p class="text-lg">Don't wait until the first cold snap or when guests arrive. Test your heating system in early December to identify any issues while you still have time for repairs.</p>
        </div>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Managing Increased Indoor Activity</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Adjust Thermostat for Guests</h3>
          <p class="text-lg mb-4">With more people in your home, you may need to adjust your thermostat:</p>
          <ul class="list-disc pl-8 space-y-2 text-lg">
            <li>More bodies generate heat, so you might be able to lower the thermostat slightly</li>
            <li>Use a smart thermostat to maintain consistent temperatures</li>
            <li>Consider zone heating if you have guests in specific areas</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Improve Air Circulation</h3>
          <p class="text-lg">With more people and cooking activities, air quality can suffer. Ensure proper ventilation by:</p>
          <ul class="list-disc pl-8 space-y-2 text-lg mt-4">
            <li>Using kitchen exhaust fans while cooking</li>
            <li>Opening windows briefly for fresh air exchange</li>
            <li>Ensuring return vents aren't blocked by furniture or decorations</li>
            <li>Running bathroom exhaust fans to reduce humidity</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Manage Humidity Levels</h3>
          <p class="text-lg">Holiday cooking, showers, and more people can increase indoor humidity. Monitor humidity levels (ideal: 30-50%) and use exhaust fans or a dehumidifier if needed to prevent condensation and mold growth.</p>
        </div>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Holiday-Specific Considerations</h2>
      
      <ul class="list-none space-y-4 mb-8">
        <li class="flex items-start">
          <span class="text-primary mr-3">🎄</span>
          <div>
            <strong class="text-primary font-semibold">Keep Decorations Away from Vents</strong>
            <p class="text-lg">Ensure holiday decorations, trees, and furniture don't block supply or return vents. Blocked vents reduce efficiency and can cause system strain.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">🔥</span>
          <div>
            <strong class="text-primary font-semibold">Fireplace Use</strong>
            <p class="text-lg">If using a fireplace, close the damper when not in use to prevent heat loss. Consider turning down your thermostat when the fireplace is active to save energy.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">🍽️</span>
          <div>
            <strong class="text-primary font-semibold">Kitchen Heat Management</strong>
            <p class="text-lg">Oven and stovetop use generates significant heat. Use exhaust fans and consider slightly lowering your thermostat when cooking large meals.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-primary mr-3">🚪</span>
          <div>
            <strong class="text-primary font-semibold">Minimize Door Opening</strong>
            <p class="text-lg">Frequent door opening lets cold air in. Use a door mat and try to minimize how long doors stay open, especially during cold weather.</p>
          </div>
        </li>
      </ul>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Emergency Preparedness</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Know Your Emergency Contacts</h3>
          <p class="text-lg">Keep RK Airsystems' contact information handy in case of heating emergencies during the holidays. We offer 24/7 emergency service to ensure your home stays warm.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Have Backup Heating Options</h3>
          <p class="text-lg">Consider having space heaters (used safely) or fireplace as backup options. Never use outdoor heating equipment indoors.</p>
        </div>
        
        <div>
          <h3 class="text-primary font-semibold text-xl mb-3">Check Carbon Monoxide Detectors</h3>
          <p class="text-lg">With increased heating system use and potential fireplace operation, ensure all carbon monoxide detectors have fresh batteries and are functioning properly.</p>
        </div>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 class="text-primary font-semibold text-xl mb-4">🎁 Holiday Gift Idea</h3>
        <p class="text-lg">A smart thermostat makes a great gift and can help manage comfort and energy costs during the holidays. Many models allow remote control, so you can adjust temperatures even when away from home.</p>
      </div>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">Energy Efficiency During the Holidays</h2>
      
      <p class="text-lg mb-4">While comfort is important during gatherings, you can still be energy-efficient:</p>
      
      <ul class="list-disc pl-8 space-y-2 text-lg mb-8">
        <li>Lower the thermostat when guests are active (body heat helps warm the space)</li>
        <li>Use LED holiday lights (they generate less heat and use less energy)</li>
        <li>Close curtains at night to retain heat</li>
        <li>Don't overheat unused guest rooms</li>
        <li>Use zone heating if available to heat only occupied areas</li>
      </ul>
      
      <h2 class="text-primary font-bold text-3xl mt-12 mb-6">RK Airsystems: Your Holiday HVAC Partner</h2>
      
      <p class="text-lg mb-8">At RK Airsystems, we understand how important reliable heating is during the holiday season. Whether you need pre-holiday maintenance, emergency repairs, or system upgrades, we're here to ensure your home stays comfortable for all your celebrations.</p>
      
      <p class="text-lg mb-8">Don't let HVAC issues disrupt your holiday plans. Schedule maintenance now, and rest easy knowing your system is ready for whatever winter brings.</p>
      
      <div class="text-lg font-medium mt-12">
        <span class="text-primary text-2xl mr-2">🎅</span>
        <strong class="text-primary">Keep the warmth in and the cold out this holiday season.</strong> Contact RK Airsystems today for pre-holiday maintenance or emergency service when you need it most.
      </div>
    </div>
    `
  }
};

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];

  if (!post) {
    return {
      title: 'Blog Post Not Found | RK AirSystems',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | RK AirSystems`,
    description: post.excerpt,
    keywords: `HVAC, ${post.category.toLowerCase()}, Barrie, ${post.title.toLowerCase()}, air conditioning, heating, furnace repair`,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.rkairsystems.ca/blogs/${resolvedParams.slug}`,
      siteName: 'RK AirSystems',
      locale: 'en_CA',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `https://www.rkairsystems.ca${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`https://www.rkairsystems.ca${post.image}`],
    },
    alternates: {
      canonical: `https://www.rkairsystems.ca/blogs/${resolvedParams.slug}`,
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
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
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
              <div className="text-gray-600">HVAC Expert</div>
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

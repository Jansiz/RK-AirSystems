// RK AirSystems Knowledge Base - Offline FAQ Database
// Contains common HVAC questions and answers for the chatbot

export interface FAQEntry {
  id: string;
  question: string;
  keywords: string[]; // Keywords for intent matching
  answer: string; // 2-6 short lines, friendly and concise
  category: 'maintenance' | 'repair' | 'installation' | 'emergency' | 'pricing' | 'general';
  ctaType?: 'consultation' | 'service' | 'emergency' | 'none'; // When to show CTA
  intentKeywords?: string[]; // Additional keywords for better matching
}

export const knowledgeBase: FAQEntry[] = [
  // Emergency/Safety Questions (highest priority)
  {
    id: 'gas-smell',
    question: 'I smell gas in my home',
    keywords: ['gas', 'smell', 'odor', 'leak', 'natural gas', 'propane', 'mercaptan'],
    answer: 'If you smell gas, this is an emergency. Immediately evacuate your home, do not use any electrical switches or appliances, and call your gas company or 911 from a safe location outside. Do not return until professionals have cleared the area.',
    category: 'emergency',
    ctaType: 'emergency',
    intentKeywords: ['gas smell', 'gas leak', 'smell gas', 'gas odor']
  },
  {
    id: 'co-alarm',
    question: 'My carbon monoxide alarm is going off',
    keywords: ['carbon monoxide', 'co alarm', 'co detector', 'co2', 'alarm beeping'],
    answer: 'If your CO alarm sounds, evacuate immediately and call 911. Carbon monoxide is odorless and deadly. Do not re-enter until emergency services clear your home. We can inspect your HVAC system afterward to identify the source.',
    category: 'emergency',
    ctaType: 'emergency',
    intentKeywords: ['co alarm', 'carbon monoxide', 'co detector', 'alarm']
  },
  {
    id: 'sparking-smoke',
    question: 'I see sparks or smoke from my HVAC system',
    keywords: ['spark', 'sparking', 'smoke', 'burning', 'fire', 'electrical', 'smell burning'],
    answer: 'Turn off your HVAC system immediately at the breaker. If you see flames or heavy smoke, evacuate and call 911. Electrical issues can be dangerous. We provide 24/7 emergency service for urgent HVAC problems.',
    category: 'emergency',
    ctaType: 'emergency',
    intentKeywords: ['spark', 'smoke', 'burning', 'fire', 'electrical']
  },

  // Furnace Questions
  {
    id: 'furnace-not-heating',
    question: 'My furnace is not heating',
    keywords: ['furnace', 'not heating', 'no heat', 'cold', 'winter', 'heating', 'wont heat'],
    answer: 'Check your thermostat settings first - ensure it\'s set to "Heat" and the temperature is above room temp. Check the circuit breaker and furnace filter (dirty filters can cause shutdowns). If these are fine, you may need professional service. We offer same-day furnace repair in Barrie.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['furnace not working', 'no heat', 'furnace repair', 'heating problem']
  },
  {
    id: 'furnace-blowing-cold',
    question: 'My furnace is blowing cold air',
    keywords: ['furnace', 'cold air', 'blowing cold', 'not warm', 'cool air'],
    answer: 'This could be a pilot light issue, faulty igniter, or blocked air filter. Check if your furnace filter needs replacing (every 1-3 months). If the filter is clean, the igniter or gas valve may need repair. We can diagnose and fix this quickly.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['cold air', 'furnace cold', 'blowing cold']
  },
  {
    id: 'furnace-noise',
    question: 'My furnace is making strange noises',
    keywords: ['furnace', 'noise', 'loud', 'banging', 'rattling', 'squealing', 'grinding', 'humming'],
    answer: 'Unusual noises often indicate mechanical issues. Banging could be a delayed ignition, rattling might be loose parts, and squealing suggests a belt problem. We recommend scheduling a service call to prevent further damage. Regular maintenance helps catch these issues early.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['furnace noise', 'loud furnace', 'strange noise']
  },
  {
    id: 'furnace-maintenance',
    question: 'How often should I service my furnace?',
    keywords: ['furnace', 'maintenance', 'service', 'tune-up', 'inspection', 'annual', 'yearly'],
    answer: 'We recommend annual furnace maintenance in the fall, before heating season. This includes cleaning, filter replacement, safety checks, and efficiency testing. Regular maintenance prevents breakdowns, improves efficiency, and extends your furnace\'s lifespan. Book your fall tune-up today!',
    category: 'maintenance',
    ctaType: 'consultation',
    intentKeywords: ['furnace maintenance', 'service schedule', 'tune-up']
  },

  // Air Conditioning Questions
  {
    id: 'ac-not-cooling',
    question: 'My air conditioner is not cooling',
    keywords: ['ac', 'air conditioner', 'not cooling', 'warm air', 'not cold', 'summer', 'hot'],
    answer: 'First, check your thermostat (set to "Cool" and below room temp) and clean/replace the air filter. If the outdoor unit is dirty or blocked, clean around it. Low refrigerant or a faulty compressor may require professional repair. We offer same-day AC service in Barrie.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['ac not working', 'not cooling', 'ac repair', 'air conditioner problem']
  },
  {
    id: 'ac-freezing',
    question: 'My air conditioner is frozen or icing up',
    keywords: ['ac', 'frozen', 'ice', 'icing', 'frost', 'ice buildup'],
    answer: 'Turn off your AC immediately to prevent damage. Common causes: dirty air filter, low refrigerant, or blocked airflow. Let it thaw completely (6-8 hours), then check the filter. If it freezes again, you likely need professional service to check refrigerant levels.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['ac frozen', 'ice on ac', 'freezing']
  },
  {
    id: 'ac-maintenance',
    question: 'How often should I service my air conditioner?',
    keywords: ['ac', 'air conditioner', 'maintenance', 'service', 'tune-up', 'spring'],
    answer: 'Annual AC maintenance in the spring is ideal, before cooling season. We clean coils, check refrigerant, test components, and ensure optimal efficiency. This prevents summer breakdowns and keeps your energy bills low. Schedule your spring tune-up now!',
    category: 'maintenance',
    ctaType: 'consultation',
    intentKeywords: ['ac maintenance', 'service schedule', 'tune-up']
  },

  // Heat Pump Questions
  {
    id: 'heat-pump-benefits',
    question: 'What are the benefits of a heat pump?',
    keywords: ['heat pump', 'benefits', 'advantages', 'efficient', 'heating cooling', 'year round'],
    answer: 'Heat pumps provide both heating and cooling in one system, are highly energy-efficient (can reduce bills by 30-50%), and work well in Barrie\'s climate. They\'re quieter than traditional systems and qualify for rebates. We offer free consultations to see if a heat pump is right for your home.',
    category: 'general',
    ctaType: 'consultation',
    intentKeywords: ['heat pump', 'benefits', 'efficiency']
  },
  {
    id: 'heat-pump-not-working',
    question: 'My heat pump is not working',
    keywords: ['heat pump', 'not working', 'broken', 'not heating', 'not cooling'],
    answer: 'Check your thermostat settings and circuit breaker first. Heat pumps can have issues with the reversing valve, compressor, or refrigerant levels. We specialize in heat pump repair and can diagnose the problem quickly. Same-day service available.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['heat pump repair', 'not working', 'broken']
  },

  // Thermostat Questions
  {
    id: 'smart-thermostat',
    question: 'Should I upgrade to a smart thermostat?',
    keywords: ['smart thermostat', 'wifi thermostat', 'nest', 'ecobee', 'upgrade', 'programmable'],
    answer: 'Smart thermostats can save 10-15% on energy bills by learning your schedule and optimizing temperature. They offer remote control via phone, energy reports, and integration with smart home systems. We install and program smart thermostats - ask about our free consultation!',
    category: 'installation',
    ctaType: 'consultation',
    intentKeywords: ['smart thermostat', 'wifi thermostat', 'upgrade']
  },
  {
    id: 'thermostat-not-working',
    question: 'My thermostat is not working',
    keywords: ['thermostat', 'not working', 'broken', 'not responding', 'display blank'],
    answer: 'Check the batteries if it\'s battery-powered, and ensure the circuit breaker is on. Sometimes a simple reset (turn off for 30 seconds) fixes issues. If problems persist, the thermostat may need replacement. We can install a new programmable or smart thermostat.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['thermostat repair', 'not working', 'broken']
  },

  // Air Quality Questions
  {
    id: 'air-quality',
    question: 'How can I improve my indoor air quality?',
    keywords: ['air quality', 'indoor air', 'allergies', 'dust', 'pollution', 'clean air', 'filters'],
    answer: 'Replace HVAC filters regularly (every 1-3 months), consider a higher MERV rating filter, and ensure proper ventilation. We offer air purifiers, UV lights, and whole-home air quality solutions. Book a free consultation to assess your home\'s air quality needs.',
    category: 'general',
    ctaType: 'consultation',
    intentKeywords: ['air quality', 'indoor air', 'allergies', 'clean air']
  },
  {
    id: 'filter-replacement',
    question: 'How often should I replace my HVAC filter?',
    keywords: ['filter', 'replace', 'change', 'air filter', 'furnace filter', 'ac filter', 'how often'],
    answer: 'Standard filters should be replaced every 1-3 months, depending on usage and home conditions (pets, allergies, etc.). High-efficiency filters may last 6-12 months. A dirty filter reduces efficiency and can cause system problems. We can help you choose the right filter.',
    category: 'maintenance',
    ctaType: 'none',
    intentKeywords: ['filter replacement', 'change filter', 'how often']
  },

  // Pricing & Service Questions
  {
    id: 'service-cost',
    question: 'How much does HVAC service cost?',
    keywords: ['cost', 'price', 'pricing', 'how much', 'service cost', 'repair cost', 'expensive'],
    answer: 'Service costs depend on the specific job and work needed. We provide upfront estimates before any work so you know exactly what to expect. We offer competitive rates and can discuss financing options for larger projects. Contact us for a free estimate!',
    category: 'pricing',
    ctaType: 'consultation',
    intentKeywords: ['cost', 'price', 'pricing', 'how much']
  },
  {
    id: 'free-consultation',
    question: 'Do you offer free consultations?',
    keywords: ['free', 'consultation', 'estimate', 'quote', 'assessment', 'inspection'],
    answer: 'Yes! We offer free consultations and estimates for all HVAC services. Our expert technicians will assess your system, discuss options, and provide transparent pricing with no obligation. Book your free consultation today - we serve Barrie and surrounding areas.',
    category: 'general',
    ctaType: 'consultation',
    intentKeywords: ['free consultation', 'estimate', 'quote']
  },
  {
    id: 'service-area',
    question: 'Do you service my area?',
    keywords: ['service area', 'location', 'barrie', 'surrounding', 'where', 'coverage'],
    answer: 'We service Barrie and surrounding areas including Orillia, Innisfil, Alliston, and nearby communities. Contact us to confirm we cover your location. We\'re committed to providing professional HVAC services throughout Simcoe County.',
    category: 'general',
    ctaType: 'none',
    intentKeywords: ['service area', 'location', 'barrie']
  },
  {
    id: 'emergency-service',
    question: 'Do you offer 24/7 emergency service?',
    keywords: ['emergency', '24/7', 'after hours', 'weekend', 'urgent', 'same day'],
    answer: 'Yes, we provide 24/7 emergency HVAC service for urgent situations like no heat in winter, AC failure in summer, or safety concerns. We understand HVAC emergencies can\'t wait. Call us anytime for immediate assistance.',
    category: 'general',
    ctaType: 'emergency',
    intentKeywords: ['emergency service', '24/7', 'after hours']
  },

  // Installation Questions
  {
    id: 'new-installation',
    question: 'Do you install new HVAC systems?',
    keywords: ['install', 'installation', 'new system', 'replace', 'upgrade', 'new furnace', 'new ac'],
    answer: 'Absolutely! We install furnaces, air conditioners, heat pumps, and complete HVAC systems. We help you choose the right size and efficiency for your home, handle permits, and ensure proper installation. Ask about our free consultation and financing options.',
    category: 'installation',
    ctaType: 'consultation',
    intentKeywords: ['installation', 'new system', 'replace', 'upgrade']
  },
  {
    id: 'system-size',
    question: 'What size HVAC system do I need?',
    keywords: ['size', 'tonnage', 'btu', 'capacity', 'how big', 'square footage'],
    answer: 'System size depends on your home\'s square footage, insulation, windows, and climate. Oversized or undersized systems cause efficiency problems. We perform proper load calculations to determine the right size. Book a free consultation for an accurate assessment.',
    category: 'installation',
    ctaType: 'consultation',
    intentKeywords: ['system size', 'tonnage', 'btu', 'capacity']
  },

  // General Maintenance
  {
    id: 'hvac-maintenance-tips',
    question: 'What are essential HVAC maintenance tips?',
    keywords: ['maintenance', 'tips', 'care', 'upkeep', 'prevent', 'maintain'],
    answer: 'Key tips: replace filters every 1-3 months, keep outdoor units clear of debris, schedule annual professional tune-ups, check thermostat batteries, and ensure proper airflow around vents. Regular maintenance prevents costly repairs and keeps systems running efficiently.',
    category: 'maintenance',
    ctaType: 'consultation',
    intentKeywords: ['maintenance tips', 'care', 'upkeep']
  },
  {
    id: 'energy-savings',
    question: 'How can I save on energy bills?',
    keywords: ['energy', 'save', 'bills', 'efficient', 'cost', 'reduce', 'lower'],
    answer: 'Regular maintenance, proper filter replacement, programmable thermostats, and sealing ductwork can significantly reduce energy costs. Upgrading to a high-efficiency system may save 20-40% on bills. We offer free energy assessments to identify savings opportunities.',
    category: 'general',
    ctaType: 'consultation',
    intentKeywords: ['energy savings', 'lower bills', 'efficient']
  },

  // Additional Common Questions
  {
    id: 'furnace-short-cycling',
    question: 'My furnace keeps turning on and off',
    keywords: ['furnace', 'short cycling', 'turning on off', 'cycling', 'frequent', 'starts stops'],
    answer: 'Short cycling (frequent on/off) can be caused by a dirty filter, oversized system, faulty thermostat, or blocked vents. This wastes energy and wears out components. We can diagnose the cause and fix it quickly. Schedule a service call today.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['short cycling', 'turning on off', 'frequent cycling']
  },
  {
    id: 'uneven-heating',
    question: 'Some rooms are colder than others',
    keywords: ['uneven', 'cold rooms', 'hot cold', 'temperature', 'rooms different', 'some warm'],
    answer: 'Uneven heating often indicates blocked vents, leaky ductwork, or an undersized system. Check that all vents are open and unobstructed. Ductwork issues may need professional repair. We can assess your system and balance airflow throughout your home.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['uneven heating', 'cold rooms', 'temperature differences']
  },
  {
    id: 'high-energy-bills',
    question: 'My energy bills are too high',
    keywords: ['high bills', 'expensive', 'energy cost', 'bills high', 'costly', 'electricity'],
    answer: 'High bills often result from inefficient systems, poor insulation, leaky ducts, or outdated equipment. We offer energy audits to identify issues. Upgrading to a high-efficiency system or improving ductwork can significantly reduce costs. Book a free assessment!',
    category: 'general',
    ctaType: 'consultation',
    intentKeywords: ['high bills', 'expensive', 'energy cost']
  },
  {
    id: 'furnace-wont-start',
    question: 'My furnace won\'t start or turn on',
    keywords: ['furnace', 'wont start', 'not starting', 'not turning on', 'dead', 'no power'],
    answer: 'Check the circuit breaker, thermostat settings, and gas valve. Ensure the filter is clean (dirty filters can prevent startup). If the pilot light is out, you may need professional relighting. We provide same-day service for no-heat emergencies.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['wont start', 'not starting', 'not turning on']
  },
  {
    id: 'ac-water-leak',
    question: 'My air conditioner is leaking water',
    keywords: ['ac', 'leaking', 'water', 'drip', 'condensation', 'puddle', 'moisture'],
    answer: 'AC units produce condensation that should drain away. If you see water, the drain line may be clogged or the unit may be frozen. Check the drain pan and line. We can clear blockages and ensure proper drainage. Don\'t ignore leaks - they can cause damage.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['leaking water', 'water leak', 'dripping']
  },
  {
    id: 'furnace-pilot-light',
    question: 'My furnace pilot light keeps going out',
    keywords: ['pilot light', 'pilot', 'flame out', 'wont stay lit', 'igniter'],
    answer: 'A pilot light that won\'t stay lit could indicate a dirty thermocouple, gas supply issue, or draft problem. Modern furnaces use electronic igniters instead. We can inspect and repair ignition systems safely. Don\'t attempt to relight if you smell gas.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['pilot light', 'flame out', 'igniter']
  },
  {
    id: 'ac-not-turning-on',
    question: 'My air conditioner won\'t turn on',
    keywords: ['ac', 'wont turn on', 'not starting', 'dead', 'no power', 'not working'],
    answer: 'Check the circuit breaker, thermostat (set to "Cool" and below room temp), and that the outdoor unit isn\'t blocked. A tripped breaker or faulty capacitor may prevent startup. We offer same-day AC repair service in Barrie.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['wont turn on', 'not starting', 'ac not working']
  },
  {
    id: 'duct-cleaning',
    question: 'Do I need duct cleaning?',
    keywords: ['duct cleaning', 'ductwork', 'air ducts', 'clean ducts', 'dirty ducts'],
    answer: 'Duct cleaning is recommended if you see visible mold, excessive dust, or have had pest issues. It can improve air quality and system efficiency. We offer professional duct cleaning services. Ask about our free consultation to assess if your ducts need cleaning.',
    category: 'maintenance',
    ctaType: 'consultation',
    intentKeywords: ['duct cleaning', 'clean ducts', 'ductwork']
  },
  {
    id: 'when-replace-furnace',
    question: 'When should I replace my furnace?',
    keywords: ['replace furnace', 'new furnace', 'old furnace', 'age', 'when replace', 'upgrade'],
    answer: 'Consider replacing if your furnace is over 15-20 years old, needs frequent repairs, or has rising energy bills. New high-efficiency models can save 20-40% on heating costs. We offer free consultations to assess if replacement makes sense for your home.',
    category: 'installation',
    ctaType: 'consultation',
    intentKeywords: ['replace furnace', 'new furnace', 'when to replace']
  },
  {
    id: 'when-replace-ac',
    question: 'When should I replace my air conditioner?',
    keywords: ['replace ac', 'new ac', 'old ac', 'age', 'when replace', 'upgrade ac'],
    answer: 'Consider replacement if your AC is over 10-15 years old, needs frequent repairs, or isn\'t cooling effectively. New energy-efficient models can significantly reduce cooling costs. We can assess your system and provide replacement options with free estimates.',
    category: 'installation',
    ctaType: 'consultation',
    intentKeywords: ['replace ac', 'new ac', 'when to replace']
  },
  {
    id: 'humidity-problems',
    question: 'My home is too humid or too dry',
    keywords: ['humidity', 'humid', 'dry', 'moisture', 'mold', 'condensation', 'damp'],
    answer: 'High humidity can cause mold and discomfort; low humidity dries out skin and wood. Your HVAC system should maintain 30-50% humidity. We can install whole-home humidifiers or dehumidifiers, or check if your system needs adjustment. Book a consultation!',
    category: 'general',
    ctaType: 'consultation',
    intentKeywords: ['humidity', 'humid', 'dry air']
  },
  {
    id: 'ac-loud-noise',
    question: 'My air conditioner is very loud',
    keywords: ['ac', 'loud', 'noise', 'noisy', 'grinding', 'rattling', 'buzzing'],
    answer: 'Loud AC units may have loose parts, failing compressor, or debris in the outdoor unit. Unusual noises often indicate mechanical problems that need attention. We can diagnose and repair noisy systems. Don\'t ignore loud sounds - they may signal serious issues.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['loud ac', 'noisy', 'ac noise']
  },
  {
    id: 'furnace-error-code',
    question: 'My furnace is showing an error code',
    keywords: ['error code', 'fault code', 'flashing light', 'error', 'code', 'troubleshooting'],
    answer: 'Error codes help diagnose issues. Common codes indicate filter problems, ignition failures, or sensor issues. Check your owner\'s manual, but many codes require professional service. We can diagnose and fix error code issues quickly.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['error code', 'fault code', 'flashing']
  },
  {
    id: 'ac-tripping-breaker',
    question: 'My AC keeps tripping the circuit breaker',
    keywords: ['tripping breaker', 'circuit breaker', 'power', 'electrical', 'shutting off'],
    answer: 'A tripping breaker can indicate an electrical problem, compressor issue, or overloaded circuit. Don\'t keep resetting it - this is a safety concern. We can diagnose electrical issues and repair them safely. Same-day service available for urgent problems.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['tripping breaker', 'circuit breaker', 'electrical']
  },
  {
    id: 'winter-prep',
    question: 'How do I prepare my HVAC for winter?',
    keywords: ['winter', 'prepare', 'winterize', 'cold weather', 'heating season', 'fall'],
    answer: 'Schedule fall furnace maintenance, replace filters, check thermostat batteries, clear outdoor units, and test your heating system before cold weather. We offer fall tune-ups to ensure your system is ready. Book your maintenance appointment today!',
    category: 'maintenance',
    ctaType: 'consultation',
    intentKeywords: ['winter prep', 'winterize', 'fall maintenance']
  },
  {
    id: 'summer-prep',
    question: 'How do I prepare my AC for summer?',
    keywords: ['summer', 'prepare', 'spring', 'cooling season', 'ac ready', 'summer prep'],
    answer: 'Schedule spring AC maintenance, clean/replace filters, clear debris around outdoor unit, and test cooling before hot weather. We offer spring tune-ups to ensure your AC runs efficiently all summer. Book your maintenance appointment now!',
    category: 'maintenance',
    ctaType: 'consultation',
    intentKeywords: ['summer prep', 'spring maintenance', 'ac ready']
  },
  {
    id: 'ductwork-repair',
    question: 'Do you repair ductwork?',
    keywords: ['ductwork', 'ducts', 'air ducts', 'repair', 'leaky', 'damaged'],
    answer: 'Yes! We repair leaky, damaged, or poorly installed ductwork. Leaky ducts waste energy and reduce comfort. We can seal leaks, replace damaged sections, and improve airflow. Proper ductwork can improve efficiency by 20-30%. Ask about our free consultation.',
    category: 'repair',
    ctaType: 'consultation',
    intentKeywords: ['ductwork repair', 'leaky ducts', 'duct repair']
  },
  {
    id: 'warranty-service',
    question: 'Do you service systems under warranty?',
    keywords: ['warranty', 'warranty service', 'covered', 'manufacturer', 'guarantee'],
    answer: 'Yes, we service systems under warranty. We work with all major manufacturers and can handle warranty claims. Regular maintenance by qualified technicians helps maintain warranty coverage. Contact us to schedule warranty service or maintenance.',
    category: 'general',
    ctaType: 'service',
    intentKeywords: ['warranty', 'warranty service', 'covered']
  },
  {
    id: 'financing-options',
    question: 'Do you offer financing for new systems?',
    keywords: ['financing', 'payment', 'payment plan', 'affordable', 'monthly', 'credit'],
    answer: 'Yes! We offer flexible financing options for new HVAC installations. Make your new system affordable with low monthly payments. We can discuss financing options during your free consultation. No obligation - let\'s find a solution that works for you.',
    category: 'installation',
    ctaType: 'consultation',
    intentKeywords: ['financing', 'payment plan', 'affordable']
  },
  {
    id: 'installation-time',
    question: 'How long does HVAC installation take?',
    keywords: ['installation time', 'how long', 'duration', 'install', 'timeline', 'days'],
    answer: 'Most installations take 1-2 days depending on the system type and complexity. Furnace or AC replacements are typically one day. Full system installations may take 2-3 days. We\'ll provide a timeline during your free consultation. We work efficiently to minimize disruption.',
    category: 'installation',
    ctaType: 'consultation',
    intentKeywords: ['installation time', 'how long', 'timeline']
  },
  {
    id: 'zoning-systems',
    question: 'What is a zoning system?',
    keywords: ['zoning', 'zone', 'zones', 'different temperatures', 'room control'],
    answer: 'Zoning systems allow different temperatures in different areas of your home using dampers and multiple thermostats. This improves comfort and can save 20-30% on energy costs. Perfect for multi-story homes or rooms with different needs. Ask about our free consultation!',
    category: 'installation',
    ctaType: 'consultation',
    intentKeywords: ['zoning', 'zones', 'room control']
  },
  {
    id: 'ac-smell',
    question: 'My air conditioner smells bad',
    keywords: ['smell', 'odor', 'stinky', 'musty', 'moldy', 'bad smell', 'stinks'],
    answer: 'Bad smells often indicate mold, dirty filters, or stagnant water in the drain pan. Musty odors suggest mold growth. We can clean your system, treat mold, and ensure proper drainage. Don\'t ignore smells - they can affect air quality and health.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['bad smell', 'odor', 'musty', 'stinky']
  },
  {
    id: 'furnace-running-constantly',
    question: 'My furnace runs constantly and won\'t shut off',
    keywords: ['running constantly', 'wont shut off', 'always on', 'continuous', 'non stop'],
    answer: 'A constantly running furnace may have a faulty thermostat, stuck relay, or system that\'s too small for your home. This wastes energy and increases wear. We can diagnose and fix the issue. Schedule a service call to prevent high bills and system damage.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['running constantly', 'wont shut off', 'always on']
  },
  {
    id: 'ac-not-cooling-enough',
    question: 'My AC runs but doesn\'t cool enough',
    keywords: ['not cool enough', 'warm', 'not cold', 'barely cooling', 'weak'],
    answer: 'Insufficient cooling can be caused by low refrigerant, dirty coils, blocked airflow, or an undersized unit. Check filters and outdoor unit first. We can diagnose refrigerant levels, clean coils, and ensure proper system operation. Same-day service available.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['not cool enough', 'weak cooling', 'barely working']
  },
  {
    id: 'furnace-age',
    question: 'How long do furnaces last?',
    keywords: ['furnace age', 'lifespan', 'how long', 'last', 'years', 'durability'],
    answer: 'Most furnaces last 15-20 years with proper maintenance. High-efficiency models may last longer. If your furnace is over 15 years old and needs frequent repairs, replacement may be more cost-effective. We can assess your system\'s condition during a free consultation.',
    category: 'general',
    ctaType: 'consultation',
    intentKeywords: ['furnace age', 'lifespan', 'how long']
  },
  {
    id: 'ac-age',
    question: 'How long do air conditioners last?',
    keywords: ['ac age', 'lifespan', 'how long', 'last', 'years', 'durability'],
    answer: 'Most air conditioners last 10-15 years with proper maintenance. If your AC is over 10 years old and needs frequent repairs, replacement with a new energy-efficient model may save money long-term. We can assess your system during a free consultation.',
    category: 'general',
    ctaType: 'consultation',
    intentKeywords: ['ac age', 'lifespan', 'how long']
  },
  {
    id: 'preventive-maintenance',
    question: 'What does preventive maintenance include?',
    keywords: ['preventive', 'maintenance', 'what includes', 'tune up', 'inspection', 'check'],
    answer: 'Preventive maintenance includes cleaning, filter replacement, safety checks, efficiency testing, component inspection, and system calibration. This prevents breakdowns, improves efficiency, and extends system life. We offer annual maintenance plans for peace of mind.',
    category: 'maintenance',
    ctaType: 'consultation',
    intentKeywords: ['preventive maintenance', 'tune up', 'what includes']
  },
  {
    id: 'best-time-install',
    question: 'When is the best time to install a new HVAC system?',
    keywords: ['best time', 'when install', 'season', 'timing', 'install', 'replace'],
    answer: 'Fall and spring are ideal for installations - moderate weather and better scheduling. However, we install year-round. Off-season installations may have better availability. We offer free consultations to discuss timing and options for your home.',
    category: 'installation',
    ctaType: 'consultation',
    intentKeywords: ['best time', 'when install', 'timing']
  },
  {
    id: 'what-services',
    question: 'What services do you offer?',
    keywords: ['services', 'what services', 'what do you do', 'offer', 'provide', 'available services'],
    answer: 'We offer three main services: Installation & Replacement (furnaces, AC units, heat pumps), Repairs & Maintenance (24/7 emergency service, furnace repair, AC repair), and Air Quality Solutions (air purification, filtration systems, ventilation). We serve Barrie and surrounding areas. Book a free consultation to discuss your needs!',
    category: 'general',
    ctaType: 'consultation',
    intentKeywords: ['services', 'what services', 'what do you offer']
  },
  {
    id: 'installation-services',
    question: 'Do you do HVAC installations?',
    keywords: ['installation', 'install', 'new system', 'furnace install', 'ac install', 'heat pump install'],
    answer: 'Yes! We provide professional installation services for furnaces, air conditioners, and heat pumps. Our expert technicians ensure proper sizing, efficient installation, and handle all permits. We help you choose the right system for your home. Ask about our free consultation and financing options.',
    category: 'installation',
    ctaType: 'consultation',
    intentKeywords: ['installation', 'install', 'new system']
  },
  {
    id: 'repair-services',
    question: 'Do you provide HVAC repair services?',
    keywords: ['repair', 'repairs', 'fix', 'broken', 'not working', 'repair service'],
    answer: 'Yes! We provide fast, reliable repair services for all HVAC systems including furnaces, air conditioners, and heat pumps. We offer 24/7 emergency service for urgent situations. Our skilled technicians quickly diagnose and fix issues. Same-day service available in Barrie.',
    category: 'repair',
    ctaType: 'service',
    intentKeywords: ['repair', 'repairs', 'fix', 'broken']
  },
  {
    id: 'air-quality-services',
    question: 'Do you offer air quality services?',
    keywords: ['air quality', 'air purification', 'air filters', 'ventilation', 'indoor air', 'air cleaner'],
    answer: 'Yes! We offer comprehensive air quality solutions including air purification systems, high-efficiency filtration, and ventilation solutions. These systems improve indoor air quality, reduce allergens, and create a healthier home environment. Book a free consultation to assess your air quality needs!',
    category: 'general',
    ctaType: 'consultation',
    intentKeywords: ['air quality', 'air purification', 'ventilation']
  }
];

// Contact information for CTAs
export const contactInfo = {
  phone: '+1-705-220-5272',
  email: 'rob@rkairsystems.ca',
  serviceArea: 'Barrie and Surrounding Areas'
};

// Common question suggestions for chat widget
export const commonQuestions = [
  'What services do you offer?',
  'My furnace is not heating',
  'My AC is not cooling',
  'How much does HVAC service cost?',
  'Do you offer free consultations?',
  'My furnace is making strange noises',
  'When should I replace my furnace?',
  'How often should I service my HVAC?',
  'My energy bills are too high',
  'Do you offer 24/7 emergency service?',
  'What are the benefits of a heat pump?',
  'How can I improve my indoor air quality?',
  'My thermostat is not working',
  'Do you do HVAC installations?',
  'Do you provide HVAC repair services?'
];



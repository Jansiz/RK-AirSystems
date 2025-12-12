// RK AirSystems Chatbot Logic
// Handles intent matching, FAQ retrieval, and response formatting with CTAs

import { knowledgeBase, FAQEntry, contactInfo } from '@/data/rk-kb';

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatResponse {
  answer: string;
  cta?: {
    type: 'consultation' | 'service' | 'emergency';
    message: string;
    actions: Array<{ label: string; action: 'call' | 'email' | 'link'; value: string }>;
  };
  emergency?: boolean;
}

// Safety keywords that trigger emergency response
const emergencyKeywords = [
  'gas smell', 'gas leak', 'smell gas', 'gas odor',
  'carbon monoxide', 'co alarm', 'co detector',
  'spark', 'sparking', 'smoke', 'burning', 'fire', 'electrical fire'
];

/**
 * Check if user message contains emergency keywords
 * Returns emergency FAQ entry if found, null otherwise
 */
function checkEmergency(message: string): FAQEntry | null {
  const lowerMessage = message.toLowerCase();
  
  for (const keyword of emergencyKeywords) {
    if (lowerMessage.includes(keyword)) {
      // Find matching emergency FAQ
      const emergencyFAQ = knowledgeBase.find(
        entry => entry.category === 'emergency' && 
        entry.keywords.some(k => lowerMessage.includes(k.toLowerCase()))
      );
      if (emergencyFAQ) {
        return emergencyFAQ;
      }
    }
  }
  
  return null;
}

/**
 * Calculate keyword match score for a user message against an FAQ entry
 * Returns a score from 0-100
 */
function calculateMatchScore(message: string, entry: FAQEntry): number {
  const lowerMessage = message.toLowerCase();
  let score = 0;
  const allKeywords = [...entry.keywords, ...(entry.intentKeywords || [])];
  
  // Check for exact keyword matches
  for (const keyword of allKeywords) {
    const lowerKeyword = keyword.toLowerCase();
    if (lowerMessage.includes(lowerKeyword)) {
      // Longer keywords get higher weight
      score += keyword.length * 2;
    }
  }
  
  // Bonus for question keyword matches
  const questionWords = entry.question.toLowerCase().split(/\s+/);
  for (const word of questionWords) {
    if (word.length > 3 && lowerMessage.includes(word)) {
      score += 5;
    }
  }
  
  // Normalize score (rough scale to 0-100)
  return Math.min(100, score);
}

/**
 * Find the best matching FAQ entry for a user message
 * Returns the best match or null if no good match found
 */
function findBestMatch(message: string): FAQEntry | null {
  // First check for emergencies
  const emergency = checkEmergency(message);
  if (emergency) {
    return emergency;
  }
  
  // Calculate scores for all non-emergency entries
  const scores = knowledgeBase
    .filter(entry => entry.category !== 'emergency')
    .map(entry => ({
      entry,
      score: calculateMatchScore(message, entry)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
  
  // Return best match if score is above threshold (minimum 10 points)
  if (scores.length > 0 && scores[0].score >= 10) {
    return scores[0].entry;
  }
  
  return null;
}

/**
 * Generate CTA based on FAQ entry and user intent
 */
function generateCTA(entry: FAQEntry | null, userMessage: string): ChatResponse['cta'] | undefined {
  if (!entry || entry.ctaType === 'none' || !entry.ctaType) {
    // Check if user seems ready for service (booking keywords)
    const bookingKeywords = ['book', 'schedule', 'appointment', 'quote', 'estimate', 'consultation', 'install', 'repair'];
    const lowerMessage = userMessage.toLowerCase();
    const hasBookingIntent = bookingKeywords.some(keyword => lowerMessage.includes(keyword));
    
    if (hasBookingIntent) {
      return {
        type: 'consultation',
        message: 'Ready to get started? We\'d love to help!',
        actions: [
          { label: 'Call Now', action: 'call', value: contactInfo.phone },
          { label: 'Email Us', action: 'email', value: contactInfo.email }
        ]
      };
    }
    return undefined;
  }
  
  // At this point, TypeScript knows entry.ctaType is 'consultation' | 'service' | 'emergency'
  const ctaType: 'consultation' | 'service' | 'emergency' = entry.ctaType;
  
  const actions: NonNullable<ChatResponse['cta']>['actions'] = [
    { label: 'Call Now', action: 'call', value: contactInfo.phone },
    { label: 'Email Us', action: 'email', value: contactInfo.email }
  ];
  
  let message = '';
  
  switch (ctaType) {
    case 'emergency':
      message = 'This is urgent - please contact us immediately for emergency service.';
      break;
    case 'service':
      message = 'Need professional help? We offer same-day service in Barrie.';
      break;
    case 'consultation':
      message = 'Interested in learning more? Book a free consultation today!';
      break;
  }
  
  return {
    type: ctaType,
    message,
    actions
  };
}

/**
 * Main function to process user message and generate response
 * Returns formatted response with answer and optional CTA
 */
export function processMessage(userMessage: string): ChatResponse {
  // Trim and validate input
  const trimmedMessage = userMessage.trim();
  if (!trimmedMessage) {
    return {
      answer: 'I\'m here to help! Ask me anything about HVAC systems, maintenance, repairs, or our services.',
      cta: {
        type: 'consultation',
        message: 'Have a specific question?',
        actions: [
          { label: 'Call Us', action: 'call', value: contactInfo.phone },
          { label: 'Email Us', action: 'email', value: contactInfo.email }
        ]
      }
    };
  }
  
  // Find best matching FAQ entry
  const bestMatch = findBestMatch(trimmedMessage);
  
  if (!bestMatch) {
    // No match found - use fallback
    return {
      answer: 'I\'m not sure about that specific question, but our expert team at RK Air Systems can help!',
      cta: {
        type: 'consultation',
        message: 'Get in touch for personalized assistance:',
        actions: [
          { label: 'Call Us', action: 'call', value: contactInfo.phone },
          { label: 'Email Us', action: 'email', value: contactInfo.email }
        ]
      }
    };
  }
  
  // Generate response with CTA
  const cta = generateCTA(bestMatch, trimmedMessage);
  
  return {
    answer: bestMatch.answer,
    cta,
    emergency: bestMatch.category === 'emergency'
  };
}

/**
 * Get a welcome message for when chat opens
 */
export function getWelcomeMessage(): string {
  return 'Hi! I\'m here to help with your HVAC questions. Ask me about furnaces, air conditioning, heat pumps, maintenance, repairs, or our services.';
}



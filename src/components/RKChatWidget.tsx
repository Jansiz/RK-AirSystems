"use client";

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { processMessage, getWelcomeMessage, ChatMessage, ChatResponse } from '@/lib/chatbot';
import { commonQuestions } from '@/data/rk-kb';
import { PhoneIcon, EnvelopeIcon, XMarkIcon, PaperAirplaneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface MessageWithCTA extends ChatMessage {
  cta?: ChatResponse['cta'];
  emergency?: boolean;
}

export default function RKChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageWithCTA[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Track scroll position to adjust chat position when scroll-to-top button appears
  useEffect(() => {
    function handleScroll() {
      setScrollToTopVisible(window.pageYOffset > 300);
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg: MessageWithCTA = {
        id: 'welcome',
        text: getWelcomeMessage(),
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMsg]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle sending a message
  function handleSendMessage(e?: React.FormEvent, messageText?: string) {
    e?.preventDefault();
    
    const textToSend = messageText || inputValue.trim();
    const trimmedInput = textToSend.trim();
    if (!trimmedInput || isTyping) return;

    // Add user message
    const userMessage: MessageWithCTA = {
      id: `user-${Date.now()}`,
      text: trimmedInput,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay for better UX
    setTimeout(() => {
      const response = processMessage(trimmedInput);
      
      // Add bot response with CTA attached
      const botMessage: MessageWithCTA = {
        id: `bot-${Date.now()}`,
        text: response.answer,
        isUser: false,
        timestamp: new Date(),
        cta: response.cta,
        emergency: response.emergency
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  }

  // Handle CTA actions
  function handleCTAAction(action: 'call' | 'email' | 'link', value: string) {
    if (action === 'call') {
      window.location.href = `tel:${value}`;
    } else if (action === 'email') {
      // Close chat widget
      setIsOpen(false);
      
      // Check if we're on the home page
      if (pathname === '/') {
        // Scroll to contact form on current page
        setTimeout(() => {
          const contactSection = document.querySelector('#contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Navigate to home page with contact hash - using window.location for reliable hash navigation
        window.location.href = '/#contact';
      }
    } else if (action === 'link') {
      window.open(value, '_blank', 'noopener,noreferrer');
    }
  }

  // Handle suggestion click
  function handleSuggestionClick(suggestion: string) {
    // Send the suggestion directly
    handleSendMessage(undefined, suggestion);
  }

  // Check if we should show suggestions (only when there's just the welcome message)
  const showSuggestions = messages.length === 1 && messages[0].id === 'welcome' && !isTyping;

  return (
    <>
      {/* Floating Chat Button - Always visible, sticky positioning - above rebate banner */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{ 
            position: 'fixed',
            bottom: '100px', // Position above rebate banner (banner is ~60-80px tall)
            right: '16px',
            zIndex: 9999
          }}
          className="sm:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-secondary rounded-full 
                   shadow-2xl hover:shadow-secondary/30 flex items-center justify-center
                   transition-all duration-300 hover:scale-110 group relative overflow-hidden"
          aria-label="Open chat"
        >
          <span className="relative z-10">
            <ChatBubbleLeftRightIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                        -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse z-10" />
        </button>
      )}

      {/* Chat Panel - Sticky positioning when open - above rebate banner */}
      {isOpen && (
        <div 
          style={{ 
            position: 'fixed',
            bottom: '100px', // Position above rebate banner (banner is ~60-80px tall)
            right: '16px',
            zIndex: 9999
          }}
          className="sm:right-8 w-[calc(100vw-2rem)] sm:w-96 max-w-[calc(100vw-2rem)] sm:max-w-md h-[calc(100vh-12rem)] max-h-[600px] bg-white rounded-2xl 
                      shadow-2xl flex flex-col animate-slideUp border border-neutral-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-secondary to-blue-light p-4 sm:p-5 rounded-t-2xl 
                        flex items-center justify-between relative">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <ChatBubbleLeftRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-bold text-base sm:text-lg truncate">RK Air Systems</h3>
                <p className="text-white/90 text-xs sm:text-sm">We're here to help!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full 
                       hover:bg-white/20 transition-colors shrink-0 ml-2"
              aria-label="Close chat"
            >
              <XMarkIcon className="w-5 h-5 text-white" />
            </button>
            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 sm:space-y-4 custom-scrollbar bg-neutral-100">
            {messages.map((message) => (
              <div key={message.id} className="space-y-2">
                <div
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 ${
                      message.isUser
                        ? 'bg-secondary text-white shadow-lg'
                        : message.emergency
                        ? 'bg-red-50 text-red-900 border-2 border-red-300 shadow-sm'
                        : 'bg-white text-neutral-800 shadow-sm border border-neutral-200'
                    }`}
                  >
                    <p className={`text-sm leading-relaxed whitespace-pre-wrap ${
                      message.isUser ? 'text-white' : message.emergency ? 'text-red-900' : 'text-neutral-800'
                    }`}>{message.text}</p>
                  </div>
                </div>
                {/* CTA Actions for bot messages */}
                {!message.isUser && message.cta && !isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] sm:max-w-[80%] bg-white rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-sm border border-neutral-200">
                      <p className="text-sm text-neutral-800 mb-3 sm:mb-4 font-medium">{message.cta.message}</p>
                      <div className="flex flex-col gap-2 sm:gap-3">
                        {message.cta.actions.map((action, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleCTAAction(action.action, action.value)}
                            className={`group relative flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full 
                                     text-sm font-semibold transition-all duration-300 overflow-hidden
                                     hover:shadow-2xl hover:shadow-secondary/20 hover:scale-105 ${
                              action.action === 'call'
                                ? 'bg-secondary text-white'
                                : action.action === 'email'
                                ? 'bg-blue-light text-white'
                                : 'bg-secondary text-white'
                            }`}
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              {action.action === 'call' ? (
                                <PhoneIcon className="w-4 h-4" />
                              ) : action.action === 'email' ? (
                                <EnvelopeIcon className="w-4 h-4" />
                              ) : null}
                              {action.label}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                                          -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-neutral-200">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Question Suggestions */}
            {showSuggestions && (
              <div className="space-y-2 mt-4">
                <p className="text-xs text-neutral-600 font-medium px-1 mb-2">💡 Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {commonQuestions.slice(0, 6).map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(question)}
                      className="px-3 py-2 text-xs sm:text-sm bg-white border-2 border-neutral-200 rounded-full 
                               text-neutral-700 hover:bg-secondary hover:text-white hover:border-secondary
                               transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md
                               active:scale-95 font-medium"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 sm:p-5 border-t border-neutral-200 bg-white rounded-b-2xl">
            <form onSubmit={handleSendMessage} className="flex gap-2 sm:gap-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-3 sm:px-6 sm:py-4 rounded-xl border-2 border-neutral-200 
                         focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20
                         text-neutral-900 placeholder:text-neutral-500 transition-colors text-sm sm:text-base"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="group relative w-11 h-11 sm:w-12 sm:h-12 bg-secondary text-white rounded-full 
                         flex items-center justify-center overflow-hidden shrink-0
                         disabled:opacity-50 disabled:cursor-not-allowed 
                         transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20"
                aria-label="Send message"
              >
                <span className="relative z-10">
                  <PaperAirplaneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </form>
            <p className="text-xs text-neutral-600 mt-2 sm:mt-3 text-center">
              Ask about HVAC, maintenance, repairs, or our services
            </p>
          </div>
        </div>
      )}
    </>
  );
}


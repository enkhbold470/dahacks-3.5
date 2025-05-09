
import { useState } from 'react';
import hackathonData from '@/data/data';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold mb-4 neon-text-yellow animate-glow">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
            Everything you need to know about DA Hacks 3.5
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {hackathonData.faq.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full p-4 flex justify-between items-center text-left rounded-md transition-all duration-300 font-cyber ${
                  activeIndex === index 
                    ? 'bg-cyber-light border neon-border-yellow' 
                    : 'bg-cyber-darker/50 border border-neon-yellow/30 hover:border-neon-yellow/50'
                }`}
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-white font-semibold text-lg">{item.question}</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-neon-yellow' : 'text-white'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeIndex === index && (
                <div className="bg-cyber-light/30 p-4 font-mono text-gray-300 rounded-b-md border-l border-r border-b border-neon-yellow/30 animate-accordion-down">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

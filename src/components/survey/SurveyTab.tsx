
import React from 'react';

type SurveyItem = {
  question: string;
  response: string;
  confidence: number;
};

const surveyData: SurveyItem[] = [
  {
    question: "What factors influence your holiday purchase decisions?",
    response: "I typically plan my holiday shopping months in advance to find the best deals and ensure availability.",
    confidence: 0.87
  },
  {
    question: "How do you prefer to spend your holiday budget?",
    response: "Most of my holiday spending goes towards gifts for family, with some reserved for holiday decorations.",
    confidence: 0.92
  },
  {
    question: "What's your preferred holiday shopping channel?",
    response: "I prefer online shopping during the holiday season to avoid crowded stores and save time.",
    confidence: 0.78
  },
  {
    question: "How important are holiday promotions to you?",
    response: "I actively seek out holiday deals and special offers, especially during major shopping events.",
    confidence: 0.85
  },
  {
    question: "What challenges do you face during holiday shopping?",
    response: "Finding unique holiday gifts within budget and managing delivery times are my main concerns.",
    confidence: 0.95
  },
  {
    question: "How far in advance do you plan holiday purchases?",
    response: "I start my holiday planning at least 2-3 months before to avoid last-minute stress.",
    confidence: 0.83
  },
  {
    question: "What influences your holiday gift choices?",
    response: "Personal preferences and holiday wish lists from family members guide my gift selections.",
    confidence: 0.89
  },
  {
    question: "How do you manage holiday season stress?",
    response: "I create detailed holiday shopping lists and stick to a predetermined budget.",
    confidence: 0.91
  },
  {
    question: "What's your holiday shopping strategy?",
    response: "I combine online and in-store holiday shopping to get the best of both experiences.",
    confidence: 0.88
  },
  {
    question: "How has your holiday shopping changed recently?",
    response: "I've shifted more towards online holiday shopping and started planning earlier than before.",
    confidence: 0.86
  },
  {
    question: "What matters most in holiday gift selection?",
    response: "Finding meaningful holiday gifts that reflect personal connections is my priority.",
    confidence: 0.82
  },
  {
    question: "How do you track holiday expenses?",
    response: "I use a dedicated app to monitor holiday spending and stay within my budget.",
    confidence: 0.84
  }
].map(item => ({
  ...item,
  confidence: Number(Math.random().toFixed(2))
}));

export function SurveyTab() {
  return (
    <div className="grid grid-cols-3 gap-4 animate-slide-up">
      {surveyData.map((item, index) => (
        <div 
          key={index}
          className="bg-gray-900 rounded-lg border border-gray-800 p-4 relative hover:border-gray-700 transition-colors"
        >
          <h3 
            className="text-sm font-medium text-white mb-2"
            dangerouslySetInnerHTML={{
              __html: item.question.replace(/holiday/gi, (match) => (
                `<span class="text-blue-400">${match}</span>`
              ))
            }}
          />
          <p 
            className="text-xs text-gray-400 line-clamp-3"
            dangerouslySetInnerHTML={{
              __html: item.response.replace(/holiday/gi, (match) => (
                `<span class="text-blue-400">${match}</span>`
              ))
            }}
          />
          <div className="absolute top-3 right-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className={`w-full h-full rounded-full border-2 ${
                    Number(item.confidence) >= 0.9 ? 'border-green-500' :
                    Number(item.confidence) >= 0.7 ? 'border-blue-500' :
                    'border-yellow-500'
                  }`}
                />
                <span className="absolute text-xs font-medium text-gray-300">
                  {item.confidence}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

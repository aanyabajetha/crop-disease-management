import { useState } from 'react';

const FeatureCard = ({ title, description, benefits }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="bg-transparent w-full h-64 perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="absolute w-full h-full backface-hidden bg-green-100 p-6 rounded-lg shadow-md rotate-y-180">
          <h4 className="text-lg font-semibold mb-2">Benefits:</h4>
          <ul className="list-disc pl-5">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: 'AI-Powered Disease Detection',
    description: 'Our advanced AI algorithms analyze crop images to detect diseases with high accuracy.',
    benefits: [
      'Early disease identification',
      'Reduced crop losses',
      'Targeted treatment plans',
    ],
  },
  {
    title: 'Mobile and Web-Based Accessibility',
    description: 'System is available as both a mobile and web-based application.',
    benefits: [
      'Cross-platform access',
      'Accessible from even when the farmers are working in fields',
      'Increases convenience and usability',
    ],
  },
  {
    title: 'Data-Driven Insights for Sustainable Farming',
    description: 'System is available as both a mobile and web-based application.',
    benefits: [
      'Sustainability focus',
      'Reduce the negative environmental impact of chemical overuse',
      'Organic or eco-friendly treatment solutions',
    ],
  },
  {
    title: 'Educational Content for Farmers',
    description: 'The app features an educational section where farmers can access videos, articles, and expert advice on common diseases, pest control, and general crop health.',
    benefits: [
      'Stronger knowledge base for farmers',
    
    ],
  },
  {
    title: 'Real-time Environmental Data',
    description: 'We provide real-time environmental data to help you make informed decisions about crop care.',
    benefits: [
      'Optimized resource management',
      'Improved crop yield',
      'Adaptive farming strategies',
    ],
  },
  {
    title: 'Personalized Treatment Recommendations',
    description: 'Receive tailored treatment recommendations based on detected diseases and environmental factors.',
    benefits: [
      'Reduced pesticide use',
      'Cost-effective treatments',
      'Improved crop health',
    ],
  },
  {
    title: 'Early Warning System',
    description: 'Get alerts about potential disease outbreaks before they become severe.',
    benefits: [
      'Proactive disease management',
      'Minimized crop damage',
      'Increased farm profitability',
    ],
  },
];

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            benefits={feature.benefits}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
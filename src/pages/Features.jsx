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
          <h4 className="text-lg font-semibold mb-2">लाभ:</h4>
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
    title: 'AI बुद्धिमत्ता द्वारा रोग पहचान',
    description: 'हमारे उन्नत AI बुद्धिमत्ता एल्गोरिदम फसल की छवियों का विश्लेषण करके उच्च सटीकता के साथ रोगों का पता लगाते हैं।',
    benefits: [
      'रोग की जल्दी पहचान',
      'फसल के नुकसान में कमी',
      'लक्षित उपचार योजनाएं',
    ],
  },
  {
    title: 'मोबाइल और वेब-आधारित पहुंच',
    description: 'सिस्टम मोबाइल और वेब-आधारित एप्लिकेशन दोनों के रूप में उपलब्ध है।',
    benefits: [
      'क्रॉस-प्लेटफॉर्म एक्सेस',
      'किसानों के खेतों में काम करते समय भी पहुंच योग्य',
      'सुविधा और उपयोगिता में वृद्धि',
    ],
  },
  {
    title: 'टिकाऊ खेती के लिए डेटा-संचालित अंतर्दृष्टि',
    description: 'सिस्टम मोबाइल और वेब-आधारित एप्लिकेशन दोनों के रूप में उपलब्ध है।',
    benefits: [
      'स्थिरता पर ध्यान',
      'रासायनिक अतिप्रयोग के नकारात्मक पर्यावरणीय प्रभाव को कम करें',
      'जैविक या पर्यावरण अनुकूल उपचार समाधान',
    ],
  },
  {
    title: 'किसानों के लिए शैक्षिक सामग्री',
    description: 'ऐप में एक शैक्षिक खंड है जहां किसान सामान्य रोगों, कीट नियंत्रण और सामान्य फसल स्वास्थ्य पर वीडियो, लेख और विशेषज्ञ सलाह तक पहुंच सकते हैं।',
    benefits: [
      'किसानों के लिए मजबूत ज्ञान आधार',
    ],
  },
  {
    title: 'वास्तविक समय का पर्यावरणीय डेटा',
    description: 'हम फसल की देखभाल के बारे में सूचित निर्णय लेने में आपकी मदद करने के लिए वास्तविक समय का पर्यावरणीय डेटा प्रदान करते हैं।',
    benefits: [
      'अनुकूलित संसाधन प्रबंधन',
      'बेहतर फसल उपज',
      'अनुकूली कृषि रणनीतियाँ',
    ],
  },
  {
    title: 'व्यक्तिगत उपचार सिफारिशें',
    description: 'पता लगाए गए रोगों और पर्यावरणीय कारकों के आधार पर अनुकूलित उपचार सिफारिशें प्राप्त करें।',
    benefits: [
      'कीटनाशकों के उपयोग में कमी',
      'लागत प्रभावी उपचार',
      'बेहतर फसल स्वास्थ्य',
    ],
  },
  {
    title: 'प्रारंभिक चेतावनी प्रणाली',
    description: 'संभावित रोग प्रकोपों के बारे में गंभीर होने से पहले ही चेतावनी प्राप्त करें।',
    benefits: [
      'सक्रिय रोग प्रबंधन',
      'फसल के नुकसान को कम करना',
      'खेत की लाभप्रदता में वृद्धि',
    ],
  },
];

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">हमारी विशेषताएं</h1>
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
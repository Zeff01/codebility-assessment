import React from 'react';
import Container from '../container/Container';
import { Gift, Award, Zap, CreditCard } from 'lucide-react';
import image from '../../../public/rewards.png';
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      icon: <Gift size={24} className="stroke-[#7514E3]" />,
      title: 'Instant Delivery',
      description:
        'Send digital gift cards immediately to recipients via email or text message.',
    },
    {
      icon: <CreditCard size={24} className="stroke-[#7514E3]" />,
      title: 'Hundreds of Brands',
      description:
        'Choose from top retailers, restaurants, and entertainment options for any occasion.',
    },
    {
      icon: <Zap size={24} className="stroke-[#7514E3]" />,
      title: 'Easy Customization',
      description:
        'Add personal messages and customize the look of your gift card in seconds.',
    },
    {
      icon: <Award size={24} className="stroke-[#7514E3]" />,
      title: 'Rewards System',
      description:
        'Earn points with every purchase and redeem for discounts on future gift cards.',
    },
  ];

  return (
    <div className="w-full py-16 px-4 lg:px-0">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-800 mb-4">
            Why Choose Our Gift Cards
          </h2>
          <p className="text-zinc-600">
            Our platform makes gifting simple, instant, and rewarding with these
            amazing features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="bg-[#7514E3]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r bg-[#7514E3] rounded-xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 lg:p-12 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Earn While You Gift
              </h3>
              <p className="text-white opacity-90 mb-6">
                Join our rewards program and earn points with every purchase.
                Accumulate points to unlock exclusive discounts, early access to
                promotions, and even free gift cards.
              </p>
              <button
                className="bg-white text-[#7514E3] px-6 py-3 rounded-lg font-semibold 
                transition-all duration-300 shadow-md scale-100 hover:scale-105 cursor-pointer ease-in-out"
              >
                Join Rewards Program
              </button>
            </div>
            <div className="p-6 lg:p-12">
              <Image
                src={image}
                alt="Shopping"
                width={500}
                height={300}
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconCreditCard,
  IconGift,
  IconDiscount,
  IconDevices,
  IconLock,
} from '@tabler/icons-react';
import { features } from '@/lib/features-data';

const InteractiveFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Map the icon names to actual icon components
  const getIconComponent = (iconName: string, size: number = 32) => {
    switch (iconName) {
      case 'credit-card':
        return <IconCreditCard size={size} />;
      case 'gift':
        return <IconGift size={size} />;
      case 'discount':
        return <IconDiscount size={size} />;
      case 'devices':
        return <IconDevices size={size} />;
      case 'lock':
        return <IconLock size={size} />;
      default:
        return <IconGift size={size} />;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white -z-10">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      {/* Animated background blobs */}
      <motion.div
        className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-purple-200 mix-blend-multiply opacity-20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] rounded-full bg-pink-200 mix-blend-multiply opacity-20 blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-lg shadow-indigo-200">
              2025 Technology
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900"
          >
            Next-Gen Gift Card Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Experience our revolutionary approach to gift cards with
            cutting-edge features powered by advanced AI and blockchain
            technology.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <motion.div
                className={`relative overflow-hidden rounded-2xl p-8 h-full bg-white backdrop-blur-lg border border-gray-100
                           shadow-lg transition-all duration-300 z-10 cursor-pointer`}
                whileHover={{
                  y: -5,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Before pseudo-element for gradient border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`mb-6 inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                  >
                    {getIconComponent(feature.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{feature.description}</p>

                  {/* Stats */}
                  <div className="flex items-center text-sm font-semibold">
                    <div
                      className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${feature.color} mr-2`}
                    ></div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r ${feature.color}">
                      {feature.stats}
                    </span>
                  </div>
                </div>

                {/* Floating 3D elements */}
                <motion.div
                  className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-100 to-white opacity-40 mix-blend-multiply blur-2xl"
                  animate={
                    hoveredCard === index
                      ? {
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.6, 0.4],
                        }
                      : {}
                  }
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
          >
            Explore All Features
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;

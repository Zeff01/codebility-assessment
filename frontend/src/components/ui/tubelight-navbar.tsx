'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  logo?: React.ReactElement;
  actionButton?: React.ReactElement;
  cartInfo?: React.ReactElement;
}

export function NavBar({
  items,
  className,
  logo = (
    <Image src="/moola-logo.svg" alt="Moola" width={100} height={20} priority />
  ),
  actionButton,
  cartInfo,
}: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  return (
    <div
      className={cn(
        'fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:mb-0 sm:pt-4',
        className
      )}
    >
      <div className="flex items-center justify-between bg-background/80 sm:bg-gradient-to-r sm:from-background/90 sm:to-background/80 border border-border/40 backdrop-blur-xl py-1.5 sm:py-2 px-3 sm:px-6 rounded-full shadow-[0_4px_20px_rgba(124,58,237,0.25)]">
        <div className="flex items-center">
          {logo && <div className="block mr-3 sm:mr-6">{logo}</div>}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    'relative cursor-pointer text-sm font-medium sm:font-semibold px-3 py-2 rounded-full transition-all duration-200',
                    'text-foreground/70 hover:text-primary',
                    isActive && 'bg-muted text-primary'
                  )}
                  aria-label={item.name}
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && setActiveTab(item.name)
                  }
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-purple-500 rounded-t-full">
                        <div className="absolute w-12 h-6 bg-purple-500/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-purple-500/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-purple-500/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {actionButton && <div className="sm:mr-2">{actionButton}</div>}
          {cartInfo && <div className="ml-2">{cartInfo}</div>}
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image'
import bgPhoto from '../public/bg-photo.png'
import React from 'react'
import BookButton from '../components/BookButton'
import { ArrowRight, ArrowUp, Check } from 'lucide-react'
import Countdown from '../components/CountDown'

function HeroSection() {
  return (
    <section id='home' className='relative overflow-hidden pb-15 pt-10 border-b-white/25'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
            <Image className='object-cover' alt='bg' src={bgPhoto} fill priority/>
            <div className='absolute inset-0 bg-linear-to-b from-bg/55 via-bg/70 to-bg'></div>
        </div>

        {/* Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(117,13,234,0.35),transparent_60%)] blur-[60px] opacity-60 z-10 pointer-events-none"></div>
        
        <div className="mx-auto z-10 grid max-w-7xl grid-cols-1 items-center lg:grid-cols-2 px-8 gap-18">
            {/* Hero Text */}
            <div className="relative mb-6">
                <h1 className="text-6xl md:text-7xl font-bold leading-20">
                    Stop guessing.
                    <br />
                    Know exactly what your marketing {" "} <br/>
                    <span className="text-primary font-normal italic">earns.</span>
                </h1>

                <p className="mt-6 text-white/65 text-xl text-pretty max-w-[56ch]">
                    Attach a Moola Drop to any campaign. Track every customer who walks in,
                    every dollar they spend, every channel that worked. Pay only on redemption.
                </p>

                {/* Buttons */}
                <div className='mt-9 flex flex-wrap gap-12 items-center'>
                    <BookButton label='Book a demo' icon={<ArrowRight size={18} />} size='lg'/>
                    <a className='cursor-pointer'>See Live Results</a>
                </div>

                <div className='flex items-center gap-12 mt-9 text-xs text-white/75'>
                    <p className='flex gap-2 items-center'>
                      <Check color='#8020EC'/>  
                      Avg. 500%+ ROAS
                    </p>
                    <p className='flex gap-2 items-center'>
                      <Check color='#8020EC'/>
                      Pay only on redemption
                    </p>
                </div>
            </div> 

            {/* Card */}
            <div className='relative perspective-distant'>
                <div className='relative z-10 rounded-[20px] bg-white p-7 text-bg shadow-mock rotate-[-1.5deg]'>
                    <div className="relative mb-[18px] h-[140px] overflow-hidden rounded-xl">
                        <Image
                            src="/hero_mock.jpg"
                            alt="mock"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <h3 className='m-0 mb-1 font-bold text-bg'>Free $10 Gift Card</h3>
                    <p className='m-0 mb-4 text-sm text-[#5A5A6A]'>For dine-in at any Hello Nori location</p>
                    <p className='mb-4 font-semibold text-primary flex items-center gap-1'>
                        <span className='text-primary tabular-nums'>10,000</span>
                        <span className='text-sm'>already claimed</span>
                    </p>

                    {/* Clock Ticking */}
                    <Countdown targetDate={new Date("2026-06-29T23:59:59Z")}/>

                    <div className='mb-2.5 h-9 rounded-lg bg-[#F2F1EC]'></div>
                    <div className='mb-2.5 h-9 rounded-lg bg-[#F2F1EC]'></div>
                    <div className='mt-2 rounded-[10px] bg-primary px-3 py-3 text-center text-sm font-semibold text-white'>Claimed my gift</div>
                </div>

                {/* Floating Cards */}
                <div className='absolute -left-10 bottom-10 z-20 rounded-xl border border-white/35 bg-bg/80 px-[18px] py-3.5 backdrop-blur-md -rotate-3'>
                    <div className='mb-1 font-mono text-[12px] uppercase'>Today&apos;s Revenue</div>
                    <div className='text-[22px] font-bold tracking-[-0.02em] text-white'>$8,420 <span className='inline-flex text-[#4ade80] text-[12px] items-center'><ArrowUp color='#4ade80' size={12}/> 24%</span></div>
                </div>

                <div className='absolute -right-7 top-[30px] z-20 rounded-xl border border-white/35 bg-bg/80 px-[18px] py-3.5 backdrop-blur-md rotate-3'>
                    <div className='mb-1 font-mono text-[12px] uppercase'>ROAS · live</div>
                    <div className='text-[22px] font-bold tracking-[-0.02em] text-white'>597%</div>
                </div>
            </div>
        </div>
        
    </section>  
  )
}

export default HeroSection
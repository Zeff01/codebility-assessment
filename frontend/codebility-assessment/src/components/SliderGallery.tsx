'use client'

/**
 * @file SliderGallery.tsx
 * Custom image slider/carousel component using Embla Carousel
 * 
 * This component creates a responsive, touch-friendly image carousel
 * based on the Embla Carousel library: https://www.embla-carousel.com/
 * 
 * Customizations:
 * - Draggable slider with no arrow buttons (navigation via dots only)
 * - No autoplay functionality (manual navigation only)
 * - Custom responsive text overlay styling with clamp() for fluid typography
 * - Support for both linked and non-linked slides
 * - Custom dot indicators for slide position
 * - Configurable slide content with titles, subtitles and links
 * - Responsive design that works across mobile, tablet and desktop
 */

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Type definition for individual slide content
 * @property {number} id - Unique identifier for the slide
 * @property {string} src - Image source path
 * @property {string} alt - Alt text for the image
 * @property {string} [title] - Optional title text to display on the slide
 * @property {string} [subtitle] - Optional subtitle text to display on the slide
 * @property {string} [href] - Optional URL to link the slide to
 */
type SlideType = {
    id: number
    src: string
    alt: string
    title?: string
    subtitle?: string
    href?: string
}

/**
 * Props for the EmblaCarousel component
 * @property {SlideType[]} slides - Array of slide data objects
 * @property {EmblaOptionsType} [options] - Optional Embla configuration options
 */
type PropType = {
    slides: SlideType[]
    options?: EmblaOptionsType
}

/**
 * EmblaCarousel Component - Core carousel implementation
 * 
 * Renders the carousel UI with slides and navigation dots.
 * Handles the interaction between slides and navigation elements.
 * 
 * @param {PropType} props - Component props containing slides and options
 * @returns React component with carousel UI
 */
const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    return (
        <section>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
                    {slides.map((slide) => (
                        <div className="transform-gpu flex-none w-full min-w-0 pl-4" key={slide.id}>
                            {slide.href ? (
                                <Link href={slide.href} target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="relative rounded-3xl shadow-inner aspect-[1216/500] w-full max-w-full mx-auto overflow-hidden cursor-pointer">
                                        <Image
                                            src={slide.src}
                                            alt={slide.alt}
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Text overlay */}
                                        <div className="absolute inset-0 flex z-10">
                                            <div className="text-white flex flex-col" style={{
                                                padding: 'clamp(0.5rem, 5vw + 1.5rem, 8rem)',
                                                gap: 'clamp(0.5rem, 1.5vw, 2rem)'
                                            }}>
                                                {slide.subtitle && (
                                                    <p style={{
                                                        fontSize: 'clamp(0.875rem, 2.5vw, 2.5rem)',
                                                        lineHeight: '1.2'
                                                    }}>
                                                        {slide.subtitle}
                                                    </p>
                                                )}
                                                {slide.title && (
                                                    <h2 className="font-semibold" style={{
                                                        fontSize: 'clamp(1.25rem, 4vw, 4rem)',
                                                        lineHeight: 'clamp(1.5rem, 5vw, 4.5rem)',
                                                        marginBottom: 'clamp(0.5rem, 1vw, 1rem)'
                                                    }} dangerouslySetInnerHTML={{__html: slide.title}}>
                                                    </h2>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="relative rounded-3xl shadow-inner aspect-[1216/500] w-full max-w-full mx-auto overflow-hidden">
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Text overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <div className="text-center text-white p-4">
                                            {slide.title && (
                                                <h2 className="text-3xl font-bold mb-2">
                                                    {slide.title}
                                                </h2>
                                            )}
                                            {slide.subtitle && (
                                                <p className="text-lg">
                                                    {slide.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Navigation Dots - Shows position in carousel */}
                <div className="relative bottom-10 flex justify-center">
                    <div className="flex list-none gap-3">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={`w-2 h-2 flex items-center justify-center rounded-full border-0 bg-transparent cursor-pointer ${index === selectedIndex
                                    ? 'after:shadow-inner after:w-2 after:h-2 after:rounded-full after:bg-blue-950 after:content-[""]'
                                    : 'after:shadow-inner after:w-2 after:h-2 after:rounded-full after:bg-gray-400 after:content-[""]'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>


        </section>
    )
}

/**
 * SliderGallery Component - Application-specific implementation of the carousel
 * 
 * This component configures the EmblaCarousel with specific slides and options
 * for use in the Moola application. It defines specific promotional content
 * and configures the carousel to loop infinitely.
 * 
 * @returns Configured EmblaCarousel component with application-specific content
 */
const SliderGallery = () => {
    // Configure carousel to loop infinitely
    const OPTIONS: EmblaOptionsType = { loop: true }

    // Define promotional slides for the carousel
    const SLIDES: SlideType[] = [
        {
            id: 1,
            src: '/images/spring-savings.png',
            alt: 'Spring Savings - One Month of Super Gift Deals',
            href: 'https://content.moola.com/winter-holiday-gift-sale-2024/'
        },
        {
            id: 2,
            src: '/images/weekly-deals.png',
            alt: 'Shop Weekly Deals - Gift Cards',
            title: 'Buy A Gift Card,<br />Get Cash Back Rewards',
            subtitle: 'GIFTING MADE EASIER',
            href: 'https://www.moola.com/search'
        }
    ]

    return (
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    )
}

export default SliderGallery





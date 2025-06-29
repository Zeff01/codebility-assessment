'use client'

/**
 * @file EmblaCarouselDotButton.tsx
 * Navigation dots for Embla Carousel library
 * 
 * This component implements the navigation dots for the carousel.
 * Based on the Embla Carousel library: https://www.embla-carousel.com/
 * 
 * The component has been customized to provide:
 * - Styled dot indicators that show the current active slide
 * - Custom hooks to sync the dots state with the carousel position
 * - TypeScript support for component props and state
 */

import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

/**
 * Type definition for the dot button hook return value
 * Contains the selected index, available scroll snap points,
 * and a handler for dot button clicks
 */
type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

/**
 * Custom hook for managing dot button state and interactions
 * Syncs with the Embla carousel instance to update the UI based on carousel state
 * 
 * @param emblaApi - The Embla carousel API instance
 * @returns Object containing current selected index, scroll snap points, and click handler
 */
export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  /**
   * Handles dot button click - scrolls the carousel to the selected index
   */
  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  /**
   * Initialize the component with carousel snap points
   */
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  /**
   * Update the selected index when carousel selection changes
   */
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  /**
   * Set up event listeners when the carousel API is available
   * Updates state on carousel initialization and selection change
   */
  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

/**
 * Type definition for the DotButton component props
 * Extends standard button props
 */
type PropType = ComponentPropsWithRef<'button'>

/**
 * DotButton component - Individual navigation dot
 * Styled indicator that shows which slide is currently active
 * 
 * @param props - Standard button props plus children
 * @returns Button element with appropriate styling based on selection state
 */
export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}
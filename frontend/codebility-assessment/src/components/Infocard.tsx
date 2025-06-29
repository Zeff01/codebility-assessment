/**
 * @file Infocard.tsx
 * Reusable information card component
 * 
 * This component renders a standard information card with a title,
 * description, and action button. It's designed to present features
 * or informational content.
 * 
 * The card includes:
 * - A badge/tag icon next to the title
 * - A call-to-action button at the bottom
 * - Flexible height based on content
 */

import React, { ReactNode } from 'react';
import ButtonComponent from "./ButtonComponent";

/**
 * Props interface for the InfoCard component
 * 
 * @interface InfoCardProps
 * @property {string} title - The heading text for the card
 * @property {string} description - The main content/description text
 * @property {string} [buttontext] - Optional text for the CTA button
 * @property {string} [className] - Optional additional CSS classes for styling
 * @property {() => void} [onClick] - Optional click handler for the button
 */
interface InfoCardProps {
    title: string;
    description: string;
    buttontext?: string;
    className?: string;
    onClick?: () => void;
}

/**
 * InfoCard Component
 * 
 * A consistent card layout for displaying feature information or promotional content.
 * Each card contains a title with an icon, descriptive text, and a call-to-action button.
 * 
 * @example
 * <InfoCard 
 *   title="Feature Title"
 *   description="Description of the feature and its benefits"
 *   buttontext="LEARN MORE"
 *   onClick={() => handleLearnMore()}
 * />
 * 
 * @param {InfoCardProps} props - Component properties
 * @returns {JSX.Element} The rendered InfoCard component
 */
const InfoCard: React.FC<InfoCardProps> = ({
    title,
    description,
    buttontext,
    className,
    onClick
}) => {
    return (
        <div className={`${className || ''}`}>
            {/* Card container with consistent styling */}
            <div className="bg-[#ececec] rounded-3xl p-8 flex flex-col h-full justify-between gap-5">
                {/* Content section - title and description */}
                <div className='flex flex-col gap-4'>
                    <h1 className="flex items-center text-purple-dark text-lg font-semibold text-gray-800 mb-2 gap-2">
                        <img src="info-card-tag.svg" alt="Info Card Tag" /> 
                        {title}
                    </h1>
                    <p className="text-xs text-gray">{description}</p>
                </div>
                {/* Call-to-action button */}
                <ButtonComponent variant='primary' className='lg:w-fit py-4 px-6' onClick={onClick}>
                    {buttontext}
                </ButtonComponent>
            </div>
        </div>
    );
};


export default InfoCard;

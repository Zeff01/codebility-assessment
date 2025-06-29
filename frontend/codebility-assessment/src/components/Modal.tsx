/**
 * @file Modal.tsx
 * Reusable modal dialog component
 * 
 * This component creates an accessible, animated modal dialog that can be used
 * throughout the application for displaying additional content, forms, or alerts.
 * 
 * Features:
 * - Animated entrance/exit transitions
 * - Backdrop overlay that blocks interaction with the page behind
 * - Close button with ripple effect animation
 * - Responsive sizing based on viewport
 * - Prevents background scrolling when modal is open
 */

import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

/**
 * Props interface for the Modal component
 * 
 * @interface ShareModalProps
 * @property {boolean} isOpen - Controls whether the modal is displayed
 * @property {() => void} onClose - Function to call when the modal should close
 * @property {React.ReactNode} [children] - Content to display inside the modal
 */
interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

/**
 * Modal Component
 * 
 * Displays content in an overlay dialog with animation effects and a backdrop.
 * Handles accessibility concerns like preventing background scrolling and providing
 * clear visual feedback for interactions.
 * 
 * @example
 * <Modal 
 *   isOpen={isModalOpen}
 *   onClose={() => setIsModalOpen(false)}
 * >
 *   <div>Your modal content here</div>
 * </Modal>
 * 
 * @param {ShareModalProps} props - Component properties
 * @returns {JSX.Element | null} The rendered Modal component or null when closed
 */
const Modal: React.FC<ShareModalProps> = ({ 
  isOpen, 
  onClose, 
  children,
}) => {
  // State to control the ripple animation effect on the close button
  const [ripple, setRipple] = useState(false);
  
  // State to control the entrance/exit animations
  const [isAnimating, setIsAnimating] = useState(false);

  /**
   * Handles the modal close action with animation
   * Triggers ripple effect before closing the modal
   */
  const handleClose = () => {
    setRipple(true);
    // Small delay to allow ripple animation to start before closing
    setTimeout(() => {
      onClose();
      setRipple(false);
    }, 150);
  };
  
  /**
   * Effect to manage body scroll locking and animation states
   * Prevents scrolling of background content when modal is open
   */
  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
      // Start entrance animation
      setIsAnimating(true);
    } else {
      // Restore scrolling when modal is closed
      document.body.style.overflow = '';
      setIsAnimating(false);
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop - semi-transparent overlay that covers the entire screen */}
      <div 
        className="fixed inset-0 bg-black/40 animate-fadeIn"
        onClick={handleClose}
      ></div>
      
      {/* Modal Content - container with animation and responsive sizing */}
      <div className={`relative bg-white rounded-2xl shadow-lg/30 w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[70vw] xl:max-w-[70vw] max-h-[90vh] overflow-hidden mx-4 transition-all duration-300 ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        {/* Close Button - positioned in the top-right corner */}
        <div className="absolute right-4 top-4 bg-white rounded-full p-2 z-10 cursor-pointer overflow-hidden">
          {/* Ripple effect animation for visual feedback */}
          {ripple && (
            <div className="absolute inset-0 bg-purple-500/30 rounded-full animate-ping"></div>
          )}
          <button 
            onClick={handleClose}
            className="relative text-gray-500 hover:text-gray-700 w-6 h-6 flex items-center justify-center text-purple-dark hover:text-purple-light cursor-pointer z-10"
          >
            <X />
          </button>
        </div>
        
        {/* Modal Body - contains the actual content */}
        <div>
          {children || (
            <p className="text-gray-600">Modal content goes here</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
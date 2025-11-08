import { useState } from 'react';

/**
 * Custom hook for managing button press states
 * @returns Object with isPressed state and press handlers
 */
export function useButtonPress() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  return {
    isPressed,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
  };
}


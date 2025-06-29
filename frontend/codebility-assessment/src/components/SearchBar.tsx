/**
 * @file SearchBar.tsx
 * Reusable search input component
 * 
 * This component provides a consistent search interface that can be used
 * across the application. It combines an input field with a button in a
 * single cohesive component with customizable styling and behavior.
 * 
 * This component is only frontend and does not handle any backend logic.
 * 
 * Features:
 * - Form submission handling
 * - Customizable placeholder text
 * - Optional search icon
 * - Optional button text
 * - Customizable styling for container, input, and button
 * - Rounded styling that matches application design language
 */

import React from 'react';
import Form from "next/form";
import { Search } from "lucide-react";
import ButtonComponent from "./ButtonComponent";

/**
 * Props interface for the SearchBar component
 * 
 * @interface SearchBarProps
 * @property {string} [action] - Form action URL (defaults to "/search")
 * @property {string} [placeholder] - Placeholder text for the input field
 * @property {string} [searchName] - Name attribute for the search input field
 * @property {string} [buttonText] - Text to display on the search button
 * @property {boolean} [showIcon] - Whether to show the search icon (defaults to true)
 * @property {string} [className] - Additional classes for the form container
 * @property {string} [inputClassName] - Additional classes for the input field
 * @property {string} [buttonClassName] - Additional classes for the button
 */
interface SearchBarProps {
  action?: string;
  placeholder?: string;
  searchName?: string;
  buttonText?: string;
  showIcon?: boolean;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

/**
 * SearchBar Component
 * 
 * A customizable search input and button combination that submits a form.
 * The component is styled with rounded corners and matches the application's
 * design system. All styling and behavior can be customized through props.
 * 
 * @example
 * <SearchBar 
 *   action="/products/search"
 *   placeholder="Search for products..."
 *   buttonText="Find"
 *   showIcon={true}
 * />
 * 
 * @param {SearchBarProps} props - Component properties
 * @returns {JSX.Element} The rendered SearchBar component
 */
const SearchBar: React.FC<SearchBarProps> = ({
  action,
  placeholder,
  searchName,
  buttonText,
  showIcon,
  className,
  inputClassName,
  buttonClassName
}) => {  return (
    <Form action={action || "/search"} className={`flex flex-row py-4 ${className || ""}`}>
      {/* Search input field with rounded left corners */}
      <input 
        name={searchName || "search"} 
        type="search" 
        placeholder={placeholder || "Search..."} 
        className={`w-full h-fit bg-white rounded-tl-full rounded-bl-full px-8 py-2 text-sm ${inputClassName || ""}`} 
      />
      {/* Search button with rounded right corners */}
      <ButtonComponent 
        variant="primary" 
        className={`text-[11px] rounded-tl-none rounded-bl-none py-2 px-8 ${buttonClassName || ""}`}
      >
        {/* Conditionally render the search icon */}
        {(showIcon === undefined || showIcon) && (
          <Search 
            width={15}
          />
        )}
        {/* Conditionally render button text */}
        {buttonText && <span className="ml-1">{buttonText}</span>}
      </ButtonComponent>
    </Form>
  );
};

export default SearchBar;

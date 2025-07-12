import Input, { InputProps } from "@/features/dashboard/components/ui/input";

/**
 * SearchInput component
 *
 * A responsive reusable search input component that can be used to create a search input.
 *
 * @param className - className for the search input
 * @param placeholder - placeholder for the search input
 * @param type - type for the search input
 * @param radius - radius for the search input
 * @param leftSection - left section for the search input
 * @param rightSection - right section for the search input
 * @param leftSectionClassName - className for the left section
 * @param rightSectionClassName - className for the right section
 * @param props - props for the search input
 * @returns SearchInput component
 *
 * @example
 * <SearchInput placeholder="Search" type="text" />
 */

function SearchInput({ className, ...props }: InputProps) {
  return (
    <Input
      type='text'
      radius='full'
      className={`bg-white ${className}`}
      {...props}
    />
  );
}

export default SearchInput;

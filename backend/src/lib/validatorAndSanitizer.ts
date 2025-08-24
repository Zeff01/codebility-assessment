
/** A function that checks (should also works as validator / sanitizer ) 
 * @param numberToCheck The number to check
 * @returns The number if it is valid
 * @throws Error if the number is not valid
 * 
 * @example
 * isAValidNumber("123"); // returns 123
 * isAValidNumber("abc"); // throws Error
 * 
 * @author Anghelo Amir
*/
export const isAValidNumber = (numberToCheck :any) :number => {
    const num = parseInt( numberToCheck );
    if( !num )
        throw new Error("Invalid number");
    return num;
}

/** A function that sanitize (removing html tags) and remove white spaces
 * @param stringToSanitize The string to sanitize
 * @returns The sanitized string
 * @throws if the string is empty or not a string
 * 
 * @example
 * stringSanitizer("  Hello World  "); // returns "Hello World"
 * stringSanitizer("<script>alert('xss')</script>"); // returns ""
 * 
 * @author Anghelo Amir
*/
export const stringSanitizer = (stringToSanitize: string): string => {
    if(!stringToSanitize)
        throw new Error("Invalid string");

    if(typeof stringToSanitize !== "string")
        throw new Error("Invalid string");

    if(stringToSanitize.trim() === "")
        throw new Error("Invalid string");
    
    const sanitizedString = stringToSanitize
      .trim()                       // remove leading/trailing spaces
      .replace(/\s+/g, " ")         // collapse multiple spaces
      .replace(/<[^>]*>?/gm, "");   // remove HTML tags
      
    if( !sanitizedString )
        throw new Error("Invalid string");
    return sanitizedString;
};

/**
 * A function that check if it is a valid boolean and not a string or number
 * @param booleanToCheck The boolean to check. It can be a string or number
 * @returns The boolean if it is valid
 * @throws Error if the boolean is not valid
 * 
 * @example
 * booleanValidator(true); // returns true
 * booleanValidator("true"); // throws Error
 * 
*/
export const booleanValidator = (value: any): boolean => {
    if (typeof value === "boolean") return value;
  
    if (typeof value === "string") {
      const lower = value.toLowerCase();
      if      (lower === "true")  return true;
      else if (lower === "false") return false;
      else                        throw new Error("Invalid boolean");
    }
  
    if (typeof value === "number") {
      if (value === 1)      return true;
      else if (value === 0) return false;
      else                  throw new Error("Invalid boolean");
    }
  
    throw new Error("Invalid boolean");
};

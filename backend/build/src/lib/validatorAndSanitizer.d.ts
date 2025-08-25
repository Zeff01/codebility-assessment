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
export declare const isAValidNumber: (numberToCheck: any) => number;
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
export declare const stringSanitizer: (stringToSanitize: string) => string;
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
export declare const booleanValidator: (value: any) => boolean;
//# sourceMappingURL=validatorAndSanitizer.d.ts.map
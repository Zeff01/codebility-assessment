/**
 * Input UI element. Created by Anghelo Amir
 */
interface InputProps {
    /** Unique identifier for the input element (used for labels and accessibility) */
    id?: string;

    /** Name attribute of the input, used when submitting forms */
    name?: string;

    /** Input type (e.g. "text", "email", "password", "number") */
    type?: string;

    /** Whether the input is required before form submission */
    required?: boolean;

    /** Autocomplete hint for browsers (e.g. "on", "off", "email", "username", "current-password") */
    autoComplete?: string;

    /** Additional custom CSS classes for styling */
    className?: string;

    /** Current value of the input field */
    value?: string;

    placeHolder? :string;

    /** Event handler triggered when the input value changes */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

/**An input field with standard design
 */
export default function Input( props :InputProps ) {
    return (
        <input
            id={ props.id }
            name={ props.name }
            type={ props.type }
            required={ props.required ?? false }
            autoComplete={ props.autoComplete }
            value={ props.value }
            placeholder={ props.placeHolder }
            onChange={ props.onChange }
            className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 ${ props.className }`}
        />
    );
}
import { ButtonHTMLAttributes } from 'react';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>;

export default function PrimaryButton({ className = '', children, ...props }: Props) {
    return (
        <button
            {...props}
            className={
                `cursor-pointer bg-gradient-to-r from-green-900 to-green-700 hover:from-green-950 hover:to-green-800 text-white py-2 px-4 transition-colors duration-300 ` +
                className
            }
        >
            {children}
        </button>
    );
}

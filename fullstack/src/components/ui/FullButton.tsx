interface FullButtonProps {
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick? :() => void;
}

/** A UI Button that has full width, usually used for for forms */
export default function FullButton( props :FullButtonProps ) {
    return (
        <button
            type={ props.type ?? 'button' }
            onClick={ props.onClick }
            className={`flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${ props.className }`}
         >
            { props.children }
        </button>
    )
}
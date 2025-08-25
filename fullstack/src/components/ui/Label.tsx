interface LabelProps {
    htmlFor?  :string;
    children? :React.ReactNode;
    className?:string;
}
export default function Label( props :LabelProps ) {
    return (
        <label
            htmlFor={ props.htmlFor }
            className={`block text-lg font-medium text-gray-100 py-1 ${ props.className }`}
        >
            { props.children }
        </label>
    );
}
interface PanelProps {
    children? :React.ReactNode;
    className? :string;
}

/**A panel is a container that has background color */
export default function Panel( props :PanelProps ) {
    return (
        <div className={`w-full bg-gray-800 mx-auto rounded shadow py-4 ${props.className}`}>
            { props.children }
        </div>
    )
}



export default function TodoHeader() {
    return (
        <header className="flex gap-2 w-full bg-gray-700 -mt-4 p-3 rounded">
            <img
                src="/check.png"
                alt="checkmark"
                className="w-8 h-8"
            />
            <h2 className="md:text-xl text-lg">
                Today's Checklist
            </h2>
        </header>
    )
}
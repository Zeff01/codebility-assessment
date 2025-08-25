
/** A simple container form, used with login, sign up etc... */
export default function FormContainer( {children } : {children :React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center lg:w-[500px] md:w-[400px] w-[90vw]">
            { children }
        </div>
    )
}

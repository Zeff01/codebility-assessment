import { useState }  from "react";
import Input         from "@/components/ui/Input";
import Label         from "./ui/Label";
import FullButton    from "./ui/FullButton";
import Panel         from "./ui/Panel";
import FormContainer from "./ui/FormContainer";
import { LoadingIcon } from "./ui/Loadingicon";
import Link            from "next/link";

interface LoginFormInterface {
    isSubmitting :boolean;
    onSubmit     :(email :string, password :string) => void;
}

export default function LoginForm( props :LoginFormInterface ) {
    const [email, setEmail]             = useState("admin@admin.com");
    const [password, setPassword]       = useState("admin");
    const [err, seterr ] = useState(['' , ''])

    function onSubmit( e :React.FormEvent ) {
        e.preventDefault();
        if( props.isSubmitting )
            return;

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if( !regex.test( email ) ) {
            seterr( ["enter a valid email", ""] );
            return;
        }
        if( password.length < 1 ) {
            seterr( ["", "enter a valid password"] );
            return;
        }
        seterr( ["", ""] );

        props.onSubmit( email, password );
    }
    
    return (
        <FormContainer>
            <Panel>
                { props.isSubmitting &&
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40">
                        <LoadingIcon size={60} color="white" /> 
                    </div>
                }

                <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-3 mx-2">
                    <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">
                        Sign in to your account
                    </h2>
                    <p className="text-gray-200 mb-2 text-center opacity-50" style={{ fontSize: '10px'}}>
                        NOTE: You can create an account with any email and password or use the 
                        default credentials:
                        <br />
                        Email: admin@admin.com
                        <br />
                        Password: admin
                    </p>
                </div>
                
                <form className="lg:px-8 px-4" onSubmit={ onSubmit }>
                    
                    <Label htmlFor="email">
                        Email address
                        { err[0].length > 0 &&
                            <p className="mx-0 text-xs text-red-500 opacity-50"> { err[0] } </p>
                        }
                    </Label>
                    
                    <Input 
                        type="email"
                        name="email"
                        autoComplete="email" 
                        placeHolder="email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />

                    <Label htmlFor="password" className="mt-2">
                        Password
                        { err[1].length > 0 &&
                            <p className="mx-0 text-xs text-red-500 opacity-50"> { err[1] } </p>
                        }
                    </Label>
                    <Input 
                        type="password"
                        name="password"
                        autoComplete="password" 
                        placeHolder="password"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />

                   <FullButton type="submit" className="mt-10">
                        Sign in
                   </FullButton>
                </form>

                <p className="w-[80%] mx-auto my-5 text-center text-sm text-gray-400">
                    Not yet making Todos? {' '}
                    <Link href="/register" className="font-semibold text-indigo-400 hover:text-indigo-300">
                       Start FOREVER free!
                    </Link>
                </p>
            </Panel>
        </FormContainer>
    );
}

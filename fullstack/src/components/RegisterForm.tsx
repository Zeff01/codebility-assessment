import { useState }  from "react";
import Input         from "@/components/ui/Input";
import Label         from "./ui/Label";
import FullButton    from "./ui/FullButton";
import FormContainer from "./ui/FormContainer";
import Panel         from "./ui/Panel";
import { LoadingIcon } from "./ui/Loadingicon";

interface RegisterFormInterface {
    isSubmitting :boolean;
    onSubmit     :(email :string, password :string) => void;
}

export default function RegisterForm( props :RegisterFormInterface ) {
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [err, seterr ] = useState(['' , ''])

    function handleSubmit( e: React.FormEvent ) {
        e.preventDefault();
        if( props.isSubmitting )
            return;

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if( !regex.test( email ) ) {
            seterr( ["enter a valid email", ""] );
            return;
        }
        if( password.length < 1 || confirmPassword.length < 1 ) {
            seterr( ["", "enter a valid password"] );
            return;
        }
        if( password !== confirmPassword ) {
            seterr( ["", "passwords do not match"] );
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
                
                <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-3">
                    <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">
                        Create an Account
                    </h2>
                </div>
                
                <form className="lg:px-8 px-4" onSubmit={handleSubmit}>
                    <Label htmlFor="email">
                        Email address
                        { err[0].length > 0 &&
                            <p className="mx-0 text-xs text-red-500 opacity-50"> { err[0] } </p>
                        }
                    </Label>
                    <Input 
                        type="email"
                        name="email"
                        placeHolder="email"
                        autoComplete="email" 
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
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />

                    <Label htmlFor="password" className="mt-2">
                        Confirm Password
                    </Label>
                    <Input 
                        type="password"
                        name="password"
                        autoComplete="password" 
                        value={ confirmPassword }
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                    />

                   <FullButton type="submit" className="mt-10 mb-5">
                        Register
                   </FullButton>
                </form>
            </Panel>
        </FormContainer>
    );
}

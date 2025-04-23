

import { auth } from "@/app/lib/service";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";

const Layout = ({
    children,
  }: Readonly<{ children: React.ReactNode }>) => {
    const authentication = auth.isAuthenticated()
    if(!authentication) {
      redirect(`/login`)
    }
    return ( <>
      <Toaster position="bottom-center" />
      {children}</> );
}
 
export default Layout;
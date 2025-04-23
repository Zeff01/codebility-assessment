'use client'


import { auth } from "../../lib/service";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await auth.isAuthenticated();
      setIsAuthenticated(authenticated);
      if (!authenticated) {
        redirect('/home');
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
     auth.clear(); 
    router.push('/home');
  };

  if (isAuthenticated === null) return null; 

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Toaster position="bottom-center" />
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
      {children}
    </div>
  );
};

export default Layout;

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LoginCard from "./_components/login-card";
import SignUpCard from "./_components/sign-up-card";

const Page = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/20 p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? "login" : "signup"}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-md"
        >
          <motion.div layout className="relative">
            {isLogin ? (
              <LoginCard />
            ) : (
              <SignUpCard onSwitch={() => setIsLogin(true)} />
            )}

            <motion.div
              layout
              className="mt-4 text-center text-sm text-muted-foreground"
            >
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 font-medium text-primary underline-offset-4 hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Page;
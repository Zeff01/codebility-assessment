"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function WithGIF() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const controls = useAnimation();

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    const topVariant = {
        hidden: { opacity: 0, y: -8 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.7 },
        },
    };

    const rightVariant = {
        hidden: { opacity: 0, x: 8 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.9 },
        },
    };

    const leftVariant = {
        hidden: { opacity: 0, x: -8 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 1.1 },
        },
    };

    return (
        <div
            ref={ref}
            className="relative flex justify-center items-start min-h-[700px] md:min-h-screen px-4 md:px-6 pt-12 md:pt-0"
        >
            {/* GIF */}
            <img
                src="/extras/moolagif.gif"
                alt="Center GIF"
                className="w-full max-w-xs md:max-w-lg mx-auto rounded-xl mt-40 md:mt-40"
            />

            {/* TOP TITLE */}
            <motion.div
                initial="hidden"
                animate={controls}
                variants={topVariant}
                className="
                    absolute 
                    top-2 md:top-4 
                    left-1/2 
                    -translate-x-1/2 
                    text-center
                    bg-violet-200 bg-opacity-40 backdrop-blur-md rounded-xl
                    p-2 md:p-4 
                    shadow-xl 
                    border border-white/10
                    max-w-[260px] md:max-w-xl
                "
                >
                <h1 className="text-base md:text-2xl font-bold text-violet-900">
                    Virtual Gifting With A Personal Touch
                </h1>
                <p className="text-[10px] md:text-xs text-violet-800 mt-1">
                    You can't always be there in person for special celebrations, but you can always send your regards and congratulations through email or text.
                    It's the thought that counts!! Through Moola, you can send gifts from big and niche brands to your loved ones instantly.
                </p>
            </motion.div>

            {/* RIGHT TITLE */}
            <motion.div
                initial="hidden"
                animate={controls}
                variants={rightVariant}
                className="
                    absolute 
                    right-2 md:right-50 
                    top-[85%] md:top-1/2
                    -translate-y-1/2 
                    text-center  
                    bg-violet-200 bg-opacity-40 backdrop-blur-md rounded-xl
                    p-2 md:p-4
                    shadow-xl 
                    border border-white/10 
                    max-w-[180px] md:max-w-xs
                    "
                >
                <h2 className="text-base md:text-xl font-bold text-violet-900">
                    Monitor gift delivery
                </h2>
                <p className="text-[10px] md:text-sm text-violet-800 mt-1">
                    Stop questioning if a recipient has received your gift. Track gift card delivery and open rates on the Moola App.
                </p>
            </motion.div>

            {/* LEFT TITLE */}
            <motion.div
                initial="hidden"
                animate={controls}
                variants={leftVariant}
                className="
                    absolute 
                    left-2 md:left-50 
                    top-[85%] md:top-1/2
                    -translate-y-1/2 
                    text-center
                    bg-violet-200 bg-opacity-40 backdrop-blur-md rounded-xl
                    p-2 md:p-4 
                    shadow-xl 
                    border border-white/10 
                    max-w-[180px] md:max-w-xs
                    "
                >
                <h2 className="text-base md:text-xl font-bold text-violet-900">
                    Hassle-free gifting
                </h2>
                <p className="text-[10px] md:text-sm text-violet-800 mt-1">
                    Say goodbye to the stress of finding the perfect gift and having it arrive on-time.
                    With Moola, you can easily search, purchase and send digital gift cards in less than 1 minute.
                </p>
            </motion.div>
        </div>
    );
}

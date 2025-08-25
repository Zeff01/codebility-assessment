'use client';
import BackgroundDesign from "@/components/BackgroundDesign";

export default function Home() {
    return (
        <BackgroundDesign>
            <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto px-6 lg:px-12">
                <section className="max-w-2xl z-10 text-left">
                    <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                        Codebility Todo List
                    </h1>
                    <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl/8">
                        An assessment created by Anghelo Amir.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="/todo"
                            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Start Making Your Todo's
                        </a>
                    </div>
                </section>

                <div className="hidden lg:block flex-shrink-0 relative z-0">
                    <img
                        src="/demo.png"
                        alt="Background Illustration"
                        className="w-[400px] h-auto object-contain"
                    />
                </div>
            </div>
        </BackgroundDesign>
    )
}

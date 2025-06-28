import Badge from "./badge";
import Button from "./button";

export default function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden bg-gradient text-white py-20">
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-ping"></div>
                <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/20 rounded-full animate-spin"></div>
            </div>
            
            <div className="relative min-h-[70vh] container mx-auto flex flex-col justify-center px-4">
                <div className="max-w-4xl">
                    <Badge variant="glass" className="text-lg px-4 mb-4 animate-fade-in">
                        🎁 Gifting Made Easier
                    </Badge>
                    
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                            Buy A Gift Card,
                        </span>
                        <span className="block">
                            Get Cash Back Rewards
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-2xl leading-relaxed">
                        Earn up to <span className="font-bold text-yellow-300">15% cash back</span> on every gift card purchase. 
                        Perfect for birthdays, holidays, and special occasions.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Button variant="secondary" size="lg">
                            <span className="mr-2">🛍️</span>
                            Shop Weekly Deals
                        </Button>
                        <Button size="lg" variant="outline">
                            <span className="mr-2">✨</span>
                            Register Now
                        </Button>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-purple-200">
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            <span>Instant Cash Back</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            <span>100+ Retailers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            <span>Secure & Fast</span>
                        </div>
                    </div>
                </div>
                
                <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
                    <div className="relative">
                        <div className="w-64 h-40 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                            <div className="text-purple-900 font-bold text-lg mb-2">Amazon</div>
                            <div className="text-purple-700 text-sm mb-4">$50 Gift Card</div>
                            <div className="text-green-600 font-bold">+$7.50 Cash Back</div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-purple-900 font-bold text-sm animate-bounce">
                            15%
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

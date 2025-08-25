import BrandIcon from "./BrandIcon"
import HeaderNavigation from "./HeaderNavigation"

export default function HeaderBar() {
   
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <BrandIcon />
                
                <HeaderNavigation />
            </nav>
        </header>
    )
}
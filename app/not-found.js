import Link from 'next/link';
import Button from './Components/ui/Button';
import FeaturesSection from './Components/FeaturesSection';

export default function NotFound() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full py-20 bg-[#F0F0F0]">
                {/* Large light gray 404 */}
                <h1 className="text-[8rem] md:text-[12rem] font-extrabold text-gray-300 select-none">404</h1>

                {/* Page not found text */}
                <p className="text-2xl mb-6 text-center text-gray-800">Page not found</p>

                {/* Continue shopping button */}
                <Link
                    href="/"
                >
                    <Button name={'Continue shopping'} />
                </Link>

            </div>
            <FeaturesSection />
        </div>
    );
}
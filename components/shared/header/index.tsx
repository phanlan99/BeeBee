import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import ModeToggle from '@/components/mod-toggle';
import Menu from './menu';

const Header = ({ className }: { className?: string }) => {
    return (
        <header className={cn("w-full border-b p-5", className)}>
            <div className="wrapper flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        priority
                        src="/images/logo.svg"
                        width={48}
                        height={48}
                    />
                    <span className="hidden lg:block font-bold text-2xl ml-3">
                        BeeBee
                    </span>
                </Link>

                {/* Actions */}
                <Menu />
            </div>
        </header>

    );
};

export default Header;
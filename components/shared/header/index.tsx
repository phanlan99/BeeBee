import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const Header = () => {
    return (
        <header className="w-full border-b px-10 p-5">
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
                <div className="space-x-2">
                    <Button asChild variant="ghost">
                        <Link href="/cart">
                            <ShoppingCart />
                            Cart
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/sign-in">
                            <UserIcon />
                            Sign In
                        </Link>
                    </Button>
                </div>
            </div>
        </header>

    );
};

export default Header;
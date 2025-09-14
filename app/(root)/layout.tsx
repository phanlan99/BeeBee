import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex h-screen flex-col px-20'>
            <Header className=' mb-3' />
            <main className="h-screen flex w-full">{children}</main>
            <Footer />
        </div>
    );
}

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About of Deb Rajbanshi",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
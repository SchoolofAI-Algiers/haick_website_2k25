import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/nav-bar";
import PreLoaderProvider from "@/providers/preloader-provider";
import Footer from "@/components/layout/footer";
import SiteBg from "@/components/layout/SiteBg";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "HAICK 2025",
	description: "Event landing page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{/* <PreLoaderProvider> */}
				<SiteBg />
				<Navbar />
				{children}
				<Footer />
				{/* </PreLoaderProvider> */}
			</body>
		</html>
	);
}

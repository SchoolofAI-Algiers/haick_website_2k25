import "./globals.css";
import Navbar from "@/components/layout/nav-bar";
import PreLoaderProvider from "@/providers/preloader-provider";
import Footer from "@/components/layout/footer";
import SiteBg from "@/components/layout/SiteBg";
import { Inter, Playfair_Display } from "next/font/google";

const textFont = Inter({
	subsets: ["latin"],
	variable: "--font-text",
	display: "swap",
});

const titleFont = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-title",
	display: "swap",
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
		<html
			lang="en"
			suppressHydrationWarning
			className={`${textFont.variable} ${titleFont.variable}`}
		>
			<body className={`antialiased`}>
				<SiteBg />
				<Navbar />
				{children}
				<Footer />
				{/* </PreLoaderProvider> */}
			</body>
		</html>
	);
}

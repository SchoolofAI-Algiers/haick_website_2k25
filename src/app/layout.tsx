import "./globals.css";
import Navbar from "@/components/layout/nav-bar";
import PreLoaderProvider from "@/providers/preloader-provider";

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
			<body>
				<PreLoaderProvider>
					<Navbar />
					{children}
				</PreLoaderProvider>
			</body>
		</html>
	);
}

"use client";

import Preloader from "@/components/shared/preloader";
import React from "react";

export default function PreLoaderProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{isLoading ? (
				<main className="flex flex-col items-center justify-center min-h-screen w-full">
					<Preloader />
				</main>
			) : (
				children
			)}
		</>
	);
}

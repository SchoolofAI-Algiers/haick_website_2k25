"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const eventDate = new Date("2025-05-01T00:00:00");

export default function Hero() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const updateCountdown = () => {
			const now = new Date();
			const difference = eventDate.getTime() - now.getTime();

			if (difference > 0) {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24));
				const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
				const minutes = Math.floor((difference / (1000 * 60)) % 60);
				const seconds = Math.floor((difference / 1000) % 60);

				setTimeLeft({ days, hours, minutes, seconds });
			} else {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
			}
		};

		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="home"
			className="relative py-24 px-6 min-h-screen flex items-center justify-center text-center overflow-hidden bg-white"
		>
			{/* Background quadrants */}
			<div
				className="absolute top-0 left-0 w-1/2 h-1/2 bg-no-repeat bg-cover opacity-25 z-0"
				style={{ backgroundImage: "url('/bg-shape2.png')" }}
			></div>
			<div
				className="absolute top-0 right-0 w-1/2 h-1/2 bg-no-repeat bg-cover opacity-25 z-0"
				style={{ backgroundImage: "url('/bg-shape.png')" }}
			></div>
			<div
				className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-no-repeat bg-cover opacity-25 z-0"
				style={{ backgroundImage: "url('/bg-shape.png')" }}
			></div>
			<div
				className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-no-repeat bg-cover opacity-25 z-0"
				style={{ backgroundImage: "url('/bg-shape2.png')" }}
			></div>

			<div className="relative z-10 max-w-[960px] w-full mx-auto px-4 flex flex-col items-center">
				<Image
					src="/hero-logo.png"
					alt="HAICK Logo"
					width={260}
					height={100}
					className="mb-8 w-[260px] h-auto md:mb-8 md:w-[260px] sm:w-[180px] sm:mb-5"
				/>

				<p className="text-4xl font-semibold text-slate-800 mb-6 md:text-4xl sm:text-xl">
					2025 Edition Is Here!
				</p>

				<Link
					href="#register"
					className="bg-transparent border-2 border-amber-500 text-amber-500 py-2.5 px-6 rounded-lg font-semibold no-underline mb-6 transition-all duration-300 hover:bg-amber-50 sm:py-2 sm:px-4 sm:text-sm"
				>
					Join Us
				</Link>

				<div className="flex flex-wrap gap-6 items-center justify-center mb-8 text-base font-medium text-gray-700 sm:gap-4 sm:text-sm">
					<span className="flex items-center gap-2">
						<Image
							src="/vector1.png"
							alt="map icon"
							width={20}
							height={20}
							className="icon"
						/>
						ESI Algiers
					</span>
					<span className="flex items-center gap-2">
						<Image
							src="/vector2.png"
							alt="date icon"
							width={20}
							height={20}
							className="icon"
						/>
						May 5–6, 2025
					</span>
				</div>

				<div className="flex gap-5 flex-wrap justify-center sm:gap-4">
					{Object.entries(timeLeft).map(([label, value], i) => (
						<div
							key={i}
							className="bg-[url('/cadre1.png')] bg-no-repeat bg-center bg-contain py-5 px-5 pb-2.5 min-w-[80px] h-[100px] text-center font-bold text-[#239dbf] flex flex-col justify-end relative bg-transparent shadow-none sm:py-2.5 sm:min-w-[70px]"
						>
							<p className="text-2xl text-[#239dbf] sm:text-xl">{value}</p>
							<p className="text-xs mt-1 uppercase sm:text-[0.7rem]">
								{label.charAt(0).toUpperCase() + label.slice(1)}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

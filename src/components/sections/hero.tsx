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
			className="relative pb-24 px-6 min-h-screen flex items-center justify-center text-center overflow-hidden bg-white"
		>
			<div className="relative z-10 w-full mx-auto px-4 flex flex-col items-center">
				<Image
					src="/hero-logo.png"
					alt="HAICK Logo"
					width={300}
					height={150}
					className="mb-4 w-[260px] h-auto md:mb-1 md:w-[340px] sm:w-[180px] sm:mb-5"
				/>

				<p className="text-4xl font-semibold text-amber-500 mb-6 md:text-xl sm:text-xl">
					2025 Edition Is Here!
				</p>

				<Link href="#register" className="hidden md:block cursor-pointer">
					<div className="group relative">
						<button className="flex flex-col items-center justify-center w-28 h-12 rounded-[18px] border-2 border-[#FF8A18] bg-white relative">
							{/* Inner border */}
							<div className="absolute inset-0.5 rounded-2xl border-2 border-[#F7A209]" />
							<span className="text-[#54B2C8] font-bold">Join Us</span>
						</button>
					</div>
				</Link>

				<div className="flex flex-wrap gap-6 items-center justify-center mb-8 mt-8 text-base font-medium text-gray-700 sm:gap-4 sm:text-sm">
					<div className="flex items-center gap-2">
						<Image
							src="/vector1.png"
							alt="map icon"
							width={18}
							height={18}
							className="icon"
						/>
						<span className="text-2xl">ESI Algiers</span>
					</div>
					<div className="flex items-center gap-2">
						<Image
							src="/vector2.png"
							alt="date icon"
							width={18}
							height={18}
							className="icon"
						/>
						<span className="text-2xl">May 5–6, 2025</span>
					</div>
				</div>

				<div className="flex gap-5 flex-wrap justify-center sm:gap-8">
					{Object.entries(timeLeft).map(([key, value]) => (
						<div key={key} className="relative">
							<div className="flex flex-col items-center justify-center w-20 h-24 md:w-28 md:h-28 rounded-t-full border-4 border-[#FF8A18] bg-white relative">
								{/* Inner border */}
								<div className="absolute inset-1 rounded-t-full border-4 border-[#F7A209]" />
								<span className="text-xl md:text-[22px] font-semibold text-[#219EBC] mt-2">
									{value}
								</span>
								<span className="uppercase text-md md:text-md font-semibold text-[#219EBC] mb-2">
									{key}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { AnimateInView } from "../ui/animate-in-view";

export default function Sponsor() {
	const sponsors = [
		{ src: "/image1.png", alt: "Zind" },
		{ src: "/image2.png", alt: "Zarmy" },
	];

	const marqueeRef = useRef<HTMLDivElement>(null);

	// Optional: Pause animation on hover
	useEffect(() => {
		const marquee = marqueeRef.current;
		if (!marquee) return;

		const handleMouseEnter = () => {
			marquee.style.animationPlayState = "paused";
		};

		const handleMouseLeave = () => {
			marquee.style.animationPlayState = "running";
		};

		marquee.addEventListener("mouseenter", handleMouseEnter);
		marquee.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			marquee.removeEventListener("mouseenter", handleMouseEnter);
			marquee.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<AnimateInView
		animation="fade"
		delay={400}
		>
		<section className="py-8 px-4 text-center overflow-hidden">
			<h2 className="text-4xl text-[#219ebc] font-bold mb-16">Our Sponsors</h2>

			<div className="relative w-full overflow-hidden">
				{/* Marquee container */}
				<div ref={marqueeRef} className="flex gap-16 marquee-content">
					{/* First set of sponsors */}
					{Array.from({ length: 10 }).map((_, index) => {
						const sponsor = sponsors[index % sponsors.length];
						return (
							<Image
								key={`first-${index}`}
								src={sponsor.src || "/placeholder.svg"}
								alt={sponsor.alt}
								width={100}
								height={40}
								className="w-[100px] h-auto flex-shrink-0"
							/>
						);
					})}

					{/* Duplicate set for seamless looping */}
					{Array.from({ length: 10 }).map((_, index) => {
						const sponsor = sponsors[index % sponsors.length];
						return (
							<Image
								key={`second-${index}`}
								src={sponsor.src || "/placeholder.svg"}
								alt={sponsor.alt}
								width={100}
								height={40}
								className="w-[100px] h-auto flex-shrink-0"
							/>
						);
					})}
				</div>
			</div>
		</section>
		</AnimateInView>
	);
}

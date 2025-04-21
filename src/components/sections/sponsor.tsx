"use client";
import Image from "next/image";

export default function Sponsor() {
	const sponsors = [
		{ src: "/image1.png", alt: "Zind" },
		{ src: "/image2.png", alt: "Zarmy" },
	];

	return (
		<section className="py-8 px-4 text-center overflow-hidden">
			<h2 className="text-4xl text-[#219ebc] font-bold mb-16">Our Sponsors</h2>

			<div className="overflow-hidden w-full">
				<div className="flex gap-16 animate-[scroll_20s_linear_infinite]">
					{Array.from({ length: 10 }).map((_, index) => {
						const sponsor = sponsors[index % sponsors.length];
						return (
							<Image
								key={index}
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
	);
}

"use client";

import Image from "next/image";
import Link from "next/link";
import Vector from "../../../public/assets/footer/Vector.svg";
import Faceboot from "../../../public/assets/footer/facebook.svg";
import Instagram from "../../../public/assets/footer/instagram.svg";
import Youtube from "../../../public/assets/footer/youtube.svg";
import LinkedIn from "../../../public/assets/footer/linkedin.svg";
import X from "../../../public/assets/footer/X.svg";
import HaickLogo from "../../../public/assets/haick-logo.svg";
import Location from "../../../public/assets/footer/location.svg";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
	return (
		<footer className="relative w-full bg-white mt-20">
			{/* Teal wave decoration */}
			<Image
				src={Vector}
				alt="Background wave"
				className="w-[220px] absolute left-0 bottom-0"
			/>

			<div className="container py-8 relative z-10 pl-32">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
					{/* Logo and social media section */}
					<div className="flex flex-col items-start">
						{/* HAICK Logo */}
						<div className="mb-6">
							<Image src={HaickLogo} alt="HAICK Logo" className="h-16 w-auto" />
						</div>

						{/* Social Media Icons */}
						<div className="flex space-x-4">
							<Link href="#" aria-label="Facebook">
								<Image src={Faceboot} alt="Facebook" className="h-8 w-8" />
							</Link>
							<Link href="#" aria-label="Instagram">
								<Image src={Instagram} alt="Instagram" className="h-8 w-8" />
							</Link>
							<Link href="#" aria-label="YouTube">
								<Image src={Youtube} alt="YouTube" className="h-8 w-8" />
							</Link>
							<Link href="#" aria-label="LinkedIn">
								<Image src={LinkedIn} alt="LinkedIn" className="h-8 w-8" />
							</Link>
							<Link href="#" aria-label="Twitter/X">
								<Image src={X} alt="Twitter/X" className="h-8 w-8" />
							</Link>
						</div>
					</div>

					{/* Find Us section */}
					<div>
						<h3 className="text-[#1B7B92] text-2xl font-semibold mb-4">
							Find Us
						</h3>
						<div className="flex items-start space-x-3 text-gray-800">
							<Image
								src={Location || "/placeholder.svg"}
								alt="Location"
								className="h-6 w-6 mt-1 flex-shrink-0"
							/>
							<div>
								<p className="font-medium">Higher National School of</p>
								<p className="font-medium">Computer Science (ESI - Alger)</p>
								<p>Oued Smar, Alger</p>
							</div>
						</div>
					</div>

					{/* Contact Us section */}
					<div>
						<h3 className="text-[#1B7B92] text-2xl font-semibold mb-4">
							Contact Us
						</h3>
						<div className="space-y-3">
							<div className="flex items-center space-x-3">
								<Phone className="h-5 w-5 text-[#219EBC]" />
								<span className="text-gray-800">+213 6 55 69 66 17</span>
							</div>
							<div className="flex items-center space-x-3">
								<Mail className="h-5 w-5 text-[#219EBC]" />
								<span className="text-gray-800">schoolofai.algiers@esi.dz</span>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 text-center text-gray-800">
					<p>
						Copyright © 2025 School of Ai, ESI Algiers. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

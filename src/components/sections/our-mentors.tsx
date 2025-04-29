"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Cloud } from "lucide-react";
import mentor1 from "../../../public/image1.png";

export default function OurMentors() {
	const [activeTab, setActiveTab] = useState(0);

	const mentors = [
		{ name: "Mentors Name", active: true },
		{ name: "Mentors Name", active: false },
		{ name: "Mentors Name", active: false },
		{ name: "Mentors Name", active: false },
	];

	return (
		<div className="relative w-full min-h-screen bg-white overflow-hidden">
			{/* Decorative patterns */}
			<div className="absolute top-0 right-0 w-64 h-64 opacity-80">
				<Image
					src={mentor1}
					alt="Decorative pattern"
					width={256}
					height={256}
					className="object-contain"
					style={{
						filter: "invert(70%) sepia(80%) saturate(500%) hue-rotate(360deg)",
					}}
				/>
			</div>
			<div className="absolute bottom-0 left-0 w-64 h-64 opacity-80">
				<Image
					src={mentor1}
					alt="Decorative pattern"
					width={256}
					height={256}
					className="object-contain"
					style={{
						filter: "invert(70%) sepia(80%) saturate(500%) hue-rotate(160deg)",
					}}
				/>
			</div>

			{/* Main content */}
			<div className="container mx-auto px-4 py-12 relative z-10">
				{/* Header */}
				<div className="flex items-center justify-center gap-4 mb-12">
					<h1 className="text-5xl font-bold text-[#1DA1B8]">Our Mentors</h1>
					<Star className="text-[#F9A826] w-10 h-10" />
					<Cloud className="text-[#F9A826] w-10 h-10" />
				</div>

				{/* Tabs */}
				<div className="max-w-4xl mx-auto">
					<div className="flex justify-between border-b border-gray-300">
						{mentors.map((mentor, index) => (
							<button
								key={index}
								className={`py-2 px-4 text-xl font-medium ${
									index === activeTab ? "text-[#F9A826]" : "text-gray-600"
								}`}
								onClick={() => setActiveTab(index)}
							>
								{mentor.name}
							</button>
						))}
					</div>

					{/* Mentor Profile */}
					<div className="mt-8 flex flex-col md:flex-row gap-6">
						{/* Profile Image */}
						<div className="w-full md:w-1/3">
							<div className="rounded-lg overflow-hidden bg-[#E8E1D9] h-[300px]">
								<Image
									src={mentor1}
									alt="Mentor profile"
									width={400}
									height={400}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						{/* Profile Info */}
						<div className="w-full md:w-2/3">
							<div className="bg-[#7DCAD3] text-white p-8 rounded-lg h-full">
								<h2 className="text-2xl font-medium mb-6">Mentors Name</h2>
								<p className="text-xl mb-4">
									5th year computer science student at ESI Algiers
								</p>
								<p className="text-xl mb-4">Current job or position</p>
								<p className="text-xl">Specialized in .....</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

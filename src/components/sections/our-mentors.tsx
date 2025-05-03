"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Mentor1 from "../../../public/bg-remove.png";
import SubtractBlue from "../../../public/assets/our-mentors/Subtract.svg";
import SubtractOrange from "../../../public/assets/aboutus/Subtract.svg";
import Star from "../../../public/assets/our-mentors/Star.svg";
import Cloud from "../../../public/assets/our-mentors/cloud.svg";

export default function OurMentors() {
	const [activeTab, setActiveTab] = useState(0);

	// Sample mentor data - replace with your actual data
	const mentors = [
		{
			name: "Mentors Name",
			image: Mentor1,
			title: "Mentors' Name",
			education: "5th year computer science student at ESI Algiers",
			position: "Current job or position",
			specialization: "Specialized in .....",
		},
		{
			name: "Mentors Name",
			image: Mentor1,
			title: "Second Mentor",
			education: "4th year software engineering student at MIT",
			position: "Junior Developer at Tech Co",
			specialization: "Specialized in Web Development",
		},
		{
			name: "Mentors Name",
			image: Mentor1,
			title: "Third Mentor",
			education: "PhD in Computer Science at Stanford",
			position: "Senior Researcher at AI Lab",
			specialization: "Specialized in Machine Learning",
		},
		{
			name: "Mentors Name",
			image: Mentor1,
			title: "Fourth Mentor",
			education: "MSc in Cybersecurity at Harvard",
			position: "Security Analyst at SecureTech",
			specialization: "Specialized in Network Security",
		},
	];

	// Get the active mentor based on the selected tab
	const activeMentor = mentors[activeTab];

	return (
		<div className="relative w-full min-h-screen bg-white overflow-hidden">
			<motion.div
				className="absolute top-0 -right-16 opacity-80"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 0.8, scale: 1, rotate: 360 }}
				transition={{
					duration: 20,
					repeat: Infinity,
					repeatType: "loop",
					ease: "linear",
				}}
			>
				<Image
					src={SubtractOrange}
					alt="Decorative pattern"
					className="object-contain w-40 h-40"
				/>
			</motion.div>
			<motion.div
				className="absolute bottom-40 -left-16 opacity-80"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 0.8, scale: 1, rotate: 360 }}
				transition={{
					duration: 20,
					repeat: Infinity,
					repeatType: "loop",
					ease: "linear",
				}}
			>
				<Image
					src={SubtractBlue}
					alt="Decorative pattern"
					className="object-contain w-40 h-40"
				/>
			</motion.div>

			<div className="container mx-auto px-4 py-12 relative z-10">
				{/* Header */}
				<motion.div
					className="flex items-center justify-center gap-4 mb-12"
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-5xl font-bold text-[#1DA1B8]">Our Mentors</h1>
					{/* <Image src={Star} alt="Star" className="w-8 h-8" />
					<Image src={Cloud} alt="Star" className="w-8 h-8" /> */}
				</motion.div>

				<div className="max-w-4xl mx-auto">
					<div className="relative flex border-b border-gray-200">
						{mentors.map((mentor, index) => (
							<button
								key={index}
								className={`relative cursor-pointer py-4 px-6 text-lg font-medium transition-colors duration-200 ${
									index === activeTab
										? "text-[#F9A826]"
										: "text-gray-600 hover:text-gray-900"
								}`}
								onClick={() => setActiveTab(index)}
							>
								{mentor.name}
								{index === activeTab && (
									<motion.div
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F9A826]"
										layoutId="activeTab"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ type: "spring", stiffness: 500, damping: 30 }}
									/>
								)}
							</button>
						))}
					</div>

					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className="mt-8 flex flex-col md:flex-row gap-6"
						>
							<motion.div
								className="w-full md:w-1/3"
								initial={{ x: -30, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.2, duration: 0.4 }}
							>
								<div className="rounded-lg overflow-hidden bg-[#E8E1D9] h-[300px] shadow-md">
									<Image
										src={activeMentor.image || "/placeholder.svg"}
										alt={`${activeMentor.title} profile`}
										width={400}
										height={400}
										className="w-full h-full object-cover"
									/>
								</div>
							</motion.div>

							<motion.div
								className="w-full md:w-2/3"
								initial={{ x: 30, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.3, duration: 0.4 }}
							>
								<div className="bg-[#7DCAD3] text-white p-8 rounded-lg h-full shadow-md">
									<motion.h2
										className="text-2xl font-medium mb-6"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.4, duration: 0.3 }}
									>
										{activeMentor.title}
									</motion.h2>
									<motion.p
										className="text-xl mb-4"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.5, duration: 0.3 }}
									>
										{activeMentor.education}
									</motion.p>
									<motion.p
										className="text-xl mb-4"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.6, duration: 0.3 }}
									>
										{activeMentor.position}
									</motion.p>
									<motion.p
										className="text-xl"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.7, duration: 0.3 }}
									>
										{activeMentor.specialization}
									</motion.p>
								</div>
							</motion.div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

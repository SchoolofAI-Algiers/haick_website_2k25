"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Assuming subtract.svg is in the public folder or an appropriate directory
import subtractIcon from "../../../public/assets/Subtract.svg"; // Adjust the path as needed
import { AnimateInView } from "../ui/animate-in-view";

export default function FAQ() {
	// FAQ data with questions from the image and placeholder answers
	const faqs = [
		{
			question: "What is Haick25 about?",
			answer:
				"Haick25 is a global event focused on AI and data science, bringing together enthusiasts to collaborate and innovate.",
		},
		{
			question: "What is Haick25 about?",
			answer:
				"This is a test answer for the second question. It will slide down smoothly when you click the question.",
		},
		{
			question: "What is Haick25 about?",
			answer:
				"Haick24 is the third edition of Haick, a datathon designed for all AI and data science enthusiasts.",
		},
		{
			question: "What is Haick25 about?",
			answer:
				"Another test answer to demonstrate the sliding animation and icon rotation.",
		},
		{
			question: "What is Haick25 about?",
			answer:
				"Final test answer for the FAQ section to ensure everything works as expected.",
		},
	];

	// State to track which FAQ is open
	const [openIndex, setOpenIndex] = useState(null);

	// Toggle function for opening/closing FAQ
	const toggleFAQ = (index: any) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<AnimateInView
		delay={400}
		animation="fade"
		>
		<div className="w-full py-12 relative overflow-hidden">
			<h1 className="text-5xl font-bold text-center mb-12 text-[#26a0b9]">
				FAQ
			</h1>

			<div className="max-w-4xl mx-auto px-4">
				{faqs.map((faq, index) => {
					const isOpen = openIndex === index;

					return (
						<div key={index} className="mb-4">
							{/* Question Bar */}
							<div
								className="flex bg-[#d3d3d3] cursor-pointer border-r-4 border-[#F7A209] relative z-10"
								onClick={() => toggleFAQ(index)}
							>
								{/* Orange Square */}
								<div className="p-2 bg-[#F7A209] flex items-center justify-center">
									<motion.div
										animate={{ rotate: isOpen ? 90 : 0 }}
										transition={{
											duration: 0.3,
											type: "spring",
											stiffness: 300,
											damping: 30,
										}}
									>
										<Image
											src={subtractIcon}
											alt="Toggle icon"
											width={30}
											height={30}
										/>
									</motion.div>
								</div>

								{/* Question Text */}
								<div className="flex-1 py-3 px-6">
									<span className="text-gray-800 text-lg">{faq.question}</span>
								</div>
							</div>

							{/* Answer Section with Smoother Animation */}
							<AnimatePresence initial={false}>
								{isOpen && (
									<motion.div
										key={`answer-${index}`}
										initial={{ opacity: 0, height: 0 }}
										animate={{
											opacity: 1,
											height: "auto",
											transition: {
												height: {
													type: "spring",
													stiffness: 100,
													damping: 20,
													duration: 0.4,
												},
												opacity: {
													duration: 0.25,
													delay: 0.1,
												},
											},
										}}
										exit={{
											opacity: 0,
											height: 0,
											transition: {
												height: {
													type: "spring",
													stiffness: 300,
													damping: 40,
													duration: 0.3,
												},
												opacity: { duration: 0.2 },
											},
										}}
										className="bg-[#a9a9a9] text-gray-200 px-6 overflow-hidden will-change-transform"
									>
										<div className="py-4">
											<p>{faq.answer}</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					);
				})}
			</div>
		</div>
		</AnimateInView>
	);
}

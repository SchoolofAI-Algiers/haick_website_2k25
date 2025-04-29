"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AgendaComponent() {
	const [activeIndex, setActiveIndex] = useState(1);
	const [direction, setDirection] = useState(0);

	const days = [
		{
			number: 3,
			date: "Sat 03. 05. 2025",
			schedule: [
				{ time: "00 - 2AM", activity: "Hacking" },
				{ time: "2AM-3AM", activity: "Coffee Break" },
				{ time: "3AM-8AM", activity: "Hacking" },
				{ time: "8AM-9AM", activity: "Coffee Break" },
				{ time: "9AM-12PM", activity: "Hacking" },
				{ time: "12PM-1:30", activity: "Submissions" },
				{ time: "1:30-2:30", activity: "Lunch Break" },
				{ time: "2:30-5PM", activity: "Pitching" },
				{ time: "5PM-5:30", activity: "Coffe Break" },
				{ time: "5:30-6PM", activity: "Closing Ceremony" },
			],
		},
		{
			number: 1,
			date: "Thur 01. 05. 2025",
			schedule: [
				{ time: "5PM - 6PM", activity: "Check in" },
				{ time: "6PM - 7:30", activity: "Opening Ceremony" },
				{ time: "8:30 - 9:30", activity: "Dinner Time" },
				{ time: "9:30 - 12AM", activity: "Hacking Start" },
			],
		},
		{
			number: 2,
			date: "Fri 02. 05. 2025",
			schedule: [
				{ time: "00 - 1AM", activity: "Fun Activities" },
				{ time: "1AM-8AM", activity: "Hacking" },
				{ time: "8AM-9AM", activity: "Coffee Break" },
				{ time: "9AM-12PM", activity: "Hacking" },
				{ time: "12PM-1PM", activity: "Prayers" },
				{ time: "1PM-3PM", activity: "Lunch Break" },
				{ time: "3PM-6PM", activity: "Hacking" },
				{ time: "6PM-7PM", activity: "Coffee Break" },
				{ time: "7PM-10PM", activity: "Hacking" },
				{ time: "10PM-11PM", activity: "Dinner" },
			],
		},
	];

	// Function to get the visual order of days based on active index
	const getOrderedDays = () => {
		const orderedIndices = [
			(activeIndex - 1 + days.length) % days.length,
			activeIndex,
			(activeIndex + 1) % days.length,
		];
		return orderedIndices.map((index) => ({ ...days[index], index }));
	};

	const handlePrevDay = () => {
		setDirection(-1);
		setActiveIndex((prev) => (prev === 0 ? days.length - 1 : prev - 1));
	};

	const handleNextDay = () => {
		setDirection(1);
		setActiveIndex((prev) => (prev === days.length - 1 ? 0 : prev + 1));
	};

	const orderedDays = getOrderedDays();

	return (
		<div className="w-full max-w-6xl mx-auto px-4 py-8 bg-white">
			<h1 className="text-5xl font-bold text-center mb-12 text-[#26a0b9]">
				Agenda
			</h1>

			<div className="relative flex justify-center items-center h-[600px] perspective-[1200px]">
				{orderedDays.map((day, index) => {
					// Calculate position and z-index based on index
					const position = index - 1; // -1 = left, 0 = center, 1 = right

					// Determine animation variants based on position
					const variants = {
						center: {
							x: 0,
							scale: 1,
							zIndex: 30,
							opacity: 1,
							rotateY: 0,
							transition: { duration: 0.5 },
						},
						left: {
							x: "-60%",
							scale: 0.85,
							zIndex: 10,
							opacity: 0.7,
							rotateY: 15,
							transition: { duration: 0.5 },
						},
						right: {
							x: "60%",
							scale: 0.85,
							zIndex: 10,
							opacity: 0.7,
							rotateY: -15,
							transition: { duration: 0.5 },
						},
					};

					const initialVariant =
						position === -1 ? "left" : position === 0 ? "center" : "right";
					const animateVariant =
						position === -1 ? "left" : position === 0 ? "center" : "right";

					return (
						<motion.div
							key={day.index}
							className="absolute"
							initial={initialVariant}
							animate={animateVariant}
							variants={variants}
							custom={position}
							style={{ transformStyle: "preserve-3d" }}
						>
							<div
								className={`w-[350px] h-[500px] rounded-t-3xl rounded-b-none overflow-hidden
                  ${
										position === 0
											? "border-[4px] border-[#f9a76c]"
											: "border-[1px] border-[#f9d8c0]"
									}`}
								style={{
									boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
									borderBottomLeftRadius: "0",
									borderBottomRightRadius: "0",
								}}
							>
								<div className="bg-white h-full p-8 flex flex-col">
									<div className="text-center mb-6">
										<h2 className="text-3xl font-bold text-gray-700">
											Day {day.number}
										</h2>
										<p className="text-gray-500">{day.date}</p>
									</div>

									<div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
										{day.schedule.map((item, idx) => (
											<div key={idx} className="flex justify-between">
												<span className="text-[#a8d5e2] font-medium w-24">
													{item.time}
												</span>
												<span className="text-gray-600 flex-1 text-right">
													{item.activity}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					);
				})}

				{/* Navigation buttons with proper margins */}
				<button
					onClick={handlePrevDay}
					className="absolute left-[8%] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#26a0b9] flex items-center justify-center text-[#26a0b9] shadow-md z-40 hover:bg-[#f0f9fb] transition-colors"
					aria-label="Previous day"
				>
					<ChevronLeft className="w-6 h-6" />
				</button>

				<button
					onClick={handleNextDay}
					className="absolute right-[8%] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#26a0b9] flex items-center justify-center text-[#26a0b9] shadow-md z-40 hover:bg-[#f0f9fb] transition-colors"
					aria-label="Next day"
				>
					<ChevronRight className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
}

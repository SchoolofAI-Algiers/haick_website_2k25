"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgendaComponent() {
	// Days array in chronological order
	const days = [
		{
			id: 1,
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
			id: 2,
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
		{
			id: 3,
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
				{ time: "5PM-5:30", activity: "Coffee Break" },
				{ time: "5:30-6PM", activity: "Closing Ceremony" },
			],
		},
	];

	const [[currentIndex, direction], setPage] = useState([1, 0]);
	const [isAnimating, setIsAnimating] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);

	// Update window width on resize
	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		handleResize(); // Set initial width
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Calculate visible day indices (prev, current, next)
	const visibleDayIndices = () => {
		return days
			.map((_, index) => {
				return {
					index,
					position:
						index === currentIndex
							? 0
							: index === getPrevIndex()
							? -1
							: index === getNextIndex()
							? 1
							: null,
				};
			})
			.filter((item) => item.position !== null);
	};

	const getPrevIndex = () => (currentIndex - 1 + days.length) % days.length;
	const getNextIndex = () => (currentIndex + 1) % days.length;

	// Smooth navigation handlers
	const handlePrevDay = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setPage([getPrevIndex(), -1]);
	};

	const handleNextDay = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setPage([getNextIndex(), 1]);
	};

	// Animation completion handler
	const handleAnimationComplete = () => {
		setIsAnimating(false);
	};

	// Calculate card width and spacing dynamically
	const cardWidth = Math.min(330, windowWidth * 0.8); // Card width scales with screen, max 330px
	const cardHeight = 500; // Fixed height for all cards

	// Calculate spacing between cards as a percentage of screen width
	const spacingMultiplier =
		windowWidth < 640 ? 0.5 : windowWidth < 1024 ? 1 : 1.5;
	const spacing = `${spacingMultiplier * 150}%`; // Base spacing is 150%, scales down on smaller screens
	const spacingForEntryExit = `${spacingMultiplier * 300}%`; // Double the spacing for entry/exit animations

	// Calculate button position (middle of the space between cards)
	const buttonPosition =
		windowWidth < 640 ? "10px" : windowWidth < 1024 ? "15%" : "25%";

	// Variants for smooth animations with responsive spacing
	const cardVariants = {
		center: {
			x: 0,
			opacity: 1,
			zIndex: 30,
			rotateY: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 30,
				duration: 0.5,
			},
		},
		left: {
			x: `-${spacing}`, // Dynamic spacing
			opacity: 0.4,
			zIndex: 10,
			rotateY: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 30,
				duration: 0.5,
			},
		},
		right: {
			x: spacing, // Dynamic spacing
			opacity: 0.4,
			zIndex: 10,
			rotateY: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 30,
				duration: 0.5,
			},
		},
		enterLeft: {
			x: `-${spacingForEntryExit}`,
			opacity: 0,
			zIndex: 0,
			rotateY: 0,
			scale: 1,
			transition: {
				duration: 0.3,
			},
		},
		enterRight: {
			x: spacingForEntryExit,
			opacity: 0,
			zIndex: 0,
			rotateY: 0,
			scale: 1,
			transition: {
				duration: 0.3,
			},
		},
		exitLeft: {
			x: `-${spacingForEntryExit}`,
			opacity: 0,
			zIndex: 0,
			rotateY: 0,
			scale: 1,
			transition: {
				duration: 0.5,
			},
		},
		exitRight: {
			x: spacingForEntryExit,
			opacity: 0,
			zIndex: 0,
			rotateY: 0,
			scale: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<div
			className="w-full min-h-screen py-12 bg-gray-100 relative overflow-hidden"
			style={{
				backgroundImage:
					"linear-gradient(#e6ecef 1px, transparent 1px), linear-gradient(to right, #e6ecef 1px, transparent 1px)",
				backgroundSize: "20px 20px",
			}}
		>
			<h1 className="text-5xl font-bold text-center mb-12 text-[#26a0b9]">
				Agenda
			</h1>

			<div className="relative flex justify-center items-center h-[600px] max-w-6xl mx-auto px-4">
				{/* Card carousel with smooth animations */}
				<div
					className="relative"
					style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}
				>
					<AnimatePresence initial={false} mode="popLayout">
						{visibleDayIndices().map(({ index, position }) => {
							let initial, animate, exit;

							if (position === 0) {
								animate = "center";
								initial =
									direction > 0
										? "enterRight"
										: direction < 0
										? "enterLeft"
										: "center";
								exit = direction > 0 ? "exitLeft" : "exitRight";
							} else if (position === -1) {
								animate = "left";
								initial = direction < 0 ? "enterLeft" : "left";
								exit = direction < 0 ? "exitLeft" : "left";
							} else if (position === 1) {
								animate = "right";
								initial = direction > 0 ? "enterRight" : "right";
								exit = direction > 0 ? "exitRight" : "right";
							}

							return (
								<motion.div
									key={days[index].id}
									custom={direction}
									initial={initial}
									animate={animate}
									exit={exit}
									variants={cardVariants}
									onAnimationComplete={
										position === 0 ? handleAnimationComplete : undefined
									}
									className="absolute top-0 left-0 w-full h-full origin-center"
									style={{
										width: `${cardWidth}px`,
										height: `${cardHeight}px`,
										transformStyle: "preserve-3d",
									}}
								>
									<DayCard day={days[index]} isActive={position === 0} />
								</motion.div>
							);
						})}
					</AnimatePresence>
				</div>

				{/* Navigation buttons */}
				<button
					onClick={handlePrevDay}
					disabled={isAnimating}
					className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#26a0b9] flex items-center justify-center text-[#26a0b9] shadow-md z-40 hover:bg-[#f0f9fb] transition-colors ${
						isAnimating ? "opacity-50 cursor-not-allowed" : ""
					}`}
					style={{ left: buttonPosition }}
					aria-label="Previous day"
				>
					<ArrowLeft className="w-6 h-6" strokeWidth={4} />
				</button>

				<button
					onClick={handleNextDay}
					disabled={isAnimating}
					className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#26a0b9] flex items-center justify-center text-[#26a0b9] shadow-md z-40 hover:bg-[#f0f9fb] transition-colors ${
						isAnimating ? "opacity-50 cursor-not-allowed" : ""
					}`}
					style={{ right: buttonPosition }}
					aria-label="Next day"
				>
					<ArrowRight className="w-6 h-6" strokeWidth={4} />
				</button>
			</div>
		</div>
	);
}

// DayCard component
function DayCard({ day, isActive }: { day: any; isActive: boolean }) {
	return (
		<div
			className={`w-full h-full rounded-t-[170px] overflow-hidden border-4 transition-all duration-300 ${
				isActive ? "border-[#f9a76c]" : "border-[#f9d8c0]"
			}`}
			style={{
				boxShadow: isActive
					? "0 20px 30px rgba(0,0,0,0.15), 0 0 10px rgba(0,0,0,0.05)"
					: "0 10px 20px rgba(0,0,0,0.1)",
				borderBottomLeftRadius: "4px",
				borderBottomRightRadius: "4px",
				backfaceVisibility: "hidden",
			}}
		>
			<div className="bg-white h-full p-8 flex flex-col ">
				<div className="text-center mb-6">
					<h2 className="text-3xl font-bold mt-[20%]  text-gray-700">
						Day {day.number}
					</h2>
					<p className="text-gray-500 text-base mb-[10%]">{day.date}</p>
				</div>

				<div className="space-y-4 flex-1 overflow-y-auto pr-2">
					{day.schedule.map((item: any, idx: number) => (
						<div
							key={idx}
							className="flex justify-between items-center text-base border-b border-gray-100 pb-2"
						>
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
	);
}

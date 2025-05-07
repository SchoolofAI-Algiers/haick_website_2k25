"use client"
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import haick24 from "../../../public/assets/previous-editions/haick24.png";
import { useState } from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { StaggeredChildren } from "@/components/ui/staggered-children";

export default function PreviousEditions() {
	const [searchValue, setSearchValue] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const [textToType, setTextToType] = useState("");

	const handleButtonClick = (text: string) => {
		setIsTyping(true);
		setTextToType(text);
		setSearchValue("");
	};

	const handleTypingComplete = () => {
		setIsTyping(false);
		setSearchValue(textToType);
	};

	return (
		<AnimateInView
		delay={500}
		animation="fade"
		>
		<div className="min-h-screen w-full bg-gradient-to-br from-[#4ABED9] to-[#8CD9E5] relative overflow-hidden">
			{/* Wavy design element */}
			<div className="absolute top-0 left-0 w-32 h-32 bg-[#2A9AB9] rounded-br-[100px]"></div>

			<div className="container mx-auto px-4 py-12">
				<AnimateInView animation="fade-slide" direction="up">
					<h1 className="text-white text-5xl md:text-6xl font-bold text-center mb-8">
						Previous Editions
					</h1>
				</AnimateInView>

				{/* Search bar */}
				<AnimateInView animation="fade-slide" direction="down" delay={300}>
					<div className="max-w-3xl mx-auto mb-6 relative">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
							{isTyping ? (
								<div className="pl-10 pr-4 py-2 border-2 border-amber-400 rounded-md w-full h-12 flex items-center bg-white">
									<TypingAnimation
										duration={70}
										delay={4}
									>
										{textToType}
									</TypingAnimation>
								</div>
							) : (
								<Input
									type="text"
									value={searchValue}
									onChange={(e) => setSearchValue(e.target.value)}
									placeholder="Search in Datasets"
									className="pl-10 pr-4 py-2 border-2 border-amber-400 rounded-md w-full h-12 outline-none"
								/>
							)}
						</div>
					</div>
				</AnimateInView>

				{/* Filter buttons */}
				<AnimateInView animation="fade" delay={600}>
					<StaggeredChildren baseDelay={100} staggerDelay={150}>
						<div className="flex justify-center gap-4 mb-8">
							<Button 
								className="bg-amber-400 hover:bg-amber-500 text-white rounded-full px-6 transition-all"
								onClick={() => handleButtonClick("Haick22")}
							>
								Haick22
							</Button>
							<Button 
								className="bg-amber-400 hover:bg-amber-500 text-white rounded-full px-6 transition-all"
								onClick={() => handleButtonClick("Haick23")}
							>
								Haick23
							</Button>
							<Button 
								className="bg-amber-400 hover:bg-amber-500 text-white rounded-full px-6 transition-all"
								onClick={() => handleButtonClick("Haick24")}
							>
								Haick24
							</Button>
						</div>
					</StaggeredChildren>
				</AnimateInView>

				{/* Main content card */}
				<AnimateInView animation="scale" delay={900}>
					<div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
						{/* Group photo */}
						<div className="w-full">
							<Image
								src={haick24}
								alt="Group photo of HAICK participants"
								width={1000}
								height={600}
								className="w-full object-cover"
							/>
						</div>

						{/* Logo */}
						<AnimateInView animation="fade-slide" direction="up" delay={1200}>
							<div className="flex justify-center py-6">
								<div className="text-5xl font-bold">
									<span className="text-[#219ebc]">H</span>
									<span className="text-[#43CEA2]">A</span>
									<span className="text-[#43CEA2]">i</span>
									<span className="text-[#219ebc]">CK</span>
								</div>
							</div>
						</AnimateInView>

						{/* Stats */}
						<AnimateInView animation="fade" delay={1500}>
							<StaggeredChildren baseDelay={300} staggerDelay={200}>
								<div className="flex justify-center gap-6 lg:gap-12 pb-10 text-slate-700">
									<div className="text-center">
										<div className="text-3xl font-bold">+60</div>
										<div className="text-xl">Participants</div>
									</div>
									<div className="text-center">
										<div className="text-3xl font-bold">+5</div>
										<div className="text-xl">Challenges</div>
									</div>
									<div className="text-center">
										<div className="text-3xl font-bold">+3</div>
										<div className="text-xl">Days</div>
									</div>
								</div>
							</StaggeredChildren>
						</AnimateInView>
					</div>
				</AnimateInView>
			</div>
		</div>
		</AnimateInView>
	);
}

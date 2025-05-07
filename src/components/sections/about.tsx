"use client"
import {
	Bold,
	CaseSensitive,
	Code,
	Image as ImageIcon,
	Italic,
	Link2,
	List,
	ListOrdered,
	Quote,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Subtract from "../../../public/assets/aboutus/Subtract.svg";
import { AnimateInView } from "../ui/animate-in-view";
import { useEffect, useRef, useState } from "react";

const About = () => {
	const options = [
		CaseSensitive,
		Bold,
		Italic,
		Code,
		Link2,
		ImageIcon,
		Quote,
		ListOrdered,
		List,
	];

	// References and state for calculating and storing final text dimensions
	const textContainerRef = useRef<HTMLDivElement>(null);
	const [textContainerHeight, setTextContainerHeight] = useState(0);

	// Calculate the final height once when component mounts
	useEffect(() => {
		// Function to calculate the height needed for the full text
		const calculateHeight = () => {
			if (textContainerRef.current) {
				// Temporarily make all text visible to calculate height
				const container = textContainerRef.current;
				const typingElements = container.querySelectorAll('[data-typing-animation="true"]');
				
				// Show all text temporarily
				typingElements.forEach(el => {
					if (el instanceof HTMLElement) {
						el.style.opacity = '1';
						el.style.visibility = 'visible';
					}
				});
				
				// Get the height
				const height = container.scrollHeight;
				setTextContainerHeight(height);
				
				// Hide text again for animation
				typingElements.forEach(el => {
					if (el instanceof HTMLElement) {
						el.style.opacity = '';
						el.style.visibility = '';
					}
				});
			}
		};
		
		// Allow a small delay for the DOM to render
		const timer = setTimeout(calculateHeight, 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<AnimateInView>
		<main className="text-center px-4 lg:px-8 w-full mb-24">
			<h2  
				className={`text-[#219EBC] text-[42px] font-black mb-8 transition-all duration-1000 transform`}
			>
				About Us
			</h2>

			<div 
				className={`relative mx-auto w-[90%] transition-all duration-1000 delay-300`}
			>
				<Image
					src={Subtract}
					alt="subtract"
					className="absolute -bottom-10 sm:-bottom-20 -left-19 sm:-left-23 w-28 sm:w-36 md:w-48 -z-10"
				/>
				<div className="w-full bg-[#ECEEED] border-3 border-[#F7A209] shadow-md">
					<header className="flex gap-1 sm:gap-3 pl-4 p-2 border-b-3 border-[#F7A209] justify-start flex-wrap">
						{options.map((Icon, index) => (
							<Icon
								key={index}
								strokeWidth={3}
								size={26}
								className={`w-6 h-6 sm:w-7 sm:h-7 cursor-pointer transition-all duration-500 hover:bg-gray-200 p-1 rounded`}
								style={{ transitionDelay: `${index * 100 + 500}ms` }}
							/>
						))}
					</header>

					<div className="flex flex-col md:flex-row flex-wrap justify-center">
						<div 
							className={`flex-1 w-full md:w-1/2 p-6 text-start text-sm text-gray-800 border-b-3 md:border-b-0 md:border-r-3 border-[#F7A209] transition-all duration-1000`}
						>
							<h3 className="text-[#219EBC] font-light text-[16px] mb-3">
								###**Who are we?**
							</h3>
							<p className="font-light leading-relaxed">
								**School of AI Algiers** is a scientific club established in
								2018 at the Higher National School of Computer Science (ESI
								Algiers). The club unites young, motivated AI enthusiasts to
								help them unlock their potential and enhance their skills in the
								field of artificial intelligence. To achieve this, the club
								organizes **a range of events,** including Haick, a datathon
								where participants address AI and data science challenges.
								Additionally, the club hosts international conferences such as
								**AiSummit and Indaba**, alongside internal events designed
								specifically for its members.
								<br />
								Check our website{" "}
								<Link
									href={"https://soai.netlify.app"}
									className="font-semibold text-[#F7A209]"
								>
									here
								</Link>
							</p>
						</div>

						<div 
							className={`flex-1 w-full md:w-1/2 p-5 text-left box-border bg-[#FFFFFF] transition-all duration-1000`}
						>
							<h3 className="text-xl font-bold">Who are we?</h3>
							
							{/* Container with fixed height to prevent layout shifts */}
							<div 
								ref={textContainerRef}
								className="text-[15px] leading-relaxed"
								style={{ 
									minHeight: textContainerHeight > 0 ? `${textContainerHeight}px` : 'auto',
									position: 'relative'
								}}
							>
								<TypingAnimation
									startOnView={true}
									duration={50}
									delay={0}
									className="inline text-[#219EBC] font-medium text-[15px]"
									data-typing-animation="true"
								>
									School of AI Algiers
								</TypingAnimation>{" "}
								<TypingAnimation
									startOnView={true}
									duration={20}
									delay={1150}
									className="inline text-[15px] leading-relaxed font-normal"
									data-typing-animation="true"
								>
									is a scientific club established in 2018 at the Higher
									National School of Computer Science (ESI Algiers). The club
									unites young, motivated AI enthusiasts to help them unlock
									their potential and enhance their skills in the field of
									artificial intelligence. To achieve this, the club organizes
								</TypingAnimation>{" "}
								<TypingAnimation
									startOnView={true}
									duration={50}
									delay={7530}
									className="inline text-[#F7A209] leading-relaxed font-medium text-[15px]"
									data-typing-animation="true"
								>
									a range of events
								</TypingAnimation>{" "}
								<TypingAnimation
									startOnView={true}
									duration={20}
									delay={8430}
									className="inline text-[15px] leading-relaxed font-normal"
									data-typing-animation="true"
								>
									, including Haick, a datathon where participants address AI
									and data science challenges. Additionally, the club hosts
									international conferences such as
								</TypingAnimation>{" "}
								<TypingAnimation
									startOnView={true}
									duration={50}
									delay={11990}
									className="inline text-[15px] leading-relaxed text-[#F7A209] font-medium"
									data-typing-animation="true"
								>
									Ai Summit and Indaba
								</TypingAnimation>
								<TypingAnimation
									startOnView={true}
									duration={20}
									delay={13090}
									className="inline text-[15px] leading-relaxed font-normal"
									data-typing-animation="true"
								>
									, alongside internal events designed specifically for its
									members.
								</TypingAnimation>
							</div>

							<Link
								href="https://soai.netlify.app"
								target="_blank"
								rel="noreferrer"
								className="text-[#219EBC] underline block mt-2"
							>
								<TypingAnimation
									startOnView={true}
									duration={50}
									delay={14870}
									className="inline text-[15px] leading-relaxed"
								>
									Check Our Website
								</TypingAnimation>
							</Link>
						</div>
					</div>
				</div>
				
			</div>
		</main>
		</AnimateInView>
	);
};

export default About;

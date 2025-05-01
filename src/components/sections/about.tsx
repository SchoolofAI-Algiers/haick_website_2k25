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

	return (
		<div className="text-center px-5 overflow-visible mb-24">
			<h2 className="text-[#219EBC] text-[42px] font-black mb-8">About Us</h2>

			<div className="relative mx-auto w-[90%] max-w-[1000px]">
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
								className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer transition-colors duration-200 hover:bg-gray-200 p-1 rounded"
							/>
						))}
					</header>

					<div className="flex flex-col md:flex-row flex-wrap justify-center">
						<div className="flex-1 w-full md:w-1/2 p-6 text-start text-sm text-gray-800 border-b-3 md:border-b-0 md:border-r-3 border-[#F7A209]">
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

						<div className="flex-1 w-full md:w-1/2 p-5 text-left box-border bg-[#FFFFFF] ">
							<h3 className="text-xl font-bold">Who are we?</h3>
							<p className="text-[15px] leading-relaxed">
								<TypingAnimation
									startOnView={true}
									duration={50}
									delay={0}
									className="inline text-[#219EBC] font-medium text-[15px]"
								>
									School of AI Algiers
								</TypingAnimation>{" "}
								<TypingAnimation
									startOnView={true}
									duration={20}
									delay={1150}
									className="inline text-[15px] leading-relaxed font-normal"
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
								>
									a range of events
								</TypingAnimation>{" "}
								<TypingAnimation
									startOnView={true}
									duration={20}
									delay={8430}
									className="inline text-[15px] leading-relaxed font-normal"
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
								>
									Ai Summit and Indaba
								</TypingAnimation>
								<TypingAnimation
									startOnView={true}
									duration={20}
									delay={13090}
									className="inline text-[15px] leading-relaxed font-normal"
								>
									, alongside internal events designed specifically for its
									members.
								</TypingAnimation>
							</p>

							<Link
								href="https://soai.netlify.app"
								target="_blank"
								rel="noreferrer"
								className="text-[#219EBC] underline"
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
				<Image
					src={Subtract}
					alt="subtract"
					className="absolute -top-10 sm:-top-20 -right-10 sm:-right-23 w-28 sm:w-36 md:w-48 -z-10"
				/>
			</div>
		</div>
	);
};

export default About;

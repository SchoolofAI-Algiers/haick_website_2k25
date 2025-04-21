import Image from "next/image";

const AboutHaick = () => {
	return (
		<div className="py-16 px-8 bg-[#fcfcfc] text-center">
			<h2 className="text-4xl text-[#219ebc] font-bold mb-8">About Haick</h2>

			<div className="flex justify-center items-center flex-wrap gap-12">
				<div className="max-w-[500px] text-left text-gray-800 text-base leading-relaxed">
					<p>
						<strong>HAICK</strong>, an event organized by the School of AI
						Algiers (SOAI), is a notable datathon in Algeria. It brings together
						local companies and researchers who present real-world problems
						along with relevant data, inviting Algerian data scientists and AI
						enthusiasts to develop and compete with their solutions. The first
						HAICK event was held in 2022, followed by a second edition in 2023,
						which included a series of workshops.
					</p>
				</div>

				<div className="relative w-[240px] h-[280px]">
					<div className="absolute top-[70px] left-[130px] z-10 w-[170px] h-[230px] bg-none bg-transparent bg-contain bg-no-repeat bg-center flex justify-center items-center transition-transform duration-300 ease-in-out">
						<Image
							src="/bg-remove.png"
							alt="Haick Event Back"
							width={170}
							height={170}
							className="w-[85%] h-[85%] rounded-b-[20px] object-cover"
						/>
					</div>
					<div className="absolute top-0 left-0 z-20 w-[170px] h-[230px] bg-none bg-transparent bg-contain bg-no-repeat bg-center flex justify-center items-center transition-transform duration-300 ease-in-out">
						<Image
							src="/bg-remove.png"
							alt="Haick Event Front"
							width={170}
							height={170}
							className="w-[85%] h-[85%] rounded-b-[20px] object-cover"
						/>
					</div>
				</div>
			</div>

			<div className="mt-8 flex flex-wrap justify-center gap-3">
				<span className="bg-[#f59e0b] text-white font-medium py-2 px-4 rounded-full text-sm">
					+ 2 Editions
				</span>
				<span className="bg-[#f59e0b] text-white font-medium py-2 px-4 rounded-full text-sm">
					AI
				</span>
				<span className="bg-[#f59e0b] text-white font-medium py-2 px-4 rounded-full text-sm">
					Network
				</span>
				<span className="bg-[#f59e0b] text-white font-medium py-2 px-4 rounded-full text-sm">
					Data Sciences
				</span>
				<span className="bg-[#f59e0b] text-white font-medium py-2 px-4 rounded-full text-sm">
					Problem Solving
				</span>
				<span className="bg-[#f59e0b] text-white font-medium py-2 px-4 rounded-full text-sm">
					Only Good Vibes
				</span>
			</div>
		</div>
	);
};

export default AboutHaick;

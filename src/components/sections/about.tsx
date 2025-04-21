const About = () => {
	return (
		<div className="text-center py-10 px-5 bg-[#fefefe]">
			<h2 className="text-[#0099cc] text-3xl mb-8">About Us</h2>

			<div className="mx-auto w-[90%] max-w-[1000px] border-2 border-orange-400 rounded-lg overflow-hidden bg-white shadow-md">
				<div className="flex gap-3 bg-[#f3f3f3] p-2.5 border-b border-orange-400 justify-start flex-wrap">
					<button className="bg-white border border-gray-300 rounded px-2.5 py-1.5 text-sm cursor-pointer transition-colors duration-200 hover:bg-gray-200">
						<b>𝘢</b>
					</button>
					<button className="bg-white border border-gray-300 rounded px-2.5 py-1.5 text-sm cursor-pointer transition-colors duration-200 hover:bg-gray-200">
						<b>B</b>
					</button>
					<button className="bg-white border border-gray-300 rounded px-2.5 py-1.5 text-sm cursor-pointer transition-colors duration-200 hover:bg-gray-200">
						<i>I</i>
					</button>
					<button className="bg-white border border-gray-300 rounded px-2.5 py-1.5 text-sm cursor-pointer transition-colors duration-200 hover:bg-gray-200">
						🖋️
					</button>
					<button className="bg-white border border-gray-300 rounded px-2.5 py-1.5 text-sm cursor-pointer transition-colors duration-200 hover:bg-gray-200">
						🔗
					</button>
					<button className="bg-white border border-gray-300 rounded px-2.5 py-1.5 text-sm cursor-pointer transition-colors duration-200 hover:bg-gray-200">
						📷
					</button>
					<button className="bg-white border border-gray-300 rounded px-2.5 py-1.5 text-sm cursor-pointer transition-colors duration-200 hover:bg-gray-200">
						📄
					</button>
					<button className="bg-white border border-gray-300 rounded px-2.5 py-1.5 text-sm cursor-pointer transition-colors duration-200 hover:bg-gray-200">
						☰
					</button>
				</div>

				<div className="flex flex-wrap justify-center">
					<div className="flex-1 basis-[300px] p-5 text-left box-border bg-[#f9f9f9] font-mono text-sm text-gray-800 border-r border-orange-400 whitespace-pre-wrap break-words">
						<pre>
							{`###**Who are we?**

**School of AI Algiers** is a scientific club established in 2018 
at the Higher National School of Computer Science (ESI Algiers). 
The club unites young, motivated AI enthusiasts to help them unlock 
their potential and enhance their skills in the field of artificial 
intelligence. To achieve this, the club organizes **a range of 
events,** including Haick, a datathon where participants address AI
and data science challenges. Additionally, the club hosts
international conferences such as **AiSummit and Indaba**, alongside
internal events designed specifically for its members.
(Check our website: |https://soai.netlify.app|)`}
						</pre>
					</div>

					<div className="flex-1 basis-[300px] p-5 text-left box-border">
						<h3 className="text-xl font-bold">Who are we?</h3>
						<p className="text-[15px] leading-relaxed my-2.5">
							<span className="text-[#0099cc] font-bold">
								School of AI Algiers
							</span>{" "}
							is a scientific club established in 2018 at the Higher National
							School of Computer Science (ESI Algiers). The club unites young,
							motivated AI enthusiasts to help them unlock their potential and
							enhance their skills in the field of artificial intelligence. To
							achieve this, the club organizes{" "}
							<span className="text-orange-400 font-medium">
								a range of events
							</span>
							, including Haick, a datathon where participants address AI and
							data science challenges. Additionally, the club hosts
							international conferences such as{" "}
							<span className="text-[#ff6600] font-bold">
								AiSummit and Indaba
							</span>
							, alongside internal events designed specifically for its members.
						</p>
						<a
							href="https://soai.netlify.app"
							target="_blank"
							rel="noreferrer"
							className="text-[#007acc] underline"
						>
							Check Our Website
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import haick24 from "../../../public/assets/previous-editions/haick24.png";

export default function PreviousEditions() {
	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-[#4ABED9] to-[#8CD9E5] relative overflow-hidden">
			{/* Wavy design element */}
			<div className="absolute top-0 left-0 w-32 h-32 bg-[#2A9AB9] rounded-br-[100px]"></div>

			<div className="container mx-auto px-4 py-12">
				<h1 className="text-white text-5xl md:text-6xl font-bold text-center mb-8">
					Previous Editions
				</h1>

				{/* Search bar */}
				<div className="max-w-3xl mx-auto mb-6 relative">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
						<Input
							type="text"
							placeholder="Search in Datasets"
							className="pl-10 pr-4 py-2 border-2 border-amber-400 rounded-md w-full h-12"
						/>
					</div>
				</div>

				{/* Filter buttons */}
				<div className="flex justify-center gap-4 mb-8">
					<Button className="bg-amber-400 hover:bg-amber-500 text-white rounded-full px-6">
						Haick22
					</Button>
					<Button className="bg-amber-400 hover:bg-amber-500 text-white rounded-full px-6">
						Haick23
					</Button>
					<Button className="bg-amber-400 hover:bg-amber-500 text-white rounded-full px-6">
						Haick24
					</Button>
				</div>

				{/* Main content card */}
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
					<div className="flex justify-center py-6">
						<div className="text-5xl font-bold">
							<span className="text-[#3A1C71]">H</span>
							<span className="text-[#3A1C71]">i</span>
							<span className="text-[#43CEA2]">i</span>
							<span className="text-[#3A1C71]">CK</span>
						</div>
					</div>

					{/* Stats */}
					<div className="flex justify-center gap-12 pb-10">
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
				</div>
			</div>
		</div>
	);
}

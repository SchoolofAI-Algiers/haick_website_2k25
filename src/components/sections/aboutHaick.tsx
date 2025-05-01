import Image from "next/image";
import Abouthaik1 from "../../../public/abouthaik1.png";
import Abouthaik2 from "../../../public/abouthaik2.png";

const AboutHaick = () => {
  return (
    <div className="py-16 px-8 bg-[#fcfcfc] text-center">
      <h2 className="text-4xl text-[#219ebc] font-bold mb-8">About Haick</h2>
      {/* Big container div for both left (text + tags) and right (images) divs */}
      <div className="flex justify-center items-center flex-wrap gap-12">
        {/* Left div: Text + Tags */}
        <div className="max-w-[500px] flex flex-col gap-8">
          {/* Text Section */}
          <div className="text-left text-gray-800 text-base leading-relaxed">
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

          {/* Tags Section */}
          <div className="flex flex-wrap justify-left gap-3">
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

        {/* Right div: Images */}
        <div className="relative w-[280px] h-[320px]">
          {/* Back Image with Dual Frames */}
          <div className="group absolute top-[-15] left-0 z-10 w-[190px] h-[260px]">
            {/* Larger Frame (Background) */}
            <div className="absolute inset-[-12px] border-6 border-[#219ebc] rounded-t-full rounded-b-lg opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-lg" />
            {/* Smaller Frame (Directly around image) */}
            <div className="absolute inset-0 border-4 border-[#219ebc] rounded-t-full rounded-b-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-md" />
            {/* Image container */}
            <div className="absolute inset-2 rounded-t-full rounded-b-sm overflow-hidden bg-gray-100">
              <Image
                src={Abouthaik1}
                alt="Haick Event 1"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Front Image with Dual Frames */}
          <div className="group absolute top-15 left-35 z-20 w-[190px] h-[260px]">
            {/* Larger Frame (Background) */}
            <div className="absolute inset-[-12px] border-6 border-[#219ebc] rounded-t-full rounded-b-lg opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-lg" />
            {/* Smaller Frame (Directly around image) */}
            <div className="absolute inset-0 border-4 border-[#219ebc] rounded-t-full rounded-b-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-md" />
            {/* Image container */}
            <div className="absolute inset-2 rounded-t-full rounded-b-sm overflow-hidden bg-gray-100">
              <Image
                src={Abouthaik2}
                alt="Haick Event 2"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHaick;
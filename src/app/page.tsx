import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import AboutHaick from "@/components/sections/aboutHaick";
import Sponsor from "@/components/sections/sponsor";
import PreviousEditions from "@/components/sections/previous-editions";
import Agenda from "@/components/agenda/agenda";
import OurMentors from "@/components/sections/our-mentors";
import FAQ from "@/components/sections/faq";

export default function HomePage() {
	return (
		<main>
			<Hero />
			<About />
			<AboutHaick />
			<PreviousEditions />
			<Agenda />
			<OurMentors />
			<Sponsor />
			<FAQ />
		</main>
	);
}

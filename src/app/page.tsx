import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import AboutHaick from "@/components/sections/aboutHaick";
import Sponsor from "@/components/sections/sponsor";
import PreviousEditions from "@/components/sections/previous-editions";
import Agenda from "@/components/sections/agenda";
import OurMentors from "@/components/sections/our-mentors";

export default function HomePage() {
	return (
		<main>
			<Hero />
			<About />
			<AboutHaick />
			<Sponsor />
			<PreviousEditions />
			<Agenda />
			<OurMentors />
		</main>
	);
}

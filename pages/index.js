import AboutUs from 'containers/AboutUs';
import Hero from 'containers/Hero';
import Instagram from 'containers/Instagram';
import Menu from 'containers/Menu';
import MenuTitle from 'containers/MenuTitle';
import Reservation from 'containers/Reservation';
import Testimonials from 'containers/Testimonials';

export default function Home() {
	return (
		<>
			<Hero />
			<AboutUs />
			<MenuTitle />
			<Menu />
			{/* Jalol aka should finish this start */}
			<Reservation />
			{/* Jalol aka should finish this end*/}
			<Testimonials />
			<Instagram />
		</>
	);
}

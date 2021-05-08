import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<>
			<div className="container-fluid bg-dark text-white">
				<Navbar
					brand="Start BootStrap"
					services="Services"
					about="About"
					home="Home"
				/>
			</div>
			<div className="container">
				<Jumbotron
					title="Here are some of my favorite pizza stores"
					desc="If you look at the cards below you can check out the different stores."
					btnlabel="BUY PIZZA."
				/>
			</div>
			<div className="container d-flex flex-wrap justify-content-between">
				<Card
					title="Dominos"
					imgUrl="https://logos-download.com/wp-content/uploads/2016/04/Dominos_Pizza_logo-700x700.png"
					desc="My favorite from here is the thin crust pizza"
					btnUrl="https://www.dominos.com/"
					btnLabel="Go to Dominos"
				/>
				<Card
					title="Papa Johns"
					imgUrl="https://upload.wikimedia.org/wikipedia/commons/0/01/2009-03-20_Papa_John%27s_Pizza_out_for_delivery_in_Durham.jpg"
					desc="Everything here is good"
					btnUrl="https://www.papajohns.com/"
					btnLabel="Go to Papajohns"
				/>
				<Card
					title="Pizza Hut"
					imgUrl="https://logos-download.com/wp-content/uploads/2016/04/Pizza_Hut_logo_red-700x700.png"
					desc="Cannot go wrong with the 20$ dinner box"
					btnUrl="https://www.pizzahut.com/"
					btnLabel="Go to pizzahut"
				/>
				<Card
					title="California Pizza Kitchen"
					imgUrl="https://logos-download.com/wp-content/uploads/2019/01/California_Pizza_Kitchen_Logo_full_2-700x629.png"
					desc="The BBQ chicken pizza is great. "
					btnUrl="https://www.cpk.com/"
					btnLabel="Epstein didnt kill himself"
				/>
			</div>
			<div className="container-fluid bg-dark text-white">
				<Footer />
			</div>
		</>
	);
}

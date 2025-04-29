"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./nav-bar.css";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav>
			<div className="nav-container">
				{/* Logo gauche */}
				<div className="nav-left">
					<Link href="#home">
						<Image
							src="/soai-logo.svg"
							alt="SOAI Logo"
							width={150}
							height={50}
						/>
					</Link>
				</div>

				{/* Liens centre */}
				<ul className={`nav-links ${menuOpen ? "active" : ""}`}>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#agenda">Agenda</a>
					</li>
					<li>
						<a href="#faq">FAQ</a>
					</li>
				</ul>

				{/* Bouton droite */}
				<div className="nav-right">
					<Link href="#register">
						<button className="nav-button">Register</button>
					</Link>

					{/* Menu mobile */}
					<div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
						<span />
						<span />
						<span />
					</div>
				</div>
			</div>
		</nav>
	);
}

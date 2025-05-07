"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SOAILOGO from "../../../public/soai-logo.svg";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);

	console.log("caleeeeeeeeeeeeed.....")
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	// Handle clicks outside the navbar to close the menu
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				navRef.current &&
				!navRef.current.contains(event.target as Node) &&
				menuOpen
			) {
				setMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuOpen]);

	// Prevent body scroll when menu is open on mobile
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [menuOpen]);

	// Handle scroll events to change navbar appearance
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 10) {
				setHasScrolled(true);
			} else {
				setHasScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			ref={navRef}
			className={`fixed w-full z-50 transition-all duration-300 ${
				hasScrolled || menuOpen
					? "bg-white/60 backdrop-blur-lg shadow-lg border-white/20"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center relative">
				{/* Logo left */}
				<div className="flex-1 flex items-center">
					<Link href="#home">
						<Image
							src={SOAILOGO}
							alt="Logo"
							width={150}
							height={50}
							className="h-12 w-auto"
						/>
					</Link>
				</div>

				{/* Desktop Navigation Links */}
				<ul className="hidden md:flex flex-2 gap-6 justify-center list-none m-0 p-0 font-bold">
					<li className="relative group ">
						<Link
							href="#home"
							className="text-amber-500 transition-all duration-300 py-2 px-4 rounded-md block"
						>
							Home
						</Link>
						<div className="absolute bottom-1 left-1/2 h-[2px] w-0 group-hover:w-[80%] transition-all duration-300 bg-amber-500 rounded-full -z-10 transform -translate-x-1/2"></div>
					</li>
					<li className="relative group">
						<Link
							href="#about"
							className="text-amber-500 transition-all duration-300 py-2 px-4 rounded-md block"
						>
							About
						</Link>
						<div className="absolute bottom-1 left-1/2 h-[2px] w-0 group-hover:w-[80%] transition-all duration-300 bg-amber-500 rounded-full -z-10 transform -translate-x-1/2"></div>
					</li>
					<li className="relative group">
						<Link
							href="#agenda"
							className="text-amber-500 transition-all duration-300 py-2 px-4 rounded-md block"
						>
							Agenda
						</Link>
						<div className="absolute bottom-1 left-1/2 h-[2px] w-0 group-hover:w-[80%] transition-all duration-300 bg-amber-500 rounded-full -z-10 transform -translate-x-1/2"></div>
					</li>
					<li className="relative group">
						<Link
							href="#faq"
							className="text-amber-500 transition-all duration-300 py-2 px-4 rounded-md block"
						>
							FAQ
						</Link>
						<div className="absolute bottom-1 left-1/2 h-[2px] w-0 group-hover:w-[80%] transition-all duration-300 bg-amber-500 rounded-full -z-10 transform -translate-x-1/2"></div>
					</li>
				</ul>

				{/* Right section with register button */}
				<div className="flex-1 flex justify-end items-center gap-4">
					<Link href="#register" className="hidden md:block cursor-pointer">
						<div className="group relative">
							<div className="border-2 border-[#FF8A18] backdrop-blur-sm p-[2px] rounded-[20px] transition-all duration-300 cursor-pointer group-hover:p-0">
								<button className="border-2 border-[#F7A209] backdrop-blur-sm px-5 py-[6px] rounded-[18px] transition-all duration-300 cursor-pointer">
									<span className="text-[#54B2C8] font-bold">Register</span>
								</button>
							</div>
						</div>
					</Link>

					{/* Animated hamburger menu toggle */}
					<div
						className="flex md:hidden flex-col justify-center items-center w-10 h-10 relative cursor-pointer"
						onClick={toggleMenu}
					>
						<motion.span
							className="w-6 h-0.5 bg-amber-500 rounded-sm absolute"
							animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
							transition={{ duration: 0.3 }}
						></motion.span>
						<motion.span
							className="w-6 h-0.5 bg-amber-500 rounded-sm absolute"
							animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
							transition={{ duration: 0.3 }}
						></motion.span>
						<motion.span
							className="w-6 h-0.5 bg-amber-500 rounded-sm absolute"
							animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
							transition={{ duration: 0.3 }}
						></motion.span>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						className="md:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-lg shadow-lg z-50"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<motion.ul
							className="flex flex-col items-center py-4 gap-3"
							initial="closed"
							animate="open"
							exit="closed"
							variants={{
								open: {
									transition: { staggerChildren: 0.1, delayChildren: 0.1 },
								},
								closed: {
									transition: { staggerChildren: 0.05, staggerDirection: -1 },
								},
							}}
						>
							{[
								{ href: "#home", label: "Home" },
								{ href: "#about", label: "About" },
								{ href: "#agenda", label: "Agenda" },
								{ href: "#faq", label: "FAQ" },
							].map((item, index) => (
								<motion.li
									key={index}
									className="w-full"
									variants={{
										open: { opacity: 1, y: 0 },
										closed: { opacity: 0, y: -20 },
									}}
								>
									<Link
										href={item.href}
										className="text-amber-500 font-semibold text-lg block py-3 px-6 w-full text-center relative overflow-hidden group"
										onClick={() => setMenuOpen(false)}
									>
										<span className="relative z-10">{item.label}</span>
										<span className="absolute inset-0 bg-amber-50/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
									</Link>
								</motion.li>
							))}
							<motion.li
								className="w-full pt-2"
								variants={{
									open: { opacity: 1, y: 0 },
									closed: { opacity: 0, y: -20 },
								}}
							>
								<Link
									href="#register"
									className="block mx-auto w-max"
									onClick={() => setMenuOpen(false)}
								>
									<button className="border border-amber-500 text-amber-500 bg-white/10 backdrop-blur-sm px-6 py-2.5 rounded-full cursor-pointer transition-all duration-300 hover:bg-amber-500 hover:text-white">
										Register
									</button>
								</Link>
							</motion.li>
						</motion.ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}

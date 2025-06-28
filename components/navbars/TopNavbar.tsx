"use client";
import { useTheme } from "@/components/theme-provider";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "../theme-toggle";

const navItems = [
	{ label: "Home", path: "/" },
	{ label: "About Us", path: "/aboutus" },
	{ label: "Services", path: "/services" },
	{
		label: "Company",
		dropdown: [
			{ label: "Divisions", path: "/divisions" },
			{ label: "Corporate Governance", path: "/governance" },
			{ label: "Sustainability", path: "/sustainability" },
		],
	},
	{
		label: "More",
		dropdown: [
			{ label: "News & Media", path: "/news" },
			{ label: "Investor Relations", path: "/investor-relations" },
			{ label: "Career Portal", path: "/careers" },
			{ label: "Contact Us", path: "/contact" },
		],
	},
];

interface TopNavbarProps {
	onAmaraClick: () => void;
	isSidebarOpen: boolean;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ onAmaraClick, isSidebarOpen }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [dropdownHover, setDropdownHover] = useState<string | null>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const { theme } = useTheme();
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (!mobileMenuOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
				setMobileMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [mobileMenuOpen]);

	const isActiveRoute = (path: string) => pathname === path;
	const handleDropdown = (label: string) => setOpenDropdown(openDropdown === label ? null : label);

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
			isScrolled ? "bg-amara-dark/80 backdrop-blur-md shadow-lg dark:bg-dark-900/80" : "bg-amara-dark dark:bg-dark-900"
		}`}>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-3 group">
						<div className={`w-8 h-8 rounded-md overflow-hidden ${isSidebarOpen ? "bg-amara-dark" : "bg-amara-gold"}`}>
							<Image src="/amaraa.png" alt="Amara Aviation" width={32} height={32} className="object-contain w-8 h-8" priority />
						</div>
						<span className="font-bodoni text-lg font-bold text-primary dark:text-gray-100 group-hover:text-primary transition-colors duration-200">Amaraa Aviation</span>
					</Link>

					{/* Desktop Nav */}
					<div className="hidden md:flex items-center space-x-4 ">
						{navItems.map((item) =>
							!item.dropdown ? (
								<Link
									key={item.path}
									href={item.path}
									className={`font-montserrat font-medium transition-all duration-300 relative group px-3 py-2 rounded ${
										isActiveRoute(item.path)
											? "text-primary"
											: "text-amara-light hover:text-primary dark:text-gray-100"
									}`}
								>
									{item.label}
									<span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
										isActiveRoute(item.path) ? "w-full bg-primary" : "w-0 group-hover:w-full bg-primary"
									}`} />
								</Link>
							) : (
								<div
									key={item.label}
									className="relative"
									onMouseEnter={() => setDropdownHover(item.label)}
									onMouseLeave={() => setDropdownHover(null)}
								>
									<button
										type="button"
										className={`flex items-center font-montserrat font-medium px-3 py-2 rounded ${
											(openDropdown === item.label || dropdownHover === item.label)
												? "text-primary"
												: "text-amara-light hover:text-primary dark:text-gray-100"
										}`}
										onClick={() => handleDropdown(item.label)}
									>
										{item.label}
										<ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${
											(openDropdown === item.label || dropdownHover === item.label) ? "rotate-180" : ""
										}`} />
									</button>
									{(openDropdown === item.label || dropdownHover === item.label) && (
										<div className={`absolute top-full left-0 mt-2 min-w-[180px] rounded-lg shadow-lg border border-primary z-50 ${
											theme === "dark" ? "bg-[#232323]" : "bg-white"
										}`}>
											<ul>
												{item.dropdown.map((sub) => (
													<li key={sub.path}>
														<Link
															href={sub.path}
															className={`block px-4 py-2 font-montserrat transition-all duration-200 ${
																isActiveRoute(sub.path)
																	? "text-primary font-semibold"
																	: theme === "dark"
																		? "text-[#f0efe2]"
																		: "text-black"
															} hover:bg-primary hover:text-black`}
															onClick={() => {
																setOpenDropdown(null);
																setDropdownHover(null);
															}}
														>
															{sub.label}
														</Link>
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							)
						)}
						<ThemeToggle />
					</div>

					{/* Mobile Toggle */}
					<div className="md:hidden">
						<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-amara-gold dark:text-white p-2">
							{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div ref={mobileMenuRef} className="md:hidden bg-amara-dark dark:bg-dark-900 px-4 pb-4 pt-2 space-y-2">
					{navItems.map((item) =>
						!item.dropdown ? (
							<Link
								key={item.path}
								href={item.path}
								className="block text-amara-light dark:text-primary font-montserrat py-2 border-b border-amara-gold"
								onClick={() => setMobileMenuOpen(false)}
							>
								{item.label}
							</Link>
						) : (
							<div key={item.label} className="border-b border-amara-gold pb-2">
								<div className="text-amara-light dark:text-primary font-montserrat py-2">{item.label}</div>
								<div className="ml-4 space-y-1">
									{item.dropdown.map((sub) => (
										<Link
											key={sub.path}
											href={sub.path}
											className="block text-sm text-primary"
											onClick={() => setMobileMenuOpen(false)}
										>
											{sub.label}
										</Link>
									))}
								</div>
							</div>
						)
					)}
					<ThemeToggle />
				</div>
			)}
		</nav>
	);
};

export default TopNavbar;

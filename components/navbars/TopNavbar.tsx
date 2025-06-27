"use client";
import { useTheme } from "@/components/theme-provider";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
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
	const pathname = usePathname();
	const { theme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActiveRoute = (path: string) => pathname === path;

	// Helper for dropdown open/close
	const handleDropdown = (label: string) => {
		setOpenDropdown(openDropdown === label ? null : label);
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-amara-dark/80 backdrop-blur-md shadow-lg dark:bg-dark-900/80"
					: "bg-amara-dark dark:bg-dark-900"
			}`}
		>
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between h-16">
					{/* Left content - logo and text */}
					<div className="flex items-center justify-start">
						<Link href="/" className="flex items-center px-4 py-2 rounded-lg transition-all duration-300 group">
							<div
								className={`w-8 h-8 rounded-md flex items-center justify-center overflow-hidden transition-all duration-300 ${
									isSidebarOpen ? "bg-amara-dark" : "bg-amara-gold"
								}`}
							>
								<Image
									src="/amaraa.png"
									alt="Amara Aviation"
									width={32}
									height={32}
									className="object-contain w-8 h-8"
									priority
								/>
							</div>
							<div className="flex flex-col ml-3 leading-tight">
								<span className="font-bodoni text-lg font-bold text-amara-gold dark:text-gray-100">Amaraa Aviation</span>
							</div>
						</Link>
					</div>
					{/* Right content - nav items */}
					<div className="hidden md:flex items-center space-x-4 pr-4">
						{navItems.map((item) =>
							!item.dropdown ? (
								<Link
									key={item.path}
									href={item.path}
									className={`font-montserrat font-medium transition-all duration-300 relative group px-3 py-2 rounded ${
										isActiveRoute(item.path)
											? "text-[#c6a35d]"
											: "text-amara-light hover:text-[#c6a35d] dark:text-gray-100 dark:hover:text-[#c6a35d]"
									}`}
								>
									{item.label}
									<span
										className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
											isActiveRoute(item.path)
												? "w-full bg-[#c6a35d]"
												: "w-0 group-hover:w-full bg-[#c6a35d]"
										}`}
									/>
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
										className={`flex items-center font-montserrat font-medium transition-all duration-300 px-3 py-2 rounded ${
											(openDropdown === item.label || dropdownHover === item.label)
												? "text-[#c6a35d]"
												: "text-amara-light hover:text-[#c6a35d] dark:text-gray-100 dark:hover:text-[#c6a35d]"
										}`}
										aria-haspopup="true"
										aria-expanded={openDropdown === item.label || dropdownHover === item.label}
										onClick={() => handleDropdown(item.label)}
									>
										{item.label}
										<ChevronDown
											className={`w-4 h-4 ml-1 transition-transform duration-300 ${
												(openDropdown === item.label || dropdownHover === item.label)
													? "rotate-180"
													: "rotate-0"
											}`}
										/>
									</button>
									{(openDropdown === item.label || dropdownHover === item.label) && (
										<div
											className={`absolute top-full left-0 mt-2 min-w-[180px] rounded-lg shadow-lg border border-[#c6a35d] z-50 animate-fade-in ${
												theme === "dark"
													? "bg-[#232323] dark:bg-dark-900"
													: "bg-white"
											}`}
											onMouseEnter={() => setDropdownHover(item.label)}
											onMouseLeave={() => setDropdownHover(null)}
										>
											<ul>
												{item.dropdown.map((sub) => (
													<li key={sub.path}>
														<Link
															href={sub.path}
															className={`block px-4 py-2 font-montserrat transition-all duration-200 rounded ${
																isActiveRoute(sub.path)
																	? theme === "dark"
																		? "text-[#c6a35d] font-semibold"
																		: "text-[#c6a35d] font-semibold"
																	: theme === "dark"
																		? "text-[#f0efe2]"
																		: "text-black"
															} hover:bg-[#c6a35d] hover:text-black`}
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
				</div>
			</div>
		</nav>
	);
};

export default TopNavbar;

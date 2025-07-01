"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
    { name: "Homepage", href: "/" },
    { name: "Bibliography", href: "/annotated-bibliography" },
    { name: "Narrative", href: "/narrative" },
    { name: "About", href: "/about" },
    { name: "Data Critique", href: "/data-critique" },
];

export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
            <div className="w-full px-4">
                <div className="flex py-3 justify-between items-center w-full">
                    {/* Home Button */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 px-3 py-2 font-semibold rounded-lg text-blue-700 hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-1.669-3.597l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L11 3.323V3a1 1 0 011-1zM5 8a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1V8zM8 11a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="hidden sm:inline">
                                Ghost Forests
                            </span>
                        </Link>
                    </div>

                    {/* Navigation Tabs */}
                    <ul className="flex flex-1 justify-center">
                        {tabs.map((tab) => (
                            <li key={tab.href} className="flex-1 max-w-xs">
                                <Link
                                    href={tab.href}
                                    className={`relative px-2 py-2 font-semibold rounded whitespace-nowrap text-center text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white block w-full mx-1
                      ${
                          pathname === tab.href
                              ? "bg-blue-100 text-blue-700 shadow-md"
                              : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                      }
                    `}
                                >
                                    {tab.name}
                                    {pathname === tab.href && (
                                        <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Spacer to balance layout */}
                    <div className="flex-shrink-0 w-20"></div>
                </div>
            </div>
        </nav>
    );
}

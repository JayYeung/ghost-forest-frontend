"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
    { name: "Homepage", href: "/" },
    { name: "Our Research", href: "/narrative-1" },
    { name: "Stories & Final Thoughts", href: "/narrative-2" },
    { name: "Bibliography", href: "/annotated-bibliography" },
    { name: "Data Critique", href: "/data-critique" },
    { name: "About", href: "/about" }
];

export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
            <div className="w-full px-4">
                <div className="flex py-3 justify-between items-center w-full">
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
                </div>
            </div>
        </nav>
    );
}

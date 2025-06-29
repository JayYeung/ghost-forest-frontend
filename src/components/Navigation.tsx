"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
    { name: "Topic & History", href: "/" },
    { name: "Methodology & Thesis", href: "/narrative" },
    { name: "Data Critique", href: "/data-critique" },
    { name: "Bibliography", href: "/annotated-bibliography" },
    { name: "About", href: "/about" },
    { name: "Take Action!", href: "/take-action" },
];

export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
            <div className="max-w-4xl mx-auto px-4">
                <ul className="flex gap-4 py-3 justify-center items-center max-w-full overflow-x-auto">
                    {tabs.map((tab) => (
                        <li key={tab.href}>
                            <Link
                                href={tab.href}
                                className={`relative px-4 py-2 font-semibold rounded whitespace-nowrap text-center text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white
                  ${
                      pathname === tab.href
                          ? "bg-blue-100 text-blue-700 shadow-md"
                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                  }
                `}
                                style={{ minWidth: 120 }}
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
        </nav>
    );
}

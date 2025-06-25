"use client";
import { useEffect, useRef, useState } from "react";

declare global {
    interface Window {
        ee: any;
        google: any;
    }
}

export default function NDVIMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Helper function to load scripts
    const load = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => reject();
            document.head.appendChild(script);
        });
    };

    // Set mounted state when component mounts
    useEffect(() => {
        setIsMounted(true);
        console.log("NDVIMap: Component mounted");
    }, []);

    useEffect(() => {
        if (!isMounted) {
            console.log("NDVIMap: Component not yet mounted, skipping...");
            return;
        }

        const run = async () => {
            console.log("NDVIMap: Starting map initialization...");
            try {
                // Wait for the DOM element to be available
                let attempts = 0;
                const maxAttempts = 10;

                while (!mapRef.current && attempts < maxAttempts) {
                    console.log(
                        `NDVIMap: Waiting for map ref (attempt ${
                            attempts + 1
                        }/${maxAttempts})...`
                    );
                    await new Promise((resolve) => setTimeout(resolve, 200));
                    attempts++;
                }

                if (!mapRef.current) {
                    throw new Error(
                        "Map container element not found after multiple attempts"
                    );
                }

                console.log(
                    "NDVIMap: Map ref found, proceeding with map creation..."
                );

                // Load Google Maps API
                console.log("NDVIMap: Loading Google Maps API...");
                await load(
                    `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&loading=async`
                );
                console.log("NDVIMap: Google Maps API loaded successfully");

                // Wait for Google Maps to be fully available
                console.log(
                    "NDVIMap: Waiting for Google Maps to be fully available..."
                );
                let googleAttempts = 0;
                const maxGoogleAttempts = 20;

                while (
                    (!window.google ||
                        !window.google.maps ||
                        !window.google.maps.Map) &&
                    googleAttempts < maxGoogleAttempts
                ) {
                    console.log(
                        `NDVIMap: Waiting for Google Maps (attempt ${
                            googleAttempts + 1
                        }/${maxGoogleAttempts})...`
                    );
                    await new Promise((resolve) => setTimeout(resolve, 100));
                    googleAttempts++;
                }

                if (
                    !window.google ||
                    !window.google.maps ||
                    !window.google.maps.Map
                ) {
                    throw new Error(
                        "Google Maps API not fully loaded after multiple attempts"
                    );
                }

                console.log("NDVIMap: Google Maps API is fully available");

                // Create the map
                console.log("NDVIMap: Creating map instance...");
                const map = new window.google.maps.Map(mapRef.current, {
                    center: { lat: 35, lng: -80 }, // North Carolina center
                    zoom: 7,
                    mapTypeId: "satellite",
                });

                mapInstanceRef.current = map;
                setLoading(false);
                console.log("NDVIMap: Map created successfully");
            } catch (loadError: any) {
                console.error("NDVIMap: Error loading Google Maps:", loadError);
                setError(
                    "Failed to load Google Maps: " +
                        (loadError?.message || "Check your API key")
                );
                setLoading(false);
            }
        };

        run();
    }, [isMounted]);

    return (
        <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden relative">
            {/* Map container - always rendered */}
            <div ref={mapRef} className="w-full h-full" />

            {/* Loading overlay */}
            {loading && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center animate-spin">
                            <span className="text-2xl">🛰️</span>
                        </div>
                        <p className="text-gray-600 font-medium">
                            Loading Satellite Map...
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            North Carolina coastal region
                        </p>
                    </div>
                </div>
            )}

            {/* Error overlay */}
            {error && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <div className="text-center max-w-md mx-auto p-6">
                        <div className="w-16 h-16 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl">⚠️</span>
                        </div>
                        <p className="text-gray-600 font-medium mb-2">
                            Map Loading Error
                        </p>
                        <p className="text-sm text-gray-500 mb-4">{error}</p>
                        <div className="bg-white/80 p-3 rounded text-xs text-left">
                            <p className="font-semibold text-blue-800 mb-1">
                                To fix this:
                            </p>
                            <ul className="text-gray-600 space-y-1">
                                <li>
                                    • Check your Google Maps API key in
                                    .env.local
                                </li>
                                <li>• Ensure Maps JavaScript API is enabled</li>
                                <li>
                                    • Verify API key has correct permissions
                                </li>
                                <li>• Check browser console for details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Map info overlay - only show when not loading and no error */}
            {!loading && !error && (
                <>
                    <div className="absolute top-4 left-4 bg-white/90 p-2 rounded text-xs">
                        <p className="font-semibold">
                            North Carolina Coastal Region
                        </p>
                        <p>Satellite view - Ghost Forest Study Area</p>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded text-xs">
                        <p className="font-semibold text-blue-800 mb-2">
                            Future Features:
                        </p>
                        <div className="text-gray-600 space-y-1">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded"></div>
                                <span>Tree Cover Data</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded"></div>
                                <span>Forest Loss Analysis</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                                <span>NDVI Visualization</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

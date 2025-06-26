"use client";
import { useEffect, useRef, useState } from "react";
import type { MultiPolygon } from "geojson";
import ncGeoJsonData from "./nc.json";

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ee: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        google: any;
    }
}

export default function NDVIMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState<boolean>(false);

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

                // Add GEE Loss Year overlay
                const tileUrl = process.env
                    .NEXT_PUBLIC_HANSEN_TILE_URL as string;

                const geeLayer = new window.google.maps.ImageMapType({
                    getTileUrl: (
                        coord: { x: number; y: number },
                        zoom: number
                    ) => {
                        return tileUrl
                            .replace("{z}", zoom.toString())
                            .replace("{x}", coord.x.toString())
                            .replace("{y}", coord.y.toString());
                    },
                    tileSize: new window.google.maps.Size(256, 256),
                    name: "GEE Loss Year",
                    opacity: 0.7,
                });

                map.overlayMapTypes.insertAt(0, geeLayer);

                // Dynamically import the GeoJSON
                const ncGeoJson = ncGeoJsonData as { geometry: MultiPolygon };
                if (
                    ncGeoJson &&
                    ncGeoJson.geometry &&
                    ncGeoJson.geometry.coordinates
                ) {
                    const coordinates: number[][][][] = ncGeoJson.geometry
                        .coordinates as number[][][][];
                    const polygons: { lat: number; lng: number }[][] =
                        coordinates.map((multiPoly: number[][][]) =>
                            multiPoly[0].map((coord: number[]) => ({
                                lat: coord[1],
                                lng: coord[0],
                            }))
                        );
                    polygons.forEach((path: { lat: number; lng: number }[]) => {
                        new window.google.maps.Polygon({
                            paths: path,
                            strokeColor: "#2563eb",
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: "#2563eb",
                            fillOpacity: 0.08,
                            map: map,
                        });
                    });
                    // Compute centroid for label
                    const allCoords: { lat: number; lng: number }[] =
                        polygons.flat();
                    const centroid = allCoords.reduce(
                        (acc, cur) => ({
                            lat: acc.lat + cur.lat,
                            lng: acc.lng + cur.lng,
                        }),
                        { lat: 0, lng: 0 }
                    );
                    centroid.lat /= allCoords.length;
                    centroid.lng /= allCoords.length;
                    new window.google.maps.InfoWindow({
                        content:
                            '<div style="font-weight:bold;color:#2563eb;font-size:1.1rem;">North Carolina</div>',
                        position: centroid,
                    }).open(map);
                }

                mapInstanceRef.current = map;
                setLoading(false);
                console.log("NDVIMap: Map created successfully");
            } catch (loadError: unknown) {
                console.error("NDVIMap: Error loading Google Maps:", loadError);
                setError(
                    "Failed to load Google Maps: " +
                        (loadError instanceof Error
                            ? loadError.message
                            : "Check your API key")
                );
                setLoading(false);
            }
        };

        run();
    }, [isMounted]);

    return (
        <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden relative">
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
                    {/* Region label on the map */}
                    <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded text-sm font-bold text-blue-900 shadow-lg pointer-events-none select-none">
                        North Carolina Coast
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 p-3 rounded text-xs shadow-lg">
                        <p className="font-bold mb-1 text-blue-900">
                            Region: North Carolina Coast
                        </p>
                        <p className="font-semibold mb-1">
                            NDVI & Forest Loss (Hansen, 5-year bins)
                        </p>
                        <div className="flex flex-col space-y-1 mt-2">
                            <div className="flex items-center space-x-2">
                                <span
                                    className="inline-block w-4 h-4 rounded"
                                    style={{ background: "#000000" }}
                                ></span>
                                <span>No loss</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span
                                    className="inline-block w-4 h-4 rounded"
                                    style={{ background: "#ffff00" }}
                                ></span>
                                <span>2001–05</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span
                                    className="inline-block w-4 h-4 rounded"
                                    style={{ background: "#ffa500" }}
                                ></span>
                                <span>2006–10</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span
                                    className="inline-block w-4 h-4 rounded"
                                    style={{ background: "#ff0000" }}
                                ></span>
                                <span>2011–15</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span
                                    className="inline-block w-4 h-4 rounded"
                                    style={{ background: "#00ffff" }}
                                ></span>
                                <span>2016–20</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span
                                    className="inline-block w-4 h-4 rounded"
                                    style={{ background: "#00ff00" }}
                                ></span>
                                <span>2021–24</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span
                                    className="inline-block w-4 h-4 rounded"
                                    style={{ background: "#555555" }}
                                ></span>
                                <span>Water or no data</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

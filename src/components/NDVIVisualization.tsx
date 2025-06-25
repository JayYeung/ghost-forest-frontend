"use client";

export default function NDVIVisualization() {
    return (
        <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden relative">
            {/* Placeholder for Earth Engine visualization */}
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                    <div className="w-20 h-20 bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl">🛰️</span>
                    </div>
                    <p className="text-gray-600 font-medium text-lg">
                        Hansen Global Forest Change v1.12
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        NDVI Satellite Imagery Analysis
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        Tree Cover & Forest Loss (2000-2024)
                    </p>
                </div>
            </div>

            {/* Overlay with dataset info */}
            <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg shadow-sm">
                <p className="font-semibold text-sm text-blue-800">
                    Dataset Information
                </p>
                <ul className="text-xs text-gray-600 mt-1 space-y-1">
                    <li>• Hansen Global Forest Change v1.12</li>
                    <li>• 30-meter resolution</li>
                    <li>• 2000-2024 temporal coverage</li>
                    <li>• North Carolina coastal focus</li>
                </ul>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg shadow-sm">
                <p className="font-semibold text-sm text-blue-800 mb-2">
                    Legend
                </p>
                <div className="flex items-center space-x-2 text-xs">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span>High Tree Cover</span>
                </div>
                <div className="flex items-center space-x-2 text-xs mt-1">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span>Medium Tree Cover</span>
                </div>
                <div className="flex items-center space-x-2 text-xs mt-1">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span>Low Tree Cover</span>
                </div>
            </div>
        </div>
    );
}

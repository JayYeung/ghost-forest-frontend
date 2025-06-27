"use client";
import React, { useRef, useState } from "react";

interface ReadAloudControlsProps {
    getText: () => string;
}

export default function ReadAloudControls({ getText }: ReadAloudControlsProps) {
    const [reading, setReading] = useState(false);
    const [paused, setPaused] = useState(false);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    const handleReadAloud = () => {
        const text = getText();
        if (!text) return;
        const utterance = new window.SpeechSynthesisUtterance(text);
        utterance.onend = () => {
            setReading(false);
            setPaused(false);
        };
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
        utteranceRef.current = utterance;
        setReading(true);
        setPaused(false);
    };

    const handleStop = () => {
        window.speechSynthesis.cancel();
        setReading(false);
        setPaused(false);
    };

    const handleContinue = () => {
        window.speechSynthesis.resume();
        setPaused(false);
    };

    const handlePause = () => {
        window.speechSynthesis.pause();
        setPaused(true);
    };

    return (
        <div className="mb-6 flex gap-2">
            {!reading && (
                <button
                    onClick={handleReadAloud}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Read content aloud"
                >
                    🔊 Read Aloud
                </button>
            )}
            {reading && !paused && (
                <>
                    <button
                        onClick={handlePause}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        aria-label="Pause reading"
                    >
                        ⏸️ Pause
                    </button>
                    <button
                        onClick={handleStop}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                        aria-label="Stop reading"
                    >
                        ⏹️ Stop
                    </button>
                </>
            )}
            {reading && paused && (
                <>
                    <button
                        onClick={handleContinue}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                        aria-label="Continue reading"
                    >
                        ▶️ Continue
                    </button>
                    <button
                        onClick={handleStop}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                        aria-label="Stop reading"
                    >
                        ⏹️ Stop
                    </button>
                </>
            )}
        </div>
    );
}

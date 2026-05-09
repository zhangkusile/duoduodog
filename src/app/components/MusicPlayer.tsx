import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const PawIcon = ({ className }: { className?: string }) => (
  <span
    className={className}
    role="img"
    aria-hidden
    style={{
      filter: "grayscale(1) brightness(1.8) sepia(1) saturate(1.5) hue-rotate(-10deg)",
    }}
  >🐾</span>
);

// Music note particles
function MusicNotes({ isPlaying }: { isPlaying: boolean }) {
  const notes = ["♪", "♫", "♬"];
  return (
    <AnimatePresence>
      {isPlaying &&
        notes.map((note, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-10, -30 - i * 10],
              x: [0, (i - 1) * 15],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
            className="absolute -top-2 left-1/2 text-orange-400 text-sm font-bold pointer-events-none select-none"
          >
            {note}
          </motion.span>
        ))}
    </AnimatePresence>
  );
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTip, setShowTip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/bgm.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Hide tip after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTip(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Browser may block autoplay; user interaction should allow it
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.8 }}
            className="mb-3 bg-white text-stone-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg border border-stone-100 whitespace-nowrap"
          >
            点我播放音乐~
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music notes animation */}
      <div className="relative">
        <MusicNotes isPlaying={isPlaying} />

        {/* Paw button */}
        <motion.button
          onClick={toggleMusic}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.85 }}
          animate={
            isPlaying
              ? {
                  rotate: [0, -10, 10, -10, 0],
                  transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
                }
              : { rotate: 0 }
          }
          className={`
            relative cursor-pointer transition-all duration-300
            drop-shadow-lg hover:drop-shadow-xl
            ${
              isPlaying
                ? "drop-shadow-[0_2px_8px_rgba(251,146,60,0.5)]"
                : "opacity-80 hover:opacity-100"
            }
          `}
          aria-label={isPlaying ? "暂停音乐" : "播放音乐"}
        >
          <PawIcon className="text-4xl leading-none" />
        </motion.button>
      </div>
    </div>
  );
}

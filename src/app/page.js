"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const [memes, setMemes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes") // Fetch trending memes
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes.slice(0, 10))); // Get top 10 memes
  }, []);

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      <nav className="flex justify-between p-4">
        <h1 className="text-3xl font-bold">MemeVerse</h1>
        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      <h2 className="text-2xl font-bold text-center mt-4">Trending Memes</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {memes.map((meme) => (
          <motion.div
            key={meme.id}
            whileHover={{ scale: 1.1 }}
            className="p-2 border rounded shadow-lg"
          >
            <Link href={`/meme/${meme.id}`}>
              <img src={meme.url} alt={meme.name} className="rounded-lg w-full" />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Link href="/explore" className="px-4 py-2 bg-blue-500 text-white rounded">
          Explore More
        </Link>
      </div>
    </div>
  );
}

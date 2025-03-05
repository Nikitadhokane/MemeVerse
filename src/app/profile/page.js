"use client";

import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "Meme Lover",
    bio: "Just another meme enthusiast.",
    profilePicture: "/default-avatar.png",
  });

  const [uploadedMemes, setUploadedMemes] = useState([]);
  const [likedMemes, setLikedMemes] = useState([]);

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("profile"));
    if (storedProfile) setProfile(storedProfile);

    const storedUploadedMemes = JSON.parse(localStorage.getItem("uploadedMemes")) || [];
    setUploadedMemes(storedUploadedMemes);

    const storedLikedMemes = JSON.parse(localStorage.getItem("likedMemes")) || [];
    setLikedMemes(storedLikedMemes);
  }, []);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile updated!");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Your Profile</h1>
        
        <div className="mt-4 flex items-center gap-4">
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="w-16 h-16 rounded-full border"
          />
          <div className="flex flex-col w-full">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="border p-2 rounded dark:bg-gray-700"
            />
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleProfileChange}
              className="mt-2 border p-2 rounded dark:bg-gray-700"
              placeholder="Your bio..."
            />
          </div>
        </div>
        
        <button
          onClick={saveProfile}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Profile
        </button>
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <h2 className="text-xl font-semibold">Uploaded Memes</h2>
        {uploadedMemes.length === 0 ? (
          <p className="text-gray-500">No memes uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {uploadedMemes.map((meme, index) => (
              <img
                key={index}
                src={meme.url}
                alt={meme.name}
                className="w-full rounded shadow"
              />
            ))}
          </div>
        )}

        <h2 className="text-xl font-semibold mt-6">Liked Memes</h2>
        {likedMemes.length === 0 ? (
          <p className="text-gray-500">No liked memes yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {likedMemes.map((meme, index) => (
              <img
                key={index}
                src={meme.url}
                alt={meme.name}
                className="w-full rounded shadow"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

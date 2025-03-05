"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMeme } from "@/redux/memeSlice"; // Adjusted import path
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview image
    }
  };

  const handleUpload = () => {
    if (!image || !caption) {
      alert("Please upload an image and add a caption!");
      return;
    }

    const newMeme = {
      id: Date.now(),
      url: image,
      caption,
    };

    dispatch(addMeme(newMeme)); // Store in Redux
    router.push("/explore"); // Redirect to Explore Page
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Upload Meme</h1>
      <input type="file" onChange={handleFileChange} className="mb-4 block" />
      {image && <img src={image} alt="Preview" className="mb-4 w-full" />}
      <input
        type="text"
        placeholder="Enter caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload
      </button>
    </div>
  );
}

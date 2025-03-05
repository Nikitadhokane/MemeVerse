"use client";
import { useSelector } from "react-redux";
import "../../styles/explore.css"; 

export default function ExplorePage() {
  const memes = useSelector((state) => state.memes) || [];

  return (
    <div className="explore-container">
      <h1 className="explore-title">Explore Memes</h1>
      {memes.length === 0 ? (
        <p className="no-memes">No memes uploaded yet.</p>
      ) : (
        <div className="meme-grid">
          {memes.map((meme) => (
            <div key={meme.id} className="meme-card">
              <img src={meme.url} alt={meme.caption} />
              <p className="meme-caption">{meme.caption}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

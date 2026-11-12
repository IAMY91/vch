"use client";
import { useState } from "react";
export default function VideoFeature() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="video-feature">
      {loaded ? (
        <iframe
          title="The Brain’s Hidden Guardians: Microglia in Health and Disease | Dr. Verena Haage"
          src="https://www.youtube-nocookie.com/embed/ZRQzm6BKyqo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className="video-cover">
          <span className="eyebrow">In conversation / Video</span>
          <h3>
            The brain’s hidden
            <br />
            <em>guardians.</em>
          </h3>
          <button type="button" onClick={() => setLoaded(true)}>
            <span className="play-icon" aria-hidden="true">
              ▶
            </span>{" "}
            Load YouTube video
          </button>
          <p>YouTube connects only after you choose to load the video.</p>
        </div>
      )}
      <a
        className="video-external"
        href="https://www.youtube.com/watch?v=ZRQzm6BKyqo"
        target="_blank"
        rel="noreferrer"
      >
        Watch on YouTube ↗
      </a>
    </div>
  );
}

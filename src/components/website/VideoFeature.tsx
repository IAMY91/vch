"use client";
import Image from "next/image";
import { useState } from "react";
export default function VideoFeature() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="video-feature">
      <div className="video-stage">
        {loaded ? (
          <iframe
            title="The Brain’s Hidden Guardians: Microglia in Health and Disease | Dr. Verena Haage"
            src="https://www.youtube-nocookie.com/embed/ZRQzm6BKyqo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            className="video-thumbnail"
            type="button"
            onClick={() => setLoaded(true)}
            aria-label="Load video: The Brain’s Hidden Guardians with Dr. Verena Haage"
          >
            <Image
              src="/images/brain-guardians-thumbnail.jpg"
              alt="Neuroscience and Beyond episode: The Brain’s Hidden Guardians, Microglia in Health and Disease, with Dr. Verena Haage"
              width={480}
              height={360}
              sizes="(max-width:760px) 100vw, 45vw"
            />
            <span className="thumbnail-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="m9 5 11 7-11 7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="video-caption">
        <p>Neuroscience and Beyond · The Brain’s Hidden Guardians</p>
        <p className="video-privacy">
          The thumbnail is hosted here. YouTube connects only when you load the
          player.
        </p>
        <a
          href="https://www.youtube.com/watch?v=ZRQzm6BKyqo"
          target="_blank"
          rel="noreferrer"
        >
          Watch on YouTube ↗
        </a>
      </div>
    </div>
  );
}

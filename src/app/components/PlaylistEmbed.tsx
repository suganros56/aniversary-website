import React from "react";

// Replace the embed URLs below with your favorite playlists!
const spotifyEmbedUrl =
  "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U?utm_source=generator";
const youtubeEmbedUrl =
  "https://www.youtube.com/embed/videoseries?list=PL1234567890abcdef"; // Replace with your real playlist ID

type PlaylistEmbedProps = {
  type?: "spotify" | "youtube"; // default to Spotify
};

const PlaylistEmbed: React.FC<PlaylistEmbedProps> = ({ type = "spotify" }) => (
  <div className="w-full max-w-2xl mx-auto mt-8 flex flex-col items-center">
    <h2 className="text-2xl font-bold text-pink-600 mb-4">
      Our Love Songs Playlist 🎶
    </h2>
    {type === "spotify" ? (
      <iframe
        src={spotifyEmbedUrl}
        width="100%"
        height="380"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
        className="rounded-xl shadow"
        title="Spotify Playlist"
      />
    ) : (
      <iframe
        width="100%"
        height="380"
        src={youtubeEmbedUrl}
        title="YouTube Playlist"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-xl shadow"
      ></iframe>
    )}
  </div>
);

export default PlaylistEmbed;

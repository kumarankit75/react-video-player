// import { useRef, useState } from "react";
// import "./VideoPlayer.css";

// export default function VideoPlayer() {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [speed, setSpeed] = useState(1);

//   const togglePlay = () => {
//     const video = videoRef.current;
//     if (video.paused) {
//       video.play();
//       setIsPlaying(true);
//     } else {
//       video.pause();
//       setIsPlaying(false);
//     }
//   };

//   const handleProgress = () => {
//     const video = videoRef.current;
//     setProgress((video.currentTime / video.duration) * 100);
//   };

//   const seek = (e) => {
//     const video = videoRef.current;
//     video.currentTime = (e.target.value / 100) * video.duration;
//   };

//   const changeSpeed = (e) => {
//     const value = e.target.value;
//     setSpeed(value);
//     videoRef.current.playbackRate = value;
//   };

//   const fullscreen = () => {
//     videoRef.current.requestFullscreen();
//   };

//   return (
//     <div className="player">
//       <video
//         ref={videoRef}
//         src="/sample.mp4"
//         onTimeUpdate={handleProgress}
//         onClick={togglePlay}
//       />

//       <div className="controls">
//         <button onClick={togglePlay}>
//           {isPlaying ? "⏸" : "▶"}
//         </button>

//         <input type="range" value={progress} onChange={seek} />

//         <select value={speed} onChange={changeSpeed}>
//           <option value="0.5">0.5x</option>
//           <option value="1">1x</option>
//           <option value="1.5">1.5x</option>
//           <option value="2">2x</option>
//         </select>

//         <button onClick={fullscreen}>⛶</button>
//       </div>
//     </div>
//   );
// }




import { useEffect, useRef, useState } from "react";
import "./VideoPlayer.css";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const updateProgress = () => {
    const video = videoRef.current;
    setProgress((video.currentTime / video.duration) * 100 || 0);
  };

  const seek = (e) => {
    const video = videoRef.current;
    video.currentTime = (e.target.value / 100) * video.duration;
  };

  const changeSpeed = (e) => {
    setSpeed(e.target.value);
    videoRef.current.playbackRate = e.target.value;
  };

  const fullscreen = () => {
    videoRef.current.requestFullscreen();
  };

  // 🎹 Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
      if (e.code === "ArrowRight") videoRef.current.currentTime += 5;
      if (e.code === "ArrowLeft") videoRef.current.currentTime -= 5;
      if (e.key === "f") fullscreen();
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="player">
      <video
        ref={videoRef}
        src="/sample.mp4"
        onTimeUpdate={updateProgress}
        onClick={togglePlay}
      />

      {!isPlaying && (
        <div className="center-play" onClick={togglePlay}>
          ▶
        </div>
      )}

      <div className="controls">
        <button onClick={togglePlay}>
          {isPlaying ? "⏸" : "▶"}
        </button>

        <input type="range" value={progress} onChange={seek} />

        <select value={speed} onChange={changeSpeed}>
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>

        <button onClick={fullscreen}>⛶</button>
      </div>
    </div>
  );
}

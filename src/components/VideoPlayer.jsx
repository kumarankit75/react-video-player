// // import { useRef, useState } from "react";
// // import "./VideoPlayer.css";

// // export default function VideoPlayer() {
// //   const videoRef = useRef(null);
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [progress, setProgress] = useState(0);
// //   const [speed, setSpeed] = useState(1);

// //   const togglePlay = () => {
// //     const video = videoRef.current;
// //     if (video.paused) {
// //       video.play();
// //       setIsPlaying(true);
// //     } else {
// //       video.pause();
// //       setIsPlaying(false);
// //     }
// //   };

// //   const handleProgress = () => {
// //     const video = videoRef.current;
// //     setProgress((video.currentTime / video.duration) * 100);
// //   };

// //   const seek = (e) => {
// //     const video = videoRef.current;
// //     video.currentTime = (e.target.value / 100) * video.duration;
// //   };

// //   const changeSpeed = (e) => {
// //     const value = e.target.value;
// //     setSpeed(value);
// //     videoRef.current.playbackRate = value;
// //   };

// //   const fullscreen = () => {
// //     videoRef.current.requestFullscreen();
// //   };

// //   return (
// //     <div className="player">
// //       <video
// //         ref={videoRef}
// //         src="/sample.mp4"
// //         onTimeUpdate={handleProgress}
// //         onClick={togglePlay}
// //       />

// //       <div className="controls">
// //         <button onClick={togglePlay}>
// //           {isPlaying ? "⏸" : "▶"}
// //         </button>

// //         <input type="range" value={progress} onChange={seek} />

// //         <select value={speed} onChange={changeSpeed}>
// //           <option value="0.5">0.5x</option>
// //           <option value="1">1x</option>
// //           <option value="1.5">1.5x</option>
// //           <option value="2">2x</option>
// //         </select>

// //         <button onClick={fullscreen}>⛶</button>
// //       </div>
// //     </div>
// //   );
// // }




// import { useEffect, useRef, useState } from "react";
// import "./VideoPlayer.css";

// export default function VideoPlayer() {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [speed, setSpeed] = useState(1);

//   const playlist = [
//   { id: 1, title: "Intro Video", src: "/video1.mp4" },
//   { id: 2, title: "Main Content", src: "/video2.mp4" },
//   { id: 3, title: "Outro", src: "/video3.mp4" },
// ];

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

// //   const updateProgress = () => {
// //     const video = videoRef.current;
// //     setProgress((video.currentTime / video.duration) * 100 || 0);
// //   };

// const updateProgress = () => {
//   const video = videoRef.current;
//   const current =
//     (video.currentTime / video.duration) * 100 || 0;

//   setProgress(current);

//   localStorage.setItem(
//     "video-time",
//     video.currentTime
//   );
// };



//   const seek = (e) => {
//     const video = videoRef.current;
//     video.currentTime = (e.target.value / 100) * video.duration;
//   };

//   const changeSpeed = (e) => {
//     setSpeed(e.target.value);
//     videoRef.current.playbackRate = e.target.value;
//   };

//   const fullscreen = () => {
//     videoRef.current.requestFullscreen();
//   };

//   // 🎹 Keyboard shortcuts
//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.code === "Space") {
//         e.preventDefault();
//         togglePlay();
//       }
//       if (e.code === "ArrowRight") videoRef.current.currentTime += 5;
//       if (e.code === "ArrowLeft") videoRef.current.currentTime -= 5;
//       if (e.key === "f") fullscreen();
//     };

//     document.addEventListener("keydown", handleKey);
//     return () => document.removeEventListener("keydown", handleKey);
//   }, []);

//   useEffect(() => {
//   const savedTime = localStorage.getItem("video-time");
//   if (savedTime && videoRef.current) {
//     videoRef.current.currentTime = Number(savedTime);
//   }
// }, []);

//   return (
//     <div className="player">
//       {/* <video
//         ref={videoRef}
//         src="/sample.mp4"
//         onTimeUpdate={updateProgress}
//         onClick={togglePlay}
//       /> */}


// <video
//   ref={videoRef}
//   src={playlist[currentIndex].src}
//   onTimeUpdate={updateProgress}
//   onEnded={() => {
//     if (currentIndex < playlist.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setIsPlaying(false);
//     }
//   }}
//   onClick={togglePlay}
// />





//       {!isPlaying && (
//         <div className="center-play" onClick={togglePlay}>
//           ▶
//         </div>
//       )}

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

  // 🎞 Playlist
  const playlist = [
    { id: 1, title: "Intro Video", src: "/video1.mp4" },
    { id: 2, title: "Main Content", src: "/video2.mp4" },
    { id: 3, title: "Outro Video", src: "/video3.mp4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);

  // ▶️ Play / Pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // ⏱ Progress + save watch time
  const updateProgress = () => {
    const video = videoRef.current;
    if (!video) return;

    const percent =
      (video.currentTime / video.duration) * 100 || 0;
    setProgress(percent);

    localStorage.setItem(
      "video-time-" + currentIndex,
      video.currentTime
    );
  };

  // 🔁 Seek
  const seek = (e) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime =
      (e.target.value / 100) * video.duration;
  };

  // ⚡ Speed
  const changeSpeed = (e) => {
    setSpeed(e.target.value);
    videoRef.current.playbackRate = e.target.value;
  };

  // ⛶ Fullscreen
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
      if (e.code === "ArrowRight")
        videoRef.current.currentTime += 5;
      if (e.code === "ArrowLeft")
        videoRef.current.currentTime -= 5;
      if (e.key === "f") fullscreen();
    };

    document.addEventListener("keydown", handleKey);
    return () =>
      document.removeEventListener("keydown", handleKey);
  }, []);

  // 🔄 Restore watch time when video changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const savedTime = localStorage.getItem(
      "video-time-" + currentIndex
    );

    video.currentTime = savedTime ? Number(savedTime) : 0;
    video.play();
    setIsPlaying(true);
    setProgress(0);
  }, [currentIndex]);

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={playlist[currentIndex].src}
        onTimeUpdate={updateProgress}
        onEnded={() => {
          if (currentIndex < playlist.length - 1) {
            setCurrentIndex(currentIndex + 1);
          } else {
            setIsPlaying(false);
          }
        }}
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

        <input
          type="range"
          value={progress}
          onChange={seek}
        />

        <select value={speed} onChange={changeSpeed}>
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>

        <button onClick={fullscreen}>⛶</button>
      </div>

      {/* 📂 Playlist UI */}
      <div className="playlist">
        {playlist.map((video, index) => (
          <div
            key={video.id}
            className={`playlist-item ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {video.title}
          </div>
        ))}
      </div>
    </div>
  );
}

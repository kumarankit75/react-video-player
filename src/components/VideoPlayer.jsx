// // // // // // import { useRef, useState } from "react";
// // // // // // import "./VideoPlayer.css";

// // // // // // export default function VideoPlayer() {
// // // // // //   const videoRef = useRef(null);
// // // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // // //   const [progress, setProgress] = useState(0);
// // // // // //   const [speed, setSpeed] = useState(1);

// // // // // //   const togglePlay = () => {
// // // // // //     const video = videoRef.current;
// // // // // //     if (video.paused) {
// // // // // //       video.play();
// // // // // //       setIsPlaying(true);
// // // // // //     } else {
// // // // // //       video.pause();
// // // // // //       setIsPlaying(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleProgress = () => {
// // // // // //     const video = videoRef.current;
// // // // // //     setProgress((video.currentTime / video.duration) * 100);
// // // // // //   };

// // // // // //   const seek = (e) => {
// // // // // //     const video = videoRef.current;
// // // // // //     video.currentTime = (e.target.value / 100) * video.duration;
// // // // // //   };

// // // // // //   const changeSpeed = (e) => {
// // // // // //     const value = e.target.value;
// // // // // //     setSpeed(value);
// // // // // //     videoRef.current.playbackRate = value;
// // // // // //   };

// // // // // //   const fullscreen = () => {
// // // // // //     videoRef.current.requestFullscreen();
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="player">
// // // // // //       <video
// // // // // //         ref={videoRef}
// // // // // //         src="/sample.mp4"
// // // // // //         onTimeUpdate={handleProgress}
// // // // // //         onClick={togglePlay}
// // // // // //       />

// // // // // //       <div className="controls">
// // // // // //         <button onClick={togglePlay}>
// // // // // //           {isPlaying ? "⏸" : "▶"}
// // // // // //         </button>

// // // // // //         <input type="range" value={progress} onChange={seek} />

// // // // // //         <select value={speed} onChange={changeSpeed}>
// // // // // //           <option value="0.5">0.5x</option>
// // // // // //           <option value="1">1x</option>
// // // // // //           <option value="1.5">1.5x</option>
// // // // // //           <option value="2">2x</option>
// // // // // //         </select>

// // // // // //         <button onClick={fullscreen}>⛶</button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }




// // // // // import { useEffect, useRef, useState } from "react";
// // // // // import "./VideoPlayer.css";

// // // // // export default function VideoPlayer() {
// // // // //   const videoRef = useRef(null);
// // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // //   const [progress, setProgress] = useState(0);
// // // // //   const [speed, setSpeed] = useState(1);

// // // // //   const playlist = [
// // // // //   { id: 1, title: "Intro Video", src: "/video1.mp4" },
// // // // //   { id: 2, title: "Main Content", src: "/video2.mp4" },
// // // // //   { id: 3, title: "Outro", src: "/video3.mp4" },
// // // // // ];

// // // // //   const togglePlay = () => {
// // // // //     const video = videoRef.current;
// // // // //     if (video.paused) {
// // // // //       video.play();
// // // // //       setIsPlaying(true);
// // // // //     } else {
// // // // //       video.pause();
// // // // //       setIsPlaying(false);
// // // // //     }
// // // // //   };

// // // // // //   const updateProgress = () => {
// // // // // //     const video = videoRef.current;
// // // // // //     setProgress((video.currentTime / video.duration) * 100 || 0);
// // // // // //   };

// // // // // const updateProgress = () => {
// // // // //   const video = videoRef.current;
// // // // //   const current =
// // // // //     (video.currentTime / video.duration) * 100 || 0;

// // // // //   setProgress(current);

// // // // //   localStorage.setItem(
// // // // //     "video-time",
// // // // //     video.currentTime
// // // // //   );
// // // // // };



// // // // //   const seek = (e) => {
// // // // //     const video = videoRef.current;
// // // // //     video.currentTime = (e.target.value / 100) * video.duration;
// // // // //   };

// // // // //   const changeSpeed = (e) => {
// // // // //     setSpeed(e.target.value);
// // // // //     videoRef.current.playbackRate = e.target.value;
// // // // //   };

// // // // //   const fullscreen = () => {
// // // // //     videoRef.current.requestFullscreen();
// // // // //   };

// // // // //   // 🎹 Keyboard shortcuts
// // // // //   useEffect(() => {
// // // // //     const handleKey = (e) => {
// // // // //       if (e.code === "Space") {
// // // // //         e.preventDefault();
// // // // //         togglePlay();
// // // // //       }
// // // // //       if (e.code === "ArrowRight") videoRef.current.currentTime += 5;
// // // // //       if (e.code === "ArrowLeft") videoRef.current.currentTime -= 5;
// // // // //       if (e.key === "f") fullscreen();
// // // // //     };

// // // // //     document.addEventListener("keydown", handleKey);
// // // // //     return () => document.removeEventListener("keydown", handleKey);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //   const savedTime = localStorage.getItem("video-time");
// // // // //   if (savedTime && videoRef.current) {
// // // // //     videoRef.current.currentTime = Number(savedTime);
// // // // //   }
// // // // // }, []);

// // // // //   return (
// // // // //     <div className="player">
// // // // //       {/* <video
// // // // //         ref={videoRef}
// // // // //         src="/sample.mp4"
// // // // //         onTimeUpdate={updateProgress}
// // // // //         onClick={togglePlay}
// // // // //       /> */}


// // // // // <video
// // // // //   ref={videoRef}
// // // // //   src={playlist[currentIndex].src}
// // // // //   onTimeUpdate={updateProgress}
// // // // //   onEnded={() => {
// // // // //     if (currentIndex < playlist.length - 1) {
// // // // //       setCurrentIndex(currentIndex + 1);
// // // // //       setIsPlaying(false);
// // // // //     }
// // // // //   }}
// // // // //   onClick={togglePlay}
// // // // // />





// // // // //       {!isPlaying && (
// // // // //         <div className="center-play" onClick={togglePlay}>
// // // // //           ▶
// // // // //         </div>
// // // // //       )}

// // // // //       <div className="controls">
// // // // //         <button onClick={togglePlay}>
// // // // //           {isPlaying ? "⏸" : "▶"}
// // // // //         </button>

// // // // //         <input type="range" value={progress} onChange={seek} />

// // // // //         <select value={speed} onChange={changeSpeed}>
// // // // //           <option value="0.5">0.5x</option>
// // // // //           <option value="1">1x</option>
// // // // //           <option value="1.5">1.5x</option>
// // // // //           <option value="2">2x</option>
// // // // //         </select>

// // // // //         <button onClick={fullscreen}>⛶</button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }






// // // // import { useEffect, useRef, useState } from "react";
// // // // import "./VideoPlayer.css";

// // // // export default function VideoPlayer() {
// // // //   const videoRef = useRef(null);

// // // //   // 🎞 Playlist
// // // //   const playlist = [
// // // //     { id: 1, title: "Intro Video", src: "/video1.mp4" },
// // // //     { id: 2, title: "Main Content", src: "/video2.mp4" },
// // // //     { id: 3, title: "Outro Video", src: "/video3.mp4" },
// // // //   ];

// // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // //   const [progress, setProgress] = useState(0);
// // // //   const [speed, setSpeed] = useState(1);

// // // //   // ▶️ Play / Pause
// // // //   const togglePlay = () => {
// // // //     const video = videoRef.current;
// // // //     if (!video) return;

// // // //     if (video.paused) {
// // // //       video.play();
// // // //       setIsPlaying(true);
// // // //     } else {
// // // //       video.pause();
// // // //       setIsPlaying(false);
// // // //     }
// // // //   };

// // // //   // ⏱ Progress + save watch time
// // // //   const updateProgress = () => {
// // // //     const video = videoRef.current;
// // // //     if (!video) return;

// // // //     const percent =
// // // //       (video.currentTime / video.duration) * 100 || 0;
// // // //     setProgress(percent);

// // // //     localStorage.setItem(
// // // //       "video-time-" + currentIndex,
// // // //       video.currentTime
// // // //     );
// // // //   };

// // // //   // 🔁 Seek
// // // //   const seek = (e) => {
// // // //     const video = videoRef.current;
// // // //     if (!video) return;

// // // //     video.currentTime =
// // // //       (e.target.value / 100) * video.duration;
// // // //   };

// // // //   // ⚡ Speed
// // // //   const changeSpeed = (e) => {
// // // //     setSpeed(e.target.value);
// // // //     videoRef.current.playbackRate = e.target.value;
// // // //   };

// // // //   // ⛶ Fullscreen
// // // //   const fullscreen = () => {
// // // //     videoRef.current.requestFullscreen();
// // // //   };

// // // //   // 🎹 Keyboard shortcuts
// // // //   useEffect(() => {
// // // //     const handleKey = (e) => {
// // // //       if (e.code === "Space") {
// // // //         e.preventDefault();
// // // //         togglePlay();
// // // //       }
// // // //       if (e.code === "ArrowRight")
// // // //         videoRef.current.currentTime += 5;
// // // //       if (e.code === "ArrowLeft")
// // // //         videoRef.current.currentTime -= 5;
// // // //       if (e.key === "f") fullscreen();
// // // //     };

// // // //     document.addEventListener("keydown", handleKey);
// // // //     return () =>
// // // //       document.removeEventListener("keydown", handleKey);
// // // //   }, []);

// // // //   // 🔄 Restore watch time when video changes
// // // //   useEffect(() => {
// // // //     const video = videoRef.current;
// // // //     if (!video) return;

// // // //     const savedTime = localStorage.getItem(
// // // //       "video-time-" + currentIndex
// // // //     );

// // // //     video.currentTime = savedTime ? Number(savedTime) : 0;
// // // //     video.play();
// // // //     setIsPlaying(true);
// // // //     setProgress(0);
// // // //   }, [currentIndex]);

// // // //   return (
// // // //     <div className="player">
// // // //       <video
// // // //         ref={videoRef}
// // // //         src={playlist[currentIndex].src}
// // // //         onTimeUpdate={updateProgress}
// // // //         onEnded={() => {
// // // //           if (currentIndex < playlist.length - 1) {
// // // //             setCurrentIndex(currentIndex + 1);
// // // //           } else {
// // // //             setIsPlaying(false);
// // // //           }
// // // //         }}
// // // //         onClick={togglePlay}
// // // //       />

// // // //       {!isPlaying && (
// // // //         <div className="center-play" onClick={togglePlay}>
// // // //           ▶
// // // //         </div>
// // // //       )}

// // // //       <div className="controls">
// // // //         <button onClick={togglePlay}>
// // // //           {isPlaying ? "⏸" : "▶"}
// // // //         </button>

// // // //         <input
// // // //           type="range"
// // // //           value={progress}
// // // //           onChange={seek}
// // // //         />

// // // //         <select value={speed} onChange={changeSpeed}>
// // // //           <option value="0.5">0.5x</option>
// // // //           <option value="1">1x</option>
// // // //           <option value="1.5">1.5x</option>
// // // //           <option value="2">2x</option>
// // // //         </select>

// // // //         <button onClick={fullscreen}>⛶</button>
// // // //       </div>

// // // //       {/* 📂 Playlist UI */}
// // // //       <div className="playlist">
// // // //         {playlist.map((video, index) => (
// // // //           <div
// // // //             key={video.id}
// // // //             className={`playlist-item ${
// // // //               index === currentIndex ? "active" : ""
// // // //             }`}
// // // //             onClick={() => setCurrentIndex(index)}
// // // //           >
// // // //             {video.title}
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }



// // // import { useEffect, useRef, useState } from "react";
// // // import "./VideoPlayer.css";

// // // export default function VideoPlayer() {
// // //   const videoRef = useRef(null);

// // //   const playlist = [
// // //     { id: 1, title: "Intro Video", src: "/video1.mp4" },
// // //     { id: 2, title: "Main Content", src: "/video2.mp4" },
// // //     { id: 3, title: "Outro Video", src: "/video3.mp4" },
// // //   ];

// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [isPlaying, setIsPlaying] = useState(false);
// // //   const [progress, setProgress] = useState(0);
// // //   const [speed, setSpeed] = useState(1);

// // //   // ▶️ Play / Pause
// // //   const togglePlay = () => {
// // //     const video = videoRef.current;
// // //     if (!video) return;

// // //     if (video.paused) {
// // //       video.play();
// // //       setIsPlaying(true);
// // //     } else {
// // //       video.pause();
// // //       setIsPlaying(false);
// // //     }
// // //   };

// // //   // ⏱ Progress + save watch time
// // //   const updateProgress = () => {
// // //     const video = videoRef.current;
// // //     if (!video) return;

// // //     const percent =
// // //       (video.currentTime / video.duration) * 100 || 0;
// // //     setProgress(percent);

// // //     localStorage.setItem(
// // //       "video-time-" + currentIndex,
// // //       video.currentTime
// // //     );
// // //   };

// // //   // 🔁 Seek
// // //   const seek = (e) => {
// // //     const video = videoRef.current;
// // //     if (!video) return;

// // //     video.currentTime =
// // //       (e.target.value / 100) * video.duration;
// // //   };

// // //   // ⚡ Speed
// // //   const changeSpeed = (e) => {
// // //     setSpeed(e.target.value);
// // //     videoRef.current.playbackRate = e.target.value;
// // //   };

// // //   // ⛶ Fullscreen
// // //   const fullscreen = () => {
// // //     videoRef.current.requestFullscreen();
// // //   };

// // //   // 🎧 Picture-in-Picture
// // //   const togglePiP = async () => {
// // //     const video = videoRef.current;
// // //     if (!video) return;

// // //     try {
// // //       if (document.pictureInPictureElement) {
// // //         await document.exitPictureInPicture();
// // //       } else {
// // //         await video.requestPictureInPicture();
// // //       }
// // //     } catch (err) {
// // //       console.error("PiP not supported", err);
// // //     }
// // //   };

// // //   // 🎹 Keyboard shortcuts
// // //   useEffect(() => {
// // //     const handleKey = (e) => {
// // //       if (e.code === "Space") {
// // //         e.preventDefault();
// // //         togglePlay();
// // //       }
// // //       if (e.code === "ArrowRight")
// // //         videoRef.current.currentTime += 5;
// // //       if (e.code === "ArrowLeft")
// // //         videoRef.current.currentTime -= 5;
// // //       if (e.key === "f") fullscreen();
// // //     };

// // //     document.addEventListener("keydown", handleKey);
// // //     return () =>
// // //       document.removeEventListener("keydown", handleKey);
// // //   }, []);

// // //   // 🔄 Restore watch time on video change
// // //   useEffect(() => {
// // //     const video = videoRef.current;
// // //     if (!video) return;

// // //     const savedTime = localStorage.getItem(
// // //       "video-time-" + currentIndex
// // //     );

// // //     video.currentTime = savedTime ? Number(savedTime) : 0;
// // //     video.play();
// // //     setIsPlaying(true);
// // //     setProgress(0);
// // //   }, [currentIndex]);

// // //   return (
// // //     <div className="player">
// // //       <video
// // //         ref={videoRef}
// // //         src={playlist[currentIndex].src}
// // //         onTimeUpdate={updateProgress}
// // //         onEnded={() => {
// // //           if (currentIndex < playlist.length - 1) {
// // //             setCurrentIndex(currentIndex + 1);
// // //           } else {
// // //             setIsPlaying(false);
// // //           }
// // //         }}
// // //         onClick={togglePlay}
// // //       />

// // //       {!isPlaying && (
// // //         <div className="center-play" onClick={togglePlay}>
// // //           ▶
// // //         </div>
// // //       )}

// // //       <div className="controls">
// // //         <button onClick={togglePlay}>
// // //           {isPlaying ? "⏸" : "▶"}
// // //         </button>

// // //         <input type="range" value={progress} onChange={seek} />

// // //         <select value={speed} onChange={changeSpeed}>
// // //           <option value="0.5">0.5x</option>
// // //           <option value="1">1x</option>
// // //           <option value="1.5">1.5x</option>
// // //           <option value="2">2x</option>
// // //         </select>

// // //         <button onClick={togglePiP}>🗔</button>
// // //         <button onClick={fullscreen}>⛶</button>
// // //       </div>

// // //       {/* 📂 Playlist */}
// // //       <div className="playlist">
// // //         {playlist.map((video, index) => (
// // //           <div
// // //             key={video.id}
// // //             className={`playlist-item ${
// // //               index === currentIndex ? "active" : ""
// // //             }`}
// // //             onClick={() => setCurrentIndex(index)}
// // //           >
// // //             {video.title}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import { useEffect, useRef, useState } from "react";
// // // import "./VideoPlayer.css";

// // export default function VideoPlayer() {
// //   const videoRef = useRef(null);
// //   const touchStartX = useRef(0);
// //   const touchEndX = useRef(0);

// //   const playlist = [
// //     { id: 1, title: "Intro Video", src: "/video1.mp4" },
// //     { id: 2, title: "Main Content", src: "/video2.mp4" },
// //     { id: 3, title: "Outro Video", src: "/video3.mp4" },
// //   ];

// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [progress, setProgress] = useState(0);
// //   const [speed, setSpeed] = useState(1);

// //   // ▶️ Play / Pause
// //   const togglePlay = () => {
// //     const video = videoRef.current;
// //     if (!video) return;

// //     if (video.paused) {
// //       video.play();
// //       setIsPlaying(true);
// //     } else {
// //       video.pause();
// //       setIsPlaying(false);
// //     }
// //   };

// //   // ⏱ Progress + save watch time
// //   const updateProgress = () => {
// //     const video = videoRef.current;
// //     if (!video) return;

// //     const percent =
// //       (video.currentTime / video.duration) * 100 || 0;
// //     setProgress(percent);

// //     localStorage.setItem(
// //       "video-time-" + currentIndex,
// //       video.currentTime
// //     );
// //   };

// //   // 🔁 Seek
// //   const seek = (e) => {
// //     const video = videoRef.current;
// //     if (!video) return;

// //     video.currentTime =
// //       (e.target.value / 100) * video.duration;
// //   };

// //   // ⚡ Speed
// //   const changeSpeed = (e) => {
// //     setSpeed(e.target.value);
// //     videoRef.current.playbackRate = e.target.value;
// //   };

// //   // ⛶ Fullscreen
// //   const fullscreen = () => {
// //     videoRef.current.requestFullscreen();
// //   };

// //   // 🎧 Picture-in-Picture
// //   const togglePiP = async () => {
// //     const video = videoRef.current;
// //     if (!video) return;

// //     try {
// //       if (document.pictureInPictureElement) {
// //         await document.exitPictureInPicture();
// //       } else {
// //         await video.requestPictureInPicture();
// //       }
// //     } catch (err) {
// //       console.error("PiP not supported", err);
// //     }
// //   };

// //   // 📱 Touch gestures
// //   const onTouchStart = (e) => {
// //     touchStartX.current = e.changedTouches[0].screenX;
// //   };

// //   const onTouchEnd = (e) => {
// //     touchEndX.current = e.changedTouches[0].screenX;
// //     handleSwipe();
// //   };

// //   const handleSwipe = () => {
// //     const diff = touchStartX.current - touchEndX.current;
// //     const video = videoRef.current;
// //     if (!video) return;

// //     // swipe threshold
// //     if (Math.abs(diff) < 50) return;

// //     if (diff > 0) {
// //       // swipe left → forward 10s
// //       video.currentTime += 10;
// //     } else {
// //       // swipe right → back 10s
// //       video.currentTime -= 10;
// //     }
// //   };

// //   // 🎹 Keyboard shortcuts
// //   useEffect(() => {
// //     const handleKey = (e) => {
// //       if (e.code === "Space") {
// //         e.preventDefault();
// //         togglePlay();
// //       }
// //       if (e.code === "ArrowRight")
// //         videoRef.current.currentTime += 5;
// //       if (e.code === "ArrowLeft")
// //         videoRef.current.currentTime -= 5;
// //       if (e.key === "f") fullscreen();
// //     };

// //     document.addEventListener("keydown", handleKey);
// //     return () =>
// //       document.removeEventListener("keydown", handleKey);
// //   }, []);

// //   // 🔄 Restore watch time on video change
// //   useEffect(() => {
// //     const video = videoRef.current;
// //     if (!video) return;

// //     const savedTime = localStorage.getItem(
// //       "video-time-" + currentIndex
// //     );

// //     video.currentTime = savedTime ? Number(savedTime) : 0;
// //     video.play();
// //     setIsPlaying(true);
// //     setProgress(0);
// //   }, [currentIndex]);

// //   return (
// //     <div className="player">
// //       <video
// //         ref={videoRef}
// //         src={playlist[currentIndex].src}
// //         onTimeUpdate={updateProgress}
// //         onEnded={() => {
// //           if (currentIndex < playlist.length - 1) {
// //             setCurrentIndex(currentIndex + 1);
// //           } else {
// //             setIsPlaying(false);
// //           }
// //         }}
// //         onClick={togglePlay}
// //         onTouchStart={onTouchStart}
// //         onTouchEnd={onTouchEnd}
// //       />

// //       {!isPlaying && (
// //         <div className="center-play" onClick={togglePlay}>
// //           ▶
// //         </div>
// //       )}

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

// //         <button onClick={togglePiP}>🗔</button>
// //         <button onClick={fullscreen}>⛶</button>
// //       </div>

// //       {/* 📂 Playlist */}
// //       <div className="playlist">
// //         {playlist.map((video, index) => (
// //           <div
// //             key={video.id}
// //             className={`playlist-item ${
// //               index === currentIndex ? "active" : ""
// //             }`}
// //             onClick={() => setCurrentIndex(index)}
// //           >
// //             {video.title}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }




// import { useEffect, useRef, useState } from "react";

// export default function VideoPlayer() {
//   const videoRef = useRef(null);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   const playlist = [
//     { id: 1, title: "Intro Video", src: "/video1.mp4" },
//     { id: 2, title: "Main Content", src: "/video2.mp4" },
//     { id: 3, title: "Outro Video", src: "/video3.mp4" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [speed, setSpeed] = useState(1);

//   const togglePlay = () => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.paused ? v.play() : v.pause();
//     setIsPlaying(!v.paused);
//   };

//   const updateProgress = () => {
//     const v = videoRef.current;
//     if (!v) return;
//     setProgress((v.currentTime / v.duration) * 100 || 0);
//     localStorage.setItem(
//       "video-time-" + currentIndex,
//       v.currentTime
//     );
//   };

//   const seek = (e) => {
//     const v = videoRef.current;
//     v.currentTime = (e.target.value / 100) * v.duration;
//   };

//   const changeSpeed = (e) => {
//     setSpeed(e.target.value);
//     videoRef.current.playbackRate = e.target.value;
//   };

//   const fullscreen = () => {
//     videoRef.current.requestFullscreen();
//   };

//   const togglePiP = async () => {
//     if (document.pictureInPictureElement) {
//       await document.exitPictureInPicture();
//     } else {
//       await videoRef.current.requestPictureInPicture();
//     }
//   };

//   const onTouchStart = (e) => {
//     touchStartX.current = e.changedTouches[0].screenX;
//   };

//   const onTouchEnd = (e) => {
//     touchEndX.current = e.changedTouches[0].screenX;
//     const diff = touchStartX.current - touchEndX.current;
//     if (Math.abs(diff) < 50) return;
//     videoRef.current.currentTime += diff > 0 ? 10 : -10;
//   };

//   useEffect(() => {
//     const saved = localStorage.getItem(
//       "video-time-" + currentIndex
//     );
//     if (saved) videoRef.current.currentTime = Number(saved);
//     videoRef.current.play();
//     setIsPlaying(true);
//   }, [currentIndex]);

//   return (
//     <div className="max-w-4xl mx-auto text-white">
//       {/* Video Container */}
//       <div className="relative bg-black rounded-lg overflow-hidden">
//         <video
//           ref={videoRef}
//           src={playlist[currentIndex].src}
//           onTimeUpdate={updateProgress}
//           onClick={togglePlay}
//           onTouchStart={onTouchStart}
//           onTouchEnd={onTouchEnd}
//           className="w-full cursor-pointer"
//         />

//         {!isPlaying && (
//           <div
//             onClick={togglePlay}
//             className="absolute inset-0 flex items-center justify-center text-6xl bg-black/40 cursor-pointer"
//           >
//             ▶
//           </div>
//         )}

//         {/* Controls */}
//         <div className="absolute bottom-0 w-full flex items-center gap-3 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition">
//           <button onClick={togglePlay}>
//             {isPlaying ? "⏸" : "▶"}
//           </button>

//           <input
//             type="range"
//             value={progress}
//             onChange={seek}
//             className="flex-1"
//           />

//           <select
//             value={speed}
//             onChange={changeSpeed}
//             className="bg-black border border-gray-600 px-1"
//           >
//             <option value="0.5">0.5x</option>
//             <option value="1">1x</option>
//             <option value="1.5">1.5x</option>
//             <option value="2">2x</option>
//           </select>

//           <button onClick={togglePiP}>🗔</button>
//           <button onClick={fullscreen}>⛶</button>
//         </div>
//       </div>

//       {/* Playlist */}
//       <div className="mt-4 bg-slate-900 rounded-lg overflow-hidden">
//         {playlist.map((v, i) => (
//           <div
//             key={v.id}
//             onClick={() => setCurrentIndex(i)}
//             className={`px-4 py-3 cursor-pointer border-b border-slate-700 ${
//               i === currentIndex
//                 ? "bg-slate-700 font-bold"
//                 : "hover:bg-slate-800"
//             }`}
//           >
//             {v.title}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import { useEffect, useRef, useState } from "react";
import { useEffect, useRef, useState, useCallback } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const touchStartX = useRef(0);
const lastUpdateRef = useRef(0);

  const playlist = [
    { id: 1, title: "Intro Video", src: "/video1.mp4" },
    { id: 2, title: "Main Content", src: "/video2.mp4" },
    { id: 3, title: "Outro Video", src: "/video3.mp4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);

  // const togglePlay = () => {
  //   const v = videoRef.current;
  //   if (!v) return;
  //   v.paused ? v.play() : v.pause();
  //   setIsPlaying(!v.paused);
  // };
const togglePlay = useCallback(() => {
  const v = videoRef.current;
  if (!v) return;
  v.paused ? v.play() : v.pause();
  setIsPlaying(!v.paused);
}, []);





  // const updateProgress = () => {
  //   const v = videoRef.current;
  //   setProgress((v.currentTime / v.duration) * 100 || 0);
  //   localStorage.setItem(
  //     "video-time-" + currentIndex,
  //     v.currentTime
  //   );
  // };

const updateProgress = () => {
  const v = videoRef.current;
  if (!v) return;

  const now = Date.now();
  if (now - lastUpdateRef.current < 500) return;

  lastUpdateRef.current = now;

  const percent = (v.currentTime / v.duration) * 100 || 0;
  setProgress(percent);

  localStorage.setItem(
    "video-time-" + currentIndex,
    v.currentTime
  );
};




  // const seek = (e) => {
  //   videoRef.current.currentTime =
  //     (e.target.value / 100) * videoRef.current.duration;
  // };

const seek = useCallback((e) => {
  const v = videoRef.current;
  if (!v) return;
  v.currentTime = (e.target.value / 100) * v.duration;
}, []);



  const changeSpeed = (e) => {
    setSpeed(e.target.value);
    videoRef.current.playbackRate = e.target.value;
  };

  const fullscreen = () => {
    videoRef.current.requestFullscreen();
  };

  const togglePiP = async () => {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await videoRef.current.requestPictureInPicture();
    }
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = (e) => {
    const diff =
      touchStartX.current - e.changedTouches[0].screenX;
    if (Math.abs(diff) < 50) return;
    videoRef.current.currentTime += diff > 0 ? 10 : -10;
  };

  useEffect(() => {
    const saved = localStorage.getItem(
      "video-time-" + currentIndex
    );
    if (saved) videoRef.current.currentTime = Number(saved);
    videoRef.current.play();
    setIsPlaying(true);
  }, [currentIndex]);

  return (
    <div className="max-w-6xl mx-auto text-white px-4">
      {/* 🎬 Video */}
      <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          preload="metadata"
          src={playlist[currentIndex].src}
          onTimeUpdate={updateProgress}
          onClick={togglePlay}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="w-full aspect-video cursor-pointer"
        />

        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center text-7xl bg-black/50 backdrop-blur-sm cursor-pointer"
          >
            ▶
          </div>
        )}

        {/* 🎛 Controls */}
        <div className="absolute bottom-0 w-full px-5 pb-4 opacity-0 hover:opacity-100 transition">
          <div className="bg-gradient-to-t from-black/90 to-transparent p-4 rounded-lg flex items-center gap-4">
            <button onClick={togglePlay} className="text-xl">
              {isPlaying ? "⏸" : "▶"}
            </button>

            <input
              type="range"
              value={progress}
              onChange={seek}
              className="flex-1 accent-red-600"
            />

            <select
              value={speed}
              onChange={changeSpeed}
              className="bg-black border border-gray-700 px-2 py-1 rounded"
            >
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>

            <button onClick={togglePiP}>🗔</button>
            <button onClick={fullscreen}>⛶</button>
          </div>
        </div>
      </div>

      {/* 📂 Playlist */}
      <div className="mt-6 bg-zinc-900 rounded-xl overflow-hidden">
        <h3 className="px-5 py-4 text-lg font-semibold border-b border-zinc-700">
          Episodes
        </h3>

        {playlist.map((v, i) => (
          <div
            key={v.id}
            onClick={() => setCurrentIndex(i)}
            className={`px-5 py-4 cursor-pointer flex justify-between items-center ${
              i === currentIndex
                ? "bg-zinc-700 text-white"
                : "hover:bg-zinc-800 text-gray-300"
            }`}
          >
            <span>{v.title}</span>
            {i === currentIndex && <span>▶ Playing</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

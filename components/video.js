import { useState, useEffect, useRef } from "react";
import Container from "./container";

const Video = () => {
//   const [playVideo, setPlayVideo] = useState(false);
//   return (
//     <Container>
//       <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
//         <div className="relative bg-indigo-300 aspect-w-16 aspect-h-9">
//           <img
//             src="https://media.discordapp.net/attachments/1193353022965821542/1204186809727324170/SQLens-dynamic-move.gif?ex=65d3d15c&is=65c15c5c&hm=e9501306d6b120c5e97f28c311c182c04bfeb7cd16010c922e52fccac9af89ed&=" // Replace this with the actual URL of your GIF
//             alt="Descriptive text about the GIF"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </Container>
//   );
// }

const videoRef = useRef(null); 

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.setAttribute("preload", "auto");
        }
      });
    },
    {
      rootMargin: "100px", 
      threshold: 0.01, 
    }
  );

  if (videoRef.current) {
    observer.observe(videoRef.current);
  }

  return () => {
    if (videoRef.current) {
      observer.unobserve(videoRef.current);
    }
  };
}, []);

return (
  <Container>
    <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-3xl">
      <div className="relative bg-indigo-300 aspect-w-16 aspect-h-9">
        <video
          ref={videoRef}
          muted
          loop
          autoPlay
          className="w-full h-full object-cover"
          preload="none" 
        >
          <source src="/SQLens-dynamic-move.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </Container>
);
};



export default Video;
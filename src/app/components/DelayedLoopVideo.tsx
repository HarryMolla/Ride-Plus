import { useEffect, useRef } from "react";

type DelayedLoopVideoProps = {
  src: string;
  delay?: number;
  className?: string;
  type?: string; // defaults to "video/webm"
  // allow passing standard video attributes like controls, preload, etc.
  autoPlay?: boolean;
  muted?: boolean;
  playsInline?: boolean;
};

export default function DelayedLoopVideo({
  src,
  delay = 2000,
  className = "",
  type = "video/webm",
  autoPlay = true,
  muted = true,
  playsInline = true,
  ...props
}: DelayedLoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setTimeout(() => {
        if (video) {
          video.currentTime = 0; // reset playback
          void video.play();     // restart, 'void' silences the Promise warning
        }
      }, delay);
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [delay]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      muted={muted}
      playsInline={playsInline}
      {...props}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
}

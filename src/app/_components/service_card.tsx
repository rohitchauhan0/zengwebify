// service_card.tsx
import React, { useRef, useEffect, useState } from "react";

const ServiceCard = ({ video, title, p1, p2, p3, p4 }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // play when 50% visible
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white p-6 text-left">
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h3 className="text-2xl font-bold font-bricolage-grotesque mb-3">
        {title}
      </h3>
      <ul className="space-y-2 text-gray-700">
        {p1 && <li>• {p1}</li>}
        {p2 && <li>• {p2}</li>}
        {p3 && <li>• {p3}</li>}
        {p4 && <li>• {p4}</li>}
      </ul>
    </div>
  );
};

export default ServiceCard;

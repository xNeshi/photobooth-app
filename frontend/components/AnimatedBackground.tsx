import { Film, Camera, Webcam } from "lucide-react";

export default function AnimatedBackground() {
  const icons = [Film, Camera, Webcam];

  const positions = [
    { top: "-5%", left: "5%" },
    { top: "5%", left: "20%" },
    { top: "12%", left: "40%" },
    { top: "18%", left: "65%" },
    { top: "25%", left: "85%" },
    { top: "33%", left: "10%" },
    { top: "40%", left: "55%" },
    { top: "47%", left: "75%" },
    { top: "55%", left: "30%" },
    { top: "60%", left: "90%" },
    { top: "67%", left: "15%" },
    { top: "75%", left: "50%" },
    { top: "82%", left: "80%" },
    { top: "90%", left: "5%" },
    { top: "98%", left: "95%" },
    { top: "105%", left: "60%" },
  ];

  const filmStrips = positions.map((pos, index) => ({
    top: `calc(${pos.top} + ${Math.random() * 5 - 2.5}%)`,
    left: `calc(${pos.left} + ${Math.random() * 5 - 2.5}%)`,
    size: `clamp(80px, ${Math.random() * 5 + 8}vw, 120px)`,
    Icon: icons[index % icons.length],
    rotate: `${Math.random() * 40 - 20}deg`,
  }));

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-visible -z-10">
      {filmStrips.map((pos, i) => {
        const Icon = pos.Icon;
        return (
          <Icon
            key={i}
            className="animate-floating absolute opacity-[.025]"
            style={{
              top: pos.top,
              left: pos.left,
              width: pos.size,
              height: pos.size,
              transform: `rotate(${pos.rotate})`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        );
      })}
    </div>
  );
}

import { useState, useEffect } from "react";

export default function Loading() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 13);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <ul className="flex border-[2px] p-2 rounded-[7px] bg-white w-[350px] gap-1">
        {Array.from({ length: 13 }, (_, i) => (
          <li
            key={i}
            className={`w-full h-[30px] rounded-[5px] ${
              active >= i ? "bg-[#7E71C9] " : "bg-white"
            }`}
          />
        ))}
      </ul>
      <p className="mt-2  font-bold text-3xl">Loading..</p>
    </div>
  );
}

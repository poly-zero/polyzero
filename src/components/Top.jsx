import React from "react";
import { useEffect, useState } from "react";

function Top() {
  const [visible, setVisible] = useState(false);
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll > 120) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return (
    <div
      onClick={() => {
        goTop();
      }}
      className={
        visible
          ? "fixed top-btn bottom-0 right-0 mb-4 mr-4 z-50 cursor-pointer"
          : "hidden"
      }
    >
      <button className="p-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full">
        <span className="sr-only"> Back To Top </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          />
        </svg>
      </button>
    </div>
  );
}

export default Top;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function FuturisticShell({ isReady, ambientMode, children }) {
  const [pointer, setPointer] = useState({ x: 50, y: 25 });

  useEffect(() => {
    const updatePointer = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      setPointer({ x, y });
      document.documentElement.style.setProperty("--pointer-x", `${x}%`);
      document.documentElement.style.setProperty("--pointer-y", `${y}%`);
    };

    window.addEventListener("pointermove", updatePointer);
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  return (
    <div className={`app-shell ${ambientMode ? "ambient-on" : "ambient-off"}`}>
      <div className="shell-background" aria-hidden="true">
        <div className="shell-grid" />
        <div className="shell-blur shell-blur-a" />
        <div className="shell-blur shell-blur-b" />
        <div className="shell-blur shell-blur-c" />
        <motion.div
          className="pointer-halo"
          animate={{ x: `${pointer.x}%`, y: `${pointer.y}%` }}
          transition={{ type: "spring", stiffness: 55, damping: 18 }}
        />
      </div>

      {!isReady && (
        <div className="loading-screen" role="status" aria-live="polite">
          <div className="loading-orb" />
          <p>Booting neural interface</p>
          <span>Synchronizing visuals, motion, and interaction layers</span>
        </div>
      )}

      <div className="page-frame">{children}</div>
    </div>
  );
}

export default FuturisticShell;
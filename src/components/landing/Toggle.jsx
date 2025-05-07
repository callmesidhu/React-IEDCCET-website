import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setMode(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggle = () => {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggle}
      className="sm:ml-8 flex items-center space-x-2 text-sm font-medium"
    >
      <div
        className={`w-12 h-6 p-1 bg-gray-300 rounded-full flex items-center transition ${
          mode === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <div className="w-4 h-4 bg-white rounded-full shadow" />
      </div>
    </button>
  );
}

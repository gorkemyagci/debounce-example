"use client";
import useDebounce from "@/hooks/use-debounce";
import { useEffect, useState } from "react";

export default function Home() {
  const [value, setvalue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  useEffect(() => {
    if (debouncedValue) {
      fetch('http://localhost/')
    }
  }, [debouncedValue]);
  return (
    <div className="p-4 container mx-auto">
      <h3 className="text-2xl font-bold">Debounce</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        className="border border-gray-300 p-2 w-full mt-2 text-black"
      />
      <p>Value: {debouncedValue}</p>
    </div>
  );
}

'use client'
import { useState } from "react";

export default function Home() {

  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    console.log('submit');
    e.preventDefault();

    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, value }),
    })

    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form action="POST" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="text"></label>
        <input className="text-black" placeholder="text" type="text" name="text" id="text" onChange={(e) => {
          setText(e.target.value);
        }} />
        <label htmlFor="value"></label>
        <input className="text-black" placeholder="value" type="text" name="value" id="value" 
        onChange={(e) => setValue(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

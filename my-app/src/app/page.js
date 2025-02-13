"use client";
import { useState } from "react";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";

export default function Home() {
    const [data, setData] = useState([]);

    async function handleClick(e) {
        try {
            const res = await fetch("/api/data", {
                cache: "no-cache",
                method: "GET",
            });
            const data = await res.json();
            setData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Navbar />
            <main className="container mx-auto w-full">
                <div className="w-full h-[70vh] overflow-y-hidden" id="header">
                    <img
                        className=" object-cover overflow-hidden "
                        src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                        alt="img"
                    />
                </div>
                <div className="w-full h-screen p-2" id="content">
                    <div className="flex">
                        <button onClick={handleClick}>Click!</button>
                        {data && <div>ada data</div>}
                    </div>
                </div>
            </main>
        </>
    );
}

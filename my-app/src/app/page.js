import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto w-full">
                <div className="w-full h-[70vh] overflow-y-hidden" id="header">
                    <img
                    className=" object-cover overflow-hidden " 
                    src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="img" />
                </div>
                <div className="w-full h-screen" id="content">
                    content
                </div>
            </main>
        </>
    );
}

import { Button } from "@mui/material";
import Header from "../layout/header";

function HomePage() {
    return (
        <>
            <div className="w-screen bg-[#F94F2F] relative">
                <Header />
            </div>
            <main>
               <div className="lg:w-[1100px] w-full mx-auto flex justify-center items-center relative">
                    <h1 className="font-bold text-black"
                    style={{fontSize: "150px"}}>day 2</h1>
                </div>
            </main>
        </>
    );
}

export default HomePage;

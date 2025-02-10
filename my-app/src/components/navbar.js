'use client';
import useGlobalState from "@/globalState/isLoading";
import Loading from "./loading";

function Navbar() {
    const { isLoading, setIsLoading } = useGlobalState();

    const handleLoading = () => {
        setIsLoading(true);
        setTimeout(() => {
            console.log(isLoading);
            setIsLoading(false);
            console.log(isLoading);
        }, 5000);
    };
    return (
        <>
            {/* Navbar  Desktop View*/}
            <nav className="hidden sm:block sticky top-0 z-10 bg-gray-500">
                <div className="container mx-auto rounded-sm border-b">
                    <div className="flex justify-between items-center p-2">
                        <div className="flex items-center gap-4">
                            <h1 className="text-2xl font-bold text-white border-b-2">
                                Logo
                            </h1>
                            <ul className="flex gap-4">
                                <li>
                                    <a href="#" className="text-white">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="#" onClick={handleLoading}
                            className="text-white">
                                Login
                            </a>
                            <a
                                href="#"
                                className="text-white bg-blue-500 px-4 py-2 rounded-md"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            {isLoading && <Loading/>}
            {/* Navbar  Mobile View*/}
        </>
    );
}

export default Navbar;

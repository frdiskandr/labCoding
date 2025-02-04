import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="container fixed bg-slate-950 flex justify-center p-3">
                <div className="flex justify-end w-full">
                    <div className="menu p-1 flex flex-row gap-2 items-center relative">
                        <span className="text-xl">Menu</span>
                        <span className="text-3xl">|</span>
                        <span className="text-2xl">|</span>
                        <span className="text-xl">|</span>
                    </div>
                </div>
                <nav className="absolute bg-slate-900 top-16 w-full hidden ">
                    <ul className="flex gap-2 flex-col items-center *:text-xl *:p-2 text-center">
                        <Link
                            href="/"
                            className="font-bold w-full hover:text-slate-400 transition-all duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            href="/"
                            className="font-bold w-full hover:text-slate-400 transition-all duration-300"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/"
                            className="font-bold w-full hover:text-slate-400 transition-all duration-300"
                        >
                            History
                        </Link>
                        <Link
                            href="/"
                            className="font-bold w-full hover:text-slate-400 transition-all duration-300"
                        >
                            Help
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    );
}

import Form from "../app/form.jsx";

function Navbar() {
    return (
        <>
        {/* Mobile Verison */}
        <div className="block sm:hidden">
            <div className="container flex flex-row justify-between w-screen p-3 sticky top-0">
                <h1 className="text-xl text-blue-300">Mobile Version</h1>
                <button className="border border-blue-300 hover:border-blue-500 p-2">|||</button>
            </div>

            <div className="text-white w-screen bg-slate-700">
                testt
            </div>
        </div>

        {/*Desktop version*/}

        <div className="hidden sm:block">
            <Form/>
            {/* <div className="container bg-black text-white fixed left-1/2 top-0 -translate-x-1/2 mx-auto">
                <div className="container relative flex flex-row justify-between w-screen p-3 rounded-b-2xl">
                    <h1 className="text-xl text-blue-300">Desktop Version</h1>
                    <ul>
                        <li className="inline-block mx-3">
                        
                        </li>
                        <li className="inline-block mx-3">About</li>
                        <li className="inline-block mx-3">Contact</li>
                    </ul>
                </div>
            </div>

            <h1 className="absolute top-1/2">haiii</h1> */}
        </div>

        </>
    )
}

export default Navbar;
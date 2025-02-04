function Navbar() {
    return (
        <>
        {/* Mobile Verison */}
        <div className="block sm:hidden">
            <div className="container flex flex-row justify-between w-screen p-3">
                <h1 className="text-xl text-blue-300">Mobile Version</h1>
                <button className="border border-blue-300 hover:border-blue-500 p-2">|||</button>
            </div>
        </div>

        {/*Desktop version*/}

        <div className="hidden sm:block">
            <div className="container bg-black text-white fixed mx-auto">
                <h1 className="w-screen h-10">Helo dunia</h1>
            </div>
        </div>

        </>
    )
}

export default Navbar;
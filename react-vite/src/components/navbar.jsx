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
            <div className="container flex flex-col w-screen">
                <h1 className="text-3xl text-blue-200">Desktop Version</h1>
                <ul className="flex flex-row gap-5 *:list-none *:text-white bg-black">
                    <li>Home</li>
                    <li>About</li>
                    <li>Product</li>
                </ul>
            </div>
        </div>

        </>
    )
}

export default Navbar;
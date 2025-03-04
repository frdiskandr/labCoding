import Header from "../layout/header";
import Image from "next/image";
import StatusCod from "../ui/status/StatusCod";
import Bracket from "../ui/status/bracket";

function HomePage() {
    return (
        <>
            <div className="w-screen bg-[#F94F2F] relative">
                <Header />
            </div>
            <main>
                <div className="lg:w-[1100px] w-full mx-auto flex flex-col relative p-4 gap-2">
                    <div className="container flex flex-row gap-2 mx-auto">
                        <div id="left-content" className="w-[60%] bg-slate-500">
                            <div className="w-full h-[235px] flex justify-center items-center text-black border">
                                content
                            </div>
                        </div>
                        <div
                            id="right content"
                            className="w-[40%] flex-col flex gap-2"
                        >
                            <div className="bg-slate-500 h-1/2 border">
                                <div className="flex justify-center items-center">
                                    content side
                                </div>
                            </div>
                            <div className="bg-slate-500 h-1/2 border">
                                <div className="flex justify-center">
                                    content side
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container text-black flex justify-between overflow-x-hidden mx-auto">
                        <div
                            id="card"
                            className="h-24 flex justify-center bg-slate-700 min-w-24"
                        >
                            card
                        </div>
                        <div
                            id="card"
                            className="h-24 flex justify-center bg-slate-700 min-w-24"
                        >
                            card
                        </div>
                        <div
                            id="card"
                            className="h-24 flex justify-center bg-slate-700 min-w-24"
                        >
                            card
                        </div>
                        <div
                            id="card"
                            className="h-24 flex justify-center bg-slate-700 min-w-24"
                        >
                            card
                        </div>
                        <div
                            id="card"
                            className="h-24 flex justify-center bg-slate-700 min-w-24"
                        >
                            card
                        </div>
                        <div
                            id="card"
                            className="h-24 flex justify-center bg-slate-700 min-w-24"
                        >
                            card
                        </div>
                        <div
                            id="card"
                            className="h-24 flex justify-center bg-slate-700 min-w-24"
                        >
                            card
                        </div>
                        <div
                            id="card"
                            className="h-24 flex justify-center bg-slate-700 min-w-24"
                        >
                            card
                        </div>
                        <div
                            id="card"
                            className="h-24 flex justify-center bg-slate-700 min-w-24"
                        >
                            card
                        </div>
                        <div
                            id="card"
                            className="h-24 flex justify-center bg-slate-700 min-w-24"
                        >
                            card
                        </div>
                        <div
                            id="card"
                            className="h-24 flex justify-center bg-slate-700 min-w-24"
                        >
                            card
                        </div>
                    </div>
                </div>

                <section id="category">
                    <div className="lg:w-[1100px] w-full mx-auto bg-black container">
                        <span className="font-bold p-2 text-xl">Category</span>
                        <div className="container flex flex-wrap bg-[#b1a5a3] h-[302px]">
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                            <div
                                id="card"
                                className="w-[10%] h-1/2 bg-[#b1a5a3] flex justify-center items-center box-border p-2"
                            >
                                <div className="bg-[#F94F2F] w-full h-full"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="flash sale">
                    <div className="container max-w-[1100px] mx-auto my-4  bg-[#FFFFFF] border-2">
                        <div className="flex justify-between p-4">
                            <div className="flex gap-2 w-[15%]">
                                <div className="bg-[url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e5389.png')] bg-center bg-contain bg-no-repeat w-[80%]"></div>
                                <div className="w-[20%] text-[#FA5330] ">
                                    time
                                </div>
                            </div>
                            <div className="text-base text-[#FA5330] ">
                                Lihat Semua &gt;
                            </div>
                        </div>

                        {/* card container*/}
                        <div
                            id="card-product-container"
                            className="flex overflow-y-hidden"
                        >
                            {/* card */}
                            <div className="card w-1/6 h-60 p-6 bg-[#ffffff] flex flex-col gap-4 text-center">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lymf1xhp9VsRiLHlq0CKNHuec6mubT88cw&s"
                                    alt="product"
                                    className="w-full h-[80%]"
                                />
                                <span className="text-[#FA5330]">Price</span>
                                <div
                                    id="stock"
                                    className="w-full rounded-lg h-5 bg-[#FFBDA6] relative text-center"
                                >
                                    <div
                                        id="progres"
                                        className="bg-[#FA5330] absolute top-0 left-0 w-[50%] h-5 rounded-lg"
                                    ></div>
                                    <span className="relative">
                                        Stock Terbatas
                                    </span>
                                </div>
                            </div>
                            <div className="card w-1/6 h-60 p-6 bg-[#ffffff] flex flex-col gap-4 text-center">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lymf1xhp9VsRiLHlq0CKNHuec6mubT88cw&s"
                                    alt="product"
                                    className="w-full h-[80%]"
                                />
                                <span className="text-[#FA5330]">Price</span>
                                <div
                                    id="stock"
                                    className="w-full rounded-lg h-5 bg-[#FFBDA6] relative text-center"
                                >
                                    <div
                                        id="progres"
                                        className="bg-[#FA5330] absolute top-0 left-0 w-[50%] h-5 rounded-lg"
                                    ></div>
                                    <span className="relative">
                                        Stock Terbatas
                                    </span>
                                </div>
                            </div>
                            <div className="card w-1/6 h-60 p-6 bg-[#ffffff] flex flex-col gap-4 text-center">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lymf1xhp9VsRiLHlq0CKNHuec6mubT88cw&s"
                                    alt="product"
                                    className="w-full h-[80%]"
                                />
                                <span className="text-[#FA5330]">Price</span>
                                <div
                                    id="stock"
                                    className="w-full rounded-lg h-5 bg-[#FFBDA6] relative text-center"
                                >
                                    <div
                                        id="progres"
                                        className="bg-[#FA5330] absolute top-0 left-0 w-[50%] h-5 rounded-lg"
                                    ></div>
                                    <span className="relative">
                                        Stock Terbatas
                                    </span>
                                </div>
                            </div>
                            <div className="card w-1/6 h-60 p-6 bg-[#ffffff] flex flex-col gap-4 text-center">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lymf1xhp9VsRiLHlq0CKNHuec6mubT88cw&s"
                                    alt="product"
                                    className="w-full h-[80%]"
                                />
                                <span className="text-[#FA5330]">Price</span>
                                <div
                                    id="stock"
                                    className="w-full rounded-lg h-5 bg-[#FFBDA6] relative text-center"
                                >
                                    <div
                                        id="progres"
                                        className="bg-[#FA5330] absolute top-0 left-0 w-[50%] h-5 rounded-lg"
                                    ></div>
                                    <span className="relative">
                                        Stock Terbatas
                                    </span>
                                </div>
                            </div>
                            <div className="card w-1/6 h-60 p-6 bg-[#ffffff] flex flex-col gap-4 text-center">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lymf1xhp9VsRiLHlq0CKNHuec6mubT88cw&s"
                                    alt="product"
                                    className="w-full h-[80%]"
                                />
                                <span className="text-[#FA5330]">Price</span>
                                <div
                                    id="stock"
                                    className="w-full rounded-lg h-5 bg-[#FFBDA6] relative text-center"
                                >
                                    <div
                                        id="progres"
                                        className="bg-[#FA5330] absolute top-0 left-0 w-[50%] h-5 rounded-lg"
                                    ></div>
                                    <span className="relative">
                                        Stock Terbatas
                                    </span>
                                </div>
                            </div>
                            <div className="card w-1/6 h-60 p-6 bg-[#ffffff] flex flex-col gap-4 text-center">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lymf1xhp9VsRiLHlq0CKNHuec6mubT88cw&s"
                                    alt="product"
                                    className="w-full h-[80%]"
                                />
                                <span className="text-[#FA5330]">Price</span>
                                <div
                                    id="stock"
                                    className="w-full rounded-lg h-5 bg-[#FFBDA6] relative text-center"
                                >
                                    <div
                                        id="progres"
                                        className="bg-[#FA5330] absolute top-0 left-0 w-[50%] h-5 rounded-lg"
                                    ></div>
                                    <span className="relative">
                                        Stock Terbatas
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="product terlaris">
                    <div className="container max-w-[1100px] mx-auto my-4  bg-[#FFFFFF] border-2">
                        <div className="flex justify-between p-4">
                            <div className="flex gap-2 w-[45%]">
                                <span className="text-[#FA5330] font-bold text-base ">
                                    Product Terlaris
                                </span>
                            </div>
                            <div className="text-base text-[#FA5330] ">
                                Lihat Semua &gt;
                            </div>
                        </div>

                        {/* card container*/}
                        <div
                            id="card-product-container"
                            className="flex overflow-y-hidden"
                        >
                            {/* card */}
                            <div className="card w-1/6 h-60 p-2 bg-[#ffffff] flex flex-col gap-4 text-start">
                                <img
                                    src="https://imageio.forbes.com/specials-images/imageserve/66bee357cf48b97789cbc270/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                                    alt="product"
                                    className="w-full h-[70%]"
                                />
                                <span
                                    id="title"
                                    className="text-black font-bold"
                                >
                                    Product Name Byatttt
                                </span>
                            </div>
                            <div className="card w-1/6 h-60 p-2 bg-[#ffffff] flex flex-col gap-4 text-start">
                                <img
                                    src="https://imageio.forbes.com/specials-images/imageserve/66bee357cf48b97789cbc270/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                                    alt="product"
                                    className="w-full h-[70%]"
                                />
                                <span
                                    id="title"
                                    className="text-black font-bold"
                                >
                                    Product Name Blyatttt
                                </span>
                            </div>
                            <div className="card w-1/6 h-60 p-2 bg-[#ffffff] flex flex-col gap-4 text-start">
                                <img
                                    src="https://imageio.forbes.com/specials-images/imageserve/66bee357cf48b97789cbc270/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                                    alt="product"
                                    className="w-full h-[70%]"
                                />
                                <span
                                    id="title"
                                    className="text-black font-bold"
                                >
                                    Product Name Blyatttt
                                </span>
                            </div>
                            <div className="card w-1/6 h-60 p-2 bg-[#ffffff] flex flex-col gap-4 text-start">
                                <img
                                    src="https://imageio.forbes.com/specials-images/imageserve/66bee357cf48b97789cbc270/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                                    alt="product"
                                    className="w-full h-[70%]"
                                />
                                <span
                                    id="title"
                                    className="text-black font-bold"
                                >
                                    Product Name Blyatttt
                                </span>
                            </div>
                            <div className="card w-1/6 h-60 p-2 bg-[#ffffff] flex flex-col gap-4 text-start">
                                <img
                                    src="https://imageio.forbes.com/specials-images/imageserve/66bee357cf48b97789cbc270/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                                    alt="product"
                                    className="w-full h-[70%]"
                                />
                                <span
                                    id="title"
                                    className="text-black font-bold"
                                >
                                    Product Name Blyatttt
                                </span>
                            </div>
                            <div className="card w-1/6 h-60 p-2 bg-[#ffffff] flex flex-col gap-4 text-start">
                                <img
                                    src="https://imageio.forbes.com/specials-images/imageserve/66bee357cf48b97789cbc270/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                                    alt="product"
                                    className="w-full h-[70%]"
                                />
                                <span
                                    id="title"
                                    className="text-black font-bold"
                                >
                                    Product Name Blyatttt
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="produck-list">
                    <div className="container max-w-[1100px] mx-auto my-4  bg-[#FFFFFF] border-2">
                        <div className=" border-b-4 border-[#f54330] w-full mb-4 text-center">
                            <span className="font-bold text-black text-lg">
                                Rekomendasi Product
                            </span>
                        </div>
                        <div className="container flex flex-wrap text-black">
                            {/* card */}
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card" className="w-[20%] h-[300px] p-2">
                                <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
                                    <img
                                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                                        alt="product"
                                        className="w-[188px] h-[60%] bg-[#f54330]"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-full overflow-hidden">
                                            <span className="text-sm  ">
                                                Robot Ai penguasa galaksi
                                            </span>
                                        </div>
                                        <div
                                            id="status"
                                            className="h-5 w-full flex flex-wrap gap-1 items-center"
                                        >
                                            {/* status */}
                                            <Bracket>
                                                Termurah di shopee
                                            </Bracket>
                                            <StatusCod />
                                        </div>
                                        <div
                                            id="price"
                                            className="flex w-full justify-between"
                                        >
                                            <span className="text-[#f54330] text-sm font-bold">
                                                Rp.{" "}
                                                <span className="text-base">
                                                    10.000
                                                </span>
                                            </span>
                                            <div className="self-end">
                                                4.4Rb Terjual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default HomePage;

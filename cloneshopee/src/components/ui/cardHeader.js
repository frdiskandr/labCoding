function CardHead({ children, img, url = "/" }) {
    return (
        <div id="card" className="h-24 flex justify-center items-baseline min-w-24 p-2 overflow-hidden text-xs">
            <a href={url}>
                <div className="w-full flex flex-col justify-center items-center h-full gap-2 text-center">
                    <div className="h-1/2 flex justify-center items-baseline">
                        <img src={img} className="object-contain w-[50%]"/>
                    </div>
                    <span>{children}</span>
                </div>
            </a>
        </div>
    );
}

export default CardHead;

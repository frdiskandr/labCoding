function CardCategory({ children, url = "#", title }) {
    return (
        <a href={url} className="w-full h-full text-black text-center">
            {children}
            <span>{title}</span>
        </a>
    );
}

export default CardCategory;
